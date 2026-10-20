'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, LayoutDashboard, LogOut, Mail, Menu, UserRound, X } from 'lucide-react';
import { Logo } from '@/components/logo';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/toast';
import type { CatalogCategory } from '@/lib/catalog-base';

export type SideService = { slug: string; name: string; image: string };
export type SideGroup = { id: CatalogCategory; label: string; items: SideService[] };

export function AdminShell({
  email,
  name,
  services,
  children,
}: {
  email: string;
  name: string;
  services: SideGroup[];
  children: React.ReactNode;
}) {
  const path = usePathname() || '/admin';
  const router = useRouter();
  const toast = useToast();
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState<string | null>(services.find((group) => path.startsWith(`/admin/catalog/${group.id}`))?.id ?? 'spa');
  const initial = (name || email || 'A').slice(0, 1).toUpperCase();
  const title = path.startsWith('/admin/messages')
    ? 'Messages'
    : path.startsWith('/admin/profile') || path.startsWith('/admin/password')
      ? 'Profile'
      : services.find((group) => path.startsWith(`/admin/catalog/${group.id}`))?.label || 'Dashboard';

  async function signOut() {
    await createClient().auth.signOut();
    toast.success('You are signed out.', 'Signed out');
    router.push('/login');
    router.refresh();
  }

  return (
    <div className={`admin-shell${open ? ' is-open' : ''}`}>
      <aside className="admin-side">
        <div className="admin-side-top">
          <Link href="/admin" className="admin-brand" aria-label="ALLORA admin" onClick={() => setOpen(false)}><Logo alt="" /></Link>
          <button type="button" className="admin-side-close" aria-label="Close menu" onClick={() => setOpen(false)}><X size={18} /></button>
        </div>
        <div className="admin-side-scroll">
          <Link href="/admin" className={path === '/admin' ? 'is-active' : ''} onClick={() => setOpen(false)}><LayoutDashboard size={16} /> Dashboard</Link>
          <Link href="/admin/messages" className={path.startsWith('/admin/messages') ? 'is-active' : ''} onClick={() => setOpen(false)}><Mail size={16} /> Messages</Link>
          {services.map((group) => {
            const groupOpen = opened === group.id;
            return (
              <div className="admin-group" key={group.id}>
                <button type="button" className={groupOpen ? 'is-open' : ''} onClick={() => setOpened(groupOpen ? null : group.id)}>
                  {group.label}
                  <ChevronDown size={14} />
                </button>
                {groupOpen ? (
                  <div className="admin-group-list">
                    <Link href={`/admin/catalog/${group.id}`} className={path === `/admin/catalog/${group.id}` ? 'is-active' : ''} onClick={() => setOpen(false)}>All {group.label}</Link>
                    {group.items.map((item) => {
                      const href = `/admin/catalog/${group.id}/${item.slug}`;
                      return (
                        <Link key={item.slug} href={href} className={path === href ? 'is-active' : ''} onClick={() => setOpen(false)}>
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="admin-side-foot">
          <Link href="/admin/profile" className={path.startsWith('/admin/profile') ? 'is-active' : ''} onClick={() => setOpen(false)}><UserRound size={15} /> Profile</Link>
          <Link href="/">View website</Link>
        </div>
      </aside>
      {open ? <button type="button" className="admin-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} /> : null}
      <div className="admin-body">
        <header className="admin-top">
          <button type="button" className="admin-menu-btn" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={18} /></button>
          <div className="admin-top-title">
            <span>ALLORA Admin</span>
            <strong>{title}</strong>
          </div>
          <div className="admin-top-user">
            <Link href="/admin/profile" className="admin-user-link" onClick={() => setOpen(false)}>
              <span className="admin-avatar" aria-hidden="true">{initial}</span>
              <div>
                <b>{name}</b>
                <small>{email}</small>
              </div>
            </Link>
            <button type="button" onClick={signOut}><LogOut size={15} /> Sign out</button>
          </div>
        </header>
        <div className="admin-main">{children}</div>
      </div>
    </div>
  );
}
