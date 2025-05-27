-- Multiversal Database Schema for D1
-- This SQL file creates all tables needed for the application

-- Users table - Auth.js compatible
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  email_verified INTEGER,
  image TEXT,
  created_at INTEGER DEFAULT (unixepoch()),
  updated_at INTEGER DEFAULT (unixepoch()),
  username TEXT UNIQUE,
  bio TEXT,
  title TEXT,
  location TEXT,
  website TEXT,
  cover_image TEXT,
  verified INTEGER DEFAULT 0,
  total_works INTEGER DEFAULT 0,
  total_views INTEGER DEFAULT 0,
  total_likes INTEGER DEFAULT 0,
  avg_rating REAL DEFAULT 0,
  twitter_handle TEXT,
  instagram_handle TEXT,
  linkedin_handle TEXT,
  allow_comments INTEGER DEFAULT 1,
  is_public INTEGER DEFAULT 1,
  notification_settings TEXT DEFAULT '{}'
);

-- Sessions table - Auth.js compatible
CREATE TABLE IF NOT EXISTS sessions (
  session_token TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires INTEGER NOT NULL
);

-- OAuth accounts table - Auth.js compatible
CREATE TABLE IF NOT EXISTS accounts (
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  provider TEXT NOT NULL,
  provider_account_id TEXT NOT NULL,
  refresh_token TEXT,
  access_token TEXT,
  expires_at INTEGER,
  token_type TEXT,
  scope TEXT,
  id_token TEXT,
  session_state TEXT,
  PRIMARY KEY (provider, provider_account_id)
);

-- Verification tokens table - Auth.js compatible
CREATE TABLE IF NOT EXISTS verification_tokens (
  identifier TEXT NOT NULL,
  token TEXT NOT NULL,
  expires INTEGER NOT NULL,
  PRIMARY KEY (identifier, token)
);

-- Content/Works table
CREATE TABLE IF NOT EXISTS works (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  type TEXT NOT NULL, -- 'poetry', 'story', 'essay', 'music', 'art'
  category TEXT,
  tags TEXT DEFAULT '[]',
  cover_image TEXT,
  author_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'draft', -- 'draft', 'published', 'archived'
  published_at INTEGER,
  created_at INTEGER DEFAULT (unixepoch()),
  updated_at INTEGER DEFAULT (unixepoch()),
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  bookmarks INTEGER DEFAULT 0,
  shares INTEGER DEFAULT 0,
  rating REAL DEFAULT 0,
  rating_count INTEGER DEFAULT 0,
  read_time INTEGER,
  is_trending INTEGER DEFAULT 0,
  is_featured INTEGER DEFAULT 0,
  allow_comments INTEGER DEFAULT 1,
  is_public INTEGER DEFAULT 1
);

-- Comments
CREATE TABLE IF NOT EXISTS comments (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  work_id TEXT NOT NULL REFERENCES works(id) ON DELETE CASCADE,
  author_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  parent_id TEXT REFERENCES comments(id) ON DELETE CASCADE,
  created_at INTEGER DEFAULT (unixepoch()),
  updated_at INTEGER DEFAULT (unixepoch()),
  likes INTEGER DEFAULT 0,
  is_pinned INTEGER DEFAULT 0
);

-- Create indexes for improved query performance
CREATE INDEX IF NOT EXISTS idx_works_author_id ON works(author_id);
CREATE INDEX IF NOT EXISTS idx_works_trending ON works(is_trending);
CREATE INDEX IF NOT EXISTS idx_works_featured ON works(is_featured);
CREATE INDEX IF NOT EXISTS idx_works_type ON works(type);
CREATE INDEX IF NOT EXISTS idx_comments_work_id ON comments(work_id);
CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments(author_id);
