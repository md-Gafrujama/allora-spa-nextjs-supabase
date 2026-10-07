-- ALLORA service catalogue seed. Safe to run after schema.sql.
insert into public.spa_packages(slug,name,short_description,description,image_url,price,duration_minutes,sort_order) values
('luxury-spa-package-dubai','Luxury Spa Package','A complete premium spa journey combining relaxation, massage and wellness rituals for a calm, polished experience at home or hotel.','A complete premium spa journey combining relaxation, massage and wellness rituals for a calm, polished experience at home or hotel.','/images/services/spa-relax.jpg',699,60,1),
('couples-spa-package-dubai','Couples Spa Package','A relaxing shared spa experience designed for couples who want quality time, calm surroundings and personalized treatments.','A relaxing shared spa experience designed for couples who want quality time, calm surroundings and personalized treatments.','/images/services/spa-relax.jpg',499,60,2),
('spa-day-package-dubai','Spa Day Package','A full spa-day style experience with restorative treatments and wellness touches delivered wherever you are in Dubai.','A full spa-day style experience with restorative treatments and wellness touches delivered wherever you are in Dubai.','/images/services/spa-relax.jpg',299,90,3),
('massage-package-dubai','Massage Package','A focused massage experience for stress release, muscle relaxation and everyday wellness.','A focused massage experience for stress release, muscle relaxation and everyday wellness.','/images/services/spa-relax.jpg',299,90,4),
('moroccan-bath-package-dubai','Moroccan Bath Package','A luxurious Moroccan bath ritual with cleansing, exfoliation and relaxing finishing care.','A luxurious Moroccan bath ritual with cleansing, exfoliation and relaxing finishing care.','/images/services/spa-relax.jpg',299,90,5),
('spa-gift-voucher-dubai','Spa Gift Voucher','A thoughtful wellness gift for birthdays, anniversaries, celebrations or simply someone who deserves time to relax.','A thoughtful wellness gift for birthdays, anniversaries, celebrations or simply someone who deserves time to relax.','/images/services/spa-relax.jpg',299,90,6),
('birthday-spa-package-dubai','Birthday Spa Package','Celebrate a special day with a beautiful private spa experience designed around comfort and relaxation.','Celebrate a special day with a beautiful private spa experience designed around comfort and relaxation.','/images/services/spa-relax.jpg',299,90,7),
('bridal-spa-package-dubai','Bridal Spa Package','A calming bridal wellness experience before the big day, with personalized beauty and relaxation treatments.','A calming bridal wellness experience before the big day, with personalized beauty and relaxation treatments.','/images/services/spa-relax.jpg',299,90,8),
('ladies-spa-package-dubai','Ladies Spa Package','A premium ladies-only wellness experience for relaxation, beauty and self-care at your preferred location.','A premium ladies-only wellness experience for relaxation, beauty and self-care at your preferred location.','/images/services/spa-relax.jpg',299,90,9)
on conflict(slug) do update set name=excluded.name,short_description=excluded.short_description,description=excluded.description,image_url=excluded.image_url,price=excluded.price,duration_minutes=excluded.duration_minutes,sort_order=excluded.sort_order;

insert into public.services(slug,name,category,short_description,image_url,sort_order) values
('home-spa-dubai','Home Spa Dubai','place','Professional spa and beauty services delivered to your home with a discreet, comfortable setup.','/images/services/home-place.jpg',1),
('home-massage-service-dubai','Home Massage Service Dubai','place','Relax with a professional massage in the comfort of your own home.','/images/services/home-place.jpg',2),
('hotel-room-spa-service-dubai','Hotel Room Spa Service Dubai','place','Turn your hotel room into a peaceful spa retreat with professional mobile treatments.','/images/services/home-place.jpg',3),
('apartment-spa-service-dubai','Apartment Spa Service Dubai','place','Enjoy personalized spa and wellness treatments without leaving your apartment.','/images/services/home-place.jpg',4),
('couples-massage-at-home-dubai','Couples Massage at Home Dubai','place','A private couples massage experience arranged at your home for a relaxed shared moment.','/images/services/home-place.jpg',5),
('home-facial-service-dubai','Home Facial Service Dubai','place','Bring professional facial care to your home with a relaxing, personalized beauty session.','/images/services/home-place.jpg',6),
('home-spa-dubai-marina','Home Spa Dubai Marina','place','Convenient mobile spa services for residents and guests in Dubai Marina.','/images/services/home-place.jpg',7),
('home-spa-jumeirah','Home Spa Jumeirah','place','Premium mobile spa and wellness treatments across Jumeirah.','/images/services/home-place.jpg',8),
('home-spa-downtown-dubai','Home Spa Downtown Dubai','place','Professional spa experiences delivered to homes and residences in Downtown Dubai.','/images/services/home-place.jpg',9),
('home-spa-business-bay','Home Spa Business Bay','place','A convenient in-room or apartment spa experience for Business Bay residents and guests.','/images/services/home-place.jpg',10)
on conflict(slug) do update set name=excluded.name,short_description=excluded.short_description,image_url=excluded.image_url,sort_order=excluded.sort_order;

insert into public.event_services(slug,name,short_description,image_url,sort_order) values
('spa-event-services-dubai','Spa Event Services Dubai','Mobile spa and wellness services designed for private and corporate events across Dubai.','/images/services/home-cta.jpg',1),
('spa-party-dubai','Spa Party Dubai','Create a memorable spa party with relaxing treatments, professional therapists and a beautiful setup.','/images/services/home-cta.jpg',2),
('birthday-spa-party-dubai','Birthday Spa Party Dubai','A wellness-focused birthday experience for friends, family and private celebrations.','/images/services/home-cta.jpg',3),
('bridal-shower-spa-dubai','Bridal Shower Spa Dubai','Make a bridal shower extra special with a curated spa experience for the bride and guests.','/images/services/home-cta.jpg',4),
('hen-party-spa-dubai','Hen Party Spa Dubai','A fun and relaxing pre-wedding wellness experience for the bride and her group.','/images/services/home-cta.jpg',5),
('corporate-wellness-spa-dubai','Corporate Wellness Spa Dubai','Bring professional wellness treatments to your workplace for team wellbeing and employee appreciation.','/images/services/home-cta.jpg',6),
('office-massage-events-dubai','Office Massage Events Dubai','Short-format massage and wellness sessions for office events, appreciation days and activations.','/images/services/home-cta.jpg',7),
('private-spa-events-dubai','Private Spa Events Dubai','A premium private spa experience for celebrations, gatherings and intimate events.','/images/services/home-cta.jpg',8),
('mobile-spa-for-events-dubai','Mobile Spa for Events Dubai','Professional mobile spa services that travel to your venue and adapt to your event format.','/images/services/home-cta.jpg',9),
('group-spa-packages-dubai','Group Spa Packages Dubai','Flexible group spa packages for teams, friends, families and celebrations.','/images/services/home-cta.jpg',10)
on conflict(slug) do update set name=excluded.name,short_description=excluded.short_description,image_url=excluded.image_url,sort_order=excluded.sort_order;
