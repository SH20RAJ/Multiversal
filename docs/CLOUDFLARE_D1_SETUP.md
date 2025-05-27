# Cloudflare D1 Database Setup with Drizzle ORM

This guide provides comprehensive instructions for setting up Cloudflare D1 database with Drizzle ORM for the Multiversal Next.js application.

## 📋 Prerequisites

- [Cloudflare Account](https://dash.cloudflare.com/sign-up/workers-and-pages)
- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v18+)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) (included in project)

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
# Core D1 and Drizzle packages are already installed
npm install drizzle-orm drizzle-kit
```

### 2. Create D1 Database

```bash
# Create production database
npx wrangler d1 create multiversal-prod

# Create development database (optional)
npx wrangler d1 create multiversal-dev
```

**Important**: Copy the database configuration output and update `wrangler.jsonc`:

```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "multiversal-prod",
      "database_id": "YOUR_ACTUAL_DATABASE_ID",
      "migrations_dir": "drizzle/migrations"
    }
  ]
}
```

### 3. Generate Database Migrations

```bash
# Generate migration files from schema
npx drizzle-kit generate

# Apply migrations to local development database
npx wrangler d1 execute multiversal-prod --local --file=drizzle/migrations/[MIGRATION_FILE].sql

# Apply migrations to production database
npx wrangler d1 execute multiversal-prod --remote --file=drizzle/migrations/[MIGRATION_FILE].sql
```

### 4. Environment Configuration

#### Local Development (.env.local)
```env
# For local development with SQLite
DATABASE_URL="./data/multiversal.db"
NODE_ENV="development"

# Auth.js configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-local-secret-key"

# OAuth providers
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

#### Production (Cloudflare Secrets)
```bash
# Set production secrets
wrangler secret put NEXTAUTH_SECRET
wrangler secret put GITHUB_CLIENT_ID  
wrangler secret put GITHUB_CLIENT_SECRET
```

## 🗂️ Project Structure

```
multiversal/
├── src/lib/db/
│   ├── index.js          # Database connection and utilities
│   ├── schema.js         # Drizzle schema definitions
│   └── d1-adapter.js     # D1-specific database adapter
├── drizzle/
│   ├── migrations/       # Generated migration files
│   └── meta/            # Migration metadata
├── scripts/
│   ├── seed.js          # Database seeding script
│   └── migrate.js       # Migration runner
└── drizzle.config.ts    # Drizzle configuration
```

## 📊 Database Schema Overview

### Core Tables
- **users** - User profiles and authentication data
- **works** - Content (poetry, stories, art, music)
- **comments** - User comments on works
- **likes** - Like relationships
- **follows** - User follow relationships
- **ratings** - Work ratings and reviews
- **notifications** - User notifications
- **communities** - User groups and communities

### Auth.js Compatible Tables
- **sessions** - User session management
- **accounts** - OAuth account linking
- **verification_tokens** - Email verification

## 🔧 Configuration Files

### drizzle.config.ts
```typescript
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/db/schema.js",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "./data/multiversal.db",
  },
  verbose: true,
  strict: true,
} satisfies Config;
```

### wrangler.jsonc (D1 Configuration)
```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "multiversal-prod", 
      "database_id": "YOUR_DATABASE_ID",
      "migrations_dir": "drizzle/migrations"
    }
  ],
  "vars": {
    "DATABASE_URL": "multiversal-prod",
    "NODE_ENV": "production"
  }
}
```

## 🏃‍♂️ Development Workflow

### 1. Schema Changes
```bash
# Edit src/lib/db/schema.js
# Generate new migration
npx drizzle-kit generate

# Apply to local development
npx wrangler d1 execute multiversal-prod --local --file=drizzle/migrations/[NEW_MIGRATION].sql
```

### 2. Local Development
```bash
# Start development server
npm run dev

# Use local SQLite database for development
# D1 binding will be used in production
```

### 3. Production Deployment
```bash
# Apply migrations to production
npx wrangler d1 execute multiversal-prod --remote --file=drizzle/migrations/[MIGRATION].sql

# Deploy application
npm run deploy
```

## 🗄️ Database Operations

### Drizzle ORM Usage with D1

```javascript
// src/lib/db/d1-adapter.js
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema.js';

export function createD1Database(env) {
  return drizzle(env.DB, { schema });
}

// In API routes (production)
export default {
  async fetch(request, env) {
    const db = createD1Database(env);
    
    // Query examples
    const users = await db.select().from(schema.users).limit(10);
    const works = await db.select().from(schema.works)
      .where(eq(schema.works.status, 'published'))
      .orderBy(desc(schema.works.createdAt));
    
    return Response.json({ users, works });
  }
};
```

### Common Queries

```javascript
// Get user with their works
const userWithWorks = await db
  .select()
  .from(users)
  .leftJoin(works, eq(users.id, works.authorId))
  .where(eq(users.id, userId));

// Get trending works
const trending = await db
  .select()
  .from(works)
  .where(eq(works.isTrending, true))
  .orderBy(desc(works.views))
  .limit(10);

// Create new work
const newWork = await db
  .insert(works)
  .values({
    id: generateId(),
    title: 'My New Poem',
    content: 'Beautiful poetry content...',
    type: 'poetry',
    authorId: session.user.id,
    status: 'published'
  });
```

## 🚨 Important Considerations

### Development vs Production
- **Local Development**: Uses better-sqlite3 with file-based SQLite
- **Production**: Uses Cloudflare D1 with identical schema
- **Schema Compatibility**: Both use SQLite dialect ensuring consistency

### Migration Strategy
1. Always test migrations locally first
2. Backup production data before applying migrations
3. Use Cloudflare's Time Travel feature for point-in-time recovery
4. Apply migrations during low-traffic periods

### Performance Optimization
- Use indexes for frequently queried columns
- Implement proper pagination for large datasets
- Cache frequently accessed data using SWR
- Use prepared statements for repeated queries

## 🔍 Monitoring and Debugging

### Local Development
```bash
# View local database
npx drizzle-kit studio

# Execute raw SQL locally
npx wrangler d1 execute multiversal-prod --local --command="SELECT COUNT(*) FROM users"
```

### Production Monitoring
```bash
# View production data
npx wrangler d1 execute multiversal-prod --remote --command="SELECT COUNT(*) FROM users"

# Check database size and performance
npx wrangler d1 info multiversal-prod
```

### Debugging Tips
- Use `console.log` in API routes to debug queries
- Check Cloudflare Workers logs in the dashboard
- Use Drizzle's query logging in development
- Monitor D1 metrics in Cloudflare Analytics

## 📚 Additional Resources

- [Cloudflare D1 Documentation](https://developers.cloudflare.com/d1/)
- [Drizzle ORM D1 Guide](https://orm.drizzle.team/docs/connect-cloudflare-d1)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Auth.js with D1](https://authjs.dev/getting-started/adapters/drizzle)
- [Cloudflare Workers Runtime APIs](https://developers.cloudflare.com/workers/runtime-apis/)

## 🆘 Troubleshooting

### Common Issues

1. **Database ID not found**: Update `database_id` in wrangler.jsonc
2. **Migration errors**: Check SQL syntax and table dependencies  
3. **Binding errors**: Ensure `binding: "DB"` matches code references
4. **Permission errors**: Verify Cloudflare account has D1 access
5. **Local vs production inconsistencies**: Check environment variables

### Getting Help
- [Cloudflare Community Discord](https://discord.cloudflare.com/)
- [Drizzle Discord](https://discord.gg/yfjTbVXMW4)
- [GitHub Issues](https://github.com/cloudflare/workers-sdk/issues)
