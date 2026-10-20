'use server';

import { createClient } from '@/lib/supabase/server';

export async function changeAdminPassword(formData: FormData) {
  const current = String(formData.get('current') || '');
  const next = String(formData.get('next') || '');
  const confirm = String(formData.get('confirm') || '');

  if (!current || !next || !confirm) return { error: 'Fill in all three fields.' };
  if (next.length < 8) return { error: 'New password must be at least 8 characters.' };
  if (next !== confirm) return { error: 'New password and confirm password do not match.' };
  if (next === current) return { error: 'Choose a different password.' };

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) return { error: 'Sign in again, then change your password.' };

  const { error: check } = await supabase.auth.signInWithPassword({ email: user.email, password: current });
  if (check) return { error: 'Current password is incorrect.' };

  const { error } = await supabase.auth.updateUser({ password: next });
  if (error) return { error: 'Could not update the password. Try again.' };
  return { ok: true };
}
