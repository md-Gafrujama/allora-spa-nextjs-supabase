'use server';

import { createClient } from '@/lib/supabase/server';
import { autoSeo, isCatalogCategory, slugify } from '@/lib/catalog-base';

export async function saveCatalogItem(formData: FormData) {
  const category = String(formData.get('category') || '');
  if (!isCatalogCategory(category)) return { error: 'Choose a category.' };

  const name = String(formData.get('name') || '').trim();
  const slug = slugify(String(formData.get('slug') || name));
  const description = String(formData.get('description') || '').trim();
  const short = String(formData.get('short') || '').trim();
  const price = String(formData.get('price') || '').trim();
  const duration = String(formData.get('duration') || '').trim();
  const image = String(formData.get('image') || '').trim();
  const images = String(formData.get('images') || '').split('\n').map((line) => line.trim()).filter(Boolean);
  const highlights = String(formData.get('highlights') || '').split('\n').map((line) => line.trim()).filter(Boolean);
  const seo = autoSeo(name, description || short);
  const seoTitle = String(formData.get('seoTitle') || '').trim() || seo.seoTitle;
  const seoDescription = String(formData.get('seoDescription') || '').trim() || seo.seoDescription;

  if (!name || !slug) return { error: 'Name and URL slug are required.' };

  try {
    const supabase = await createClient();
    const { error } = await supabase.from('catalog_items').upsert({
      category,
      slug,
      name,
      description,
      short_text: short,
      price,
      duration,
      image_url: image,
      images,
      highlights,
      seo_title: seoTitle,
      seo_description: seoDescription,
      is_active: true,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'category,slug' });
    if (error) return { error: error.message.includes('catalog_items') ? 'Run the catalog SQL, then save again.' : error.message };
    return { ok: true, slug };
  } catch {
    return { error: 'Could not save. Run the catalog SQL first.' };
  }
}
