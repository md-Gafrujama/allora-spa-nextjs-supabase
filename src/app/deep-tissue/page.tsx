import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Mail, Sparkles, UserRound } from 'lucide-react';
import { PageMobileHero } from '@/components/page-mobile-hero';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { pageMeta } from '@/lib/seo';
import { publicPath } from '@/lib/public-slugs';
import { displayName, site } from '@/lib/site-data';

export const metadata = pageMeta({
  title: 'Deep Tissue Massage in Dubai',
  description: 'Deep tissue, lymphatic drainage, hot stone, cellulite and medotherapy massage at your home or hotel in Dubai.',
  path: '/deep-tissue',
});

const perks = [
  { icon: UserRound, label: 'Trained female therapists' },
  { icon: Sparkles, label: 'Firm, focused care' },
];

const treatments = [
  {
    id: 'deep-tissue',
    name: 'Deep Tissue',
    image: '/images/massages/deep-tissue-v9.jpg',
    highlights: ['Firm, focused pressure', 'Targets knots and stiffness', 'Home or hotel'],
  },
  {
    id: 'lymphatic-drainage',
    name: 'Lymphatic Drainage',
    image: '/images/massages/lymphatic-v3.jpg',
    highlights: ['Gentle, rhythmic strokes', 'Helps ease puffiness', 'Light and relaxing'],
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone',
    image: '/images/massages/hot-stone-v2.jpg',
    highlights: ['Heated basalt stones', 'Deep muscle warmth', 'Calm, slow strokes'],
  },
  {
    id: 'cellulite',
    name: 'Cellulite',
    image: '/images/massages/cellulite-v2.jpg',
    highlights: ['Targeted body kneading', 'Circulation-focused care', 'At your place'],
  },
  {
    id: 'medotherapy',
    name: 'Medotherapy',
    image: '/images/massages/medotherapy.jpg',
    highlights: ['Medical-style wellness', 'Focused body therapy', 'Professional setup'],
  },
] as const;

export default function DeepTissue() {
  return (
    <div className="pkg-page deep-page">
      <PageMobileHero
        title="Deep Tissue"
        image="/images/massages/deep-tissue-v9.jpg"
        alt="ALLORA therapist giving a deep tissue massage"
        bookMessage="Hello ALLORA, I would like to book a deep tissue treatment."
      />

      <section className="pkg-hero">
        <div className="container-page pkg-hero-grid">
          <div className="pkg-hero-copy">
            <p className="eyebrow">Deep Tissue</p>
            <h1>Deep Tissue <em>Care</em></h1>
            <p className="pkg-lede">Firm, focused body care at your home, hotel or event — including lymphatic, hot stone, cellulite and Medotherapy.</p>
            <div className="pkg-hero-actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a deep tissue treatment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now</a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
            <ul className="pkg-perks">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label}><Icon size={16} />{label}</li>
              ))}
            </ul>
          </div>
          <div className="pkg-hero-collage" aria-hidden="true">
            <Image className="pkg-collage-main" src="/images/massages/deep-tissue-v9.jpg" alt="" width={1152} height={864} priority sizes="(max-width:900px) 92vw, 520px" />
            <Image className="pkg-collage-small pkg-collage-a" src="/images/massages/hot-stone-v2.jpg" alt="" width={1152} height={864} sizes="220px" />
            <Image className="pkg-collage-small pkg-collage-b" src="/images/massages/lymphatic-v3.jpg" alt="" width={1152} height={864} sizes="220px" />
          </div>
        </div>
      </section>

      <section className="pkg-list-section">
        <div className="container-page">
          <div className="pkg-list-head">
            <p className="eyebrow">Treatments</p>
            <h2>Focused body therapies</h2>
            <p>{treatments.length} options for deeper relief and body care.</p>
          </div>
          <div className="pkg-grid">
            {treatments.map((item) => {
              const legacy = item.id === 'deep-tissue'
                ? 'deep-tissue-massage-dubai'
                : item.id === 'hot-stone'
                  ? 'hot-stone-massage-dubai'
                  : `${item.id}-dubai`;
              const href = publicPath(legacy);
              return (
              <article className="pkg-card" id={item.id} key={item.id}>
                <Link className="pkg-card-media" href={href}>
                  <Image src={item.image} alt={item.name} width={1152} height={864} sizes="(max-width:600px) 92vw, (max-width:1000px) 46vw, 380px" />
                </Link>
                <div className="pkg-card-body">
                  <h3><Link href={href}>{displayName(legacy, item.name)}</Link></h3>
                  <ul className="pkg-card-list">
                    {item.highlights.map((h) => (
                      <li key={h}><Check size={14} />{h}</li>
                    ))}
                  </ul>
                  <div className="pkg-card-foot">
                    <Link className="pkg-card-more" href={href}>View details <ArrowRight size={14} /></Link>
                    <a className="btn-primary pkg-card-book" href={site.whatsappUrl(`Hello ALLORA, I would like to book ${item.name}.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={14} />Book Now</a>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pkg-help">
        <div className="container-page pkg-help-inner">
          <div>
            <p className="eyebrow">Need advice?</p>
            <h2>Not sure which treatment is right?</h2>
            <p>Tell us how you feel and we will suggest the best option.</p>
          </div>
          <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, please help me choose a deep tissue treatment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Ask on WhatsApp <ArrowRight size={15} /></a>
        </div>
      </section>
    </div>
  );
}
