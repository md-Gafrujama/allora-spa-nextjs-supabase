import Image from 'next/image';
import type React from 'react';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';

type Props = {
  title: string;
  image: string;
  alt: string;
  bookMessage: string;
  /** Text flyer image: shown full width at its own shape, with no card frame. */
  poster?: { width: number; height: number };
};

export function PageMobileHero({ title, image, alt, bookMessage, poster }: Props) {
  return (
    <section
      className={`page-mobile-hero${poster ? ' page-mobile-hero--poster' : ''}`}
      aria-label={title}
      style={poster ? ({ '--ar': String(poster.width / poster.height) } as React.CSSProperties) : undefined}
    >
      <div className="page-mobile-hero-media">
        {poster ? (
          <Image
            className="page-mobile-hero-img"
            src={image}
            alt={alt}
            width={poster.width}
            height={poster.height}
            priority
            sizes="100vw"
          />
        ) : (
          <Image
            className="page-mobile-hero-img"
            src={image}
            alt={alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'contain', objectPosition: 'center center' }}
          />
        )}
        <div className="page-mobile-hero-caption">
          <strong>{title}</strong>
          <div className="page-mobile-hero-book">
            <a
              className="btn-primary"
              href={site.whatsappUrl(bookMessage)}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={15} />Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
