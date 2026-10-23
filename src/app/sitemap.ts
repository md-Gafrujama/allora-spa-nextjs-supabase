import type { MetadataRoute } from 'next';
import { getCatalog } from '@/lib/catalog';
import { publicPath } from '@/lib/public-slugs';
import { getSiteUrl } from '@/lib/site-url';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const b=getSiteUrl();
  const roots=['','/about','/spa-packages','/your-place','/event-services','/corporate','/massages','/deep-tissue','/contact',publicPath('cellulite-dubai'),publicPath('medotherapy-dubai')].map(p=>({url:b+p,lastModified:new Date(),changeFrequency:'weekly' as const,priority:p===''?1:.8}));
  const groups=await Promise.all([getCatalog('spa'),getCatalog('place'),getCatalog('event'),getCatalog('massage'),getCatalog('corporate')]);
  const services=groups.flat().map(x=>({url:b+x.url,lastModified:new Date(),changeFrequency:'monthly' as const,priority:.7}));
  return [...roots,...services];
}
