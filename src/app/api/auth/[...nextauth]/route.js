import { handlers } from "@/lib/auth"

// DO NOT add 'export const runtime = "edge"' here
// OpenNext doesn't support edge runtime for auth routes

export const { GET, POST } = handlers
