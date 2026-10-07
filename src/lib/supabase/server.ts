import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { getSupabasePublicEnv } from '@/lib/supabase/env';

export async function createClient() {
  const env = getSupabasePublicEnv();
  if (!env) throw new Error('Supabase is not configured');

  const store = await cookies();
  return createServerClient(env.url, env.key, {
    cookies: {
      getAll() {
        return store.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => store.set(name, value, options));
        } catch {
          /* Called from a Server Component; middleware refreshes the session. */
        }
      },
    },
  });
}
