import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site-url';

export function pageMeta({ title, description, path }: { title: string; description: string; path?: string }): Metadata {
  const cleanTitle = title.replace(/\s*\|\s*ALLORA Spa & Wellness\s*$/i, '').trim();
  const cleanDescription = description.replace(/\s+/g, ' ').trim().slice(0, 160);
  const url = path ? new URL(path, getSiteUrl()).toString() : undefined;
  return {
    title: cleanTitle,
    description: cleanDescription,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url,
      siteName: 'ALLORA Spa & Wellness',
      type: 'website',
      locale: 'en_AE',
    },
    twitter: { card: 'summary_large_image', title: cleanTitle, description: cleanDescription },
  };
}
