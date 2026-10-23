import type { Metadata } from 'next';
import { requireAdmin } from '@/lib/admin-auth';
import { getCatalog } from '@/lib/catalog';
import { catalogCategories } from '@/lib/catalog-base';
import { displayName } from '@/lib/public-slugs';
import { AdminShell } from '@/components/admin-nav';

export const metadata: Metadata = { title: 'Admin', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdmin();
  const services = await Promise.all(catalogCategories.map(async (category) => ({
    id: category.id,
    label: category.label,
    items: (await getCatalog(category.id)).map((item) => ({ slug: item.slug, name: displayName(item.slug, item.name), image: item.image })),
  })));
  return <AdminShell email={user.email} name={user.name} services={services}>{children}</AdminShell>;
}
