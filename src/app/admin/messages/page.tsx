import { createClient } from '@/lib/supabase/server';
import { MessageStatus } from '@/components/message-status';

export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
  const supabase = await createClient();
  const [list, totalRes, unreadRes, respondedRes] = await Promise.all([
    supabase
      .from('contact_messages')
      .select('id, name, email, phone, service, preferred_location, message, status, created_at')
      .order('created_at', { ascending: false })
      .limit(100),
    supabase.from('contact_messages').select('id', { count: 'exact', head: true }),
    supabase.from('contact_messages').select('id', { count: 'exact', head: true }).in('status', ['new', 'unread']),
    supabase.from('contact_messages').select('id', { count: 'exact', head: true }).eq('status', 'responded'),
  ]);

  const rows = list.data ?? [];
  const total = totalRes.count ?? rows.length;
  const unread = unreadRes.count ?? 0;
  const responded = respondedRes.count ?? 0;
  const stats = [
    { label: 'Total messages', value: total, tone: '' },
    { label: 'Unread', value: unread, tone: 'is-unread' },
    { label: 'Responded', value: responded, tone: 'is-done' },
  ];

  return (
    <div className="admin-page">
      <section className="msg-stats" aria-label="Message totals">
        {stats.map((stat) => (
          <article key={stat.label} className={stat.tone}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>
      <section className="admin-panel">
        <div className="admin-panel-head">
          <h2>Client messages</h2>
          <span>{rows.length} shown</span>
        </div>
        {rows.length ? (
          <ul className="admin-msg-list">
            {rows.map((row) => (
              <li key={row.id}>
                <div>
                  <b>{row.name}</b>
                  <span>{[row.phone, row.email, row.service, row.preferred_location].filter(Boolean).join(' · ') || 'General'}</span>
                  {row.message ? <p>{row.message}</p> : null}
                </div>
                <div className="msg-meta">
                  <MessageStatus id={row.id} status={row.status} />
                  <time>{new Date(row.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="admin-empty">No messages yet.</p>
        )}
      </section>
    </div>
  );
}
