'use client';

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const path = usePathname() || '/';
  const bare = path === '/login' || path.startsWith('/admin');
  if (bare) return <>{children}</>;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
