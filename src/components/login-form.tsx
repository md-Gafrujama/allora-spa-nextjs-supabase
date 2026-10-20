'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInAdmin } from '@/lib/auth-actions';
import { useToast } from '@/components/toast';

export function LoginForm({ next, notice }: { next: string; notice?: string }) {
  const router = useRouter();
  const toast = useToast();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (notice) toast.error(notice, 'Could not sign in');
  }, [notice, toast]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const result = await signInAdmin(new FormData(e.currentTarget));
    if (result?.error) {
      toast.error(result.error, 'Could not sign in');
      setPending(false);
      return;
    }
    toast.success('Welcome back.', 'Signed in');
    router.push(result?.next || next);
    router.refresh();
  }

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required placeholder="you@allora.ae" />
      </label>
      <label>
        Password
        <input name="password" type="password" autoComplete="current-password" required placeholder="••••••••" />
      </label>
      <input type="hidden" name="next" value={next} />
      <button className="login-submit" type="submit" disabled={pending}>{pending ? 'Signing in…' : 'Sign in'}</button>
    </form>
  );
}
