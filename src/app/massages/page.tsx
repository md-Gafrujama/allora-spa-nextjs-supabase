import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { massageHref, massages } from '@/lib/massage-data';
import { site } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Massages',
  description: 'Thai, couple, hot stone, jacuzzi, deep tissue and lymphatic drainage massage at your home or hotel.',
};

export default function Massages() {
  return (
    <div className="massage-page">
      <section className="mp-list">
        <div className="container-page">
          <p className="eyebrow">Massages</p>
          <h1 className="display-font">Choose Your Massage</h1>
          <p className="mp-lede">Pick a therapy and book in one tap.</p>
          <div className="mp-list-grid">
            {massages.map((m) => (
              <article className="mp-item" key={m.slug}>
                <Link href={massageHref(m.slug)} className="mp-item-photo" tabIndex={-1} aria-hidden="true"><Image src={m.image} alt={m.alt} fill sizes="(max-width:800px) 100vw, 380px" /></Link>
                <h2 className="display-font"><Link href={massageHref(m.slug)} className="stretch-link">{m.name}</Link></h2>
                <p>{m.short}</p>
                <div className="actions">
                  <Link className="btn-outline" href={massageHref(m.slug)}>View <ArrowRight size={15} /></Link>
                  <a className="btn-primary" href={site.whatsappUrl(`Hello ALLORA, I would like to book a ${m.name}.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} />Book Now</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
