'use server';

import { revalidatePath } from 'next/cache';
import { requireAdmin } from '@/lib/admin-auth';
import { createClient } from '@/lib/supabase/server';

const statuses = ['new', 'responded'] as const;
type MessageStatus = (typeof statuses)[number];

export async function setMessageStatus(id: string, status: MessageStatus) {
  if (!id || !statuses.includes(status)) return { error: 'Could not update that message.' };
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from('contact_messages').update({ status }).eq('id', id);
  if (error) return { error: 'Could not update that message.' };
  revalidatePath('/admin/messages');
  revalidatePath('/admin');
  return { ok: true };
}
