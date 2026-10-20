'use client';

import { useState } from 'react';
import { Mail, MapPin, MessageSquareText, Phone, Send, UserRound } from 'lucide-react';
import { site } from '@/lib/site-data';
import { useToast } from '@/components/toast';

function enquiryText(data: Record<string, string>) {
  return [
    'Hello ALLORA, new enquiry from the website.',
    `Name: ${data.name || ''}`,
    `Phone: ${data.phone || ''}`,
    data.email ? `Email: ${data.email}` : '',
    data.service ? `Service: ${data.service}` : '',
    data.preferred_location ? `Location: ${data.preferred_location}` : '',
    `Message: ${data.message || ''}`,
  ].filter(Boolean).join('\n');
}

export function ContactForm() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setDone(false);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const whatsapp = site.whatsappUrl(enquiryText(data));
    let saved = false;
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      saved = r.ok;
    } catch {
      saved = false;
    }
    window.open(whatsapp, '_blank', 'noopener,noreferrer');
    if (saved) {
      setDone(true);
      form.reset();
      toast.success('It is in the admin panel and WhatsApp is open.', 'Enquiry sent');
    } else {
      toast.error('WhatsApp is open. The admin copy could not be saved yet.', 'Enquiry sent');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={submit} className="form-grid contact-form">
      <label className="field">
        <UserRound size={16} />
        <input required name="name" placeholder="Your Name *" />
      </label>
      <label className="field">
        <Phone size={16} />
        <input required name="phone" placeholder="Phone Number *" />
      </label>
      <label className="field field-full">
        <Mail size={16} />
        <input type="email" name="email" placeholder="Email Address" />
      </label>
      <label className="field">
        <MessageSquareText size={16} />
        <select name="service" defaultValue="">
          <option value="">Select Service</option>
          <option>Spa Package</option>
          <option>Your Place</option>
          <option>Event Service</option>
          <option>Corporate</option>
          <option>Massage</option>
          <option>Deep Tissue</option>
        </select>
      </label>
      <label className="field">
        <MapPin size={16} />
        <input name="preferred_location" placeholder="Preferred Location" />
      </label>
      <label className="field field-full field-top">
        <MessageSquareText size={16} />
        <textarea required name="message" placeholder="Your Message *" />
      </label>
      <div className="field-full">
        <button disabled={loading} className="submit">
          {loading ? 'Sending...' : done ? 'Message Sent' : <>Send Message <Send size={15} /></>}
        </button>
        {done && <p className="form-note">Sent.</p>}
      </div>
    </form>
  );
}
