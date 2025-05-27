#!/usr/bin/env node
/**
 * Local Database Setup Script
 * 
 * This script creates a local SQLite database and applies migrations.
 * Run this to set up your local development environment.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const DATA_DIR = './data';
const DATABASE_PATH = `${DATA_DIR}/multiversal.db`;
const MIGRATIONS_DIR = './drizzle';

function log(message, type = 'info') {
    const colors = {
        info: '\x1b[36m', // Cyan
        success: '\x1b[32m', // Green
        warning: '\x1b[33m', // Yellow
        error: '\x1b[31m', // Red
        reset: '\x1b[0m' // Reset
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
        log(`Executing: ${description}`, 'info');
        const result = execSync(command, { encoding: 'utf-8' });
        return result;
    } catch (error) {
        log(`Failed: ${description}`, 'error');
        log(error.message, 'error');
        process.exit(1);
    }
}

// Create data directory if it doesn't exist
if (!fs.existsSync(DATA_DIR)) {
    log(`Creating data directory ${DATA_DIR}...`, 'info');
    fs.mkdirSync(DATA_DIR);
}

// Check if database already exists
if (fs.existsSync(DATABASE_PATH)) {
    log(`Database already exists at ${DATABASE_PATH}`, 'info');
    const shouldReset = process.argv.includes('--reset');
    
    if (shouldReset) {
        log('Removing existing database...', 'warning');
        fs.unlinkSync(DATABASE_PATH);
        log('Database removed. Creating fresh database...', 'info');
    } else {
        log('Use --reset flag to recreate the database from scratch', 'info');
    }
}

// Apply migrations to local SQLite database
log('Applying migrations to local SQLite database...', 'info');

// Get all SQL migration files
if (!fs.existsSync(MIGRATIONS_DIR)) {
    log('No migrations directory found. Generate migrations first with: npx drizzle-kit generate', 'error');
    process.exit(1);
}

const migrationFiles = fs.readdirSync(MIGRATIONS_DIR)
    .filter(file => file.endsWith('.sql'))
    .sort();

if (migrationFiles.length === 0) {
    log('No migration files found.', 'warning');
    process.exit(0);
}

log(`Found ${migrationFiles.length} migration file(s)`, 'info');

// Create a better-sqlite3 database and apply migrations directly
try {
    // Install better-sqlite3 if not already installed
    executeCommand('npm install better-sqlite3', 'Installing better-sqlite3');
    
    // Create a simple script to apply migrations
    const tempScript = `
    const Database = require('better-sqlite3');
    const fs = require('fs');
    const path = require('path');
    
    // Open database
    const db = new Database('${DATABASE_PATH}');
    
    // Begin transaction
    db.exec('BEGIN TRANSACTION;');
    
    try {
        // Apply each migration
        ${migrationFiles.map(file => `
            console.log('Applying migration: ${file}');
            const sql = fs.readFileSync(path.join('${MIGRATIONS_DIR}', '${file}'), 'utf8');
            db.exec(sql);
        `).join('\n')}
        
        // Create migration tracking table if it doesn't exist
        db.exec(\`
            CREATE TABLE IF NOT EXISTS _migration (
                name TEXT PRIMARY KEY,
                applied_at INTEGER DEFAULT (strftime('%s', 'now'))
            );
        \`);
        
        // Record applied migrations
        const stmt = db.prepare('INSERT OR REPLACE INTO _migration (name) VALUES (?)');
        ${migrationFiles.map(file => `stmt.run('${file}');`).join('\n')}
        
        // Commit transaction
        db.exec('COMMIT;');
        console.log('All migrations applied successfully!');
    } catch (error) {
        // Rollback on error
        db.exec('ROLLBACK;');
        console.error('Error applying migrations:', error);
        process.exit(1);
    }
    `;
    
    // Write temporary script to file
    fs.writeFileSync('./temp-migrate.js', tempScript);
    
    // Execute the script
    executeCommand('node ./temp-migrate.js', 'Applying migrations');
    
    // Clean up
    fs.unlinkSync('./temp-migrate.js');
    
    log('Local database setup complete!', 'success');
    
} catch (error) {
    log(`Error setting up local database: ${error.message}`, 'error');
    process.exit(1);
}

// Optional: Apply seed data
if (process.argv.includes('--seed')) {
    log('Seeding database with sample data...', 'info');
    
    if (fs.existsSync('./scripts/seed.js')) {
        executeCommand('node ./scripts/seed.js', 'Running seed script');
    } else {
        log('No seed script found at ./scripts/seed.js', 'warning');
    }
}

log(`
🎉 Local database is ready at ${DATABASE_PATH}

You can now:
1. Start the development server: npm run dev
2. Run database operations locally

For additional database management:
- Generate migrations: npx drizzle-kit generate
- View database: npx drizzle-kit studio
`, 'success');
