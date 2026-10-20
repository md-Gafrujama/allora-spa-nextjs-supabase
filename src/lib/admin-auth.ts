import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getSupabasePublicEnv } from '@/lib/supabase/env';

export type AdminUser = { email: string; name: string };

export async function requireAdmin(): Promise<AdminUser> {
  if (!getSupabasePublicEnv()) redirect('/login?error=config');
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');
  const { data: profile } = await supabase.from('profiles').select('role, full_name').eq('id', user.id).maybeSingle();
  if (profile?.role !== 'admin') redirect('/login?error=role');
  return { email: user.email ?? '', name: profile.full_name || 'Admin' };
}

