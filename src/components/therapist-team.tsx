import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/site-data';
import { therapists } from '@/lib/therapists';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

export function TherapistTeam() {
  return (
    <section className="pro-team" aria-labelledby="pro-team-title">
      <div className="container-page">
        <div className="pro-team-head">
          <p className="eyebrow">Meet Our Team</p>
          <h2 id="pro-team-title">Our Professional Therapists</h2>
          <p>Our trained and experienced female therapists are dedicated to providing the best spa and wellness experience. Every therapist is professional, friendly and passionate about your wellbeing.</p>
        </div>
        <div className="pro-team-grid">
          {therapists.map((t, i) => (
            <article className="pro-team-card" key={t.role}>
              <div className="pro-team-photo">
                <Image src={t.src} alt={`ALLORA ${t.role} during a ${t.service.toLowerCase()} session`} width={t.width} height={t.height} sizes="(max-width:800px) 92vw, 280px" style={{ objectPosition: t.position }} />
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="pro-team-body">
                <b>{t.role}</b>
                <small>{t.service}</small>
                <a href={site.whatsappUrl(`Hello ALLORA, I would like to book the ${t.role}.`)} target="_blank" rel="noreferrer" className="btn-outline"><WhatsAppIcon size={14} />Book</a>
              </div>
            </article>
          ))}
        </div>
        <div className="pro-team-cta">
          <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a therapist.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book a Therapist <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
