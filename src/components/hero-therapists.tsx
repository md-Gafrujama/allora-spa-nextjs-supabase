'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';

const INTERVAL_MS = 3000;
const SLIDE_MS = 800;

const slides = [
  { name: 'Spa Package', href: '/spa-packages', src: '/images/hero/svc-spa-package-v9.jpg', alt: 'ALLORA therapist giving a spa package massage', labelLow: true },
  { name: 'Your Place', href: '/your-place', src: '/images/hero/svc-your-place-v4.jpg', alt: 'ALLORA therapist giving a massage at your place' },
  { name: 'Event Service', href: '/event-services', src: '/images/hero/svc-event.jpg', alt: 'ALLORA therapist pampering a bride before her celebration' },
  { name: 'Corporate', href: '/corporate', src: '/images/hero/svc-corporate.jpg', alt: 'ALLORA therapist giving a seated shoulder massage at the office' },
  { name: 'Deep Tissue', href: '/deep-tissue', src: '/images/massages/deep-tissue-v2.jpg', alt: 'ALLORA therapist giving a firm deep tissue massage', labelLow: true },
];

export function HeroTherapists() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const frames = [...slides, slides[0]];

  useEffect(() => {
    if (paused) return;
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

  const goTo = (next: number) => {
    setAnimate(true);
    setIndex(next);
  };

  return (
    <div
      className="hero-reel"
      aria-roledescription="carousel"
      aria-label="Our main services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        touchX.current = null;
        setPaused(false);
        if (start == null) return;
        const delta = e.changedTouches[0].clientX - start;
        if (Math.abs(delta) < 40) return;
        const current = index % slides.length;
        if (delta < 0) goTo(current === slides.length - 1 ? slides.length : current + 1);
        else goTo(current === 0 ? slides.length - 1 : current - 1);
      }}
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
            <article className={`hero-slide${i === index ? ' is-active' : ''}${slide.labelLow ? ' hero-slide-label-low' : ''}`} key={`${slide.src}-${i}`} aria-hidden={i !== index}>
              <div className="hero-slide-media">
                <Link href={slide.href} tabIndex={-1} aria-hidden="true">
                  <Image
                    className="hero-slide-img"
                    src={slide.src}
                    alt={slide.alt}
                    width={1024}
                    height={1024}
                    priority={i <= 1}
                    sizes="(max-width:800px) 100vw, 500px"
                  />
                </Link>
                <div className="hero-slide-caption">
                  <strong><Link href={slide.href} tabIndex={i === index ? 0 : -1}>{slide.name}</Link></strong>
                  <div className="hero-slide-book-wrap">
                    <span className="hero-slide-brand">ALLORA</span>
                    <a className="btn-primary" href={site.whatsappUrl(`Hello ALLORA, I would like to book the ${slide.name} service.`)} target="_blank" rel="noreferrer" tabIndex={i === index ? 0 : -1}><WhatsAppIcon size={15} />Book Now</a>
                  </div>
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
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
