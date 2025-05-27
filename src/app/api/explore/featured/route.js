import { db } from '../../../../lib/db';
import { works, users } from '../../../../lib/db/schema';
import { eq, and, sql, desc } from 'drizzle-orm';

export async function GET() {
    try {
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

        return Response.json(featuredWorks);
    } catch (error) {
        console.error('Error fetching featured content:', error);
        return Response.json({ error: 'Failed to fetch featured content' }, { status: 500 });
    }
}
