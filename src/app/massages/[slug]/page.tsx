import type { Metadata } from 'next';
import { ServiceScreen, serviceMetadata } from '@/components/service-screen';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return serviceMetadata('massage', slug);
}

export default async function MassageService({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceScreen category="massage" slug={slug} />;
}
