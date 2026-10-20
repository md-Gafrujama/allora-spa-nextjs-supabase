import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Logo } from '@/components/logo';
import { LoginForm } from '@/components/login-form';
import { createClient } from '@/lib/supabase/server';
import { getSupabasePublicEnv } from '@/lib/supabase/env';

export const metadata: Metadata = { title: 'Admin login', robots: { index: false, follow: false } };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const q = await searchParams;
  const next = q.next?.startsWith('/admin') ? q.next : '/admin';

  if (getSupabasePublicEnv()) {
    try {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
        if (profile?.role === 'admin') redirect(next);
      }
    } catch {
      /* show the form */
    }
  }

  const notice = q.error === 'config'
    ? 'Supabase is not configured yet.'
    : q.error === 'role'
      ? 'This account does not have admin access.'
      : '';

  return (
    <div className="login-page">
      <section className="login-panel">
        <Logo alt="ALLORA Spa & Wellness" />
        <h1 className="display-font">Spa care, managed quietly.</h1>
        <p>Packages, bookings and messages for the ALLORA team.</p>
      </section>
      <section className="login-card">
        <p className="eyebrow">Admin</p>
        <h2 className="display-font">Sign in</h2>
        <p>Use the email and password from your admin account.</p>
        <LoginForm next={next} notice={notice} />
        <Link href="/" className="login-back">Back to site</Link>
      </section>
    </div>
  );
}
