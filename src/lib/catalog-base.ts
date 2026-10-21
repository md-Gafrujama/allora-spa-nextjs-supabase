import { massages } from '@/lib/massage-data';
import { serviceItems } from '@/lib/service-data';

export const catalogCategories = [
  { id: 'spa', label: 'Spa Packages', base: '/spa-packages' },
  { id: 'place', label: 'Your Place', base: '/your-place' },
  { id: 'event', label: 'Event Services', base: '/event-services' },
  { id: 'massage', label: 'Massages', base: '/massages' },
  { id: 'corporate', label: 'Corporate', base: '/corporate' },
] as const;

export type CatalogCategory = (typeof catalogCategories)[number]['id'];

export type CatalogItem = {
  category: CatalogCategory;
  slug: string;
  name: string;
  description: string;
  short: string;
  price: string;
  duration: string;
  image: string;
  images: string[];
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
  alt: string;
  url: string;
  source: 'json' | 'supabase';
};

const corporate = [
  { slug: 'chair-massage-dubai', name: 'Chair Massage', image: '/images/corporate/chair.jpg', highlights: ['Usually 10–30 minutes', 'At the desk or wellness corner', 'No change of clothes needed'] },
  { slug: 'back-neck-shoulder-dubai', name: 'Back, Neck & Shoulder', image: '/images/corporate/back-neck.jpg', highlights: ['Desk-tension relief', 'Seated office-friendly', 'Short session format'] },
  { slug: 'head-scalp-dubai', name: 'Head / Scalp Massage', image: '/images/corporate/scalp.jpg', highlights: ['Calms mental fatigue', 'Gentle scalp & temples', 'Quick workplace break'] },
  { slug: 'arm-hand-dubai', name: 'Arm & Hand Massage', image: '/images/corporate/arm-hand.jpg', highlights: ['Typing & mouse strain relief', 'Forearm and hand focus', 'Fully clothed'] },
  { slug: 'seated-relaxation-dubai', name: 'Seated Relaxation', image: '/images/corporate/seated.jpg', highlights: ['Upper-leg or seated format', 'Where appropriate', 'Modest & professional'] },
  { slug: 'work-stress-dubai', name: 'Work-Stress Relief', image: '/images/corporate/stress.jpg', highlights: ['Muscle-tension release', 'Neck & shoulders focus', 'Employee wellness ready'] },
];

export function isCatalogCategory(value: string): value is CatalogCategory {
  return catalogCategories.some((category) => category.id === value);
}

export function catalogUrl(_category: CatalogCategory, slug: string) {
  return `/${slug}`;
}

export function autoSeo(name: string, description: string, place = 'Dubai') {
  const clean = description.replace(/\s+/g, ' ').trim();
  const seoDescription = clean.length > 155 ? `${clean.slice(0, 152)}…` : clean;
  return {
    seoTitle: `${name} in ${place}`,
    seoDescription: seoDescription || `Book ${name} in ${place} with ALLORA Spa & Wellness. Female therapists at your home, hotel or event.`,
  };
}

function item(partial: Omit<CatalogItem, 'url' | 'seoTitle' | 'seoDescription' | 'source' | 'images'> & { images?: string[]; seoTitle?: string; seoDescription?: string; source?: CatalogItem['source'] }): CatalogItem {
  const seo = autoSeo(partial.name, partial.description || partial.short);
  const images = (partial.images ?? []).filter(Boolean);
  return {
    ...partial,
    images,
    image: partial.image || images[0] || '',
    seoTitle: partial.seoTitle || seo.seoTitle,
    seoDescription: partial.seoDescription || seo.seoDescription,
    url: catalogUrl(partial.category, partial.slug),
    source: partial.source ?? 'json',
  };
}

export function baseCatalog(category: CatalogCategory): CatalogItem[] {
  if (category === 'massage') {
    return massages.map((massage) => item({
      category,
      slug: massage.slug,
      name: massage.name,
      description: massage.description,
      short: massage.short,
      price: 'On request',
      duration: '60 min',
      image: massage.image,
      highlights: massage.highlights,
      alt: massage.alt,
    }));
  }
  if (category === 'corporate') {
    return corporate.map((service) => item({
      category,
      slug: service.slug,
      name: service.name,
      description: service.highlights.join('. ') + '.',
      short: 'Workplace wellness session.',
      price: 'On request',
      duration: '10–30 min',
      image: service.image,
      highlights: [...service.highlights],
      alt: service.name,
    }));
  }
  return serviceItems.filter((service) => service.category === category).map((service) => item({
    category,
    slug: service.slug,
    name: service.name,
    description: service.description,
    short: service.description,
    price: service.price,
    duration: service.duration,
    image: service.image,
    highlights: service.highlights,
    alt: service.name,
  }));
}

export function slugify(value: string) {
  const base = value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (!base || base.endsWith('-dubai')) return base;
  return `${base}-dubai`;
}
