'use client';

import { 
  signIn as nextAuthSignIn, 
  signOut as nextAuthSignOut, 
  useSession 
} from "next-auth/react";

export { useSession };

export function useAuth() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";
  const user = session?.user;

  return {
    session,
    user,
    isLoading,
    isAuthenticated,
    status
  };
}

export async function signInWithProvider(provider, options = {}) {
  const callbackUrl = options.callbackUrl || "/";
  try {
    return await nextAuthSignIn(provider, {
      ...options,
      callbackUrl,
      redirect: true
    });
  } catch (error) {
    return {
      error: "Authentication failed",
      status: false
    };
  }
}

export async function signOutUser(options = {}) {
  const callbackUrl = options.callbackUrl || "/";
  try {
    await nextAuthSignOut({
      ...options,
      callbackUrl
    });
    return { status: true };
  } catch (error) {
    return {
      error: "Sign out failed",
      status: false
    };
  }
}
