import { redirect } from 'next/navigation';

export default async function OldEventUrl({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
