'use client';

import { useEffect } from 'react';

function isServiceLink(href: string) {
  try {
    const path = new URL(href, window.location.origin).pathname.replace(/\/$/, '') || '/';
    return path === '/spa-packages' || path.startsWith('/spa-packages/')
      || path === '/your-place' || path.startsWith('/your-place/')
      || path === '/event-services' || path.startsWith('/event-services/');
  } catch {
    return false;
  }
}

export function BlockServiceLinks() {
  useEffect(() => {
    const stop = (event: Event) => {
      const link = (event.target as Element | null)?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (!isServiceLink(href)) return;
      event.preventDefault();
      event.stopPropagation();
    };
    const stopKey = (event: KeyboardEvent) => {
      if (event.key !== 'Enter') return;
      stop(event);
    };
    document.addEventListener('click', stop, true);
    document.addEventListener('auxclick', stop, true);
    document.addEventListener('keydown', stopKey, true);
    return () => {
      document.removeEventListener('click', stop, true);
      document.removeEventListener('auxclick', stop, true);
      document.removeEventListener('keydown', stopKey, true);
    };
  }, []);
  return null;
}
