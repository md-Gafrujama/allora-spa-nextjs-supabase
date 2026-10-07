import type { MetadataRoute } from 'next';
import { serviceItems } from '@/lib/service-data';
import { getSiteUrl } from '@/lib/site-url';
export default function sitemap(): MetadataRoute.Sitemap {
  const b=getSiteUrl();
  const roots=['','/about','/spa-packages','/your-place','/event-services','/corporate','/contact'].map(p=>({url:b+p,lastModified:new Date(),changeFrequency:'weekly' as const,priority:p===''?1:.8}));
  const services=serviceItems.map(x=>({url:`${b}/${x.category==='spa'?'spa-packages':x.category==='place'?'your-place':'event-services'}/${x.slug}`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:.7}));
  return [...roots,...services];
}
