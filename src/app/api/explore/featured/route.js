export const runtime = 'edge';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getDatabase } from '@/lib/db/index.js';
import { works, users } from '@/lib/db/schema';
import { eq, and, sql, desc } from 'drizzle-orm';
import { NextResponse } from 'next/server';

// Cache configuration
const CACHE_MAX_AGE = 300; // 5 minutes in seconds

export async function GET() {
    try {
        // Get Cloudflare context and database connection
        const { env } = getCloudflareContext();
        const db = getDatabase(env);

        // Get featured works with their author information
        const featuredWorks = await db.select({
            id: works.id,
            title: works.title,
            type: works.type,
            excerpt: works.excerpt,
            tags: works.tags,
            coverImage: works.coverImage,
            likes: works.likes,
            comments: works.comments,
            views: works.views,
            readTime: works.readTime,
            publishedAt: works.publishedAt,
            author: {
                id: users.id,
                name: users.name,
                username: users.username,
                image: users.image,
            }
        })
            .from(works)
            .innerJoin(users, eq(works.authorId, users.id))
            .where(
                and(
                    eq(works.status, 'published'),
                    eq(works.isPublic, true),
                    sql`${works.isFeatured} = 1 OR ${works.isTrending} = 1`
                )
            )
            .orderBy(desc(works.publishedAt))
            .limit(6);

        // Transform the data to match the expected format
        const formattedWorks = featuredWorks.map(work => {
            // Parse JSON tags if stored as string
            const tags = typeof work.tags === 'string' ? JSON.parse(work.tags) : work.tags;

            // Generate a gradient based on content type
            let gradient = "from-purple-400 to-pink-400"; // default

            if (work.type === 'story') {
                gradient = "from-blue-400 to-cyan-400";
            } else if (work.type === 'music') {
                gradient = "from-orange-400 to-red-400";
            } else if (work.type === 'art') {
                gradient = "from-green-400 to-blue-400";
            }

            // Generate avatar emoji based on content type
            let avatar = "📝"; // default
            if (work.type === 'poetry') avatar = "🌙";
            if (work.type === 'story') avatar = "📚";
            if (work.type === 'music') avatar = "🎵";
            if (work.type === 'art') avatar = "🎨";

            return {
                id: work.id,
                title: work.title,
                type: work.type,
                author: work.author.name,
                avatar: work.author.image || avatar,
                excerpt: work.excerpt,
                tags: tags || [],
                stats: {
                    likes: work.likes,
                    comments: work.comments,
                    views: work.views,
                    readTime: work.readTime || 5
                },
                gradient
            };
        });

        // Create a response with the data
        const response = NextResponse.json(featuredWorks);

        // Add cache control headers
        response.headers.set('Cache-Control', `max-age=${CACHE_MAX_AGE}, s-maxage=${CACHE_MAX_AGE * 2}, stale-while-revalidate=${CACHE_MAX_AGE * 4}`);
        response.headers.set('X-Multiversal-Cache', 'HIT');

        return response;
    } catch (error) {
        console.error('Error fetching featured content:', error);

        // Return error response without caching
        const errorResponse = NextResponse.json(
            { error: 'Failed to fetch featured content' },
            { status: 500 }
        );

        errorResponse.headers.set('Cache-Control', 'no-store');
        return errorResponse;
    }
}
