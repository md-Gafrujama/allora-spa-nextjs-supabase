'use client';

import { useEffect } from 'react';

export function NoWhatsAppNumber() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href === '#' || href.includes('wa.me/') || href.includes('api.whatsapp.com')) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
  return null;
}
