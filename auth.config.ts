import type { NextAuthConfig } from 'next-auth';

interface AuthCallbackParams {
  auth: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      id?: string | null;
    } | null;
    credentials?: Record<string, unknown>;
  } | null;
  request: {
    nextUrl: URL;
    headers: Headers;
  };
}

type AuthorizedCallback = (params: AuthCallbackParams) => boolean | Response;

export const authConfig = {
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    authorized: (({ auth, request: { nextUrl } }: AuthCallbackParams) => {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnLoginPage = nextUrl.pathname.startsWith('/signin');
      const isOnSignUpPage = nextUrl.pathname.startsWith('/signup');
      
      // Protect dashboard routes - must be logged in
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      
      // Redirect logged-in users away from login page
      if (isOnLoginPage && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      
      // Allow access to all other routes
      return true;
    }) satisfies AuthorizedCallback,
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;