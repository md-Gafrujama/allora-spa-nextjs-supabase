export type ServiceItem = {
  slug: string;
  name: string;
  category: 'spa' | 'place' | 'event';
  description: string;
  price: string;
  duration: string;
  image: string;
  highlights: string[];
};

const spaImage = '/images/services/spa-relax.jpg';
const coupleImage = '/images/services/spa-couple.jpg';
const premiumImage = '/images/services/spa-premium.jpg';
const teamImages = [1,2,3,4,5,6,7].map(i => `/images/team/therapist-${i}.jpg`);
const placeImage = '/images/services/home-place.jpg';
const eventImage = '/images/services/home-cta.jpg';

const make = (slug:string,name:string,category:ServiceItem['category'],description:string,price:string,duration:string,image:string,highlights:string[]):ServiceItem => ({slug,name,category,description,price,duration,image,highlights});

export const serviceItems: ServiceItem[] = [
  make('luxury-spa-package-dubai','Luxury Spa Package','spa','A complete premium spa journey combining relaxation, massage and wellness rituals for a calm, polished experience at home or hotel.','....','120 min','/images/services/luxury-spa.jpg',['Professional female therapist','Premium oils & products','Home, hotel or private location']),
  make('couples-spa-package-dubai','Couples Spa Package','spa','A relaxing shared spa experience designed for couples who want quality time, calm surroundings and personalized treatments.','....','90 min','/images/services/couples-spa.jpg',['Two professional therapists','Couples setup','Flexible location']),
  make('spa-day-package-dubai','Spa Day Package','spa','A full spa-day style experience with restorative treatments and wellness touches delivered wherever you are in Dubai.','....','100 min','/images/services/spa-day.jpg',['Relaxation ritual','Massage & wellness care','Personalized setup']),
  make('massage-package-dubai','Massage Package','spa','A focused massage experience for stress release, muscle relaxation and everyday wellness.','....','60 min',spaImage,['Multiple massage styles','Experienced therapist','At-your-place service']),
  make('moroccan-bath-package-dubai','Moroccan Bath Package','spa','A luxurious Moroccan bath ritual with cleansing, exfoliation and relaxing finishing care.','....','75 min',premiumImage,['Traditional-inspired ritual','Premium body care','Private setup']),
  make('spa-gift-voucher-dubai','Spa Gift Voucher','spa','A thoughtful wellness gift for birthdays, anniversaries, celebrations or simply someone who deserves time to relax.','....','Flexible',coupleImage,['Digital-friendly gifting','Multiple package choices','Personalized message']),
  make('birthday-spa-package-dubai','Birthday Spa Package','spa','Celebrate a special day with a beautiful private spa experience designed around comfort and relaxation.','....','90 min',spaImage,['Birthday-ready setup','Group options','At-home experience']),
  make('bridal-spa-package-dubai','Bridal Spa Package','spa','A calming bridal wellness experience before the big day, with personalized beauty and relaxation treatments.','....','120 min',premiumImage,['Bridal preparation','Beauty & wellness','Private group options']),
  make('ladies-spa-package-dubai','Ladies Spa Package','spa','A premium ladies-only wellness experience for relaxation, beauty and self-care at your preferred location.','....','90 min',spaImage,['Female therapists','Ladies-only experience','Home & hotel service']),

  make('home-spa-dubai','Home Spa Dubai','place','Professional spa and beauty services delivered to your home with a discreet, comfortable setup.','....','60 min',placeImage,['At-home convenience','Professional therapists','Flexible appointments']),
  make('home-massage-service-dubai','Home Massage Service Dubai','place','Relax with a professional massage in the comfort of your own home.','....','60 min',spaImage,['Experienced therapist','Flexible timing','Comfort-first setup']),
  make('hotel-room-spa-service-dubai','Hotel Room Spa Service Dubai','place','Turn your hotel room into a peaceful spa retreat with professional mobile treatments.','....','60 min',placeImage,['Hotel-friendly setup','Discreet service','Premium products']),
  make('apartment-spa-service-dubai','Apartment Spa Service Dubai','place','Enjoy personalized spa and wellness treatments without leaving your apartment.','....','60 min',placeImage,['Apartment setup','Female therapists','Personalized treatment']),
  make('couples-massage-at-home-dubai','Couples Massage at Home Dubai','place','A private couples massage experience arranged at your home for a relaxed shared moment.','....','90 min',coupleImage,['Two therapists','Couples setup','Private experience']),
  make('home-facial-service-dubai','Home Facial Service Dubai','place','Bring professional facial care to your home with a relaxing, personalized beauty session.','....','60 min',teamImages[1],['Professional facial care','Premium products','At-home comfort']),
  make('home-spa-dubai-marina','Home Spa Dubai Marina','place','Convenient mobile spa services for residents and guests in Dubai Marina.','....','60 min',teamImages[0],['Dubai Marina coverage','Female therapists','Easy WhatsApp booking']),
  make('home-spa-jumeirah','Home Spa Jumeirah','place','Premium mobile spa and wellness treatments across Jumeirah.','....','60 min',teamImages[2],['Jumeirah coverage','Premium care','Flexible scheduling']),
  make('home-spa-downtown-dubai','Home Spa Downtown Dubai','place','Professional spa experiences delivered to homes and residences in Downtown Dubai.','....','60 min',teamImages[3],['Downtown coverage','At-home setup','Professional care']),
  make('home-spa-business-bay','Home Spa Business Bay','place','A convenient in-room or apartment spa experience for Business Bay residents and guests.','....','60 min',teamImages[4],['Business Bay coverage','Hotel & apartment service','WhatsApp booking']),

  make('spa-event-services-dubai','Spa Event Services Dubai','event','Mobile spa and wellness services designed for private and corporate events across Dubai.','....','Flexible',eventImage,['Event planning support','Multiple therapists','Custom setup']),
  make('spa-party-dubai','Spa Party Dubai','event','Create a memorable spa party with relaxing treatments, professional therapists and a beautiful setup.','....','2+ hrs',eventImage,['Private group','Custom packages','On-site therapists']),
  make('birthday-spa-party-dubai','Birthday Spa Party Dubai','event','A wellness-focused birthday experience for friends, family and private celebrations.','....','2+ hrs',eventImage,['Birthday setup','Group treatments','Personalized packages']),
  make('bridal-shower-spa-dubai','Bridal Shower Spa Dubai','event','Make a bridal shower extra special with a curated spa experience for the bride and guests.','....','2+ hrs',premiumImage,['Bridal-friendly setup','Group service','Beauty & relaxation']),
  make('hen-party-spa-dubai','Hen Party Spa Dubai','event','A fun and relaxing pre-wedding wellness experience for the bride and her group.','....','2+ hrs',coupleImage,['Group spa treatments','Flexible location','Custom experience']),
  make('corporate-wellness-spa-dubai','Corporate Wellness Spa Dubai','event','Bring professional wellness treatments to your workplace for team wellbeing and employee appreciation.','....','Flexible',eventImage,['Corporate packages','On-site therapists','Scalable groups']),
  make('office-massage-events-dubai','Office Massage Events Dubai','event','Short-format massage and wellness sessions for office events, appreciation days and activations.','....','Flexible',teamImages[5],['Chair massage options','On-site service','Team-friendly scheduling']),
  make('private-spa-events-dubai','Private Spa Events Dubai','event','A premium private spa experience for celebrations, gatherings and intimate events.','....','2+ hrs',teamImages[6],['Private setup','Premium products','Dedicated therapists']),
  make('mobile-spa-for-events-dubai','Mobile Spa for Events Dubai','event','Professional mobile spa services that travel to your venue and adapt to your event format.','....','Flexible',eventImage,['Venue setup','Multiple therapists','Event coordination']),
  make('group-spa-packages-dubai','Group Spa Packages Dubai','event','Flexible group spa packages for teams, friends, families and celebrations.','....','Flexible',coupleImage,['Group pricing','Custom treatment mix','Flexible venues']),
];

export const spaItems = serviceItems.filter(x=>x.category==='spa');
export const placeItems = serviceItems.filter(x=>x.category==='place');
export const eventItems = serviceItems.filter(x=>x.category==='event');
export const findService = (slug:string) => serviceItems.find(x=>x.slug===slug);
