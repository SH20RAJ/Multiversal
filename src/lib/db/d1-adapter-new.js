// D1 Database Adapter for Cloudflare Workers (Edge Runtime Only)
// This file handles database connections for edge runtime environments

import { drizzle } from 'drizzle-orm/d1';
import { eq, and, or, desc, like, sql } from 'drizzle-orm';
import * as schema from './schema.js';

/**
 * Create database instance for edge runtime (Cloudflare D1 only)
 * @param {Object} env - Environment object (contains D1 binding in production)
 * @returns {Object} Drizzle database instance
 */
export function createDatabase(env = {}) {
    // Production environment with Cloudflare D1
    if (env.DB && typeof env.DB.prepare === 'function') {
        console.log('🏗️ Using Cloudflare D1 database');
        return drizzle(env.DB, { schema });
    }

    // Edge runtime doesn't support local SQLite
    throw new Error('D1 database binding not available. Use `wrangler pages dev` for local development.');
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
                eq(schema.works.trending, true)
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
                eq(schema.works.featured, true)
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
                eq(schema.works.category, category)
            ))
            .orderBy(desc(schema.works.createdAt))
            .limit(limit);
    }

    /**
     * Search works by title or content
     */
    async searchWorks(query, limit = 10) {
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
            trending: false,
            featured: false,
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

// Default export
const d1Adapter = { createDatabase, DatabaseUtils };
export default d1Adapter;
