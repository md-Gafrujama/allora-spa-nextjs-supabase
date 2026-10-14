import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Mail, ShieldCheck, UserRound } from 'lucide-react';
import { HeroTherapists } from '@/components/hero-therapists';
import { Reveal } from '@/components/reveal';
import { ReviewForm } from '@/components/review-form';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';

export default function HomePage() {
  return (
    <main className="home">
      <Reveal>
      <section className="home-hero">
        <div className="home-hero-visual">
          <HeroTherapists />
        </div>
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <h1 className="display-font"><span className="home-hero-title">Luxury Spa & Wellness</span><br /><span className="home-hero-accent">At Your Place</span></h1>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="home-explore" aria-label="Explore Spa Services">
        <div className="container-page">
          <h2 className="display-font home-explore-title">Explore Spa Services</h2>
          <p className="home-explore-lede">Home, hotel, events or the workplace.</p>
          <div className="home-explore-grid">
            <Link href="/spa-packages"><span className="home-explore-photo"><Image src="/images/home/explore-spa-package.jpg" alt="Spa package with towels, oils and a rose" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Spa Package</strong><span>Treatments for you.</span><em>Explore</em></Link>
            <Link href="/your-place"><span className="home-explore-photo"><Image src="/images/home/explore-place-white.jpg" alt="Therapist giving a hand massage on a white background" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Your Place</strong><span>Home or hotel.</span><em>Explore</em></Link>
            <Link href="/event-services"><span className="home-explore-photo"><Image src="/images/home/explore-event-white.jpg" alt="Celebration hand massage with white roses on a white background" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Event Service</strong><span>For a celebration.</span><em>Explore</em></Link>
            <Link href="/corporate"><span className="home-explore-photo"><Image src="/images/home/explore-corporate-white.jpg" alt="Seated shoulder massage on a white background" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Corporate</strong><span>Wellness at work.</span><em>Explore</em></Link>
            <Link href="/deep-tissue"><span className="home-explore-photo"><Image src="/images/home/explore-deep-tissue.jpg" alt="Firm forearm massage, client covered by a white sheet" fill sizes="(max-width:800px) 50vw, 240px" /></span><strong>Deep Tissue</strong><span>Firm, focused care.</span><em>Explore</em></Link>
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
              <li><span><UserRound size={18} /></span><div><strong>Expert Therapists</strong><small>Trained female therapists.</small></div></li>
              <li><span><ShieldCheck size={18} /></span><div><strong>Hygienic Care</strong><small>Safe, clean sessions.</small></div></li>
              <li><span><Home size={18} /></span><div><strong>At Your Place</strong><small>Home, hotel and events.</small></div></li>
            </ul>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} />WhatsApp <ArrowRight size={15} /></a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
          </div>
          <div className="home-about-photos">
            <div className="home-about-main">
              <Image src="/images/home/about-care.jpg" alt="ALLORA therapist giving a hand massage" fill sizes="(max-width:800px) 100vw, 460px" />
            </div>
            <div className="home-about-pair">
              <div><Image src="/images/hero/role-2c.jpg" alt="ALLORA facial specialist" fill sizes="220px" /></div>
              <div><Image src="/images/hero/role-6c.jpg" alt="ALLORA spa therapist giving a foot massage" fill sizes="220px" /></div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className="home-explore home-luxury" aria-label="Luxury Spa Services">
        <div className="container-page">
          <h2 className="display-font home-explore-title">Luxury Spa Services</h2>
          <p className="home-explore-lede">Therapies you can book at your place.</p>
          <div className="home-treat-grid">
            <article className="home-treat">
              <div className="home-treat-photo"><Image src="/images/home/treat-thai-b.jpg" alt="Therapist lifting and stretching a client's leg" fill sizes="(max-width:800px) 100vw, 380px" /></div>
              <h3 className="display-font">Thai Massage</h3>
              <p>Gentle stretches to ease tight muscles.</p>
              <div className="actions">
                <a className="btn-outline" href={site.emailHref}><Mail size={15} />Email Us</a>
                <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a Thai massage.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} />WhatsApp</a>
              </div>
            </article>
            <article className="home-treat">
              <div className="home-treat-photo"><Image src="/images/home/treat-couple-d.jpg" alt="Two therapists massaging a woman and a man side by side" fill sizes="(max-width:800px) 100vw, 380px" /></div>
              <h3 className="display-font">Couple Massage</h3>
              <p>Side-by-side care for two.</p>
              <div className="actions">
                <a className="btn-outline" href={site.emailHref}><Mail size={15} />Email Us</a>
                <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a couple massage.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} />WhatsApp</a>
              </div>
            </article>
            <article className="home-treat">
              <div className="home-treat-photo"><Image src="/images/home/treat-stone-b.jpg" alt="Therapist pressing a hot stone onto a covered client" fill sizes="(max-width:800px) 100vw, 380px" /></div>
              <h3 className="display-font">Hot Stone</h3>
              <p>Warm stones for deep, calm relief.</p>
              <div className="actions">
                <a className="btn-outline" href={site.emailHref}><Mail size={15} />Email Us</a>
                <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a hot stone massage.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} />WhatsApp</a>
              </div>
            </article>
            <article className="home-treat">
              <div className="home-treat-photo"><Image src="/images/home/treat-jacuzzi-b.jpg" alt="Therapist massaging a client's shoulders while her feet are in a jacuzzi" fill sizes="(max-width:800px) 100vw, 380px" /></div>
              <h3 className="display-font">Jacuzzi Massage</h3>
              <p>Warm water and a calming massage.</p>
              <div className="actions">
                <a className="btn-outline" href={site.emailHref}><Mail size={15} />Email Us</a>
                <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a jacuzzi massage.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} />WhatsApp</a>
              </div>
            </article>
            <article className="home-treat">
              <div className="home-treat-photo"><Image src="/images/home/treat-deep-d.jpg" alt="Therapist pressing firmly through a sheet during deep tissue massage" fill sizes="(max-width:800px) 100vw, 380px" /></div>
              <h3 className="display-font">Deep Tissue Massage</h3>
              <p>Firm pressure for tight muscles.</p>
              <div className="actions">
                <a className="btn-outline" href={site.emailHref}><Mail size={15} />Email Us</a>
                <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a deep tissue massage.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} />WhatsApp</a>
              </div>
            </article>
            <article className="home-treat">
              <div className="home-treat-photo"><Image src="/images/home/treat-lymph-b.jpg" alt="Therapist gliding both hands along a client's arm" fill sizes="(max-width:800px) 100vw, 380px" /></div>
              <h3 className="display-font">Lymphatic Drainage</h3>
              <p>Light strokes to ease heaviness.</p>
              <div className="actions">
                <a className="btn-outline" href={site.emailHref}><Mail size={15} />Email Us</a>
                <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a lymphatic drainage massage.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={15} />WhatsApp</a>
              </div>
            </article>
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
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book now.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now <ArrowRight size={15} /></a>
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
