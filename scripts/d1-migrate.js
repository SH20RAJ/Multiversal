#!/usr/bin/env node

/**
 * D1 Migration Script
 * 
 * This script handles database migrations for Cloudflare D1.
 * It can apply migrations to both local development and production databases.
 * 
 * Usage:
 *   node scripts/d1-migrate.js --env local    # Apply to local D1 database
 *   node scripts/d1-migrate.js --env remote   # Apply to production D1 database
 *   node scripts/d1-migrate.js --generate     # Generate new migration
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const DATABASE_NAME = 'multiversal-prod';
const MIGRATIONS_DIR = 'drizzle/migrations';

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
    const result = execSync(command, { encoding: 'utf-8', stdio: 'inherit' });
    return result;
  } catch (error) {
    log(`Failed: ${description}`, 'error');
    log(error.message, 'error');
    process.exit(1);
  }
}

function generateMigration() {
  log('Generating new migration from schema...', 'info');
  executeCommand('npx drizzle-kit generate', 'Generate migration files');
  log('Migration generated successfully!', 'success');
  
  // List generated migration files
  if (fs.existsSync(MIGRATIONS_DIR)) {
    const files = fs.readdirSync(MIGRATIONS_DIR)
      .filter(file => file.endsWith('.sql'))
      .sort()
      .slice(-5); // Show last 5 migrations
    
    if (files.length > 0) {
      log('Recent migration files:', 'info');
      files.forEach(file => console.log(`  📄 ${file}`));
    }
  }
}

function applyMigrations(environment) {
  const isLocal = environment === 'local';
  const envFlag = isLocal ? '--local' : '--remote';
  const envName = isLocal ? 'local development' : 'production';
  
  log(`Applying migrations to ${envName} database...`, 'info');
  
  if (!fs.existsSync(MIGRATIONS_DIR)) {
    log('No migrations directory found. Run --generate first.', 'warning');
    return;
  }
  
  // Get all SQL migration files
  const migrationFiles = fs.readdirSync(MIGRATIONS_DIR)
    .filter(file => file.endsWith('.sql'))
    .sort();
  
  if (migrationFiles.length === 0) {
    log('No migration files found.', 'warning');
    return;
  }
  
  log(`Found ${migrationFiles.length} migration file(s)`, 'info');
  
  // Apply each migration file
  migrationFiles.forEach((file, index) => {
    const filePath = path.join(MIGRATIONS_DIR, file);
    log(`Applying migration ${index + 1}/${migrationFiles.length}: ${file}`, 'info');
    
    executeCommand(
      `npx wrangler d1 execute ${DATABASE_NAME} ${envFlag} --file=${filePath}`,
      `Apply ${file} to ${envName}`
    );
  });
  
  log(`All migrations applied to ${envName} database!`, 'success');
}

function seedDatabase(environment) {
  const isLocal = environment === 'local';
  const envFlag = isLocal ? '--local' : '--remote';
  const envName = isLocal ? 'local development' : 'production';
  
  log(`Seeding ${envName} database...`, 'info');
  
  // First, check if we have a seed SQL file
  const seedFile = 'scripts/seed.sql';
  if (fs.existsSync(seedFile)) {
    executeCommand(
      `npx wrangler d1 execute ${DATABASE_NAME} ${envFlag} --file=${seedFile}`,
      `Seed ${envName} database from SQL file`
    );
  } else {
    // If no SQL seed file, we can run the JavaScript seed script
    // Note: This requires the seed script to be adapted for D1
    log('No seed.sql file found. Consider creating one for D1 seeding.', 'warning');
  }
  
  log(`Database seeding completed for ${envName}!`, 'success');
}

function showStatus(environment) {
  const isLocal = environment === 'local';
  const envFlag = isLocal ? '--local' : '--remote';
  const envName = isLocal ? 'local development' : 'production';
  
  log(`Checking ${envName} database status...`, 'info');
  
  // Check database info
  if (!isLocal) {
    executeCommand(
      `npx wrangler d1 info ${DATABASE_NAME}`,
      `Get ${envName} database info`
    );
  }
  
  // Check tables
  executeCommand(
    `npx wrangler d1 execute ${DATABASE_NAME} ${envFlag} --command="SELECT name FROM sqlite_master WHERE type='table';"`,
    `List tables in ${envName} database`
  );
  
  // Check row counts
  const tables = ['users', 'works', 'comments', 'likes', 'follows'];
  tables.forEach(table => {
    try {
      executeCommand(
        `npx wrangler d1 execute ${DATABASE_NAME} ${envFlag} --command="SELECT COUNT(*) as count FROM ${table};"`,
        `Count rows in ${table} table`
      );
    } catch (error) {
      log(`Table ${table} might not exist yet`, 'warning');
    }
  });
}

function showHelp() {
  console.log(`
🗄️  Cloudflare D1 Migration Script for Multiversal

Usage:
  node scripts/d1-migrate.js [command] [options]

Commands:
  --generate              Generate new migration from schema
  --migrate --env <env>   Apply migrations (env: local|remote)
  --seed --env <env>      Seed database with sample data
  --status --env <env>    Show database status and table info
  --help                  Show this help message

Examples:
  node scripts/d1-migrate.js --generate
  node scripts/d1-migrate.js --migrate --env local
  node scripts/d1-migrate.js --migrate --env remote
  node scripts/d1-migrate.js --seed --env local
  node scripts/d1-migrate.js --status --env remote

Prerequisites:
  1. Update wrangler.jsonc with your actual database_id
  2. Ensure you're logged in: npx wrangler auth login
  3. Verify database exists: npx wrangler d1 list

Environment Files:
  📁 Local Development: Uses ./data/multiversal.db
  ☁️  Production: Uses Cloudflare D1 database binding
`);
}

// Parse command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.length === 0) {
  showHelp();
  process.exit(0);
}

if (args.includes('--generate')) {
  generateMigration();
  process.exit(0);
}

if (args.includes('--migrate')) {
  const envIndex = args.indexOf('--env');
  if (envIndex === -1 || !args[envIndex + 1]) {
    log('Please specify environment: --env local or --env remote', 'error');
    process.exit(1);
  }
  
  const environment = args[envIndex + 1];
  if (!['local', 'remote'].includes(environment)) {
    log('Environment must be "local" or "remote"', 'error');
    process.exit(1);
  }
  
  applyMigrations(environment);
  process.exit(0);
}

if (args.includes('--seed')) {
  const envIndex = args.indexOf('--env');
  if (envIndex === -1 || !args[envIndex + 1]) {
    log('Please specify environment: --env local or --env remote', 'error');
    process.exit(1);
  }
  
  const environment = args[envIndex + 1];
  if (!['local', 'remote'].includes(environment)) {
    log('Environment must be "local" or "remote"', 'error');
    process.exit(1);
  }
  
  seedDatabase(environment);
  process.exit(0);
}

if (args.includes('--status')) {
  const envIndex = args.indexOf('--env');
  if (envIndex === -1 || !args[envIndex + 1]) {
    log('Please specify environment: --env local or --env remote', 'error');
    process.exit(1);
  }
  
  const environment = args[envIndex + 1];
  if (!['local', 'remote'].includes(environment)) {
    log('Environment must be "local" or "remote"', 'error');
    process.exit(1);
  }
  
  showStatus(environment);
  process.exit(0);
}

log('Unknown command. Use --help for usage information.', 'error');
process.exit(1);
