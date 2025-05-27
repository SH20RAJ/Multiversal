
export default {
  schema: "./src/lib/db/schema.js",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL || "./data/multiversal.db",
  },
  verbose: true,
  strict: true,
} ;
