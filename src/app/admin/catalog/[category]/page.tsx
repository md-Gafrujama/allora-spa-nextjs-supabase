import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCatalog } from '@/lib/catalog';
import { catalogCategories, isCatalogCategory } from '@/lib/catalog-base';

export const dynamic = 'force-dynamic';

export default async function CatalogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!isCatalogCategory(category)) notFound();
  const meta = catalogCategories.find((entry) => entry.id === category)!;
  const items = await getCatalog(category);
  const live = items.filter((item) => item.source === 'supabase').length;

  return (
    <div className="admin-page">
      <section className="admin-welcome">
        <div>
          <p>{meta.label}</p>
          <h1 className="display-font">{items.length} services</h1>
          <span>{live} saved. The rest stay on the site until you edit them.</span>
        </div>
        <Link href={`/admin/catalog/${category}/new`} className="admin-cta">Add service</Link>
      </section>
      <section className="admin-panel">
        <div className="cat-scroll-label">
          <span>{meta.label}</span>
          <span>URL and SEO</span>
          <span>Source</span>
          <span></span>
        </div>
        <ul className="cat-list">
          {items.map((item) => (
            <li key={item.slug}>
              <img src={item.image || '/images/logo-allora.png'} alt="" />
              <div>
                <b>{item.name}</b>
                <a href={item.url} target="_blank" rel="noreferrer">{item.url}</a>
                <small>{item.seoTitle}</small>
              </div>
              <em>{item.source === 'supabase' ? 'Saved' : 'Not saved'}</em>
              <Link href={`/admin/catalog/${category}/${item.slug}`}>Edit</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
