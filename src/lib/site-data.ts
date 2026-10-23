import { baseCatalog } from '@/lib/catalog-base';
import { displayName, publicSlug } from '@/lib/public-slugs';

export const site = {
  name: 'ALLORA Spa & Wellness',
  phone: '+971 50 951 3634',
  phoneHref: 'tel:+971509513634',
  email: 'xxxxxxxxxx',
  emailHref: 'mailto:xxxxxxxxxx?subject=Hello%20ALLORA%2C%20I%20would%20like%20to%20get%20in%20touch.',
  location: '.......',
  images: {
    hero: '/images/team/team-group.jpg',
    team: '/images/team/team-group.jpg',
    place: '/images/services/home-place.jpg',
    cta: '/images/services/home-cta.jpg',
    spa: '/images/services/spa-relax.jpg',
    couple: '/images/services/spa-couple.jpg',
    premium: '/images/services/spa-premium.jpg',
    aboutHero: '/images/about/team-group.jpg',
    about: '/images/about/about-story.jpg',
    why: '/images/about/about-why.jpg',
    contactHero: '/images/contact/contact-hero.jpg',
    contactRelax: '/images/contact/contact-relax.jpg',
    corporate: '/images/services/corporate-massage.jpg',
    dropdownSpa: '/images/hero/massage.jpg',
    dropdownPlace: '/images/home/at-home.jpg',
    dropdownEvent: '/images/home/couples.jpg',
    dropdownCorporate: '/images/home/ready.jpg',
    group: '/images/team/team-group.jpg',
  },
  whatsappUrl: (message: string) => `https://wa.me/971509513634?text=${encodeURIComponent(message)}`,
};

const menu = (category: Parameters<typeof baseCatalog>[0]) =>
  baseCatalog(category).map((item) => [displayName(item.slug, item.name), item.url] as [string, string]);

export { displayName };

export const navData = {
  spa: menu('spa'),
  place: menu('place'),
  events: menu('event'),
  corporate: menu('corporate'),
  massages: [
    ...menu('massage'),
    ['Cellulite Care', `/${publicSlug('cellulite-dubai')}`] as [string, string],
    ['Medotherapy', `/${publicSlug('medotherapy-dubai')}`] as [string, string],
  ],
  deepTissue: [
    ['Deep Tissue', `/${publicSlug('deep-tissue-massage-dubai')}`],
    ['Lymphatic Drainage', `/${publicSlug('lymphatic-drainage-dubai')}`],
    ['Hot Stone', `/${publicSlug('hot-stone-massage-dubai')}`],
    ['Cellulite Care', `/${publicSlug('cellulite-dubai')}`],
    ['Medotherapy', `/${publicSlug('medotherapy-dubai')}`],
  ] as [string, string][],
};
