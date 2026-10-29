import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Mail, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { PageMobileHero } from '@/components/page-mobile-hero';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { getCatalog } from '@/lib/catalog';
import { pageMeta } from '@/lib/seo';
import { displayName, site } from '@/lib/site-data';

export const metadata = pageMeta({
  title: 'Luxury Spa Packages in Dubai',
  description: 'Luxury, couples, bridal, birthday and Moroccan bath spa packages delivered to your home or hotel in Dubai by ALLORA therapists.',
  path: '/spa-packages',
});

const perks = [
  { icon: UserRound, label: 'Trained female therapists' },
  { icon: ShieldCheck, label: 'Hygienic, premium products' },
  { icon: Sparkles, label: 'Home, hotel or venue' },
];

export default async function SpaPackages() {
  const spaItems = await getCatalog('spa');
  return (
    <div className="pkg-page spa-page">
      <PageMobileHero
        title="Spa Package"
        image="/images/hero/svc-spa-package-v9.jpg"
        alt="ALLORA therapist for spa package"
        bookMessage="Hello ALLORA, I would like to book a spa package."
        labelLow
      />
      <section className="pkg-hero">
        <div className="container-page pkg-hero-grid">
          <div className="pkg-hero-copy">
            <p className="eyebrow">Relax · Rejuvenate · Revive</p>
            <h1>Luxury Spa Packages <em>in Dubai</em></h1>
            <p className="pkg-lede">Choose a relaxing spa experience for yourself, your partner, your celebration or a special gift. We bring everything to your place.</p>
            <div className="pkg-hero-actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a spa package.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now</a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
            <ul className="pkg-perks">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label}><Icon size={16} />{label}</li>
              ))}
            </ul>
          </div>
          <div className="pkg-hero-collage" aria-hidden="true">
            <Image className="pkg-collage-main" src="/images/packages/luxury-v3.jpg" alt="" width={1152} height={864} priority sizes="(max-width:900px) 92vw, 520px" />
            <Image className="pkg-collage-small pkg-collage-a" src="/images/packages/couples-v3.jpg" alt="" width={1152} height={864} sizes="220px" />
            <Image className="pkg-collage-small pkg-collage-b" src="/images/packages/bridal-v2.jpg" alt="" width={1152} height={864} sizes="220px" />
          </div>
        </div>
      </section>

      <section className="pkg-list-section">
        <div className="container-page">
          <div className="pkg-list-head">
            <p className="eyebrow">Our Packages</p>
            <h2>Pick your perfect spa moment</h2>
            <p>{spaItems.length} packages, each delivered by our own therapists.</p>
          </div>
          <div className="pkg-grid">
            {spaItems.map((item) => (
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
                    <a className="btn-primary pkg-card-book" href={site.whatsappUrl(`Hello ALLORA, I would like to book the ${item.name}.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={14} />Book Now</a>
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
            <p className="eyebrow">Need help choosing?</p>
            <h2>Not sure which package is right for you?</h2>
            <p>Tell us the occasion and we will suggest the best package for you.</p>
          </div>
          <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, please help me choose a spa package.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Ask on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
