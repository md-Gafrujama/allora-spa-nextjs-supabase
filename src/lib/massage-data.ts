export type Massage = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
};

export const massages: Massage[] = [
  {
    slug: 'thai-massage-dubai',
    name: 'Thai Massage',
    short: 'Gentle stretches to ease tight muscles.',
    description: 'Assisted stretches and rhythmic pressure that loosen tight muscles and help you move more freely.',
    image: '/images/massages/thai-v3.jpg',
    alt: "Therapist massaging a client's legs during Thai massage",
    highlights: ['Assisted, yoga-style stretches', 'Rhythmic palm and thumb pressure', 'Done in loose, comfortable clothing', 'At your home or hotel'],
  },
  {
    slug: 'couple-massage-dubai',
    name: 'Couple Massage',
    short: 'Side-by-side care for two.',
    description: 'Two therapists, one session. Relax side by side with your partner, each with your own pressure.',
    image: '/images/massages/couple-v3.jpg',
    alt: 'Two therapists massaging a woman and a man side by side',
    highlights: ['Two therapists at the same time', 'Choose your own pressure each', 'Lovely for anniversaries and gifts', 'At your home or hotel'],
  },
  {
    slug: 'hot-stone-massage-dubai',
    name: 'Hot Stone',
    short: 'Warm stones for deep, calm relief.',
    description: 'Smooth warm stones are placed and glided along the body to melt deep tension and calm the mind.',
    image: '/images/massages/hot-stone-v2.jpg',
    alt: 'Therapist pressing a hot stone onto a covered client',
    highlights: ['Heated, smooth basalt stones', 'Warmth that relaxes deep muscles', 'Slow, calming strokes', 'At your home or hotel'],
  },
  {
    slug: 'jacuzzi-massage-dubai',
    name: 'Jacuzzi Massage',
    short: 'Warm water and a calming massage.',
    description: 'A warm water soak paired with a soothing neck and shoulder massage to help you fully unwind.',
    image: '/images/massages/jacuzzi-v4.jpg',
    alt: "Therapist massaging a client's foot beside a warm water basin",
    highlights: ['Warm water soak', 'Neck and shoulder massage', 'Calming aromatic oils', 'Perfect for a hotel stay'],
  },
  {
    slug: 'deep-tissue-massage-dubai',
    name: 'Deep Tissue Massage',
    short: 'Firm pressure for tight muscles.',
    description: 'Slow, firm pressure that works into deep muscle knots and long-held tension.',
    image: '/images/massages/deep-tissue-v4.jpg',
    alt: 'Therapist pressing firmly through a sheet during deep tissue massage',
    highlights: ['Firm, focused pressure', 'Targets knots and stiffness', 'Pressure adjusted to you', 'At your home or hotel'],
  },
  {
    slug: 'lymphatic-drainage-dubai',
    name: 'Lymphatic Drainage',
    short: 'Light strokes to ease heaviness.',
    description: 'Light, rhythmic strokes that help ease puffiness and leave the body feeling lighter.',
    image: '/images/massages/lymphatic-v3.jpg',
    alt: "Therapist gliding both hands along a client's arm",
    highlights: ['Gentle, rhythmic strokes', 'Helps ease puffiness', 'Light and relaxing', 'At your home or hotel'],
  },
];

export const findMassage = (slug: string) => massages.find((m) => m.slug === slug);

export const massageHref = (slug: string) => `/massages/${slug}`;
