// Edge runtime database connection
// This file is specifically for edge runtime environments that don't support Node.js APIs

import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema.js';

/**
 * Create database instance for edge runtime (Cloudflare Workers)
 * This function only works with D1 database bindings
 */
export function createEdgeDatabase(env = {}) {
    // Production: Cloudflare D1 database
    if (env?.DB && typeof env.DB.prepare === 'function') {
        console.log('🔗 Connected to Cloudflare D1 database (edge)');
        return drizzle(env.DB, { schema });
    }

    // Fallback: throw error since edge runtime doesn't support local SQLite
    throw new Error('D1 database binding not available in edge runtime. Make sure env.DB is properly configured.');
}

// For API routes using edge runtime, we need to get the database from the request context
export function getDatabase(env) {
    return createEdgeDatabase(env);
}

// Export the schema for convenience
export * from './schema.js';
