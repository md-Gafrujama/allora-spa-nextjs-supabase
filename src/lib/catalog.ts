import { createClient } from '@/lib/supabase/server';
import { autoSeo, baseCatalog, catalogUrl, type CatalogCategory, type CatalogItem } from '@/lib/catalog-base';

type Row = {
  category: CatalogCategory;
  slug: string;
  name: string;
  description: string | null;
  short_text: string | null;
  price: string | null;
  duration: string | null;
  image_url: string | null;
  images: string[] | null;
  highlights: string[] | null;
  seo_title: string | null;
  seo_description: string | null;
};

function fromRow(row: Row): CatalogItem {
  const images = Array.isArray(row.images) ? row.images.filter(Boolean) : [];
  const image = row.image_url || images[0] || '';
  const description = row.description || '';
  const seo = autoSeo(row.name, description);
  return {
    category: row.category,
    slug: row.slug,
    name: row.name,
    description,
    short: row.short_text || description,
    price: row.price || '',
    duration: row.duration || '',
    image,
    images: images.filter((src) => src !== image),
    highlights: Array.isArray(row.highlights) ? row.highlights : [],
    seoTitle: row.seo_title || seo.seoTitle,
    seoDescription: row.seo_description || seo.seoDescription,
    alt: row.name,
    url: catalogUrl(row.category, row.slug),
    source: 'supabase',
  };
}

async function rowsFor(category: CatalogCategory) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('catalog_items').select('*').eq('category', category).eq('is_active', true);
    if (error || !data) return [] as Row[];
    return data as Row[];
  } catch {
    return [] as Row[];
  }
}

export async function getCatalog(category: CatalogCategory): Promise<CatalogItem[]> {
  const base = baseCatalog(category);
  const rows = await rowsFor(category);
  const bySlug = new Map(rows.map((row) => [row.slug, fromRow(row)]));
  const merged = base.map((entry) => bySlug.get(entry.slug) ?? entry);
  const extras = rows.filter((row) => !base.some((entry) => entry.slug === row.slug)).map(fromRow);
  return [...merged, ...extras];
}

export async function getCatalogItem(category: CatalogCategory, slug: string) {
  const items = await getCatalog(category);
  return items.find((entry) => entry.slug === slug) ?? null;
}
