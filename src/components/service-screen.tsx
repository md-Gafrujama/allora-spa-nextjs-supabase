import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { getCatalog, getCatalogItem } from '@/lib/catalog';
import { catalogUrl, type CatalogCategory, type CatalogItem } from '@/lib/catalog-base';
import { pageMeta } from '@/lib/seo';
import { displayName, publicPath, publicSlug } from '@/lib/public-slugs';
import { site } from '@/lib/site-data';

const extras = [
  {
    slug: publicSlug('cellulite-dubai'),
    name: 'Cellulite',
    image: '/images/massages/cellulite.jpg',
    description: 'Targeted body kneading that focuses on circulation and smoother-feeling skin, delivered at your home or hotel in Dubai.',
    highlights: ['Targeted body kneading', 'Circulation-focused care', 'At your place'],
  },
  {
    slug: publicSlug('medotherapy-dubai'),
    name: 'Medotherapy',
    image: '/images/massages/medotherapy.jpg',
    description: 'A focused, medical-style wellness session with professional setup at your home, hotel or event in Dubai.',
    highlights: ['Medical-style wellness', 'Focused body therapy', 'Professional setup'],
  },
];

const labels: Record<CatalogCategory, { href: string; back: string; eyebrow: string }> = {
  spa: { href: '/spa-packages', back: 'Spa Package', eyebrow: 'SPA PACKAGE' },
  place: { href: '/your-place', back: 'Your Place', eyebrow: 'YOUR PLACE' },
  event: { href: '/event-services', back: 'Event Service', eyebrow: 'EVENT SERVICE' },
  corporate: { href: '/corporate', back: 'Corporate', eyebrow: 'CORPORATE' },
  massage: { href: '/massages', back: 'Massages', eyebrow: 'MASSAGE' },
};

function extraBySlug(slug: string) {
  return extras.find((entry) => entry.slug === publicSlug(slug));
}

export async function serviceMetadata(category: CatalogCategory, slug: string): Promise<Metadata> {
  const canonical = publicSlug(slug);
  const item = await getCatalogItem(category, canonical);
  if (!item) return {};
  return pageMeta({ title: `${displayName(item.slug, item.name)} in Dubai`, description: item.seoDescription, path: item.url });
}

export function deepMetadata(slug: string): Metadata {
  const extra = extraBySlug(slug);
  if (!extra) return {};
  return pageMeta({ title: `${displayName(extra.slug, extra.name)} in Dubai`, description: extra.description, path: publicPath(extra.slug) });
}

function StandardDetail({ item }: { item: CatalogItem }) {
  const label = labels[item.category];
  return (
    <section className="section">
      <div className="container-page detail-layout">
        <div className="detail-image"><Image src={item.image} alt={item.name} fill priority sizes="(max-width:800px) 100vw,55vw" /></div>
        <div className="detail-content">
          <Link href={label.href} className="quick-link"><ArrowLeft size={15} /> {label.back}</Link>
          <p className="eyebrow mt-6">{label.eyebrow}</p>
          <h1>{displayName(item.slug, item.name)}</h1>
          <p className="copy">{item.description}</p>
          {item.price || item.duration ? (
            <div className="detail-meta">
              {item.price ? <span className="pill">{item.price}</span> : null}
              {item.duration ? <span className="pill">{item.duration}</span> : null}
            </div>
          ) : null}
          <h3 className="display-font text-2xl mt-8">What’s included</h3>
          <ul className="check-list">{item.highlights.map((line) => <li key={line}><Check size={15} />{line}</li>)}</ul>
          <a className="btn-primary mt-5" href={site.whatsappUrl(`Hello ALLORA, I am interested in ${item.name}. Please share availability.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} />Book via WhatsApp <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

async function MassageDetail({ item }: { item: CatalogItem }) {
  const massages = await getCatalog('massage');
  const others = massages.filter((entry) => entry.slug !== item.slug);
  const book = site.whatsappUrl(`Hello ALLORA, I would like to book a ${item.name}.`);
  return (
    <div className="massage-page">
      <section className="mp-hero">
        <div className="container-page mp-hero-grid">
          <div className="mp-photo">
            <Image src={item.image} alt={item.alt} fill priority sizes="(max-width:800px) 100vw, 560px" />
          </div>
          <div className="mp-copy">
            <Link href="/massages" className="mp-back"><ArrowLeft size={15} />Massages</Link>
            <p className="eyebrow">Massage</p>
            <h1 className="display-font">{displayName(item.slug, item.name)}</h1>
            <p className="mp-lede">{item.description}</p>
            <div className="actions">
              <a className="btn-primary" href={book} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
            <ul className="mp-points">
              {item.highlights.map((line) => <li key={line}><Check size={15} />{line}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="mp-more">
        <div className="container-page">
          <p className="eyebrow">More Massages</p>
          <h2 className="display-font">You may also like</h2>
          <div className="mp-grid">
            {others.map((entry) => (
              <Link className="mp-card" href={entry.url} key={entry.slug}>
                <span className="mp-card-photo"><Image src={entry.image} alt={entry.alt} fill sizes="(max-width:800px) 50vw, 230px" /></span>
                <strong>{displayName(entry.slug, entry.name)}</strong>
                <span>{entry.short}</span>
                <em>View</em>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function DeepDetail({ slug }: { slug: string }) {
  const extra = extraBySlug(slug);
  if (!extra) notFound();
  return (
    <section className="section">
      <div className="container-page detail-layout">
        <div className="detail-image"><Image src={extra.image} alt={extra.name} fill priority sizes="(max-width:800px) 100vw,55vw" /></div>
        <div className="detail-content">
          <Link href="/deep-tissue" className="quick-link"><ArrowLeft size={15} /> Deep Tissue</Link>
          <p className="eyebrow mt-6">DEEP TISSUE</p>
          <h1>{displayName(extra.slug, extra.name)}</h1>
          <p className="copy">{extra.description}</p>
          <h3 className="display-font text-2xl mt-8">Treatment highlights</h3>
          <ul className="check-list">{extra.highlights.map((line) => <li key={line}><Check size={15} />{line}</li>)}</ul>
          <a className="btn-primary mt-5" href={site.whatsappUrl(`Hello ALLORA, I would like to book ${extra.name}.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} />Book via WhatsApp <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

export async function ServiceScreen({ category, slug }: { category: CatalogCategory; slug: string }) {
  const canonical = publicSlug(slug);
  const here = catalogUrl(category, canonical);
  const owned = publicPath(canonical);
  if (owned && owned !== here) redirect(owned);
  if (slug !== canonical) redirect(here);
  const item = await getCatalogItem(category, canonical);
  if (!item) notFound();
  return item.category === 'massage' ? <MassageDetail item={item} /> : <StandardDetail item={item} />;
}
