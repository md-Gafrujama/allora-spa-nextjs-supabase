import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { getSupabasePublicEnv } from '@/lib/supabase/env';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isAdmin = path === '/admin' || path.startsWith('/admin/');
  if (!isAdmin) return NextResponse.next();

  const env = getSupabasePublicEnv();
  if (!env) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('error', 'config');
    return NextResponse.redirect(url);
  }

  let res = NextResponse.next({ request: req });
  const supabase = createServerClient(env.url, env.key, {
    cookies: {
      getAll: () => req.cookies.getAll(),
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value));
        res = NextResponse.next({ request: req });
        cookiesToSet.forEach(({ name, value, options }) => res.cookies.set(name, value, options));
      },
    },
  });

  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      const url = req.nextUrl.clone();
      url.pathname = '/login';
      url.searchParams.set('next', path);
      const redirect = NextResponse.redirect(url);
      res.cookies.getAll().forEach((cookie) => redirect.cookies.set(cookie));
      return redirect;
    }
  } catch {
    return NextResponse.next();
  }

  return res;
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
