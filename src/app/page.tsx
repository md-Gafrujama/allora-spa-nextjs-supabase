import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Check, Hand, Home, Mail, PartyPopper, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { HeroTherapists } from '@/components/hero-therapists';
import { Reveal } from '@/components/reveal';
import { ReviewForm } from '@/components/review-form';
import { TherapistTeam } from '@/components/therapist-team';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';

export default function HomePage() {
  return (
    <main className="home">
      <Reveal>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="eyebrow home-hero-kicker">Relax · Rejuvenate · Revive</p>
            <h1 className="display-font"><span className="home-hero-title">Luxury Spa & Wellness</span><br /><span>At Your Place</span></h1>
            <p>Spa care at your home, hotel or event.</p>
            <ul className="home-hero-points">
              <li><UserRound size={17} />Female therapists</li>
              <li><Home size={17} />Home, hotel & events</li>
              <li><ShieldCheck size={17} />Premium, hygienic care</li>
            </ul>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
              <Link className="btn-outline" href="/spa-packages">View Packages</Link>
            </div>
          </div>
          <div className="home-hero-visual">
            <HeroTherapists />
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="home-explore" aria-label="Explore">
        <div className="container-page home-explore-grid">
          <Link href="/spa-packages"><Sparkles size={22} /><strong>Spa Package</strong><span>Treatments for you.</span><em>Explore</em></Link>
          <Link href="/your-place"><Home size={22} /><strong>Your Place</strong><span>Home or hotel.</span><em>Explore</em></Link>
          <Link href="/event-services"><PartyPopper size={22} /><strong>Event Service</strong><span>For a celebration.</span><em>Explore</em></Link>
          <Link href="/corporate"><Building2 size={22} /><strong>Corporate</strong><span>Wellness at work.</span><em>Explore</em></Link>
          <Link href="/deep-tissue"><Hand size={22} /><strong>Deep Tissue</strong><span>Firm, focused care.</span><em>Explore</em></Link>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="section">
        <div className="container-page split">
          <div>
            <p className="eyebrow">About ALLORA</p>
            <h2>Your Wellness, Our Passion</h2>
            <p className="copy">Beauty and relaxation, brought to you.</p>
            <ul className="check-list">{['Trained therapists', 'Premium products', 'Home, hotel & events', 'Safe, hygienic care'].map((x) => <li key={x}><Check size={15} className="text-[#051650]" />{x}</li>)}</ul>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} />Book via WhatsApp <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
          </div>
          <div className="portrait-frame">
            <Image src="/images/home/about-care.jpg" alt="ALLORA therapist giving a hand massage, the full scene visible" fill sizes="(max-width:800px) 100vw, 540px" className="object-contain" />
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal delay={0.05}>
      <section className="stats">
        <div className="container-page stats-grid">
          <div className="stat"><strong>500+</strong><span>Happy Clients</span></div>
          <div className="stat"><strong>50+</strong><span>Spa Packages</span></div>
          <div className="stat"><strong>10+</strong><span>Event Partnerships</span></div>
          <div className="stat"><strong>100%</strong><span>Client Satisfaction</span></div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <TherapistTeam intro="Trained female therapists for your session." />
      </Reveal>

      <Reveal>
      <section className="home-feature">
        <div className="container-page home-feature-grid">
          <div className="feature-band-copy">
            <p className="eyebrow">Your Place</p>
            <h2 className="display-font">Spa Services At Your Place</h2>
            <p>Spa care at your home or hotel.</p>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a service at my place.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book at Your Place <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
          </div>
          <div className="home-feature-photo is-square"><Image src="/images/home/at-home.jpg" alt="ALLORA therapist giving a head massage in a bright white spa room" fill sizes="340px" className="object-contain" /></div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="home-feature home-feature-plain">
        <div className="container-page home-feature-grid">
          <div className="home-feature-photo is-square"><Image src="/images/home/ready-rose.jpg" alt="ALLORA therapist in a rose red uniform placing fresh towels on a spa bed" fill sizes="340px" className="object-contain" /></div>
          <div className="feature-band-copy">
            <p className="eyebrow">Book Today</p>
            <h2 className="display-font">Ready to Relax?</h2>
            <p>Book on WhatsApp or email.</p>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book now.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now on WhatsApp <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
          </div>
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
            <Link className="home-moment" href="/your-place/home-spa-dubai/">
              <b>01</b>
              <strong>An evening at home</strong>
              <span>Care at home.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href="/your-place/hotel-room-spa-service-dubai/">
              <b>02</b>
              <strong>A hotel stay</strong>
              <span>Care in your room.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href="/event-services/bridal-shower-spa-dubai/">
              <b>03</b>
              <strong>Bridal and celebrations</strong>
              <span>Before the big day.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href="/event-services/private-spa-events-dubai/">
              <b>04</b>
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
