import React from 'react';
import {
  Car, MapPin, Clock, ArrowRight, ChevronDown,
  Shield, Star, Phone, CheckCircle, Smile, Navigation, MessageCircle,
  PartyPopper, Briefcase, Users, HeartPulse,
  Droplets, Wrench, Sparkles, Truck, User, Zap, Wind, Brush, Globe, Bike, Van, Bus,
  ShieldCheck, BadgeCheck, IndianRupee, Gift
} from 'lucide-react';

export const T = {
  en: {
    langBtn: 'தமிழ்',
    chip: 'Trusted by families & professionals',
    heroTitle1: 'Your Car',
    heroTitle2: 'Our Care',
    heroWords: ['Your Journey.', 'Your Comfort.', 'Your Freedom.', 'Your Confidence.', 'Your Peace.'],
    heroSub: <>Reclaim your time and energy. Hire a top-tier, background-checked professional to drive your own car, so you can relax or work without the stress of the road. Exclusively serving <strong style={{color: "var(--accent-color)"}}>Gobichettipalayam</strong>.</>,
    heroCta1: 'Book a Driver',
    heroCta2: 'How it works',
    cardName: 'Rahul M. — Driver Booked',
    cardMeta: 'BMW 5 Series · 4 hrs · ₹800',
    cardEta: 'Driver arriving in',
    cardEtaMin: '3 min',

    whoTitle: 'Who is this for?',
    whoSub: 'CircleInd is perfect for anyone who owns a car but doesn\'t want to drive right now.',
    whoCards: [
      { icon: <PartyPopper size={32}/>, title: 'Night Out?', desc: 'Going to a party or wedding? Hire a driver, enjoy your evening, and get home safely in your own car.' },
      { icon: <Briefcase size={32}/>, title: 'Business Travel', desc: 'Have an important meeting? Let a professional drive while you prepare, make calls, or rest.' },
      { icon: <Users size={32}/>, title: 'Family Trips', desc: 'Long drives are exhausting. Hire a driver for family outings and enjoy the trip with your family.' },
      { icon: <HeartPulse size={32}/>, title: 'Medical Need', desc: 'Not feeling well or just had a procedure? Get driven home safely without calling a cab.' },
    ],

    howTag: 'How It Works',
    howTitle: 'Book a driver in 3 simple steps.',
    steps: [
      { icon: <MapPin size={28}/>, title: 'Set Your Location', desc: 'Tell us where your car is parked. The driver will come to you.' },
      { icon: <Clock size={28}/>, title: 'Choose Duration', desc: 'Need a driver for 2 hours or all day? Pick what works for you.' },
      { icon: <Car size={28}/>, title: 'Driver Arrives', desc: 'A verified, rated driver arrives at your car and drives you wherever you need to go.' },
    ],

    whyTitle: 'Why customers love CircleInd',
    whyCards: [
      { icon: <Shield size={24}/>, title: 'Verified & Safe', desc: 'Every driver is background-checked, licensed, and reviewed by real customers before joining.' },
      { icon: <Star size={24}/>, title: 'Rated by Real Users', desc: 'Read honest reviews from other customers. You choose the driver you trust.' },
      { icon: <Car size={24}/>, title: 'Your Own Car', desc: 'No stranger\'s car. You travel in the comfort and safety of your own vehicle.' },
      { icon: <Phone size={24}/>, title: 'Easy Booking', desc: 'Book a driver in under a minute. See their location on the map in real time.' },
      { icon: <Navigation size={24}/>, title: 'Track Live', desc: 'Watch your driver approach on the live map. Know exactly when they arrive.' },
      { icon: <Smile size={24}/>, title: 'Stress-Free Rides', desc: 'Sit back and relax. Let someone else handle the traffic, parking, and directions.' },
    ],

    ctaTitle: 'Ready to try it?',
    ctaSub: 'Search for a driver near you right now — it only takes a minute.',
    ctaBtn: 'Find a Driver Near Me',

    washTag: 'Official Partners',
    washTitle: 'Premium vehicle care.',
    washSub: <>We've partnered with <strong style={{color: 'var(--accent-color)', fontWeight: 700}}>Gobichettipalayam’s</strong> finest washing stations to bring you premium care. From bikes to heavy vehicles, our official partners ensure a sparkling showroom finish every time.</>,
    washVehicles: ['Bike', 'Car', 'Auto / Mini', 'Traveller', 'Heavy Vehicle'],
    washCards: [
      { icon: <Droplets size={28}/>, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', title: 'Exterior Wash', desc: 'Full pressure rinse, foam wash, hand scrub & squeegee dry.' },
      { icon: <Wind size={28}/>, color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', title: 'Interior Clean', desc: 'Vacuum, dashboard wipe, mat clean & interior fresh spray.' },
      { icon: <Sparkles size={28}/>, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', title: 'Full Detail', desc: 'Inside + outside deep clean. Wax polish & tyre shine.' },
      { icon: <Zap size={28}/>, color: '#10b981', bg: 'rgba(16,185,129,0.1)', title: 'Express Wash', desc: 'Quick 20-min wash for when you are in a hurry.' },
    ],
    washCta: 'Book All Vehicle Washing',

    mechanicTitle: 'Expert Mechanic Services.',
    mechanicSub: 'We\'ve partnered with Gobichettipalayam’s most trusted mechanics to provide reliable repair and maintenance services for all vehicle types.',
    mechanicCards: [
      { icon: <Wrench size={28}/>, color: '#f97316', bg: 'rgba(249,115,22,0.1)', title: 'General Service', desc: 'Comprehensive checkup, oil change, and routine maintenance.' },
      { icon: <Zap size={28}/>, color: '#ef4444', bg: 'rgba(239,68,68,0.1)', title: 'Electrical Repair', desc: 'Battery, wiring, and electronics troubleshooting.' },
      { icon: <Shield size={28}/>, color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', title: 'Brake & Suspension', desc: 'Ensure your safety with expert brake and suspension repair.' }
    ],
    mechanicCta: 'Book Mechanic Service',

    customerBenefitsTitle: 'Why Ride With Us',
    customerBenefitsCards: [
      { icon: <ShieldCheck size={24}/>, title: 'Verified & Experienced Drivers' },
      { icon: <BadgeCheck size={24}/>, title: 'Driver ID Card — Verified Badge, Photo, Rating & Skill Set' },
      { icon: <IndianRupee size={24}/>, title: 'Fixed & Transparent Pricing' },
      { icon: <IndianRupee size={24}/>, title: 'No Bargaining & No Surge' },
      { icon: <Star size={24}/>, title: 'Trusted Local Partner Network' },
      { icon: <Gift size={24}/>, title: 'Launch Offers & Rewards For Early Users' }
    ],

    driverBenefitsTitle: 'Why Drive With Us',
    driverBenefitsCards: [
      { icon: <Clock size={24}/>, title: 'Flexible Ride Slots — Choose Your Own Timing' },
      { icon: <MapPin size={24}/>, title: 'Pick Rides By Occasion/Route Preference' },
      { icon: <IndianRupee size={24}/>, title: 'Fixed Fare — Guaranteed, No Bargaining' },
      { icon: <ShieldCheck size={24}/>, title: 'Guaranteed Income Structure' },
      { icon: <Star size={24}/>, title: 'Top-Rated Bonus & Performance Rewards' },
      { icon: <Shield size={24}/>, title: 'Basic Insurance (Rolling Out Soon)' },
      { icon: <Gift size={24}/>, title: 'Extra Perks Beyond Driving Income' }
    ],

    trustBadges: ['Verified', 'No Bargaining', 'Fixed Price'],

    teamTag: 'Our Team',
    teamTitle: 'Meet the Founders',
    teamMembers: [
      { role: 'Founder & CEO, Gobichettipalayam', name: 'Thiyaaneswaran Thirumoorthy' },
      { role: 'Co-founder & Head of Driver Operation, Gobichettipalayam', name: 'Thirumoorthy' }
    ],

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'How do I book a driver?', a: 'Just tap the "Book a Driver" button and chat with our team on WhatsApp to share your location and time.' },
      { q: 'What are the charges for hiring a driver?', a: 'Rates start from ₹200 for short trips within Gobichettipalayam. Final price depends on duration and distance.' },
      { q: 'How long does it take for the driver to arrive?', a: 'Typically, a driver can reach you within 15-30 minutes inside Gobichettipalayam town.' },
      { q: 'Are the drivers verified?', a: 'Yes, all our drivers undergo strict background checks, have valid commercial licenses, and are highly rated.' },
      { q: 'Can I hire a driver for outstation trips?', a: 'Absolutely! You can hire our drivers for outstation trips, family vacations, or business travel spanning multiple days.' },
      { q: 'How does the all vehicle washing service work?', a: 'You can easily book a premium vehicle washing through our platform, and we will direct you to one of our trusted local partner stations for a sparkling clean.' },
      { q: 'What is included in the Full Detail washing?', a: 'It includes exterior foam wash, tire shine, deep interior vacuuming, dashboard polish, and interior freshness spray.' },
      { q: 'How do I pay for the services?', a: 'You can pay directly via UPI (GPay, PhonePe), cash, or card after the service is completed.' },
      { q: 'Can I cancel my booking?', a: 'Yes, you can cancel your booking for free up to 1 hour before the scheduled time.' },
      { q: 'Is this service available outside Gobichettipalayam?', a: 'Currently, our services are exclusively available within Gobichettipalayam and surrounding nearby areas.' },
      { q: 'What happens in the rare event of an accident?', a: 'For our drivers, we provide basic health and accident coverage to ensure their well-being. For the vehicle, since our professional drivers are operating your personal car, any vehicular damage must be covered under your car’s primary comprehensive insurance policy. We kindly request clients to ensure their vehicle is fully insured before booking a ride.' },
    ],

    footer: '© 2025 CircleInd. Your Car. Our Care. Your Comfort.',
  },
  ta: {
    langBtn: 'English',
    chip: 'குடும்பங்கள் மற்றும் தொழில்முறையினர் நம்பும் சேவை',
    heroTitle1: 'உங்கள் கார்',
    heroTitle2: 'எங்கள் அக்கறை',
    heroWords: ['உங்கள் பயணம்.', 'உங்கள் ஓய்வு.', 'உங்கள் சுதந்திரம்.', 'உங்கள் நம்பிக்கை.', 'உங்கள் நிம்மதி.'],
    heroSub: <>பயணங்களில் சோர்வா? கவலை வேண்டாம். உங்கள் காரை ஓட்ட எங்கள் தொழில்முறை ஓட்டுனர்களை அழைத்து நிம்மதியாக பயணியுங்கள். இப்போது <strong style={{color: "var(--accent-color)"}}>கோபிசெட்டிபாளையத்தில்</strong> பிரத்தியேகமாக.</>,
    heroCta1: 'ஓட்டுனரை பதிவு செய்',
    heroCta2: 'எப்படி செயல்படுகிறது',
    cardName: 'ராகுல் மி. — ஓட்டுனர் பதிவு',
    cardMeta: 'BMW 5 Series · 4 மணி · ₹800',
    cardEta: 'ஓட்டுனர் வருகிறார்',
    cardEtaMin: '3 நிமிடம்',

    whoTitle: 'யாருக்கு இது பயன்படும்?',
    whoSub: 'சொந்த கார் இருக்கிறது, ஆனால் இப்போது ஓட்ட விரும்பவில்லையா? CircleInd உங்களுக்கானது.',
    whoCards: [
      { icon: <PartyPopper size={32}/>, title: 'விழா / பார்ட்டி?', desc: 'திருமணம் அல்லது விழாவுக்கு செல்கிறீர்களா? ஓட்டுனரை அமர்த்துங்கள், மகிழ்ச்சியாக திரும்புங்கள்.' },
      { icon: <Briefcase size={32}/>, title: 'வணிக பயணம்', desc: 'முக்கியமான கூட்டம் உள்ளதா? தொழில்முறை ஓட்டுனர் ஓட்ட, நீங்கள் தயாரிக்கலாம்.' },
      { icon: <Users size={32}/>, title: 'குடும்ப பயணம்', desc: 'நீண்ட தூரம் ஓட்டுவது களைப்பாக இருக்கும். குடும்பத்துடன் பயணத்தை ரசியுங்கள்.' },
      { icon: <HeartPulse size={32}/>, title: 'மருத்துவ தேவை', desc: 'உடல் நலம் சரியில்லையா? பாதுகாப்பாக வீடு திரும்புங்கள்.' },
    ],

    howTag: 'எப்படி செயல்படுகிறது',
    howTitle: '3 எளிய படிகளில் ஓட்டுனரை பதிவு செய்யுங்கள்.',
    steps: [
      { icon: <MapPin size={28}/>, title: 'இடத்தை குறிக்கவும்', desc: 'உங்கள் கார் இருக்கும் இடத்தை தெரிவியுங்கள். ஓட்டுனர் உங்களிடம் வருவார்.' },
      { icon: <Clock size={28}/>, title: 'நேரத்தை தேர்வு செய்யுங்கள்', desc: '2 மணி நேரமா அல்லது முழு நாளா? உங்களுக்கு ஏற்றதை தேர்வு செய்யுங்கள்.' },
      { icon: <Car size={28}/>, title: 'ஓட்டுனர் வருகிறார்', desc: 'சரிபார்க்கப்பட்ட, மதிப்பிடப்பட்ட ஓட்டுனர் உங்கள் காரில் வந்து ஓட்டுவார்.' },
    ],

    whyTitle: 'வாடிக்கையாளர்கள் CircleInd ஐ ஏன் விரும்புகிறார்கள்',
    whyCards: [
      { icon: <Shield size={24}/>, title: 'சரிபார்க்கப்பட்ட & பாதுகாப்பான', desc: 'ஒவ்வொரு ஓட்டுனரும் பின்னணி சரிபார்ப்பு மற்றும் உரிமம் பெற்றவர்.' },
      { icon: <Star size={24}/>, title: 'உண்மையான மதிப்பீடுகள்', desc: 'மற்ற வாடிக்கையாளர்களின் உண்மையான மதிப்புரைகளை படியுங்கள்.' },
      { icon: <Car size={24}/>, title: 'உங்கள் சொந்த கார்', desc: 'அந்நியரின் கார் இல்லை. உங்கள் சொந்த வாகனத்தில் பயணியுங்கள்.' },
      { icon: <Phone size={24}/>, title: 'எளிதான பதிவு', desc: 'ஒரு நிமிடத்தில் ஓட்டுனரை பதிவு செய்யுங்கள். நேரலை வரைபடத்தில் பாருங்கள்.' },
      { icon: <Navigation size={24}/>, title: 'நேரலை கண்காணிப்பு', desc: 'ஓட்டுனர் எங்கே இருக்கிறார் என்று வரைபடத்தில் பாருங்கள்.' },
      { icon: <Smile size={24}/>, title: 'மன அமைதி', desc: 'போக்குவரத்து, நிறுத்துமிடம் எல்லாம் அவர்கள் பார்த்துக்கொள்வார்கள்.' },
    ],

    ctaTitle: 'இப்போதே முயற்சிக்கவும்?',
    ctaSub: 'உங்களுக்கு அருகில் ஓட்டுனரை தேடுங்கள் — ஒரு நிமிடம் மட்டுமே ஆகும்.',
    ctaBtn: 'அருகில் ஓட்டுனரை தேடு',

    washTag: 'அதிகாரபூர்வ பார்ட்னர்',
    washTitle: 'சிறந்த வாகன பராமரிப்பு.',
    washSub: <><strong style={{color: 'var(--accent-color)', fontWeight: 700}}>கோபிசெட்டிபாளையத்தின்</strong> சிறந்த வாஷிங் ஸ்டேஷன்களுடன் நாங்கள் அதிகாரபூர்வமாக இணைந்துள்ளோம். பைக் முதல் கனரக வாகனங்கள் வரை, உங்கள் வாகனத்திற்கு சிறப்பான கவனிப்பை வழங்கி, புதியது போல் மிளிரச் செய்கிறோம்.</>,
    washVehicles: ['பைக்', 'கார்', 'ஆட்டோ / மினி', 'டிராவலர்', 'கனரக வாகனம்'],
    washCards: [
      { icon: <Droplets size={28}/>, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', title: 'வெளிப்புற கழுவுதல்', desc: 'முழு அழுத்தம், நுரை கழுவுதல், கை தேய்ப்பு.' },
      { icon: <Wind size={28}/>, color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', title: 'உள்ளகம் சுத்தம்', desc: 'வேக்யூம், டாஷ்போர்டு துடைப்பு, மேட் சுத்தம்.' },
      { icon: <Sparkles size={28}/>, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', title: 'முழு விவரம்', desc: 'உள்ளே + வெளியே ஆழமான சுத்தம். வாக்ஸ் பாலிஷ்.' },
      { icon: <Zap size={28}/>, color: '#10b981', bg: 'rgba(16,185,129,0.1)', title: 'விரைவு கழுவுதல்', desc: '20 நிமிட விரைவு வாஷ் — அவசரமாக இருக்கும் போது.' },
    ],
    washCta: 'வாகன கழுவுதல் பதிவு செய்',

    mechanicTitle: 'சிறந்த மெக்கானிக் சேவைகள்.',
    mechanicSub: 'அனைத்து வகையான வாகனங்களுக்கும் நம்பகமான பழுதுபார்ப்பு மற்றும் பராமரிப்பு சேவைகளை வழங்க, கோபிசெட்டிபாளையத்தின் மிக நம்பகமான மெக்கானிக்குகளுடன் நாங்கள் இணைந்துள்ளோம்.',
    mechanicCards: [
      { icon: <Wrench size={28}/>, color: '#f97316', bg: 'rgba(249,115,22,0.1)', title: 'பொது சேவை (General Service)', desc: 'முழுமையான பரிசோதனை, ஆயில் மாற்றம் மற்றும் வழக்கமான பராமரிப்பு.' },
      { icon: <Zap size={28}/>, color: '#ef4444', bg: 'rgba(239,68,68,0.1)', title: 'மின் பழுது (Electrical Repair)', desc: 'பேட்டரி, வயரிங் மற்றும் எலக்ட்ரானிக்ஸ் பழுது.' },
      { icon: <Shield size={28}/>, color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', title: 'பிரேக் & சஸ்பென்ஷன்', desc: 'சிறந்த பிரேக் மற்றும் சஸ்பென்ஷன் பழுது மூலம் உங்கள் பாதுகாப்பை உறுதிசெய்க.' }
    ],
    mechanicCta: 'மெக்கானிக் சேவையை முன்பதிவு செய்',

    customerBenefitsTitle: 'ஏன் எங்களுடன் பயணிக்க வேண்டும்',
    customerBenefitsCards: [
      { icon: <ShieldCheck size={24}/>, title: 'சரிபார்க்கப்பட்ட & அனுபவமிக்க ஓட்டுனர்கள்' },
      { icon: <BadgeCheck size={24}/>, title: 'ஓட்டுனர் அடையாள அட்டை — சரிபார்க்கப்பட்ட பேட்ஜ், புகைப்படம், மதிப்பீடு & திறன்' },
      { icon: <IndianRupee size={24}/>, title: 'நிலையான & வெளிப்படையான கட்டணம்' },
      { icon: <IndianRupee size={24}/>, title: 'பேரம் இல்லை & கூடுதல் கட்டணம் இல்லை' },
      { icon: <Star size={24}/>, title: 'நம்பகமான உள்ளூர் பார்ட்னர் நெட்வொர்க்' },
      { icon: <Gift size={24}/>, title: 'ஆரம்ப வாடிக்கையாளர்களுக்கு சிறப்பு சலுகைகள்' }
    ],

    driverBenefitsTitle: 'ஏன் எங்களுடன் ஓட்ட வேண்டும்',
    driverBenefitsCards: [
      { icon: <Clock size={24}/>, title: 'நெகிழ்வான நேரங்கள் — உங்கள் நேரத்தை நீங்களே தேர்வு செய்யுங்கள்' },
      { icon: <MapPin size={24}/>, title: 'விருப்பத்திற்கு ஏற்ப சவாரிகளை தேர்வு செய்யலாம்' },
      { icon: <IndianRupee size={24}/>, title: 'நிலையான கட்டணம் — உத்தரவாதமான வருமானம், பேரம் இல்லை' },
      { icon: <ShieldCheck size={24}/>, title: 'உத்தரவாதமான வருமான அமைப்பு' },
      { icon: <Star size={24}/>, title: 'சிறந்த மதிப்பீடுகளுக்கு போனஸ் & சலுகைகள்' },
      { icon: <Shield size={24}/>, title: 'அடிப்படை காப்பீடு (விரைவில்)' },
      { icon: <Gift size={24}/>, title: 'ஓட்டுனர் வருமானத்தை தாண்டி கூடுதல் நன்மைகள்' }
    ],

    trustBadges: ['சரிபார்க்கப்பட்டவர்கள்', 'பேரம் இல்லை', 'நிலையான கட்டணம்'],

    teamTag: 'எங்கள் அணி',
    teamTitle: 'நிறுவனர்களை சந்தியுங்கள்',
    teamMembers: [
      { role: 'நிறுவனர் & CEO, கோபிசெட்டிபாளையம்', name: 'Thiyaaneswaran Thirumoorthy' },
      { role: 'இணை நிறுவனர் & ஓட்டுனர் செயல்பாட்டு தலைவர், கோபிசெட்டிபாளையம்', name: 'Thirumoorthy' }
    ],

    faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    faqs: [
      { q: 'ஓட்டுனரை எவ்வாறு பதிவு செய்வது?', a: '"Book a Driver" பொத்தானை அழுத்தி, வாட்ஸ்அப்பில் உங்கள் இடம் மற்றும் நேரத்தை பகிருங்கள்.' },
      { q: 'ஓட்டுனருக்கான கட்டணம் என்ன?', a: 'கோபிசெட்டிபாளையத்திற்குள் குறுகிய பயணங்களுக்கு ₹200 முதல் கட்டணம் ஆரம்பமாகிறது. நேரம் மற்றும் தூரத்தை பொறுத்து மாறும்.' },
      { q: 'ஓட்டுனர் வர எவ்வளவு நேரம் ஆகும்?', a: 'கோபிசெட்டிபாளையம் நகருக்குள் பொதுவாக 15-30 நிமிடங்களில் ஓட்டுனர் வந்துவிடுவார்.' },
      { q: 'ஓட்டுனர்கள் சரிபார்க்கப்பட்டவர்களா?', a: 'ஆம், அனைத்து ஓட்டுனர்களும் பின்னணி சரிபார்ப்பு செய்யப்பட்டவர்கள் மற்றும் முறையான உரிமம் பெற்றுள்ளனர்.' },
      { q: 'வெளியூர் பயணங்களுக்கு ஓட்டுனரை அமர்த்தலாமா?', a: 'நிச்சயமாக! குடும்ப பயணம் அல்லது தொழில்முறை பயணங்களுக்கு பல நாட்களுக்கு ஓட்டுனரை அமர்த்தலாம்.' },
      { q: 'வாகன கழுவும் சேவை எவ்வாறு செயல்படுகிறது?', a: 'நீங்கள் எளிதாக எங்கள் தளம் மூலம் வாகன கழுவும் சேவையை பதிவு செய்யலாம். எங்கள் நம்பகமான பார்ட்னர் வாஷிங் ஸ்டேஷனில் உங்கள் வாகனத்தை கொடுத்து சுத்தமாக கழுவி பெற்றுக்கொள்ளலாம்.' },
      { q: 'முழு விவர வாஷில் (Full Detail) என்னென்ன அடங்கும்?', a: 'வெளிப்புற ஃபோம் வாஷ், டயர் ஷைன், உள்ளகம் முழு வேக்யூம், டாஷ்போர்டு பாலிஷ் போன்றவை அடங்கும்.' },
      { q: 'எப்படி கட்டணம் செலுத்துவது?', a: 'சேவை முடிந்தவுடன் UPI (GPay, PhonePe) அல்லது ரொக்கமாக செலுத்தலாம்.' },
      { q: 'பதிவை ரத்து செய்ய முடியுமா?', a: 'ஆம், உங்கள் பயண நேரத்திற்கு 1 மணி நேரத்திற்கு முன்பு வரை இலவசமாக ரத்து செய்யலாம்.' },
      { q: 'இந்த சேவை கோபிசெட்டிபாளையத்திற்கு வெளியே கிடைக்குமா?', a: 'தற்போது, எங்கள் சேவைகள் கோபிசெட்டிபாளையம் மற்றும் அதனை சுற்றியுள்ள பகுதிகளில் மட்டுமே கிடைக்கிறது.' },
      { q: 'எதிர்பாராத விதமாக விபத்து ஏற்பட்டால் என்ன நடக்கும்?', a: 'எங்கள் ஓட்டுனர்களுக்கு அடிப்படை சுகாதார மற்றும் விபத்து காப்பீடு வழங்கி அவர்களின் நலனை உறுதி செய்கிறோம். வாகனத்தைப் பொறுத்தவரை, எங்கள் ஓட்டுனர்கள் உங்கள் சொந்த காரை ஓட்டுவதால், வாகனத்திற்கு ஏற்படும் எந்தவொரு சேதமும் உங்கள் காரின் விரிவான காப்பீட்டுக் கொள்கையின் கீழ் (Comprehensive Insurance) ஈடுசெய்யப்பட வேண்டும். எனவே, முன்பதிவு செய்வதற்கு முன் உங்கள் வாகனம் முழுமையாக காப்பீடு செய்யப்பட்டுள்ளதா என்பதை உறுதி செய்யுமாறு அன்புடன் கேட்டுக்கொள்கிறோம்.' },
    ],

    footer: '© 2025 CircleInd. உங்கள் கார். எங்கள் அக்கறை. உங்கள் ஓய்வு.',
  },
};
