import { updateSession } from '@/lib/supabase/middleware';
import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Database } from '@/lib/supabase/types';

/**
 * Middleware for authentication and session management
 * 
 * This middleware:
 * 1. Refreshes the Supabase session on every request
 * 2. Protects dashboard routes (requires authentication)
 * 3. Redirects authenticated users away from login page
 */
export async function middleware(request: NextRequest) {
  // Update session (refresh if needed)
  let response = await updateSession(request);
  
  const { pathname } = request.nextUrl;

  // Skip auth checks for public routes
  const publicRoutes = ['/', '/login', '/auth/callback', '/api'];
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));

  // If it's a public route (except /login), allow access
  if (isPublicRoute && pathname !== '/login') {
    return response;
  }

  // Check authentication only if Supabase is configured
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    const supabase = createServerClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value;
          },
          set(name: string, value: string, options: any) {
            response.cookies.set({
              name,
              value,
              ...options,
            });
          },
          remove(name: string, options: any) {
            response.cookies.set({
              name,
              value: '',
              ...options,
            });
          },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();

    // Protect dashboard routes - redirect to login if not authenticated
    if (pathname.startsWith('/dashboard')) {
      if (!user) {
        const redirectUrl = new URL('/login', request.url);
        redirectUrl.searchParams.set('next', pathname);
        return NextResponse.redirect(redirectUrl);
      }
    }

    // Redirect authenticated users away from login page
    if (pathname === '/login' && user) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - test-supabase (test page)
     */
    '/((?!_next/static|_next/image|favicon.ico|test-supabase|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

