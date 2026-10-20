import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { getCatalog, getCatalogItem } from '@/lib/catalog';
import { massageHref } from '@/lib/massage-data';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site-data';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getCatalogItem('massage', slug);
  if (!item) return {};
  return pageMeta({ title: item.seoTitle, description: item.seoDescription, path: item.url });
}

export default async function MassageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = await getCatalogItem('massage', slug);
  if (!item) notFound();
  const massages = await getCatalog('massage');
  const others = massages.filter((m) => m.slug !== item.slug);
  const book = site.whatsappUrl(`Hello ALLORA, I would like to book a ${item.name}.`);

  return (
    <div className="massage-page">
      <section className="mp-hero">
        <div className="container-page mp-hero-grid">
          <div className="mp-photo">
            <Image src={item.image} alt={item.alt} fill priority sizes="(max-width:800px) 100vw, 560px" />
          </div>
          <div className="mp-copy">
            <Link href="/massages" className="mp-back"><ArrowLeft size={15} />All massages</Link>
            <p className="eyebrow">Massage</p>
            <h1 className="display-font">{item.name}</h1>
            <p className="mp-lede">{item.description}</p>
            <div className="actions">
              <a className="btn-primary" href={book} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
            <ul className="mp-points">
              {item.highlights.map((h) => <li key={h}><Check size={15} />{h}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="mp-more">
        <div className="container-page">
          <p className="eyebrow">More Massages</p>
          <h2 className="display-font">You may also like</h2>
          <div className="mp-grid">
            {others.map((m) => (
              <Link className="mp-card" href={massageHref(m.slug)} key={m.slug}>
                <span className="mp-card-photo"><Image src={m.image} alt={m.alt} fill sizes="(max-width:800px) 50vw, 230px" /></span>
                <strong>{m.name}</strong>
                <span>{m.short}</span>
                <em>View</em>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
