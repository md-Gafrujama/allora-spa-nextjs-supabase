import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Home, Hotel, Mail, MapPin, UserRound } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { getCatalog } from '@/lib/catalog';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Spa at Your Place in Dubai',
  description: 'Home spa, hotel room massage and apartment treatments across Dubai Marina, Jumeirah, Downtown and Business Bay.',
  path: '/your-place',
});
import { displayName, site } from '@/lib/site-data';

const perks = [
  { icon: UserRound, label: 'Trained female therapists' },
  { icon: Home, label: 'Home & apartment visits' },
  { icon: Hotel, label: 'Hotel room friendly' },
  { icon: MapPin, label: 'Across Dubai locations' },
];

export default async function YourPlace() {
  const placeItems = await getCatalog('place');
  return (
    <div className="pkg-page place-page">
      <section className="pkg-hero">
        <div className="container-page pkg-hero-grid">
          <div className="pkg-hero-copy">
            <p className="crumb"><Link href="/">Home</Link> › Your Place</p>
            <p className="eyebrow">At Your Doorstep</p>
            <h1>Professional Spa <em>At Your Place</em></h1>
            <p className="pkg-lede">Home, hotel, apartment and location-based spa care with trained female therapists. We bring everything to you.</p>
            <div className="pkg-hero-actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a spa at my place.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now</a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
            <ul className="pkg-perks">
              {perks.map(({ icon: Icon, label }) => (
                <li key={label}><Icon size={16} />{label}</li>
              ))}
            </ul>
          </div>
          <div className="pkg-hero-collage" aria-hidden="true">
            <Image className="pkg-collage-main" src="/images/place/home-spa-v3.jpg" alt="" width={1152} height={864} priority sizes="(max-width:900px) 92vw, 520px" />
            <Image className="pkg-collage-small pkg-collage-a" src="/images/place/hotel.jpg" alt="" width={1152} height={864} sizes="220px" />
            <Image className="pkg-collage-small pkg-collage-b" src="/images/place/facial.jpg" alt="" width={1152} height={864} sizes="220px" />
          </div>
        </div>
      </section>

      <section className="pkg-list-section">
        <div className="container-page">
          <div className="pkg-list-head">
            <p className="eyebrow">Your Place Services</p>
            <h2>Spa care wherever you are</h2>
            <p>{placeItems.length} services for home, hotel and across Dubai.</p>
          </div>
          <div className="pkg-grid">
            {placeItems.map((item) => (
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
            <p className="eyebrow">Book at your place</p>
            <h2>Ready for spa care at home or hotel?</h2>
            <p>Share your location and preferred time on WhatsApp.</p>
          </div>
          <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book spa care at my place.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Ask on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
