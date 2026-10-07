import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';

const includes = [
  ['chair-massage', 'Chair massage — usually 10–30 minutes per employee'],
  ['back-neck-shoulder', 'Back, neck & shoulder massage'],
  ['head-scalp', 'Head/scalp massage'],
  ['arm-hand', 'Arm and hand massage'],
  ['seated-relaxation', 'Upper-leg or seated relaxation massage, where appropriate'],
  ['work-stress', 'Work-stress and muscle-tension relief'],
];

export default function Corporate() {
  return (
    <div className="corporate-page">
      <section className="section">
        <div className="container-page split">
          <div>
            <p className="crumb">Home › Corporate</p>
            <p className="eyebrow">Corporate Service</p>
            <h1>Corporate Massage Service</h1>
            <p className="copy">A corporate massage service is a professional wellness service provided at an office, workplace, corporate event, hotel, or employee wellness program. It usually focuses on short, convenient, non-sexual massages designed to reduce stress and muscle tension.</p>
            <h2>What it includes</h2>
            <ul className="check-list">
              {includes.map(([id, item]) => (
                <li id={id} key={id}><Check size={15} />{item}</li>
              ))}
            </ul>
            <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a corporate massage service.')} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={16} /> Book via WhatsApp <ArrowRight size={15} />
            </a>
          </div>
          <div className="portrait-frame">
            <Image src="/images/services/corporate-massage.jpg" alt="ALLORA therapist giving a seated shoulder massage in a bright Dubai office" fill sizes="(max-width:800px) 100vw, 560px" className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
