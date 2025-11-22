import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * OAuth Callback Route Handler
 * 
 * This route handles the OAuth callback from Supabase Auth.
 * After successful authentication with Google, the user is redirected here.
 * We exchange the code for a session and redirect to the dashboard.
 */
export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');
    const origin = requestUrl.origin;
    const next = requestUrl.searchParams.get('next') || '/dashboard';

    if (code) {
      const supabase = await createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (!error) {
        // Successful authentication - redirect to dashboard or next URL
        return NextResponse.redirect(`${origin}${next}`);
      }

      // Authentication failed - redirect to login with error
      console.error('Auth callback error:', error);
      return NextResponse.redirect(
        `${origin}/login?error=${encodeURIComponent(error.message)}`
      );
    }

    // No code provided - redirect to login
    return NextResponse.redirect(`${origin}/login?error=no_code`);
  } catch (error: any) {
    console.error('Callback route error:', error);
    return NextResponse.redirect(`${request.nextUrl.origin}/login?error=callback_failed`);
  }
}

