import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// Safe access to environment variables that works in both Node.js and Edge Runtime
const getEnv = (key) => {
  try {
    return process.env[key];
  } catch (e) {
    return undefined;
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: getEnv('AUTH_GOOGLE_ID'),
      clientSecret: getEnv('AUTH_GOOGLE_SECRET'),
    })
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user?.id,
        username: user?.username,
      },
    }),
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt", // Use JWT for client-side
  },
})
