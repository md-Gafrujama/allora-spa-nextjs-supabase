import { notFound } from 'next/navigation';
import { CatalogEditor } from '@/components/catalog-editor';
import { getCatalogItem } from '@/lib/catalog';
import { isCatalogCategory } from '@/lib/catalog-base';

export const dynamic = 'force-dynamic';

export default async function EditCatalogPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  if (!isCatalogCategory(category)) notFound();
  const item = await getCatalogItem(category, slug);
  if (!item) notFound();
  return (
    <div className="admin-page">
      <CatalogEditor item={item} />
    </div>
  );
}
