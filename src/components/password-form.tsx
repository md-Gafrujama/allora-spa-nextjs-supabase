'use client';

import { useState } from 'react';
import { KeyRound } from 'lucide-react';
import { changeAdminPassword } from '@/lib/password-actions';
import { useToast } from '@/components/toast';

export function PasswordForm() {
  const toast = useToast();
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const form = e.currentTarget;
    const result = await changeAdminPassword(new FormData(form));
    if (result?.error) toast.error(result.error, 'Could not update');
    else {
      toast.success('Your new password is active.', 'Password updated');
      form.reset();
    }
    setPending(false);
  }

  return (
    <form className="admin-form admin-form-stack" onSubmit={onSubmit}>
      <label>
        Current password
        <input name="current" type="password" autoComplete="current-password" required />
      </label>
      <label>
        New password
        <input name="next" type="password" autoComplete="new-password" minLength={8} required />
      </label>
      <label>
        Confirm new password
        <input name="confirm" type="password" autoComplete="new-password" minLength={8} required />
      </label>
      <button className="save-btn" type="submit" disabled={pending}>
        <KeyRound size={16} />
        {pending ? 'Saving…' : 'Update password'}
      </button>
    </form>
  );
}
