import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';

const treatments = [
  ['deep-tissue', 'Deep Tissue'],
  ['lymphatic-drainage', 'Lymphatic Drainage'],
  ['hot-stone', 'Hot Stone'],
  ['cellulite', 'Cellulite'],
  ['medotherapy', 'Medotherapy'],
];

export default function DeepTissue() {
  return (
    <div className="deep-page">
      <section className="section">
        <div className="container-page split">
          <div>
            <p className="crumb">Home › Deep Tissue</p>
            <p className="eyebrow">Deep Tissue</p>
            <h1>Deep Tissue Care</h1>
            <p className="copy">Firm, focused body care at your home, hotel or event.</p>
            <h2>Treatments</h2>
            <ul className="check-list">
              {treatments.map(([id, item]) => (
                <li id={id} key={id}><Check size={15} />{item}</li>
              ))}
            </ul>
            <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a deep tissue treatment.')} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={16} /> Book via WhatsApp <ArrowRight size={15} />
            </a>
          </div>
          <div className="plain-photo">
            <Image src="/images/home/about-care.jpg" alt="ALLORA therapist giving a massage in a bright white room" fill sizes="(max-width:800px) 100vw, 540px" className="object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
