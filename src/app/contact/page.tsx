import Image from 'next/image';
import { ArrowRight, Clock, Headphones, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/site-data';
import { ContactForm } from '@/components/contact-form';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

const areas = ['Dubai Marina', 'Jumeirah', 'Downtown Dubai', 'Business Bay', 'Palm Jumeirah', 'JLT', 'JBR', 'Deira', 'Al Barsha', 'All areas in Dubai'];
const faqs = [
  ['Where do you visit?', 'Home, hotel, apartment and private events anywhere in Dubai.'],
  ['When are you available?', '....... Appointments are confirmed with the team.'],
  ['How do I book?', 'Send a message on WhatsApp or use the form. Phone and email stay private on this page.'],
];

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-copy">
            <p className="crumb">Home › Contact Us</p>
            <p className="eyebrow contact-hero-kicker">Get In Touch</p>
            <h1 className="contact-hero-title">We’d Love to Hear From You</h1>
            <p>Have a question, need a custom package, or want to book a spa experience at your place, hotel, or event? Our team is here to help.</p>
          </div>
          <div className="contact-hero-photo">
            <Image src="/images/contact/contact-welcome.jpg" alt="ALLORA therapist at the reception desk" width={1024} height={768} priority sizes="280px" />
          </div>
        </div>
      </section>

      <section className="contact-ways" aria-label="Contact options">
        <div className="container-page contact-ways-grid">
          <div className="contact-way">
            <span><WhatsAppIcon size={18} /></span>
            <strong>WhatsApp Us</strong>
            <small className="masked">{site.phone}</small>
            <a href={site.whatsappUrl('Hello ALLORA, I have a question.')} target="_blank" rel="noreferrer">Chat Now <ArrowRight size={14} /></a>
          </div>
          <div className="contact-way">
            <span><Phone size={18} /></span>
            <strong>Call Us</strong>
            <small className="masked">{site.phone}</small>
          </div>
          <div className="contact-way">
            <span><Mail size={18} /></span>
            <strong>Email Us</strong>
            <small className="masked">{site.email}</small>
          </div>
          <div className="contact-way">
            <span><Heart size={18} /></span>
            <strong>Follow Us</strong>
            <small>Instagram · Facebook</small>
          </div>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container-page contact-main-grid">
          <div>
            <p className="eyebrow">Send Us A Message</p>
            <h2>Contact Form</h2>
            <p className="copy">Fill out the form below and our team will get back to you as soon as possible.</p>
            <ContactForm />
          </div>
          <div className="contact-aside">
            <div className="contact-aside-photo">
              <Image src="/images/services/at-your-place.jpg" alt="ALLORA therapist preparing a spa visit at your place" width={1152} height={864} sizes="(max-width:800px) 100vw, 520px" />
            </div>
            <h3>Relaxation Starts with a Conversation</h3>
            <p>Tell us what you need and we’ll create the right spa experience for you.</p>
            <div className="contact-direct">
              <Headphones size={18} />
              <div>
                <strong>Prefer to talk directly?</strong>
                <p>Our team is available for quick assistance.</p>
                <a href={site.whatsappUrl('Hello ALLORA, I want to speak to your team.')} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-facts">
        <div className="container-page contact-facts-grid">
          <div>
            <MapPin size={18} />
            <h3>Our Location</h3>
            <p>.......</p>
          </div>
          <div>
            <Clock size={18} />
            <h3>Working Hours</h3>
            <p>.......</p>
          </div>
          <div>
            <Heart size={18} />
            <h3>Quick Response</h3>
            <p>We usually reply within a few minutes.</p>
          </div>
        </div>
      </section>

      <section className="section contact-extra">
        <div className="container-page contact-extra-grid">
          <div>
            <p className="eyebrow">Still Have Questions?</p>
            <h2>Common questions</h2>
            <div className="faq-list">{faqs.map(([q, a]) => <div key={q}><b>{q}</b><p>{a}</p></div>)}</div>
          </div>
          <div>
            <p className="eyebrow">Service Areas</p>
            <h2>We Serve Across Dubai</h2>
            <ul className="area-list">{areas.map((area) => <li key={area}>{area}</li>)}</ul>
            <a className="btn-primary" href={site.whatsappUrl('Hello ALLORA, please confirm service availability in my area.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16} /> Check My Area <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
