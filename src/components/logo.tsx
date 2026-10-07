export function Logo() {
  return (
    <span className="brand">
      <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="#fffaf4" stroke="#051650" strokeWidth="1.6" />
        <path d="M32 12c2.2 8 2.2 16.5 0 27-2.2-10.5-2.2-19 0-27z" fill="#051650" />
        <path d="M32 16c9 1.5 16 8 18 17-9-1.2-15-6.2-18-17z" fill="#051650" />
        <path d="M32 16c-9 1.5-16 8-18 17 9-1.2 15-6.2 18-17z" fill="#051650" />
        <path d="M32 20c6 3 10 8 11 14-6-1-9.5-5-11-14z" fill="#051650" />
        <path d="M32 20c-6 3-10 8-11 14 6-1 9.5-5 11-14z" fill="#051650" />
        <path d="M22 42c5 3 15 3 20 0 0 5-4.5 9-10 9s-10-4-10-9z" fill="#051650" />
      </svg>
      <span>
        <strong>ALLORA</strong>
        <small>SPA & WELLNESS</small>
      </span>
    </span>
  );
}
