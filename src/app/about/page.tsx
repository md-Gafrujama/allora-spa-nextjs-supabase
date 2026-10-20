import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { ReviewForm } from '@/components/review-form';
import { TherapistTeam } from '@/components/therapist-team';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site-data';

export const metadata = pageMeta({
  title: 'About ALLORA Spa and Wellness',
  description: 'ALLORA is a Dubai home and hotel spa with trained female therapists for massage, beauty and wellness at your place.',
  path: '/about',
});

const values = [
  ['Mission', 'Premium spa care with safety and personal attention.'],
  ['Vision', 'Dubai’s trusted wellness brand, anywhere you are.'],
  ['Values', 'Care, hygiene, professionalism and continuous improvement.'],
  ['Commitment', 'High standards, premium products and client satisfaction.'],
] as const;

const why = [
  'Trained & certified therapists',
  'Premium & safe products',
  'Home, hotel & event services',
  'Hygienic, comfortable setup',
  'Personalized spa experiences',
];

export default function About() {
  return (
    <div className="about-page about-compact">
      <section className="pkg-hero about-hero-block">
        <div className="container-page pkg-hero-grid">
          <div className="pkg-hero-copy">
            <p className="crumb"><Link href="/">Home</Link> › About Us</p>
            <p className="eyebrow">About ALLORA</p>
            <h1>Your Wellness <em>Our Passion</em></h1>
            <p className="pkg-lede">Relaxation, beauty and wellness at your doorstep — with trained female therapists and personalized care.</p>
            <div className="pkg-hero-actions">
              <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book a spa service.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now</a>
              <a className="btn-outline" href={site.emailHref}><Mail size={16} />Email Us</a>
            </div>
          </div>
          <div className="pkg-hero-collage about-hero-collage" aria-hidden="true">
            <Image className="pkg-collage-main" src="/images/about/team-group.jpg" alt="" width={1280} height={720} priority sizes="(max-width:900px) 92vw, 560px" />
          </div>
        </div>
      </section>

      <section className="about-story-block">
        <div className="container-page about-split">
          <div className="about-split-photo">
            <Image src="/images/about/about-story.jpg" alt="ALLORA therapist arriving with spa care at your place" width={1152} height={864} sizes="(max-width:800px) 100vw, 480px" />
          </div>
          <div className="about-split-copy">
            <p className="eyebrow">Our Story</p>
            <h2>Better living, brought to you</h2>
            <p>ALLORA began with a simple idea: make premium spa care convenient across Dubai. A small passionate team grew into a trusted wellness experience built on professionalism and care.</p>
            <p className="about-quote">Relax, rejuvenate and feel your best — anytime, anywhere.</p>
          </div>
        </div>
      </section>

      <section className="about-values-block">
        <div className="container-page">
          <div className="about-values-grid">
            {values.map(([t, d]) => (
              <article className="about-value" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <div className="about-stats-row">
            <div><strong>500+</strong><span>Happy Clients</span></div>
            <div><strong>50+</strong><span>Spa Packages</span></div>
            <div><strong>10+</strong><span>Event Partners</span></div>
            <div><strong>100%</strong><span>Satisfaction</span></div>
          </div>
        </div>
      </section>

      <TherapistTeam intro="Trained female therapists — professional, friendly and focused on your wellbeing." />

      <section className="about-why-block">
        <div className="container-page about-split about-split-reverse">
          <div className="about-split-copy">
            <p className="eyebrow">Why ALLORA</p>
            <h2>Why choose us</h2>
            <p>Expertise, premium products and care at your place.</p>
            <ul className="check-list">
              {why.map((x) => (
                <li key={x}><Check size={15} />{x}</li>
              ))}
            </ul>
            <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, I would like to book now.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} />Book Now <ArrowRight size={15} /></a>
          </div>
          <div className="about-split-photo">
            <Image src="/images/about/about-why.jpg" alt="ALLORA therapist preparing a clean spa setup" width={1152} height={864} sizes="(max-width:800px) 100vw, 480px" />
          </div>
        </div>
      </section>

      <section className="home-reviews about-reviews" aria-label="Reviews">
        <div className="container-page">
          <p className="eyebrow">Reviews</p>
          <h2>What our clients say</h2>
          <ReviewForm />
        </div>
      </section>
    </div>
  );
}
