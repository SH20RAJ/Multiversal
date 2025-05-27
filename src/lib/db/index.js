// Database connection and configuration
'use server';

import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as schema from './schema.js';
import path from 'path';
import fs from 'fs';

// This code only runs on the server
// Create SQLite database file
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

// Create Drizzle instance
export const db = drizzle(sqlite, { schema });

// Migration function
export async function runMigrations() {
  try {
    console.log('Running database migrations...');
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('✅ Database migrations completed successfully');
  } catch (error) {
    console.error('❌ Database migration failed:', error);
    throw error;
  }
}

// Initialize database with sample data (for development)
export async function seedDatabase() {
  try {
    console.log('Seeding database with sample data...');
    
    // Check if users already exist
    const existingUsers = await db.select().from(schema.users).limit(1);
    if (existingUsers.length > 0) {
      console.log('Database already seeded, skipping...');
      return;
    }

    // Create sample users
    const sampleUsers = [
      {
        id: 'user_1',
        name: 'Luna Martinez',
        email: 'luna@example.com',
        username: 'luna_poet',
        bio: 'Award-winning poet exploring themes of love, loss, and cosmic wonder.',
        title: 'Published Poet & Storyteller',
        location: 'Barcelona, Spain',
        verified: true,
        totalWorks: 23,
        totalViews: 15420,
        totalLikes: 892,
        avgRating: 4.8
      },
      {
        id: 'user_2',
        name: 'River Chen',
        email: 'river@example.com',
        username: 'riverflow',
        bio: 'Musician and songwriter crafting melodies that touch the soul.',
        title: 'Indie Musician',
        location: 'Portland, OR',
        verified: true,
        totalWorks: 18,
        totalViews: 12300,
        totalLikes: 654,
        avgRating: 4.6
      },
      {
        id: 'user_3',
        name: 'Zara Okafor',
        email: 'zara@example.com',
        username: 'zarastories',
        bio: 'Storyteller weaving tales that bridge cultures and generations.',
        title: 'Cultural Storyteller',
        location: 'Lagos, Nigeria',
        verified: false,
        totalWorks: 31,
        totalViews: 18750,
        totalLikes: 1203,
        avgRating: 4.9
      }
    ];

    // Insert sample users
    await db.insert(schema.users).values(sampleUsers);

    // Create sample works
    const sampleWorks = [
      {
        id: 'work_1',
        authorId: 'user_1',
        title: 'Whispers of the Night Sky',
        content: 'Beneath the velvet canvas of the night,\nStars whisper secrets in ancient light...',
        excerpt: 'A contemplative poem about finding meaning in the cosmos.',
        category: 'poetry',
        status: 'published',
        featured: true,
        trending: false,
        views: 2840,
        likes: 156,
        comments: 23,
        rating: 4.8,
        tags: ['night', 'stars', 'contemplative', 'nature']
      },
      {
        id: 'work_2',
        authorId: 'user_2',
        title: 'Echoes in the Rain',
        content: 'A hauntingly beautiful melody that captures the essence of a rainy day...',
        excerpt: 'An instrumental piece that evokes nostalgia and peace.',
        category: 'music',
        status: 'published',
        featured: false,
        trending: true,
        views: 1920,
        likes: 89,
        comments: 12,
        rating: 4.6,
        tags: ['instrumental', 'rain', 'peaceful', 'acoustic']
      },
      {
        id: 'work_3',
        authorId: 'user_3',
        title: 'The Bridge Between Worlds',
        content: 'In a village where two cultures meet, a young girl discovers the power of understanding...',
        excerpt: 'A touching story about cultural unity and personal growth.',
        category: 'story',
        status: 'published',
        featured: true,
        trending: false,
        views: 3250,
        likes: 198,
        comments: 34,
        rating: 4.9,
        tags: ['culture', 'unity', 'growth', 'community']
      }
    ];

    await db.insert(schema.works).values(sampleWorks);

    console.log('✅ Database seeded successfully with sample data');
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    throw error;
  }
}

// Utility functions for database operations
export const dbUtils = {
  // Get user with stats
  async getUserWithStats(userId) {
    const user = await db.select().from(schema.users).where(eq(schema.users.id, userId)).limit(1);
    if (!user.length) return null;
    return user[0];
  },

  // Get user's works
  async getUserWorks(userId, limit = 10) {
    return await db
      .select()
      .from(schema.works)
      .where(eq(schema.works.authorId, userId))
      .orderBy(desc(schema.works.createdAt))
      .limit(limit);
  },

  // Get trending works
  async getTrendingWorks(limit = 10) {
    return await db
      .select()
      .from(schema.works)
      .where(eq(schema.works.trending, true))
      .orderBy(desc(schema.works.views))
      .limit(limit);
  },

  // Get featured works
  async getFeaturedWorks(limit = 10) {
    return await db
      .select()
      .from(schema.works)
      .where(eq(schema.works.featured, true))
      .orderBy(desc(schema.works.createdAt))
      .limit(limit);
  }
};

export default db;
