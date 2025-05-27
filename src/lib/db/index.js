// Edge runtime database connection for Cloudflare D1
// This module is optimized for edge runtime environments

import { drizzle } from 'drizzle-orm/d1';
import { eq, desc } from 'drizzle-orm';
import * as schema from './schema.js';

/**
 * Create database instance for edge runtime (Cloudflare D1 only)
 * In production (Cloudflare Workers), env.DB will contain the D1 binding
 */
function createDatabaseConnection(env = {}) {
  // Production: Cloudflare D1 database
  if (env?.DB && typeof env.DB.prepare === 'function') {
    console.log('🔗 Connected to Cloudflare D1 database');
    return drizzle(env.DB, { schema });
  }

  // Development: Mock database or throw error
  // In development, you should use wrangler dev to get D1 binding
  throw new Error('❌ D1 database binding not available. Use `wrangler pages dev` for local development.');
}

/**
 * Get database instance for edge runtime
 * This function should be called with the request's environment in API routes
 */
export function getDatabase(env = {}) {
  return createDatabaseConnection(env);
}

// Utility functions for database operations
export const dbUtils = {
  // Get user with stats
  async getUserWithStats(db, userId) {
    const user = await db.select().from(schema.users).where(eq(schema.users.id, userId)).limit(1);
    if (!user.length) return null;
    return user[0];
  },

  // Get user's works
  async getUserWorks(db, userId, limit = 10) {
    return await db
      .select()
      .from(schema.works)
      .where(eq(schema.works.authorId, userId))
      .orderBy(desc(schema.works.createdAt))
      .limit(limit);
  },

  // Get trending works
  async getTrendingWorks(db, limit = 10) {
    return await db
      .select()
      .from(schema.works)
      .where(eq(schema.works.trending, true))
      .orderBy(desc(schema.works.views))
      .limit(limit);
  },

  // Get featured works
  async getFeaturedWorks(db, limit = 10) {
    return await db
      .select()
      .from(schema.works)
      .where(eq(schema.works.featured, true))
      .orderBy(desc(schema.works.createdAt))
      .limit(limit);
  }
};

// Export schema and types
export * from './schema.js';
