import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getSiteUrl } from '@/lib/site-url';
import { NoWhatsAppNumber } from '@/components/no-whatsapp-number';
import { BlockServiceLinks } from '@/components/block-service-links';

const bodySerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const displaySerif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = { title:{default:'ALLORA Spa & Wellness',template:'%s | ALLORA Spa & Wellness'}, description:'Premium spa, beauty and wellness services at your home, hotel and special events in Dubai.', metadataBase:new URL(getSiteUrl()), icons:{icon:'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${bodySerif.variable} ${displaySerif.variable}`}><body className={bodySerif.className}><NoWhatsAppNumber/><BlockServiceLinks/><Header/><main>{children}</main><Footer/></body></html>}
