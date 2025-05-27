// D1 Database Adapter for Cloudflare Workers
// This file handles database connections for both development and production

import { drizzle } from 'drizzle-orm/d1';
import { drizzle as drizzleSqlite } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema.js';
import path from 'path';
import fs from 'fs';

/**
 * Create database instance based on environment
 * @param {Object} env - Environment object (contains D1 binding in production)
 * @returns {Object} Drizzle database instance
 */
export function createDatabase(env = {}) {
    // Production environment with Cloudflare D1
    if (env.DB && typeof env.DB.prepare === 'function') {
        console.log('🏗️ Using Cloudflare D1 database');
        return drizzle(env.DB, { schema });
    }

    // Development environment with better-sqlite3
    if (typeof window === 'undefined') {
        console.log('🏗️ Using local SQLite database for development');

        const dbPath = process.env.DATABASE_URL || path.join(process.cwd(), 'data', 'multiversal.db');

        // Ensure the data directory exists
        const dataDir = path.dirname(dbPath);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Initialize SQLite database
        const sqlite = new Database(dbPath);

        // Enable WAL mode for better performance
        sqlite.pragma('journal_mode = WAL');

        // Enable foreign keys
        sqlite.pragma('foreign_keys = ON');

        return drizzleSqlite(sqlite, { schema });
    }

    throw new Error('Database connection could not be established');
}

/**
 * Database utility class with common operations
 */
export class DatabaseUtils {
    constructor(db) {
        this.db = db;
    }

    /**
     * Get user with their statistics
     */
    async getUserWithStats(userId) {
        const user = await this.db
            .select()
            .from(schema.users)
            .where(eq(schema.users.id, userId))
            .limit(1);

        if (!user.length) return null;
        return user[0];
    }

    /**
     * Get user's published works
     */
    async getUserWorks(userId, limit = 10) {
        return await this.db
            .select()
            .from(schema.works)
            .where(and(
                eq(schema.works.authorId, userId),
                eq(schema.works.status, 'published')
            ))
            .orderBy(desc(schema.works.createdAt))
            .limit(limit);
    }

    /**
     * Get trending works
     */
    async getTrendingWorks(limit = 10) {
        return await this.db
            .select()
            .from(schema.works)
            .where(and(
                eq(schema.works.status, 'published'),
                eq(schema.works.isTrending, true)
            ))
            .orderBy(desc(schema.works.views))
            .limit(limit);
    }

    /**
     * Get featured works
     */
    async getFeaturedWorks(limit = 10) {
        return await this.db
            .select()
            .from(schema.works)
            .where(and(
                eq(schema.works.status, 'published'),
                eq(schema.works.isFeatured, true)
            ))
            .orderBy(desc(schema.works.createdAt))
            .limit(limit);
    }

    /**
     * Get works by category
     */
    async getWorksByCategory(category, limit = 10) {
        return await this.db
            .select()
            .from(schema.works)
            .where(and(
                eq(schema.works.status, 'published'),
                eq(schema.works.type, category)
            ))
            .orderBy(desc(schema.works.createdAt))
            .limit(limit);
    }

    /**
     * Search works by title or content
     */
    async searchWorks(query, limit = 10) {
        // Note: D1 supports LIKE operator for text search
        const searchPattern = `%${query}%`;

        return await this.db
            .select()
            .from(schema.works)
            .where(and(
                eq(schema.works.status, 'published'),
                or(
                    like(schema.works.title, searchPattern),
                    like(schema.works.content, searchPattern),
                    like(schema.works.excerpt, searchPattern)
                )
            ))
            .orderBy(desc(schema.works.createdAt))
            .limit(limit);
    }

    /**
     * Get work with author information
     */
    async getWorkWithAuthor(workId) {
        const result = await this.db
            .select({
                work: schema.works,
                author: {
                    id: schema.users.id,
                    name: schema.users.name,
                    username: schema.users.username,
                    image: schema.users.image,
                    bio: schema.users.bio,
                    verified: schema.users.verified
                }
            })
            .from(schema.works)
            .leftJoin(schema.users, eq(schema.works.authorId, schema.users.id))
            .where(and(
                eq(schema.works.id, workId),
                eq(schema.works.status, 'published')
            ))
            .limit(1);

        return result.length > 0 ? result[0] : null;
    }

    /**
     * Get comments for a work with author information
     */
    async getWorkComments(workId, limit = 20) {
        return await this.db
            .select({
                comment: schema.comments,
                author: {
                    id: schema.users.id,
                    name: schema.users.name,
                    username: schema.users.username,
                    image: schema.users.image,
                    verified: schema.users.verified
                }
            })
            .from(schema.comments)
            .leftJoin(schema.users, eq(schema.comments.authorId, schema.users.id))
            .where(and(
                eq(schema.comments.workId, workId),
                eq(schema.comments.isDeleted, false)
            ))
            .orderBy(desc(schema.comments.createdAt))
            .limit(limit);
    }

    /**
     * Create a new work
     */
    async createWork(workData) {
        const work = {
            id: `work_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            createdAt: new Date(),
            updatedAt: new Date(),
            status: 'draft',
            views: 0,
            likes: 0,
            comments: 0,
            bookmarks: 0,
            shares: 0,
            rating: 0,
            ratingCount: 0,
            isTrending: false,
            isFeatured: false,
            allowComments: true,
            isPublic: true,
            ...workData
        };

        await this.db.insert(schema.works).values(work);
        return work;
    }

    /**
     * Update work statistics (views, likes, etc.)
     */
    async updateWorkStats(workId, updates) {
        await this.db
            .update(schema.works)
            .set({
                ...updates,
                updatedAt: new Date()
            })
            .where(eq(schema.works.id, workId));
    }

    /**
     * Increment work views
     */
    async incrementViews(workId) {
        await this.db
            .update(schema.works)
            .set({
                views: sql`${schema.works.views} + 1`,
                updatedAt: new Date()
            })
            .where(eq(schema.works.id, workId));
    }
}

// Import required operators
import { eq, and, or, desc, like, sql } from 'drizzle-orm';

// Default export for backward compatibility
export default { createDatabase, DatabaseUtils };
