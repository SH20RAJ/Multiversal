// Universal database connection for edge runtime (Cloudflare D1)
// This module handles connections to D1 in Cloudflare environment

import { drizzle } from 'drizzle-orm/d1';
import { eq, desc, and, sql } from 'drizzle-orm';
import * as schema from './schema.js';

/**
 * Create database instance for Cloudflare D1
 * - Works only in edge runtime (Cloudflare Workers/Pages)
 */
function createDatabaseConnection(env = {}) {
  // Check if we have a D1 binding
  if (env?.DB && typeof env.DB.prepare === 'function') {
    console.log('🔗 Connected to Cloudflare D1 database');
    return drizzle(env.DB, { schema });
  }

  // Fallback error for edge runtime without D1 binding
  throw new Error('❌ D1 database binding not available. Use `wrangler pages dev` for local development with D1.');
}

/**
 * Get database instance for Cloudflare D1
 * In API routes with edge runtime, pass the env from getCloudflareContext()
 * In server components, use getCloudflareContext({async: true})
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
