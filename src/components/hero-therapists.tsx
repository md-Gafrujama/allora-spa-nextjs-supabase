'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site-data';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

const slides = [
  { src: '/images/team/therapist-1.jpg', role: 'Massage Expert', text: 'For relaxation and deep-tissue massage. Eases stress, tight muscles and everyday tiredness.' },
  { src: '/images/team/therapist-2.jpg', role: 'Facial Specialist', text: 'For facial and skin care. Cleanses, brightens and leaves the skin calm and fresh.' },
  { src: '/images/team/therapist-3.jpg', role: 'Wellness Expert', text: 'For a full wellness session. A balanced treatment that restores calm from head to toe.' },
  { src: '/images/team/therapist-4.jpg', role: 'Beauty Specialist', text: 'For beauty and glow care. A polished treatment before a celebration or a quiet day in.' },
  { src: '/images/team/therapist-5.jpg', role: 'Body Care Expert', text: 'For body scrub and body care. Smooths and refreshes the skin with a gentle ritual.' },
  { src: '/images/team/therapist-6.jpg', role: 'Spa Therapist', text: 'For signature spa packages. Moroccan bath, spa day and complete relaxation rituals.' },
  { src: '/images/team/therapist-7.jpg', role: 'Aromatherapy Expert', text: 'For aromatherapy massage. Calming oils chosen for rest, comfort and a quiet mind.' },
];

export function HeroTherapists() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const frames = [...slides, slides[0]];

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (index !== slides.length) return;
    const id = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 800);
    return () => window.clearTimeout(id);
  }, [index]);

  return (
    <div className="hero-reel" aria-roledescription="carousel" aria-label="Therapists and their services">
      <div className="hero-reel-window">
        <div
          className="hero-reel-track"
          style={{
            transform: `translate3d(${-index * 100}%, 0, 0)`,
            transition: animate ? 'transform .8s ease' : 'none',
          }}
        >
          {frames.map((slide, i) => (
            <article className="hero-slide" key={`${slide.src}-${i}`} aria-hidden={i !== index}>
              <Image src={slide.src} alt="" width={864} height={1152} priority={i === 0} sizes="(max-width:800px) 78vw, 280px" />
              <div className="hero-slide-copy">
                <b>{slide.role}</b>
                <p>{slide.text}</p>
                <a
                  className="hero-slide-book"
                  href={site.whatsappUrl(`Hello ALLORA, I would like to book with the ${slide.role}.`)}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={i === index ? 0 : -1}
                >
                  <WhatsAppIcon size={14} /> Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
