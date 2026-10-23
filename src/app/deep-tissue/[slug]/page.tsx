import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { DeepDetail, deepMetadata } from '@/components/service-screen';
import { publicPath, publicSlug } from '@/lib/public-slugs';

const deepOnly = new Set(['cellulite-care-dubai', 'medotherapy-dubai']);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return deepMetadata(slug);
}

export default async function DeepService({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const canonical = publicSlug(slug);
  if (!deepOnly.has(canonical)) {
    const path = publicPath(slug);
    if (path) redirect(path);
    notFound();
  }
  if (slug !== canonical) redirect(`/deep-tissue/${canonical}`);
  return <DeepDetail slug={canonical} />;
}
