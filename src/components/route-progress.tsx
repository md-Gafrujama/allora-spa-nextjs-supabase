'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type State = 'idle' | 'loading' | 'done';

export function RouteProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<State>('idle');

  useEffect(() => {
    setState((current) => (current === 'loading' ? 'done' : current));
    const id = window.setTimeout(() => setState((current) => (current === 'done' ? 'idle' : current)), 450);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (state !== 'loading') return;
    const id = window.setTimeout(() => setState('idle'), 12000);
    return () => window.clearTimeout(id);
  }, [state]);

  useEffect(() => {
    document.documentElement.classList.toggle('is-navigating', state === 'loading');
  }, [state]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest('a');
      if (!link || link.hasAttribute('download')) return;
      if (link.target && link.target !== '_self') return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      setState('loading');
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return <div className={`route-progress is-${state}`} aria-hidden="true"><span /></div>;
}
