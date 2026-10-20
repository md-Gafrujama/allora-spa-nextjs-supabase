'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type P = { id: string; name: string; slug: string; price: number | null; is_active: boolean };

export function AdminPackages({ initialPackages }: { initialPackages: P[] }) {
  const [items, setItems] = useState(initialPackages);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  async function add() {
    if (!name.trim()) return;
    setError('');
    const { data, error: insertError } = await createClient()
      .from('spa_packages')
      .insert({ name: name.trim(), slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''), price: Number(price) || null, is_active: true })
      .select()
      .single();
    if (insertError || !data) {
      setError('Could not add that package.');
      return;
    }
    setItems((current) => [...current, data]);
    setName('');
    setPrice('');
  }

  return (
    <div className="admin-page">
      <section className="admin-panel">
        <div className="admin-panel-head"><h2>Add a package</h2></div>
        <div className="admin-form">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Package name" />
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price (AED)" inputMode="decimal" />
          <button type="button" onClick={add}>Add package</button>
        </div>
        {error ? <p className="admin-empty">{error}</p> : null}
      </section>
      <section className="admin-panel">
        <div className="admin-panel-head">
          <h2>Spa packages</h2>
          <span>{items.length} total</span>
        </div>
        {items.length ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <div>
                  <b>{item.name}</b>
                  <span>{item.slug}</span>
                </div>
                <em>AED {item.price ?? '—'}</em>
                <time>{item.is_active ? 'Active' : 'Hidden'}</time>
              </li>
            ))}
          </ul>
        ) : (
          <p className="admin-empty">No packages yet.</p>
        )}
      </section>
    </div>
  );
}
