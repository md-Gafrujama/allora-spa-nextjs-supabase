import type { Metadata } from 'next';
import { ServiceScreen, serviceMetadata } from '@/components/service-screen';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return serviceMetadata('spa', slug);
}

export default async function SpaService({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceScreen category="spa" slug={slug} />;
}
