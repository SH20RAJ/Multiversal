// Database schema for Multiversal.blog
import { sqliteTable, text, integer, real, blob, primaryKey } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

// Users table - Auth.js compatible
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').unique().notNull(),
  emailVerified: integer('email_verified', { mode: 'timestamp' }),
  image: text('image'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  
  // Profile fields
  username: text('username').unique(),
  bio: text('bio'),
  title: text('title'), // e.g., "Award-winning Poet & Storyteller"
  location: text('location'),
  website: text('website'),
  coverImage: text('cover_image'),
  verified: integer('verified', { mode: 'boolean' }).default(false),
  totalWorks: integer('total_works').default(0),
  totalViews: integer('total_views').default(0),
  totalLikes: integer('total_likes').default(0),
  avgRating: real('avg_rating').default(0),
  
  // Social links
  twitterHandle: text('twitter_handle'),
  instagramHandle: text('instagram_handle'),
  linkedinHandle: text('linkedin_handle'),
  
  // Settings
  allowComments: integer('allow_comments', { mode: 'boolean' }).default(true),
  isPublic: integer('is_public', { mode: 'boolean' }).default(true),
  notificationSettings: text('notification_settings', { mode: 'json' }).default('{}'),
});

// Sessions table - Auth.js compatible
export const sessions = sqliteTable('sessions', {
  sessionToken: text('session_token').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  expires: integer('expires', { mode: 'timestamp' }).notNull(),
});

// OAuth accounts table - Auth.js compatible
export const accounts = sqliteTable('accounts', {
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  type: text('type').notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('provider_account_id').notNull(),
  refresh_token: text('refresh_token'),
  access_token: text('access_token'),
  expires_at: integer('expires_at'),
  token_type: text('token_type'),
  scope: text('scope'),
  id_token: text('id_token'),
  session_state: text('session_state'),
}, (account) => ({
  pk: primaryKey({
    columns: [account.provider, account.providerAccountId],
  }),
}));

// Verification tokens table - Auth.js compatible
export const verificationTokens = sqliteTable('verification_tokens', {
  identifier: text('identifier').notNull(),
  token: text('token').notNull(),
  expires: integer('expires', { mode: 'timestamp' }).notNull(),
}, (vt) => ({
  pk: primaryKey({
    columns: [vt.identifier, vt.token],
  }),
}));

// Content/Works table
export const works = sqliteTable('works', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  type: text('type').notNull(), // 'poetry', 'story', 'essay', 'music', 'art'
  category: text('category'),
  tags: text('tags', { mode: 'json' }).default('[]'),
  coverImage: text('cover_image'),
  
  // Author
  authorId: text('author_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  
  // Publishing
  status: text('status').default('draft'), // 'draft', 'published', 'archived'
  publishedAt: integer('published_at', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  
  // Engagement
  views: integer('views').default(0),
  likes: integer('likes').default(0),
  comments: integer('comments').default(0),
  bookmarks: integer('bookmarks').default(0),
  shares: integer('shares').default(0),
  
  // Quality metrics
  rating: real('rating').default(0),
  ratingCount: integer('rating_count').default(0),
  readTime: integer('read_time'), // in minutes
  
  // Flags
  isTrending: integer('is_trending', { mode: 'boolean' }).default(false),
  isFeatured: integer('is_featured', { mode: 'boolean' }).default(false),
  allowComments: integer('allow_comments', { mode: 'boolean' }).default(true),
  isPublic: integer('is_public', { mode: 'boolean' }).default(true),
});

// Comments table
export const comments = sqliteTable('comments', {
  id: text('id').primaryKey(),
  content: text('content').notNull(),
  workId: text('work_id').notNull().references(() => works.id, { onDelete: 'cascade' }),
  authorId: text('author_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  parentId: text('parent_id').references(() => comments.id, { onDelete: 'cascade' }),
  
  likes: integer('likes').default(0),
  replies: integer('replies').default(0),
  
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  
  isEdited: integer('is_edited', { mode: 'boolean' }).default(false),
  isDeleted: integer('is_deleted', { mode: 'boolean' }).default(false),
});

// Likes table (for works and comments)
export const likes = sqliteTable('likes', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  targetId: text('target_id').notNull(), // work_id or comment_id
  targetType: text('target_type').notNull(), // 'work' or 'comment'
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});

// Bookmarks table
export const bookmarks = sqliteTable('bookmarks', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  workId: text('work_id').notNull().references(() => works.id, { onDelete: 'cascade' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});

// Follows table
export const follows = sqliteTable('follows', {
  id: text('id').primaryKey(),
  followerId: text('follower_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  followingId: text('following_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});

// Ratings table
export const ratings = sqliteTable('ratings', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  workId: text('work_id').notNull().references(() => works.id, { onDelete: 'cascade' }),
  rating: integer('rating').notNull(), // 1-5 stars
  review: text('review'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});

// Notifications table
export const notifications = sqliteTable('notifications', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  type: text('type').notNull(), // 'like', 'comment', 'follow', 'mention', 'work_published'
  title: text('title').notNull(),
  message: text('message'),
  data: text('data', { mode: 'json' }).default('{}'),
  
  read: integer('read', { mode: 'boolean' }).default(false),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  
  // Related entities
  triggeredBy: text('triggered_by').references(() => users.id, { onDelete: 'cascade' }),
  relatedWorkId: text('related_work_id').references(() => works.id, { onDelete: 'cascade' }),
  relatedCommentId: text('related_comment_id').references(() => comments.id, { onDelete: 'cascade' }),
});

// Communities/Groups table
export const communities = sqliteTable('communities', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  coverImage: text('cover_image'),
  creatorId: text('creator_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  
  isPublic: integer('is_public', { mode: 'boolean' }).default(true),
  memberCount: integer('member_count').default(0),
  
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});

// Community memberships
export const communityMembers = sqliteTable('community_members', {
  id: text('id').primaryKey(),
  communityId: text('community_id').notNull().references(() => communities.id, { onDelete: 'cascade' }),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  role: text('role').default('member'), // 'admin', 'moderator', 'member'
  joinedAt: integer('joined_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`),
});
