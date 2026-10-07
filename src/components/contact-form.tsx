'use client';

import { useState } from 'react';
import { Mail, MapPin, MessageSquareText, Phone, Send, UserRound } from 'lucide-react';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error('Unable to submit');
      setDone(true);
      form.reset();
    } catch {
      setError('Could not send right now. Please book directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
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
        {error && <p className="form-note form-note-error">{error}</p>}
        {done && <p className="form-note">Thank you. Our team will contact you shortly.</p>}
      </div>
    </form>
  );
}
