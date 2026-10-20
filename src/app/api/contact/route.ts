import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name || '').trim();
    const message = String(body?.message || '').trim();
    if (!name || !message) return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });

    const supabase = await createClient();
    const { error } = await supabase.from('contact_messages').insert({
      name: name.slice(0, 120),
      phone: String(body.phone || '').slice(0, 40),
      email: String(body.email || '').slice(0, 160),
      service: String(body.service || '').slice(0, 120),
      preferred_location: String(body.preferred_location || '').slice(0, 120),
      message: message.slice(0, 2000),
    });
    if (error) return NextResponse.json({ error: 'Unable to save message.' }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
