#!/bin/bash

# Start wrangler pages dev with D1 database
# This script automatically creates a local D1 database if needed

echo "🚀 Starting Multiversal with D1 database..."

# Check if the D1 database exists locally
if npx wrangler d1 list 2>&1 | grep -q "multiversal-prod"; then
  echo "✅ Found existing multiversal-prod database"
else
  echo "⚙️ Creating new D1 database..."
  npx wrangler d1 create multiversal-prod
  
  echo "⚙️ Applying schema..."
  npx wrangler d1 execute multiversal-prod --file=./drizzle/d1-schema.sql
fi

# Start the development server with D1 binding
echo "🔄 Starting development server..."
npx wrangler pages dev --d1=multiversal-prod -- npm run dev
