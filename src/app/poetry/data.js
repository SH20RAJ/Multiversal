import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getDatabase } from '@/lib/db/index.js';
import { works, users } from '@/lib/db/schema.js';
import { eq, and, sql } from 'drizzle-orm';
import { cache } from 'react';

// Reusable data fetching function optimized with React cache
export const getPoem = cache(async (id) => {
    try {
        // Get Cloudflare context and database connection
        const { env } = await getCloudflareContext({ async: true });
        const db = getDatabase(env);
        
        // Fetch poem with the author information
        const poem = await db
            .select({
                id: works.id,
                title: works.title,
                content: works.content,
                createdAt: works.createdAt,
                updatedAt: works.updatedAt,
                type: works.type,
                authorId: works.authorId,
                authorName: users.name,
                authorImage: users.image,
            })
            .from(works)
            .leftJoin(users, eq(works.authorId, users.id))
            .where(and(eq(works.id, id), eq(works.type, 'poetry')))
            .limit(1);

        return poem[0] || null;
    } catch (error) {
        console.error('Database error:', error);
        throw new Error('Failed to fetch poem');
    }
});

// Reusable data fetching function for featured poems
export const getFeaturedPoems = cache(async (limit = 5) => {
    try {
        // Get Cloudflare context and database connection
        const { env } = await getCloudflareContext({ async: true });
        const db = getDatabase(env);
        
        // Fetch featured poems with author information
        const poems = await db
            .select({
                id: works.id,
                title: works.title,
                excerpt: sql`SUBSTRING(${works.content}, 1, 150)`,
                createdAt: works.createdAt,
                type: works.type,
                authorId: works.authorId,
                authorName: users.name,
                authorImage: users.image,
            })
            .from(works)
            .leftJoin(users, eq(works.authorId, users.id))
            .where(eq(works.type, 'poetry'))
            .orderBy(sql`RANDOM()`)
            .limit(limit);

        return poems || [];
    } catch (error) {
        console.error('Database error:', error);
        throw new Error('Failed to fetch featured poems');
    }
});
