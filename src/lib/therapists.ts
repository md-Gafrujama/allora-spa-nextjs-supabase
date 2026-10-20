export type Therapist = {
  src: string;
  width: number;
  height: number;
  position: string;
  role: string;
  service: string;
};

export const therapists: Therapist[] = [
  { src: '/images/about/team-1.jpg', width: 1024, height: 1024, position: 'center', role: 'Massage Expert', service: 'Deep tissue massage' },
  { src: '/images/about/team-2.jpg', width: 1024, height: 1024, position: 'center', role: 'Facial Specialist', service: 'Cleansing facial care' },
  { src: '/images/about/team-3.jpg', width: 1024, height: 1024, position: 'center', role: 'Wellness Expert', service: 'Head & scalp massage' },
  { src: '/images/about/team-4.jpg', width: 1024, height: 1024, position: 'center', role: 'Beauty Specialist', service: 'Glow & beauty care' },
  { src: '/images/about/team-5.jpg', width: 1024, height: 1024, position: 'center', role: 'Body Care Expert', service: 'Body scrub & polish' },
  { src: '/images/about/team-6.jpg', width: 1024, height: 1024, position: 'center', role: 'Spa Therapist', service: 'Foot spa & massage' },
  { src: '/images/about/team-7.jpg', width: 1024, height: 1024, position: 'center', role: 'Aromatherapy Expert', service: 'Aromatic oil therapy' },
];
