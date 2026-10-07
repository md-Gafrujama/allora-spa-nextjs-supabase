import Link from 'next/link';
import { Instagram, Facebook, Youtube, MapPin, Mail } from 'lucide-react';
import { site } from '@/lib/site-data';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-page footer-grid">
        <div className="footer-brand-col">
          <Logo />
          <p className="footer-kicker">Relax · Rejuvenate · Revive</p>
          <p className="footer-copy">Premium spa and wellness, brought to your home, hotel or private event in Dubai by professional female therapists.</p>
          <div className="socials" aria-label="Social media"><span><Instagram size={15}/></span><span><Facebook size={15}/></span><span><Youtube size={15}/></span></div>
        </div>
        <div className="footer-links">
          <h4>Explore</h4>
          <Link href="/">Home</Link>
          <Link href="/spa-packages">Spa Packages</Link>
          <Link href="/your-place">Your Place</Link>
          <Link href="/event-services">Event Services</Link>
          <Link href="/corporate">Corporate</Link>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
        <div className="footer-card">
          <h4>Visit & Book</h4>
          <span className="footer-line"><WhatsAppIcon size={15}/>{site.phone}</span>
          <span className="footer-line"><Mail size={15}/>{site.email}</span>
          <span className="footer-line"><MapPin size={15}/>{site.location}</span>
          <a className="footer-book" href={site.whatsappUrl('Hello ALLORA, I would like to book a spa service.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={15}/>Book on WhatsApp</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ALLORA Spa & Wellness. All Rights Reserved.</span>
        <span>Designed with care for your wellness</span>
      </div>
      <a className="whatsapp-float" href={site.whatsappUrl('Hello ALLORA, I would like to book a spa service.')} target="_blank" rel="noreferrer" aria-label="Book on WhatsApp">
        <WhatsAppIcon size={28} />
      </a>
    </footer>
  );
}
