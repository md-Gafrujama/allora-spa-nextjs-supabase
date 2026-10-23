import { notFound } from 'next/navigation';
import { CatalogEditor } from '@/components/catalog-editor';
import { autoSeo, catalogUrl, isCatalogCategory, type CatalogItem } from '@/lib/catalog-base';

export const dynamic = 'force-dynamic';

export default async function NewCatalogPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!isCatalogCategory(category)) notFound();
  const seo = autoSeo('New service', '');
  const item: CatalogItem = {
    category,
    slug: '',
    name: '',
    description: '',
    short: '',
    price: '',
    duration: '',
    image: '',
    images: [],
    highlights: [],
    seoTitle: seo.seoTitle,
    seoDescription: seo.seoDescription,
    alt: '',
    url: catalogUrl(category, 'new-service'),
    source: 'json',
  };
  return (
    <div className="admin-page">
      <CatalogEditor item={item} isNew />
    </div>
  );
}
