'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';
import { therapists } from '@/lib/therapists';

const INTERVAL_MS = 3000;
const SLIDE_MS = 800;

const slides = therapists;

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
      aria-label="Therapists and their services"
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
                <Image
                  className="hero-slide-img"
                  src={slide.src}
                  alt={`ALLORA ${slide.role} with a client`}
                  width={slide.width}
                  height={slide.height}
                  priority={i === 0}
                  sizes="100vw"
                  style={{ objectPosition: slide.position }}
                />
                <div className="hero-slide-caption">
                  <strong>{slide.service}</strong>
                  <a className="btn-primary" href={site.whatsappUrl(`Hello ALLORA, I would like to book a ${slide.service}.`)} target="_blank" rel="noreferrer" tabIndex={i === index ? 0 : -1}><WhatsAppIcon size={15} />Book Now</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="hero-reel-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={i === index % slides.length ? 'is-active' : ''}
            aria-label={`Show ${slide.role}`}
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
