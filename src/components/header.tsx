'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { navData, site } from '@/lib/site-data';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { Logo } from '@/components/logo';

const MenuPanel = ({ title, href, items, image }: {title:string;href:string;items:string[][];image:string}) => (
  <div className="mega-menu">
    <div className="mega-feature">
      <Image src={image} alt="ALLORA" fill className="object-cover object-[center_18%]" sizes="220px" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#051650] via-black/15 to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 text-white"><p className="text-[10px] uppercase tracking-[.24em] font-bold text-[#051650]">ALLORA</p><h3 className="display-font mt-1 text-2xl">{title}</h3><Link href={href} className="mega-explore">Explore <ArrowUpRight size={14}/></Link></div>
    </div>
    <div className="mega-list">{items.map(([label,url],i)=><Link href={url} key={url} className="mega-item"><span className="mega-number">{String(i+1).padStart(2,'0')}</span><span><b>{label}</b></span><ArrowUpRight size={15}/></Link>)}</div>
  </div>
);

function MobileGroup({ id, label, href, items, open, setOpen, close }: { id: string; label: string; href: string; items: string[][]; open: string | null; setOpen: (id: string | null) => void; close: () => void }) {
  const opened = open === id;
  return (
    <div className="mobile-group">
      <button type="button" className="mobile-parent" aria-expanded={opened} onClick={() => setOpen(opened ? null : id)}>
        {label}
        <ChevronDown size={16} className={opened ? 'is-open' : ''} />
      </button>
      {opened && (
        <div className="mobile-subs">
          <Link className="mobile-sub" href={href} onClick={close}>View all</Link>
          {items.map(([name, url]) => (
            <Link className="mobile-sub" href={url} key={url} onClick={close}>{name}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header(){
  const [mobile,setMobile]=useState(false);
  const [open,setOpen]=useState<string | null>(null);
  const path = usePathname();
  const closeMenu = () => { setMobile(false); setOpen(null); };
  const on = (href: string) => (href === '/' ? path === '/' : path.startsWith(href)) ? 'nav-link active' : 'nav-link';
  return <header className="site-header">
    <div className="container-page nav-shell">
      <Link href="/" className="brand-link" aria-label="ALLORA Spa & Wellness"><Logo /></Link>
      <nav className="desktop-nav">
        <Link href="/" className={on('/')}>Home</Link>
        <div className="nav-dropdown"><Link href="/spa-packages" className={on('/spa-packages')}>Spa Package <ChevronDown size={14}/></Link><MenuPanel title="Spa Package" href="/spa-packages" items={navData.spa} image={site.images.dropdownSpa}/></div>
        <div className="nav-dropdown"><Link href="/your-place" className={on('/your-place')}>Your Place <ChevronDown size={14}/></Link><MenuPanel title="Your Place" href="/your-place" items={navData.place} image={site.images.dropdownPlace}/></div>
        <div className="nav-dropdown"><Link href="/event-services" className={on('/event-services')}>Event Service <ChevronDown size={14}/></Link><MenuPanel title="Event Service" href="/event-services" items={navData.events} image={site.images.dropdownEvent}/></div>
        <div className="nav-dropdown"><Link href="/corporate" className={on('/corporate')}>Corporate <ChevronDown size={14}/></Link><MenuPanel title="Corporate" href="/corporate" items={navData.corporate} image={site.images.dropdownCorporate}/></div>
        <Link href="/about" className={on('/about')}>About Us</Link><Link href="/contact" className={on('/contact')}>Contact Us</Link>
      </nav>
      <a href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer" className="book-btn"><WhatsAppIcon size={16}/> Book Now</a>
      <button className="mobile-menu" onClick={()=>{ setMobile(!mobile); setOpen(null); }} aria-label="Menu">{mobile?<X/>:<Menu/>}</button>
    </div>
    {mobile && <div className="mobile-panel"><a className="book-btn mobile-book" href={site.whatsappUrl('Hello ALLORA, I would like to book an appointment.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={16}/> Book on WhatsApp</a><Link href="/" onClick={closeMenu}>Home</Link><MobileGroup id="spa" label="Spa Package" href="/spa-packages" items={navData.spa} open={open} setOpen={setOpen} close={closeMenu}/><MobileGroup id="place" label="Your Place" href="/your-place" items={navData.place} open={open} setOpen={setOpen} close={closeMenu}/><MobileGroup id="events" label="Event Service" href="/event-services" items={navData.events} open={open} setOpen={setOpen} close={closeMenu}/><MobileGroup id="corporate" label="Corporate" href="/corporate" items={navData.corporate} open={open} setOpen={setOpen} close={closeMenu}/><Link href="/about" onClick={closeMenu}>About Us</Link><Link href="/contact" onClick={closeMenu}>Contact Us</Link></div>}
  </header>
}
