#!/usr/bin/env node

/**
 * Quick Setup Script for Cloudflare D1 with Multiversal
 * 
 * This script helps you get started with D1 database setup quickly.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function log(message, type = 'info') {
    const colors = {
        info: '\x1b[36m',
        success: '\x1b[32m',
        warning: '\x1b[33m',
        error: '\x1b[31m',
        reset: '\x1b[0m'
    };

    const prefix = {
        info: 'ℹ️',
        success: '✅',
        warning: '⚠️',
        error: '❌'
    };

    console.log(`${colors[type]}${prefix[type]} ${message}${colors.reset}`);
}

function executeCommand(command, description) {
    try {
        log(`${description}...`, 'info');
        const result = execSync(command, { encoding: 'utf-8', stdio: 'pipe' });
        return result;
    } catch (error) {
        log(`Failed: ${description}`, 'error');
        throw error;
    }
}

function question(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function main() {
    console.log(`
🌟 Cloudflare D1 Setup for Multiversal
=====================================

This script will help you set up Cloudflare D1 database for your Multiversal project.

Prerequisites:
- Cloudflare account with Workers plan
- Wrangler CLI authenticated (wrangler auth login)

Let's get started!
`);

    try {
        // Check if wrangler is authenticated
        log('Checking Wrangler authentication...', 'info');
        try {
            executeCommand('npx wrangler whoami', 'Check authentication');
            log('Wrangler is authenticated!', 'success');
        } catch (error) {
            log('You need to authenticate with Wrangler first:', 'warning');
            console.log('Run: npx wrangler auth login\n');
            process.exit(1);
        }

        // Get database name
        const dbName = await question('Enter database name (default: multiversal-prod): ');
        const databaseName = dbName.trim() || 'multiversal-prod';

        // Create D1 database
        log(`Creating D1 database: ${databaseName}`, 'info');
        const createResult = executeCommand(
            `npx wrangler d1 create ${databaseName}`,
            'Create D1 database'
        );

        // Extract database ID from output
        const dbIdMatch = createResult.match(/database_id['":\s]+([a-f0-9-]+)/);
        if (!dbIdMatch) {
            log('Could not extract database ID from output. Please check the output above.', 'error');
            process.exit(1);
        }

        const databaseId = dbIdMatch[1];
        log(`Database created with ID: ${databaseId}`, 'success');

        // Update wrangler.jsonc
        log('Updating wrangler.jsonc with database configuration...', 'info');
        const wranglerPath = 'wrangler.jsonc';

        if (fs.existsSync(wranglerPath)) {
            let config = fs.readFileSync(wranglerPath, 'utf-8');

            // Replace the placeholder database ID
            config = config.replace('YOUR_DATABASE_ID_HERE', databaseId);
            config = config.replace('multiversal-prod', databaseName);

            fs.writeFileSync(wranglerPath, config);
            log('wrangler.jsonc updated successfully!', 'success');
        } else {
            log('wrangler.jsonc not found. Please update it manually.', 'warning');
        }

        // Generate and apply migrations
        const shouldMigrate = await question('Generate and apply database migrations? (y/n): ');
        if (shouldMigrate.toLowerCase() === 'y' || shouldMigrate.toLowerCase() === 'yes') {
            log('Generating database migrations...', 'info');
            executeCommand('npx drizzle-kit generate', 'Generate migrations');

            log('Applying migrations to D1 database...', 'info');
            const migrationFiles = fs.readdirSync('drizzle/migrations')
                .filter(file => file.endsWith('.sql'))
                .sort();

            for (const file of migrationFiles) {
                executeCommand(
                    `npx wrangler d1 execute ${databaseName} --remote --file=drizzle/migrations/${file}`,
                    `Apply migration: ${file}`
                );
            }

            log('Migrations applied successfully!', 'success');
        }

        // Seed database
        const shouldSeed = await question('Seed database with sample data? (y/n): ');
        if (shouldSeed.toLowerCase() === 'y' || shouldSeed.toLowerCase() === 'yes') {
            log('Seeding database with sample data...', 'info');

            // Check if we have seeding capability
            if (fs.existsSync('scripts/seed.sql')) {
                executeCommand(
                    `npx wrangler d1 execute ${databaseName} --remote --file=scripts/seed.sql`,
                    'Seed database from SQL file'
                );
            } else {
                log('No seed.sql file found. You can create one or use the JavaScript seed script.', 'warning');
            }
        }

        // Setup environment variables
        log('Setting up environment variables...', 'info');
        console.log(`
🔧 Next Steps:

1. Set your production secrets:
   npx wrangler secret put NEXTAUTH_SECRET
   npx wrangler secret put GITHUB_CLIENT_ID
   npx wrangler secret put GITHUB_CLIENT_SECRET

2. Update your .env.local for development:
   DATABASE_URL="./data/multiversal.db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-local-secret"

3. Test your setup:
   npm run dev  # For local development
   npm run deploy  # For production deployment

4. Monitor your database:
   npx wrangler d1 info ${databaseName}
   npx wrangler d1 execute ${databaseName} --remote --command="SELECT COUNT(*) FROM users;"

📚 Documentation:
   - Read docs/CLOUDFLARE_D1_SETUP.md for detailed instructions
   - Use scripts/d1-migrate.js for ongoing database management

🎉 Setup complete! Your Cloudflare D1 database is ready to use.
`);

        log('D1 setup completed successfully!', 'success');

    } catch (error) {
        log('Setup failed. Please check the error above and try again.', 'error');
        process.exit(1);
    } finally {
        rl.close();
    }
}

main();
