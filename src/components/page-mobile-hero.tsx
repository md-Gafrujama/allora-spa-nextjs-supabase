import Image from 'next/image';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { site } from '@/lib/site-data';

type Props = {
  title: string;
  image: string;
  alt: string;
  bookMessage: string;
  labelLow?: boolean;
};

export function PageMobileHero({ title, image, alt, bookMessage, labelLow }: Props) {
  return (
    <section className={`page-mobile-hero${labelLow ? ' page-mobile-hero-label-low' : ''}`} aria-label={title}>
      <div className="page-mobile-hero-media">
        <Image
          className="page-mobile-hero-img"
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
        />
        <div className="page-mobile-hero-caption">
          <strong>{title}</strong>
          <div className="page-mobile-hero-book">
            <span className="page-mobile-hero-brand">ALLORA</span>
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
