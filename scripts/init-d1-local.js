#!/usr/bin/env node

/**
 * Initialize Local D1 Database
 * 
 * This script helps set up a local D1 database for development
 * and applies migrations from the Drizzle schema
 */

import { execSync } from 'child_process';

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

function executeCommand(command) {
    try {
        log(`Running: ${command}`);
        const output = execSync(command, { encoding: 'utf8' });
        return output;
    } catch (error) {
        log(`Command failed: ${error.message}`, 'error');
        if (error.stdout) console.log(error.stdout);
        if (error.stderr) console.error(error.stderr);
        return null;
    }
}

// Main process
async function main() {
    log('Starting local D1 database setup', 'info');
    
    // Step 1: Create a local D1 database (if it doesn't exist)
    log('Creating local D1 database...', 'info');
    executeCommand('npx wrangler d1 create multiversal-prod --local');
    
    // Step 2: Apply migrations from the drizzle folder
    log('Applying migrations...', 'info');
    executeCommand('npx wrangler d1 migrations apply multiversal-prod --local');
    
    // Step 3: Execute seed script if available
    log('Seeding database...', 'info');
    try {
        if (fs.existsSync('./scripts/seed.js')) {
            executeCommand('node ./scripts/seed.js --env local');
        } else {
            log('No seed script found. Skipping.', 'warning');
        }
    } catch (err) {
        log('Error during seeding: ' + err.message, 'warning');
    }

    log('D1 database setup completed!', 'success');
    log('You can now start the development server with: npm run dev', 'info');
}

main().catch(error => {
    log(`Setup failed: ${error.message}`, 'error');
    process.exit(1);
});
