import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  try {
    const b = await req.json();
    const name = String(b?.name || '').trim();
    const message = String(b?.message || '').trim();
    const rating = Number(b?.rating);
    if (!name || !message || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Name, rating and review are required.' }, { status: 400 });
    }
    const s = await createClient();
    const { error } = await s.from('contact_messages').insert({
      name: name.slice(0, 120),
      phone: '',
      email: '',
      service: 'Review',
      preferred_location: rating === 1 ? '1 star' : `${rating} stars`,
      message: message.slice(0, 2000),
    });
    if (error) return NextResponse.json({ error: 'Unable to save review.' }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
