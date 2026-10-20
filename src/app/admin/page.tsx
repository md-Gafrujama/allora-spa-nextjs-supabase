import Link from 'next/link';
import { getCatalog } from '@/lib/catalog';
import { catalogCategories } from '@/lib/catalog-base';
import { requireAdmin } from '@/lib/admin-auth';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

type RecentMessage = {
  id: string;
  name: string;
  phone: string | null;
  service: string | null;
  message: string | null;
  status: string | null;
  created_at: string;
};

export default async function AdminHome() {
  const user = await requireAdmin();
  const lists = await Promise.all(catalogCategories.map(async (category) => ({
    ...category,
    items: await getCatalog(category.id),
  })));
  const total = lists.reduce((sum, list) => sum + list.items.length, 0);
  const live = lists.reduce((sum, list) => sum + list.items.filter((item) => item.source === 'supabase').length, 0);
  const local = total - live;

  let messages = 0;
  let recent: RecentMessage[] = [];
  try {
    const supabase = await createClient();
    const [{ count }, { data }] = await Promise.all([
      supabase.from('contact_messages').select('id', { count: 'exact', head: true }),
      supabase.from('contact_messages')
        .select('id, name, phone, service, message, status, created_at')
        .order('created_at', { ascending: false })
        .limit(5),
    ]);
    messages = count ?? 0;
    recent = (data ?? []) as RecentMessage[];
  } catch {
    messages = 0;
    recent = [];
  }

  const metrics = [
    { label: 'Services', value: total, href: '/admin/catalog/spa' },
    { label: 'Saved', value: live, href: '/admin/catalog/spa' },
    { label: 'On the site file', value: local, href: '/admin/catalog/spa' },
    { label: 'Enquiries', value: messages, href: '/admin/messages' },
  ];

  return (
    <div className="admin-page dash">
      <section className="dash-hero">
        <div>
          <p>Dashboard</p>
          <h1 className="display-font">{user.name}</h1>
          <span>{user.email}</span>
        </div>
        <div className="dash-metrics">
          {metrics.map((metric) => (
            <Link key={metric.label} href={metric.href}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="dash-cats" aria-label="Service categories">
        {lists.map((list) => {
          const saved = list.items.filter((item) => item.source === 'supabase').length;
          const width = list.items.length ? Math.round((saved / list.items.length) * 100) : 0;
          return (
            <Link href={`/admin/catalog/${list.id}`} key={list.id} className="dash-cat">
              <span>{list.label}</span>
              <strong>{list.items.length}</strong>
              <div className="dash-bar" aria-hidden="true"><i style={{ width: `${width}%` }} /></div>
              <small>{saved} saved · {list.items.length - saved} waiting</small>
            </Link>
          );
        })}
      </section>

      <div className="dash-lower">
        <section className="admin-panel">
          <div className="admin-panel-head">
            <h2>Latest enquiries</h2>
            <Link href="/admin/messages">View all</Link>
          </div>
          {recent.length ? (
            <ul className="dash-msgs">
              {recent.map((row) => (
                <li key={row.id}>
                  <div>
                    <b>{row.name}</b>
                    <span>{[row.phone, row.service].filter(Boolean).join(' · ') || 'General'}</span>
                    {row.message ? <p>{row.message}</p> : null}
                  </div>
                  <time>{new Date(row.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</time>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-empty">No enquiries yet. Contact form submissions will show here and on WhatsApp.</p>
          )}
        </section>

        <section className="admin-panel">
          <div className="admin-panel-head"><h2>Shortcuts</h2></div>
          <div className="dash-links">
            <Link href="/admin/catalog/spa/new">Add a spa package</Link>
            <Link href="/admin/catalog/place/new">Add a place service</Link>
            <Link href="/admin/catalog/event/new">Add an event service</Link>
            <Link href="/admin/messages">Open enquiries</Link>
            <Link href="/admin/profile">Profile settings</Link>
            <Link href="/" target="_blank">View the website</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
