export const runtime = 'nodejs';
import { db } from '@/lib/db/index.js';
import { works, users } from '@/lib/db/schema.js';
import { eq, and, sql, desc, count } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(request) {
    try {
        // Get current user from session
        const session = await auth();

        if (!session || !session.user) {
            return Response.json({ error: 'Not authenticated' }, { status: 401 });
        }

        const userId = session.user.id;

        // Get user with stats from the database
        const userWithStats = await db.select({
            id: users.id,
            name: users.name,
            username: users.username,
            title: users.title,
            bio: users.bio,
            image: users.image,
            coverImage: users.coverImage,
            joinDate: users.createdAt,
            followers: users.totalWorks, // This should be from a followers count query
            following: sql`0`, // This should be from a following count query
            totalViews: users.totalViews,
            totalLikes: users.totalLikes,
            totalComments: sql`0`, // This should be from a comments count
            publishedWorks: users.totalWorks,
            verified: users.verified
        })
            .from(users)
            .where(eq(users.id, userId))
            .limit(1);

        if (!userWithStats || userWithStats.length === 0) {
            return Response.json({ error: 'User not found' }, { status: 404 });
        }

        // Count works by status
        const publishedCount = await db.select({ count: count() })
            .from(works)
            .where(and(
                eq(works.authorId, userId),
                eq(works.status, 'published')
            ));

        const draftCount = await db.select({ count: count() })
            .from(works)
            .where(and(
                eq(works.authorId, userId),
                eq(works.status, 'draft')
            ));

        // Format date
        const formatDate = (date) => {
            if (!date) return 'Unknown';
            const d = new Date(date);
            return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
        };

        // Format response
        const stats = {
            name: userWithStats[0].name,
            avatar: userWithStats[0].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${userWithStats[0].name}`,
            title: userWithStats[0].title || 'Creative Writer',
            joinDate: formatDate(userWithStats[0].joinDate),
            level: userWithStats[0].verified ? 'Pro Creator' : 'Creator',
            followers: userWithStats[0].followers || 0,
            following: userWithStats[0].following || 0,
            totalViews: userWithStats[0].totalViews || 0,
            totalLikes: userWithStats[0].totalLikes || 0,
            totalComments: userWithStats[0].totalComments || 0,
            publishedWorks: publishedCount[0].count || 0,
            drafts: draftCount[0].count || 0,
            weeklyGoal: 3, // Hard-coded for now, should come from user preferences
            weeklyProgress: publishedCount[0].count > 3 ? 3 : publishedCount[0].count // Simple logic for now
        };

        return Response.json(stats);
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return Response.json({ error: 'Failed to fetch dashboard stats' }, { status: 500 });
    }
}
