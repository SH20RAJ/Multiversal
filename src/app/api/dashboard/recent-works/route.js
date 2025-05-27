import { db } from '../../../../lib/db';
import { works } from '../../../../lib/db/schema';
import { eq, desc } from 'drizzle-orm';
import { auth } from '../../../../lib/auth';

export async function GET(request) {
    try {
        // Get current user from session
        const session = await auth();

        if (!session || !session.user) {
            return Response.json({ error: 'Not authenticated' }, { status: 401 });
        }

        const userId = session.user.id;

        // Get recent works from the database
        const recentWorks = await db.select({
            id: works.id,
            title: works.title,
            type: works.type,
            status: works.status,
            publishedAt: works.publishedAt,
            views: works.views,
            likes: works.likes,
            comments: works.comments,
            isTrending: works.isTrending
        })
            .from(works)
            .where(eq(works.authorId, userId))
            .orderBy(desc(works.updatedAt))
            .limit(4);

        // Format date
        const formatPublishedDate = (date, status) => {
            if (status !== 'published' || !date) return 'Not published';

            const now = new Date();
            const publishDate = new Date(date);
            const diffTime = Math.abs(now - publishDate);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 0) return 'Today';
            if (diffDays === 1) return 'Yesterday';
            if (diffDays < 7) return `${diffDays} days ago`;
            if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
            return `${Math.floor(diffDays / 30)} months ago`;
        };

        // Format response
        const formattedWorks = recentWorks.map(work => ({
            id: work.id,
            title: work.title,
            type: work.type,
            status: work.status,
            publishDate: formatPublishedDate(work.publishedAt, work.status),
            views: work.views || 0,
            likes: work.likes || 0,
            comments: work.comments || 0,
            trending: Boolean(work.isTrending)
        }));

        return Response.json(formattedWorks);
    } catch (error) {
        console.error('Error fetching recent works:', error);
        return Response.json({ error: 'Failed to fetch recent works' }, { status: 500 });
    }
}
