# 🗄️ Cloudflare D1 Database Configuration

This directory contains the complete Cloudflare D1 database setup with Drizzle ORM integration for the Multiversal project.

## 🚀 Quick Start

### 1. Automatic Setup (Recommended)

```bash
npm run d1:setup
```

This interactive script will:

- Create your D1 database
- Update configuration files
- Generate and apply migrations
- Set up your environment

### 2. Manual Setup

#### Create D1 Database

```bash
npx wrangler d1 create multiversal-prod
```

#### Update Configuration

Copy the output from the above command and update `wrangler.jsonc`:

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

#### Generate and Apply Migrations

```bash
# Generate migrations from schema
npm run db:generate

# Apply to production
npm run db:migrate:remote
```

## 📋 Available Commands

### Database Operations

- `npm run db:generate` - Generate new migration from schema
- `npm run db:migrate:local` - Apply migrations to local development
- `npm run db:migrate:remote` - Apply migrations to production
- `npm run db:seed:local` - Seed local database with sample data
- `npm run db:seed:remote` - Seed production database
- `npm run db:status:local` - Check local database status
- `npm run db:status:remote` - Check production database status
- `npm run db:studio` - Open Drizzle Studio for database inspection

### D1 Management

- `npm run d1:setup` - Interactive D1 setup
- `npm run d1:create` - Create new D1 database
- `npm run d1:list` - List all D1 databases
- `npm run d1:info` - Get info about production database

## 🔧 Configuration Files

### Environment Variables

#### Local Development (.env.local)

```env
DATABASE_URL="./data/multiversal.db"
NODE_ENV="development"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-local-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

#### Production (Cloudflare Secrets)

```bash
wrangler secret put NEXTAUTH_SECRET
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
```

### Database Configuration

#### drizzle.config.ts

```typescript
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

#### wrangler.jsonc

```jsonc
{
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "multiversal-prod",
      "database_id": "your-database-id",
      "migrations_dir": "drizzle/migrations"
    }
  ],
  "vars": {
    "DATABASE_URL": "multiversal-prod",
    "NODE_ENV": "production"
  }
}
```

## 🏗️ Architecture

### Development vs Production

- **Development**: Uses `better-sqlite3` with local SQLite file
- **Production**: Uses Cloudflare D1 with identical schema
- **Compatibility**: Both use SQLite dialect ensuring consistency

### Database Connection

```javascript
// Automatic environment detection
import { getDatabase } from '@/lib/db';

// In API routes (production with D1)
export default {
  async fetch(request, env) {
    const db = getDatabase(env); // Uses env.DB for D1
    // Your database operations...
  }
};

// In development (local SQLite)
import { db } from '@/lib/db';
// Uses local SQLite automatically
```

## 📊 Database Schema

### Core Tables

- **users** - User profiles and authentication
- **works** - Content (poetry, stories, art, music)
- **comments** - User comments on works
- **likes** - Like relationships
- **follows** - User follow relationships
- **ratings** - Work ratings and reviews
- **notifications** - User notifications
- **communities** - User groups

### Auth.js Tables

- **sessions** - User sessions
- **accounts** - OAuth accounts
- **verification_tokens** - Email verification

## 🔄 Migration Workflow

### Making Schema Changes

1. **Edit Schema**

   ```javascript
   // src/lib/db/schema.js
   export const newTable = sqliteTable('new_table', {
     id: text('id').primaryKey(),
     // ... your columns
   });
   ```

2. **Generate Migration**

   ```bash
   npm run db:generate
   ```

3. **Apply Locally**

   ```bash
   npm run db:migrate:local
   ```

4. **Test Changes**

   ```bash
   npm run dev
   ```

5. **Apply to Production**

   ```bash
   npm run db:migrate:remote
   ```

## 🔍 Monitoring and Debugging

### Local Development

```bash
# View database in Drizzle Studio
npm run db:studio

# Check local database status
npm run db:status:local

# Execute raw SQL locally
npx wrangler d1 execute multiversal-prod --local --command="SELECT * FROM users LIMIT 5"
```

### Production Monitoring

```bash
# Check production database info
npm run d1:info

# View production data
npx wrangler d1 execute multiversal-prod --remote --command="SELECT COUNT(*) FROM users"

# Check database status
npm run db:status:remote
```

## 🚨 Troubleshooting

### Common Issues

1. **Database ID not found**
   - Update `database_id` in `wrangler.jsonc` with actual ID from D1 creation

2. **Migration errors**
   - Check SQL syntax in generated migration files
   - Ensure table dependencies are correct
   - Test locally before applying to production

3. **Binding errors**
   - Verify `binding: "DB"` matches code references
   - Check that D1 database is properly configured

4. **Permission errors**
   - Ensure Cloudflare account has D1 access
   - Check Wrangler authentication: `npx wrangler whoami`

5. **Environment inconsistencies**
   - Verify environment variables in both local and production
   - Check that secrets are properly set

### Getting Help

- **Cloudflare Community**: [Discord](https://discord.cloudflare.com/)
- **Drizzle Community**: [Discord](https://discord.gg/yfjTbVXMW4)
- **Documentation**: [docs/CLOUDFLARE_D1_SETUP.md](./CLOUDFLARE_D1_SETUP.md)

## 📚 Additional Resources

- [Cloudflare D1 Documentation](https://developers.cloudflare.com/d1/)
- [Drizzle ORM D1 Guide](https://orm.drizzle.team/docs/connect-cloudflare-d1)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
