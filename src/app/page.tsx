import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Mail, ShieldCheck, UserRound } from 'lucide-react';
import { CountUp } from '@/components/count-up';
import { HeroParallax } from '@/components/hero-parallax';
import { HeroTherapists } from '@/components/hero-therapists';
import { Reveal } from '@/components/reveal';
import { ReviewForm } from '@/components/review-form';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { getCatalog } from '@/lib/catalog';
import { massageHref } from '@/lib/massage-data';
import { publicPath } from '@/lib/public-slugs';
import { pageMeta } from '@/lib/seo';
import { displayName, site } from '@/lib/site-data';

export const metadata = pageMeta({
  title: 'Luxury Spa and Wellness at Your Place in Dubai',
  description: 'ALLORA brings trained female therapists to your home, hotel or event in Dubai. Book spa packages, massage, facials and corporate wellness.',
  path: '/',
});

const mainServices = [
  ['Spa Package', '/spa-packages'],
  ['Your Place', '/your-place'],
  ['Event Service', '/event-services'],
  ['Corporate', '/corporate'],
  ['Deep Tissue', '/deep-tissue'],
] as const;

export default async function HomePage() {
  const massages = await getCatalog('massage');
  return (
    <main className="home">
      <Reveal>
      <section className="home-hero">
        <HeroParallax />
        <span className="home-hero-mark" aria-hidden="true">ALLORA</span>
        <span className="home-hero-side" aria-hidden="true">Relax · Rejuvenate · Revive</span>
        <div className="home-hero-visual">
          <span className="home-hero-dots" aria-hidden="true" />
          <HeroTherapists />        </div>
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="home-hero-tag"><span aria-hidden="true" />Dubai · Home &amp; Hotel Spa</p>
            <h1 className="display-font"><span className="home-hero-title">Luxury Spa & Wellness</span><br /><span className="home-hero-accent">At Your Place</span></h1>
            <p className="home-hero-lede">Trained female therapists who bring the spa to you.</p>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <nav className="home-marquee" aria-label="Our services">
        <div className="home-marquee-track">
          {[0, 1, 2, 3].map((copy) => (
            <ul key={copy} aria-hidden={copy > 0 || undefined}>
              {mainServices.map(([name, href]) => (
                <li key={href}><Link href={href} tabIndex={copy > 0 ? -1 : undefined}>{name}</Link></li>
              ))}
            </ul>
          ))}
        </div>
      </nav>

      <Reveal>
      <section className="home-explore" id="services" aria-label="Explore Spa Services">
        <div className="container-page">
          <p className="eyebrow">Our Services</p>
          <h2 className="display-font home-explore-title">Explore Spa Services</h2>
          <p className="home-explore-lede">Home, hotel, events or the workplace.</p>
          <div className="home-explore-grid">
            <Link href="/spa-packages"><span className="home-explore-photo"><Image src="/images/hero/svc-spa-package.jpg" alt="ALLORA therapist for spa package" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Spa Package</strong><span>Treatments for you.</span><em>Explore</em></Link>
            <Link href="/your-place"><span className="home-explore-photo"><Image src="/images/hero/svc-your-place.jpg" alt="ALLORA therapist massage at your place" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Your Place</strong><span>Home or hotel.</span><em>Explore</em></Link>
            <Link href="/event-services"><span className="home-explore-photo"><Image src="/images/hero/svc-event.jpg" alt="ALLORA therapist for event service" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Event Service</strong><span>For a celebration.</span><em>Explore</em></Link>
            <Link href="/corporate"><span className="home-explore-photo"><Image src="/images/hero/svc-corporate.jpg" alt="ALLORA therapist corporate massage" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Corporate</strong><span>Wellness at work.</span><em>Explore</em></Link>
            <Link href="/deep-tissue"><span className="home-explore-photo"><Image src="/images/hero/svc-deep-tissue.jpg" alt="ALLORA therapist deep tissue massage" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Deep Tissue</strong><span>Firm, focused care.</span><em>Explore</em></Link>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="section home-about">
        <div className="container-page home-about-grid">
          <div className="home-about-copy">
            <p className="home-about-kicker">About ALLORA</p>
            <h2 className="display-font">Your Wellness, Our Passion</h2>
            <p>Beauty and relaxation, brought to your home, hotel or event.</p>
            <ul className="home-about-points">
              <li><span><UserRound size={18} /></span><div><strong><Link href="/about" className="stretch-link">Expert Therapists</Link></strong><small>Trained female therapists.</small></div></li>
              <li><span><ShieldCheck size={18} /></span><div><strong><Link href="/about" className="stretch-link">Hygienic Care</Link></strong><small>Safe, clean sessions.</small></div></li>
              <li><span><Home size={18} /></span><div><strong><Link href="/your-place" className="stretch-link">At Your Place</Link></strong><small>Home, hotel and events.</small></div></li>
            </ul>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} />WhatsApp <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
          </div>
          <div className="home-about-photos">
            <div className="home-about-main">
              <Image src="/images/home/about-care.jpg" alt="ALLORA therapist giving a hand massage" fill sizes="(max-width:800px) 100vw, 460px" />
              <Link href="/about" className="stretch-link" aria-label="About ALLORA" />
            </div>
            <div className="home-about-pair">
              <div><Image src="/images/hero/role-2c.jpg" alt="ALLORA facial specialist" fill sizes="220px" /><Link href="/spa-packages" className="stretch-link" aria-label="Spa packages" /></div>
              <div><Image src="/images/hero/role-6c.jpg" alt="ALLORA spa therapist giving a foot massage" fill sizes="220px" /><Link href="/your-place" className="stretch-link" aria-label="Spa at your place" /></div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="home-explore home-luxury" aria-label="Luxury Spa Services">
        <div className="container-page">
          <p className="eyebrow">Signature Therapies</p>
          <h2 className="display-font home-explore-title">Luxury Spa Services</h2>
          <p className="home-explore-lede">Therapies you can book at your place.</p>
          <div className="home-treat-grid">
            {massages.map((m) => (
              <article className="home-treat" key={m.slug}>
                <Link href={massageHref(m.slug)} className="home-treat-photo" tabIndex={-1} aria-hidden="true"><Image src={m.image} alt={m.alt} fill sizes="(max-width:800px) 100vw, 380px" /></Link>
                <h3 className="display-font"><Link href={massageHref(m.slug)} className="stretch-link">{displayName(m.slug, m.name)}</Link></h3>
                <p>{m.short}</p>
                <div className="actions">
                  <a className="btn-outline" href={site.emailHref}><Mail size={15} />Email Us</a>
                  <a className="btn-primary" href={site.whatsappUrl(`Hello ALLORA, I would like to book a ${m.name}.`)} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} />WhatsApp</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.05}>
      <section className="stats">
        <div className="container-page stats-grid">
          <Link className="stat" href="/about"><CountUp to={500} suffix="+" /><span>Happy Clients</span></Link>
          <Link className="stat" href="/spa-packages"><CountUp to={50} suffix="+" /><span>Spa Packages</span></Link>
          <Link className="stat" href="/event-services"><CountUp to={10} suffix="+" /><span>Event Partnerships</span></Link>
          <Link className="stat" href="/about"><CountUp to={100} suffix="%" /><span>Client Satisfaction</span></Link>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="home-moments" aria-label="Occasions">
        <div className="container-page">
          <p className="eyebrow">Occasions</p>
          <h2>For the moments that matter</h2>
          <p className="home-moments-lede">Home, hotel or a celebration.</p>
          <div className="home-moments-grid">
            <Link className="home-moment" href={publicPath('home-spa-dubai')}>
              <strong>An evening at home</strong>
              <span>Care at home.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href={publicPath('hotel-room-spa-service-dubai')}>
              <strong>A hotel stay</strong>
              <span>Care at your hotel.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href={publicPath('bridal-shower-spa-dubai')}>
              <strong>Bridal and celebrations</strong>
              <span>Before the big day.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href={publicPath('private-spa-events-dubai')}>
              <strong>A private gathering</strong>
              <span>For friends and family.</span>
              <em>Explore</em>
            </Link>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="home-reviews" aria-label="Reviews">
        <div className="container-page">
          <p className="eyebrow">Reviews</p>
          <h2>What our clients say</h2>
          <ReviewForm />
        </div>
      </section>
      </Reveal>
    </main>
  );
}
