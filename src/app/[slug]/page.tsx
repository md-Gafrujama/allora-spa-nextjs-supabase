import { notFound, redirect } from 'next/navigation';
import { publicPath } from '@/lib/public-slugs';

export default async function LegacyServiceUrl({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const path = publicPath(slug);
  if (path) redirect(path);
  notFound();
}
