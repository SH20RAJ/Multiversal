import { sql } from '@vercel/postgres';
import { db } from '../../../lib/db';
import { poems as poemsTable } from '../../../lib/db/schema';
import { eq } from 'drizzle-orm';
import { cache } from 'react';

// Reusable data fetching function optimized with React cache
export const getPoem = cache(async (id) => {
    try {
        // Fetch poem with the author information
        const poem = await db
            .select({
                id: poemsTable.id,
                title: poemsTable.title,
                content: poemsTable.content,
                createdAt: poemsTable.createdAt,
                updatedAt: poemsTable.updatedAt,
                type: poemsTable.type,
                authorId: poemsTable.authorId,
                authorName: sql`users.name`,
                authorImage: sql`users.image`,
            })
            .from(poemsTable)
            .leftJoin('users', eq(poemsTable.authorId, sql`users.id`))
            .where(eq(poemsTable.id, id))
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
        // Fetch featured poems with author information
        const poems = await db
            .select({
                id: poemsTable.id,
                title: poemsTable.title,
                excerpt: sql`SUBSTRING(${poemsTable.content}, 1, 150)`,
                createdAt: poemsTable.createdAt,
                type: poemsTable.type,
                authorId: poemsTable.authorId,
                authorName: sql`users.name`,
                authorImage: sql`users.image`,
            })
            .from(poemsTable)
            .leftJoin('users', eq(poemsTable.authorId, sql`users.id`))
            .orderBy(sql`RANDOM()`)
            .limit(limit);

        return poems || [];
    } catch (error) {
        console.error('Database error:', error);
        throw new Error('Failed to fetch featured poems');
    }
});
