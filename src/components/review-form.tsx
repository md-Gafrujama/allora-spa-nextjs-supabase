'use client';

import { useEffect, useId, useState } from 'react';
import { X } from 'lucide-react';

export function ReviewForm() {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (rating < 1) {
      setError('Please choose a star rating.');
      return;
    }
    setLoading(true);
    setError('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, rating }),
      });
      if (!r.ok) throw new Error('Unable to submit');
      setDone(true);
      form.reset();
      setRating(0);
    } catch {
      setError('Could not send right now. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <p className="home-reviews-lede">Tell us how your session felt.</p>
      <button type="button" className="review-open" onClick={() => { setDone(false); setError(''); setOpen(true); }}>
        Write a review
      </button>
      {open && (
        <div className="review-pop" onClick={close}>
          <div className="review-card" role="dialog" aria-modal="true" aria-labelledby={titleId} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="review-close" onClick={close} aria-label="Close">
              <X size={18} />
            </button>
            <p className="eyebrow">Reviews</p>
            <h3 id={titleId}>Write a review</h3>
            {done ? (
              <div className="review-thanks">
                <p>Thank you. Your review has been sent to our team.</p>
                <button type="button" className="submit" onClick={close}>Close</button>
              </div>
            ) : (
              <form onSubmit={submit} className="review-form">
                <label className="field">
                  <input required name="name" placeholder="Your name *" autoFocus />
                </label>
                <div className="review-stars" role="radiogroup" aria-label="Star rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={rating === n}
                      className={n <= rating ? 'is-on' : ''}
                      onClick={() => setRating(n)}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <label className="field field-top">
                  <textarea required name="message" placeholder="Your review *" />
                </label>
                <button disabled={loading} className="submit">
                  {loading ? 'Sending...' : 'Send review'}
                </button>
                {error && <p className="form-note form-note-error">{error}</p>}
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
