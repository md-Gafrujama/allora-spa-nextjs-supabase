import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Briefcase, Building2, Check, Mail, Users } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { getCatalog } from '@/lib/catalog';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Corporate Massage in Dubai',
  description: 'Chair, scalp, neck and shoulder massage at your office or workplace event in Dubai. Short sessions for teams.',
  path: '/corporate',
});
import { displayName, site } from '@/lib/site-data';

const perks = [
  { icon: Building2, label: 'Office & workplace visits' },
  { icon: Users, label: 'Team wellness days' },
  { icon: Briefcase, label: 'Events & hotels' },
];

export default async function Corporate() {
  const services = await getCatalog('corporate');
  return (
    <div className="pkg-page corporate-page">
      <section className="pkg-hero">
        <div className="container-page pkg-hero-grid">
          <div className="pkg-hero-copy">
            <p className="crumb"><Link href="/">Home</Link> › Corporate</p>
            <p className="eyebrow">Corporate Service</p>
            <h1>Corporate Massage <em>at Work</em></h1>
            <p className="pkg-lede">Short, convenient wellness sessions at the office, workplace event or hotel — for stress and muscle tension relief.</p>
            <div className="pkg-hero-actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a corporate massage service.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now</a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
            <ul className="pkg-perks">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label}><Icon size={16} />{label}</li>
              ))}
            </ul>
          </div>
          <div className="pkg-hero-collage" aria-hidden="true">
            <Image className="pkg-collage-main" src="/images/corporate/back-neck.jpg" alt="" width={1152} height={864} priority sizes="(max-width:900px) 92vw, 520px" />
            <Image className="pkg-collage-small pkg-collage-a" src="/images/corporate/chair.jpg" alt="" width={1152} height={864} sizes="220px" />
            <Image className="pkg-collage-small pkg-collage-b" src="/images/corporate/scalp.jpg" alt="" width={1152} height={864} sizes="220px" />
          </div>
        </div>
      </section>

      <section className="pkg-list-section">
        <div className="container-page">
          <div className="pkg-list-head">
            <p className="eyebrow">What We Offer</p>
            <h2>Workplace wellness sessions</h2>
            <p>{services.length} options for teams, offices and corporate events.</p>
          </div>
          <div className="pkg-grid">
            {services.map((item) => (
              <article className="pkg-card" id={item.slug} key={item.slug}>
                <Link className="pkg-card-media" href={item.url}>
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
                    <a className="btn-primary pkg-card-book" href={site.whatsappUrl(`Hello ALLORA, I would like to book corporate ${item.name}.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={14} />Book Now</a>
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
            <p className="eyebrow">Plan a wellness day</p>
            <h2>Ready to bring spa care to your office?</h2>
            <p>Share your team size, location and preferred date on WhatsApp.</p>
          </div>
          <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, please help me plan a corporate massage day.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Ask on WhatsApp <ArrowRight size={15} /></a>
        </div>
      </section>
    </div>
  );
}
