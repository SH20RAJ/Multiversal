// TypeScript declarations for Cloudflare D1 environment
// This file provides type safety for Cloudflare Workers runtime

declare global {
  interface CloudflareEnv {
    // D1 Database binding
    DB: D1Database;
    
    // Environment variables
    DATABASE_URL: string;
    NODE_ENV: string;
    NEXTAUTH_URL: string;
    
    // Secrets (set via wrangler secret put)
    NEXTAUTH_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    
    // Optional additional bindings
    ASSETS?: any; // Static assets binding
  }
}

// D1 Database types
declare interface D1Database {
  prepare(query: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
  exec(query: string): Promise<D1ExecResult>;
}

declare interface D1PreparedStatement {
  bind(...values: any[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run(): Promise<D1Result>;
  all<T = unknown>(): Promise<D1Result<T>>;
  raw<T = unknown>(): Promise<T[]>;
}

declare interface D1Result<T = Record<string, unknown>> {
  results: T[];
  success: boolean;
  error?: string;
  meta: {
    duration: number;
    size_after: number;
    rows_read: number;
    rows_written: number;
    last_row_id?: number;
  };
}

declare interface D1ExecResult {
  count: number;
  duration: number;
}

// Extend the global namespace for Next.js API routes
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NODE_ENV: 'development' | 'production' | 'test';
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
  }
}

// Export empty object to make this a module
export {};
