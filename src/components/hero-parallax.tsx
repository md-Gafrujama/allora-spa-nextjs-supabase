'use client';

import { useEffect } from 'react';

export function HeroParallax({ target = '.home-hero' }: { target?: string }) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(target);
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce), (hover: none)').matches) return;
    let frame = 0;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', x.toFixed(3));
        el.style.setProperty('--my', y.toFixed(3));
      });
    };
    const leave = () => {
      el.style.setProperty('--mx', '0');
      el.style.setProperty('--my', '0');
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [target]);

  return null;
}
