'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setMessageStatus } from '@/lib/message-actions';
import { useToast } from '@/components/toast';

export function MessageStatus({ id, status }: { id: string; status: string | null }) {
  const router = useRouter();
  const toast = useToast();
  const [pending, setPending] = useState(false);
  const responded = status === 'responded';

  async function update(next: 'new' | 'responded') {
    setPending(true);
    const result = await setMessageStatus(id, next);
    if (result?.error) toast.error(result.error, 'Could not update');
    else {
      toast.success(next === 'responded' ? 'Marked as responded.' : 'Marked as unread.', 'Updated');
      router.refresh();
    }
    setPending(false);
  }

  return (
    <div className="msg-actions">
      <em className={responded ? 'is-done' : 'is-unread'}>{responded ? 'Responded' : 'Unread'}</em>
      {responded ? (
        <button type="button" disabled={pending} onClick={() => update('new')}>Mark unread</button>
      ) : (
        <button type="button" disabled={pending} onClick={() => update('responded')}>Mark responded</button>
      )}
    </div>
  );
}
