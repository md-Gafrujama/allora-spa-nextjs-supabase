import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Check, Mail, PartyPopper, Sparkles, Users } from 'lucide-react';
import { PageMobileHero } from '@/components/page-mobile-hero';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { getCatalog } from '@/lib/catalog';
import { pageMeta } from '@/lib/seo';
import { displayName, site } from '@/lib/site-data';

export const metadata = pageMeta({
  title: 'Spa Event Services in Dubai',
  description: 'Spa parties, bridal showers, hen parties and corporate wellness events with mobile therapists anywhere in Dubai.',
  path: '/event-services',
});

const perks = [
  { icon: PartyPopper, label: 'Birthdays & celebrations' },
  { icon: Users, label: 'Bridal & hen parties' },
  { icon: Building2, label: 'Corporate & office events' },
  { icon: Sparkles, label: 'Private group setups' },
];

export default async function EventServices() {
  const eventItems = await getCatalog('event');
  return (
    <div className="pkg-page event-page">
      <PageMobileHero
        title="Event Service"
        image="/images/hero/svc-event.jpg"
        alt="ALLORA event spa service"
        bookMessage="Hello ALLORA, I would like to book spa care for an event."
      />
      <section className="pkg-hero">
        <div className="container-page pkg-hero-grid">
          <div className="pkg-hero-copy">
            <p className="eyebrow">Events · Groups · Corporate</p>
            <h1>Make Your Event <em>More Memorable</em></h1>
            <p className="pkg-lede">Mobile spa and wellness for birthdays, bridal events, corporate activations and private celebrations across Dubai.</p>
            <div className="pkg-hero-actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book spa care for an event.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now</a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
            <ul className="pkg-perks">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label}><Icon size={16} />{label}</li>
              ))}
            </ul>
          </div>
          <div className="pkg-hero-collage" aria-hidden="true">
            <Image className="pkg-collage-main" src="/images/hero/svc-event.jpg" alt="" width={1024} height={1024} priority sizes="(max-width:900px) 92vw, 520px" />
            <Image className="pkg-collage-small pkg-collage-a" src="/images/events/birthday-v3.jpg" alt="" width={1152} height={864} sizes="220px" />
            <Image className="pkg-collage-small pkg-collage-b" src="/images/events/bridal-shower-v2.jpg" alt="" width={1152} height={864} sizes="220px" />
          </div>
        </div>
      </section>

      <section className="pkg-list-section">
        <div className="container-page">
          <div className="pkg-list-head">
            <p className="eyebrow">Event Services</p>
            <h2>Spa care for every celebration</h2>
            <p>{eventItems.length} event options for groups, venues and workplaces.</p>
          </div>
          <div className="pkg-grid">
            {eventItems.map((item) => (
              <article className="pkg-card" key={item.slug}>
                <Link className="pkg-card-media" href={item.url} tabIndex={-1} aria-hidden="true">
                  <Image src={item.image} alt={item.name} width={1152} height={864} sizes="(max-width:600px) 92vw, (max-width:1000px) 46vw, 380px" />
                </Link>
                <div className="pkg-card-body">
                  <h3><Link href={item.url}>{displayName(item.slug, item.name)}</Link></h3>
                  <ul className="pkg-card-list">
                    {item.highlights.map((h) => (
                      <li key={h}><Check size={14} />{h}</li>
                    ))}
                  </ul>
                  <div className="pkg-card-foot">
                    <Link className="pkg-card-more" href={item.url}>View details <ArrowRight size={14} /></Link>
                    <a className="btn-primary pkg-card-book" href={site.whatsappUrl(`Hello ALLORA, I would like to book ${item.name}.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={14} />Book Now</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pkg-help">
        <div className="container-page pkg-help-inner">
          <div>
            <p className="eyebrow">Plan your event</p>
            <h2>Need a custom spa event quote?</h2>
            <p>Tell us the date, guest count and venue — we will suggest the best setup.</p>
          </div>
          <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, please help me plan a spa event.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Ask on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
