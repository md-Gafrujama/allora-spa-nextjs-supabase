import type { Metadata } from 'next';
import { Marcellus } from 'next/font/google';
import './globals.css';
import { SiteFrame } from '@/components/site-frame';
import { ToastProvider } from '@/components/toast';
import { getSiteUrl } from '@/lib/site-url';
import { RouteProgress } from '@/components/route-progress';

const bodySerif = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
});

const displaySerif = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = { title:{default:'ALLORA Spa & Wellness',template:'%s | ALLORA Spa & Wellness'}, description:'Premium spa, beauty and wellness services at your home, hotel and special events in Dubai.', metadataBase:new URL(getSiteUrl()), icons:{icon:'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${bodySerif.variable} ${displaySerif.variable}`}><body className={bodySerif.className}><ToastProvider><div className="scroll-progress" aria-hidden="true"/><RouteProgress/><SiteFrame>{children}</SiteFrame></ToastProvider></body></html>}
