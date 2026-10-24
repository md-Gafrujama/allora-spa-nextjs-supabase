'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';

const INTERVAL_MS = 3000;
const SLIDE_MS = 800;

const slides = [
  { name: 'Spa Package', href: '/spa-packages', src: '/images/hero/svc-spa-package-v3.jpg', alt: 'ALLORA therapist massaging a shoulder' },
  { name: 'Your Place', href: '/your-place', src: '/images/hero/svc-your-place-v2.jpg', alt: 'ALLORA therapist massaging a calf' },
  { name: 'Event Service', href: '/event-services', src: '/images/hero/svc-event.jpg', alt: 'ALLORA therapist pampering a bride before her celebration' },
  { name: 'Corporate', href: '/corporate', src: '/images/hero/svc-corporate.jpg', alt: 'ALLORA therapist giving a seated shoulder massage at the office' },
  { name: 'Deep Tissue', href: '/deep-tissue', src: '/images/massages/deep-tissue-v2.jpg', alt: 'ALLORA therapist giving a firm deep tissue massage' },
];

export function HeroTherapists() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const frames = [...slides, slides[0]];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (index !== slides.length) return;
    const id = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index]);

  return (
    <div
      className="hero-reel"
      aria-roledescription="carousel"
      aria-label="Our main services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-reel-window">
        <div
          className="hero-reel-track"
          style={{
            transform: `translate3d(${-index * 100}%, 0, 0)`,
            transition: animate ? `transform ${SLIDE_MS}ms cubic-bezier(.65,0,.35,1)` : 'none',
          }}
        >
          {frames.map((slide, i) => (
            <article className={`hero-slide${i === index ? ' is-active' : ''}`} key={`${slide.src}-${i}`} aria-hidden={i !== index}>
              <div className="hero-slide-media">
                <Link href={slide.href} tabIndex={-1} aria-hidden="true">
                  <Image
                    className="hero-slide-img"
                    src={slide.src}
                    alt={slide.alt}
                    width={1024}
                    height={1024}
                    priority={i === 0}
                    sizes="(max-width:800px) 92vw, 500px"
                  />
                </Link>
                <div className="hero-slide-caption">
                  <strong><Link href={slide.href} tabIndex={i === index ? 0 : -1}>{slide.name}</Link></strong>
                  <a className="btn-primary" href={site.whatsappUrl(`Hello ALLORA, I would like to book the ${slide.name} service.`)} target="_blank" rel="noreferrer" tabIndex={i === index ? 0 : -1}><WhatsAppIcon size={15} />Book Now</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="hero-reel-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.href}
            type="button"
            className={i === index % slides.length ? 'is-active' : ''}
            aria-label={`Show ${slide.name}`}
            onClick={() => {
              setAnimate(true);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
