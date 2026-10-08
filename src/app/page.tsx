import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, Check, Home, PartyPopper, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { HeroTherapists } from '@/components/hero-therapists';
import { ReviewForm } from '@/components/review-form';
import { TherapistTeam } from '@/components/therapist-team';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { getPackages } from '@/lib/queries';
import { site } from '@/lib/site-data';
import { spaItems } from '@/lib/service-data';

const packageImages: Record<string, string> = {
  'luxury-spa-package-dubai': '/images/hero/massage.jpg',
  'couples-spa-package-dubai': '/images/home/couples.jpg',
  'spa-day-package-dubai': '/images/hero/scrub.jpg',
  'massage-package-dubai': '/images/hero/massage.jpg',
  'moroccan-bath-package-dubai': '/images/hero/scrub.jpg',
  'bridal-spa-package-dubai': '/images/hero/glow.jpg',
  'ladies-spa-package-dubai': '/images/hero/facial.jpg',
};

export default async function HomePage() {
  const packages = await getPackages();
  const shown = packages.length ? packages : spaItems.slice(0, 3);
  return (
    <main className="home">
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="eyebrow home-hero-kicker">Relax · Rejuvenate · Revive</p>
            <h1 className="display-font"><span className="home-hero-title">Luxury Spa & Wellness</span><br /><span>At Your Place</span></h1>
            <p>Premium spa, beauty and wellness services by our professional female therapists. Enjoy personalized care, relaxation and luxury – at your home, hotel or for your special events in Dubai.</p>
            <ul className="home-hero-points">
              <li><UserRound size={17} />Female therapists</li>
              <li><Home size={17} />Home, hotel & events</li>
              <li><ShieldCheck size={17} />Premium, hygienic care</li>
            </ul>
            <div className="actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now <ArrowRight size={15} /></a>
              <a className="btn-outline" href="#packages">View Packages</a>
            </div>
          </div>
          <div className="home-hero-visual">
            <HeroTherapists />
          </div>
        </div>
      </section>

      <section className="home-types" aria-label="Service types">
        <div className="container-page home-types-row">
          <Link href="/spa-packages"><Sparkles size={22} />Spa Package</Link>
          <Link href="/your-place"><Home size={22} />Your Place</Link>
          <Link href="/event-services"><PartyPopper size={22} />Event Service</Link>
          <Link href="/corporate"><Building2 size={22} />Corporate</Link>
        </div>
      </section>

      <section className="section">
        <div className="container-page split">
          <div>
            <p className="eyebrow">About ALLORA</p>
            <h2>Your Wellness, Our Passion</h2>
            <p className="copy">At ALLORA, we believe in bringing relaxation, beauty and wellness to your doorstep. Our professional female therapists provide personalized care, premium treatments and an unforgettable spa experience – anytime, anywhere in Dubai.</p>
            <ul className="check-list">{['Trained & Experienced Female Therapists', 'High-Quality & Premium Products', 'Home, Hotel & Event Services', 'Safe, Hygienic & Professional Care'].map((x) => <li key={x}><Check size={15} className="text-[#051650]" />{x}</li>)}</ul>
            <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={17} />Book via WhatsApp <ArrowRight size={15} /></a>
          </div>
          <div className="portrait-frame">
            <Image src="/images/hero/aromatherapy.jpg" alt="ALLORA therapist giving an aromatherapy massage with premium oils" fill sizes="(max-width:800px) 100vw, 560px" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container-page stats-grid">
          <div className="stat"><strong>500+</strong><span>Happy Clients</span></div>
          <div className="stat"><strong>50+</strong><span>Spa Packages</span></div>
          <div className="stat"><strong>10+</strong><span>Event Partnerships</span></div>
          <div className="stat"><strong>100%</strong><span>Client Satisfaction</span></div>
        </div>
      </section>

      <TherapistTeam />

      <section className="home-steps">
        <div className="container-page">
          <p className="eyebrow">How it works</p>
          <h2>Book in three simple steps</h2>
          <div className="home-steps-grid">
            <div className="home-step"><b>01</b><strong>Choose a service</strong><p>Pick a spa package, a visit at your place, or care for your event.</p></div>
            <div className="home-step"><b>02</b><strong>Message on WhatsApp</strong><p>Tell us the time, place and package. We confirm the details with you.</p></div>
            <div className="home-step"><b>03</b><strong>Relax at your place</strong><p>Our therapists arrive with premium products, ready for your session.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="container-page">
          <div className="service-list-head">
            <div>
              <p className="eyebrow">Spa Packages</p>
              <h2>Our Popular Spa Packages</h2>
            </div>
            <Link className="quick-link" href="/spa-packages">View All Packages <ArrowRight size={14} /></Link>
          </div>
          <div className="cards-3">
            {shown.slice(0, 3).map((p: { slug: string; name: string; short_description: string; image_url?: string; price?: number }, i: number) => (
              <article className="service-card" key={p.slug}>
                <Image src={packageImages[p.slug] || ['/images/hero/massage.jpg', '/images/home/couples.jpg', '/images/hero/scrub.jpg'][i]} alt={p.name} width={600} height={400} />
                <div className="service-card-body">
                  <h3>{p.name}</h3>
                  <p>{p.short_description}</p>
                  <div className="price-row">
                    <span className="price">....</span>
                    <Link className="arrow-circle" href={`/spa-packages/${p.slug}`} aria-label={`View ${p.name}`}>→</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-feature">
        <div className="container-page home-feature-grid">
          <div className="feature-band-copy">
            <p className="eyebrow">Your Place</p>
            <h2 className="display-font">Spa Services At Your Place</h2>
            <p>Enjoy professional spa and beauty services at your home, hotel or private location in Dubai.</p>
            <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a service at my place.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book at Your Place <ArrowRight size={15} /></a>
          </div>
          <div className="home-feature-photo"><Image src="/images/home/at-home.jpg" alt="ALLORA therapist giving a facial treatment in a bright Dubai apartment" fill sizes="(max-width:800px) 100vw, 560px" className="object-cover" /></div>
        </div>
      </section>

      <section className="home-feature home-feature-plain">
        <div className="container-page home-feature-grid">
          <div className="home-feature-photo"><Image src="/images/home/ready.jpg" alt="ALLORA therapist welcoming a guest with fresh towels beside a prepared spa bed" fill sizes="(max-width:800px) 100vw, 560px" className="object-cover" /></div>
          <div className="feature-band-copy">
            <p className="eyebrow">Book Today</p>
            <h2 className="display-font">Ready to Relax?</h2>
            <p>Book your spa appointment now via WhatsApp. Our team confirms the time, place and package with you.</p>
            <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book now.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now on WhatsApp <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="home-moments" aria-label="Occasions">
        <div className="container-page">
          <p className="eyebrow">Occasions</p>
          <h2>For the moments that matter</h2>
          <p className="home-moments-lede">A private setup, wherever the day takes you – home, hotel or a celebration in Dubai.</p>
          <div className="home-moments-grid">
            <Link className="home-moment" href="/your-place/home-spa-dubai/">
              <b>01</b>
              <strong>An evening at home</strong>
              <span>Quiet treatments in your own space, with everything brought to you.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href="/your-place/hotel-room-spa-service-dubai/">
              <b>02</b>
              <strong>A hotel stay</strong>
              <span>The same care in your room, timed around your plans.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href="/event-services/bridal-shower-spa-dubai/">
              <b>03</b>
              <strong>Bridal and celebrations</strong>
              <span>Calm, polished sessions before the day itself.</span>
              <em>Explore</em>
            </Link>
            <Link className="home-moment" href="/event-services/private-spa-events-dubai/">
              <b>04</b>
              <strong>A private gathering</strong>
              <span>Shared wellness for friends, family or a small group.</span>
              <em>Explore</em>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-reviews" aria-label="Reviews">
        <div className="container-page">
          <p className="eyebrow">Reviews</p>
          <h2>What our clients say</h2>
          <ReviewForm />
        </div>
      </section>
    </main>
  );
}
