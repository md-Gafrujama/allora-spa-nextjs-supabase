'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site-data';
import { therapists } from '@/lib/therapists';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

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
                  sizes="(max-width:800px) 92vw, 600px"
                  style={{ objectPosition: slide.position }}
                />
              </div>
              <div className="hero-slide-copy">
                <b>{slide.role}</b>
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
