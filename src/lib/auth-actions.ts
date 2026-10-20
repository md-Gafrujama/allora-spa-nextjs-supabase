'use server';

import { createClient } from '@/lib/supabase/server';
import { getSupabasePublicEnv } from '@/lib/supabase/env';

export async function signInAdmin(formData: FormData) {
  const email = String(formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');
  const next = String(formData.get('next') || '/admin');
  const safeNext = next.startsWith('/admin') ? next : '/admin';

  if (!email || !password) return { error: 'Enter your email and password.' };
  if (!getSupabasePublicEnv()) return { error: 'Supabase is not configured yet.' };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: 'Email or password is incorrect.' };

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Could not sign in. Try again.' };

  const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
  if (profile?.role !== 'admin') {
    await supabase.auth.signOut();
    return { error: 'This account does not have admin access.' };
  }

  return { ok: true as const, next: safeNext };
}
