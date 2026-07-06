import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Car, MapPin, Clock, ArrowRight, ChevronDown,
  Shield, Star, Phone, CheckCircle, Smile, Navigation, MessageCircle,
  PartyPopper, Briefcase, Users, HeartPulse,
  Droplets, Wrench, Sparkles, Truck, User, Zap, Wind, Brush, Globe, Bike, Van, Bus,
  ShieldCheck, BadgeCheck, IndianRupee, Gift
} from 'lucide-react';
import Logo from '../components/Logo';
import './Landing.css';

// ── Change this to your WhatsApp number ──
const WA_NUMBER = '918838038494'; // +91 88380 38494
const WA_MESSAGE = encodeURIComponent('Hi! I want to book a driver through CircleInd.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const WA_QR = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(WA_LINK)}&color=6d28d9&bgcolor=ffffff&margin=12`;

const T = {
  en: {
    langBtn: 'தமிழ்',
    chip: 'Trusted by families & professionals',
    heroTitle1: 'Your Car.',
    heroTitle2: 'Our Care.',
    heroTitle3: 'Your Comfort.',
    heroSub: <>Tired of driving or washing your vehicle? Hire a professional driver to drive your own car, or book a premium all vehicle washing. Available specifically in <strong className="lp-gradient-text">Gobichettipalayam</strong>.</>,
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
    washSub: <>We've partnered with <strong style={{color: '#fff', fontWeight: 700}}>Gobichettipalayam’s</strong> finest washing stations to bring you premium care. From bikes to heavy lorries, our official partners ensure a sparkling showroom finish every time.</>,
    washVehicles: ['Bike', 'Car', 'Auto / Mini', 'Traveller', 'Heavy Vehicle'],
    washCards: [
      { icon: <Droplets size={28}/>, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', title: 'Exterior Wash', desc: 'Full pressure rinse, foam wash, hand scrub & squeegee dry.' },
      { icon: <Wind size={28}/>, color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', title: 'Interior Clean', desc: 'Vacuum, dashboard wipe, mat clean & interior fresh spray.' },
      { icon: <Sparkles size={28}/>, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', title: 'Full Detail', desc: 'Inside + outside deep clean. Wax polish & tyre shine.' },
      { icon: <Zap size={28}/>, color: '#10b981', bg: 'rgba(16,185,129,0.1)', title: 'Express Wash', desc: 'Quick 20-min wash for when you are in a hurry.' },
    ],
    washCta: 'Book All Vehicle Washing',

    customerBenefitsTitle: 'Why Ride With Us',
    customerBenefitsCards: [
      { icon: <ShieldCheck size={24}/>, title: 'Verified & experienced drivers' },
      { icon: <BadgeCheck size={24}/>, title: 'Driver ID card — badge number, photo, rating visible on request' },
      { icon: <IndianRupee size={24}/>, title: 'Fixed, transparent pricing — no bargaining, no surge' },
      { icon: <Star size={24}/>, title: 'Trusted local partner network' },
      { icon: <Gift size={24}/>, title: 'Launch offers & rewards for early users' }
    ],

    driverBenefitsTitle: 'Why Drive With Us',
    driverBenefitsCards: [
      { icon: <Clock size={24}/>, title: 'Flexible ride slots — choose your own timing' },
      { icon: <MapPin size={24}/>, title: 'Pick rides by occasion/route preference' },
      { icon: <IndianRupee size={24}/>, title: 'Fixed fare — guaranteed, no bargaining' },
      { icon: <ShieldCheck size={24}/>, title: 'Guaranteed income structure' },
      { icon: <Star size={24}/>, title: 'Top-rated bonus & performance rewards' },
      { icon: <Shield size={24}/>, title: 'Basic insurance (rolling out soon)' },
      { icon: <Gift size={24}/>, title: 'Extra perks beyond driving income' }
    ],

    trustBadges: ['Verified', 'No Bargaining', 'Fixed Price'],

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
    ],

    footer: '© 2025 CircleInd. Your Car. Our Care. Your Comfort.',
  },
  ta: {
    langBtn: 'English',
    chip: 'குடும்பங்கள் மற்றும் தொழில்முறையினர் நம்பும் சேவை',
    heroTitle1: 'உங்கள் கார்.',
    heroTitle2: 'எங்கள் சிறந்த ஓட்டுனர்கள்.',
    heroTitle3: 'உங்கள் ஓய்வு.',
    heroSub: <>ஓட்டுவதில் அல்லது வாகனம் கழுவுவதில் சோர்வாக இருக்கிறீர்களா? உங்கள் சொந்த காரை ஓட்ட ஒரு தொழில்முறை ஓட்டுனரை அமர்த்துங்கள், அல்லது சிறந்த அனைத்து வாகன கழுவும் சேவையை பெறுங்கள். குறிப்பாக <strong className="lp-gradient-text">கோபிசெட்டிபாளையம்</strong> பகுதியில் மட்டும்.</>,
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
    washSub: <><strong style={{color: '#fff', fontWeight: 700}}>கோபிசெட்டிபாளையத்தின்</strong> சிறந்த வாஷிங் ஸ்டேஷன்களுடன் நாங்கள் அதிகாரபூர்வமாக இணைந்துள்ளோம். பைக் முதல் கனரக லாரிகள் வரை, உங்கள் வாகனத்திற்கு சிறப்பான கவனிப்பை வழங்கி, புதியது போல் மிளிரச் செய்கிறோம்.</>,
    washVehicles: ['பைக்', 'கார்', 'ஆட்டோ / மினி', 'டிராவலர்', 'கனரக வாகனம்'],
    washCards: [
      { icon: <Droplets size={28}/>, color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', title: 'வெளிப்புற கழுவுதல்', desc: 'முழு அழுத்தம், நுரை கழுவுதல், கை தேய்ப்பு.' },
      { icon: <Wind size={28}/>, color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)', title: 'உள்ளகம் சுத்தம்', desc: 'வேக்யூம், டாஷ்போர்டு துடைப்பு, மேட் சுத்தம்.' },
      { icon: <Sparkles size={28}/>, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', title: 'முழு விவரம்', desc: 'உள்ளே + வெளியே ஆழமான சுத்தம். வாக்ஸ் பாலிஷ்.' },
      { icon: <Zap size={28}/>, color: '#10b981', bg: 'rgba(16,185,129,0.1)', title: 'விரைவு கழுவுதல்', desc: '20 நிமிட விரைவு வாஷ் — அவசரமாக இருக்கும் போது.' },
    ],
    washCta: 'வாகன கழுவுதல் பதிவு செய்',

    customerBenefitsTitle: 'Why Ride With Us',
    customerBenefitsCards: [
      { icon: <ShieldCheck size={24}/>, title: 'Verified & experienced drivers' },
      { icon: <BadgeCheck size={24}/>, title: 'Driver ID card — badge number, photo, rating visible on request' },
      { icon: <IndianRupee size={24}/>, title: 'Fixed, transparent pricing — no bargaining, no surge' },
      { icon: <Star size={24}/>, title: 'Trusted local partner network' },
      { icon: <Gift size={24}/>, title: 'Launch offers & rewards for early users' }
    ],

    driverBenefitsTitle: 'Why Drive With Us',
    driverBenefitsCards: [
      { icon: <Clock size={24}/>, title: 'Flexible ride slots — choose your own timing' },
      { icon: <MapPin size={24}/>, title: 'Pick rides by occasion/route preference' },
      { icon: <IndianRupee size={24}/>, title: 'Fixed fare — guaranteed, no bargaining' },
      { icon: <ShieldCheck size={24}/>, title: 'Guaranteed income structure' },
      { icon: <Star size={24}/>, title: 'Top-rated bonus & performance rewards' },
      { icon: <Shield size={24}/>, title: 'Basic insurance (rolling out soon)' },
      { icon: <Gift size={24}/>, title: 'Extra perks beyond driving income' }
    ],

    trustBadges: ['Verified', 'No Bargaining', 'Fixed Price'],

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
    ],

    footer: '© 2025 CircleInd. உங்கள் கார். எங்கள் அக்கறை. உங்கள் ஓய்வு.',
  },
};

const Landing = () => {
  const [lang, setLang] = useState('en');
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const t = T[lang];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">
      <button aria-label="Toggle language" className="lang-toggle-btn" onClick={() => setLang(l => l === 'en' ? 'ta' : 'en')}>
        <Globe size={16} />
        {lang === 'en' ? 'தமிழ்' : 'English'}
      </button>

      {/* ── HERO ────────────────────── */}
      <section id="home" className="lp-hero">
        <div className="lp-blob lp-blob-1" />
        <div className="lp-blob lp-blob-2" />
        <div className="lp-blob lp-blob-3" />

        {/* ── SCATTERED FLOATING CARDS ── */}
        <div className="hero-floating-card fc-night-out">
          <div className="icon-circle" style={{background:'rgba(168,85,247,0.1)',color:'#a855f7'}}>
            <PartyPopper size={20} />
          </div>
          <div>
            <p className="float-card-label">Night Out</p>
            <h4 className="float-card-title">Going to a wedding?</h4>
            <p className="float-card-desc">Hire a driver &amp; get home safely in your own car.</p>
          </div>
        </div>

        <div className="hero-floating-card fc-wash-card">
          <div className="icon-circle" style={{background:'rgba(59,130,246,0.1)',color:'#3b82f6'}}>
            <Droplets size={20} />
          </div>
          <div>
            <p className="float-card-label">Premium Care</p>
            <h4 className="float-card-title">Need a quick wash?</h4>
            <p className="float-card-desc">Book a professional vehicle wash at your convenience.</p>
          </div>
        </div>

        <div className="hero-floating-card fc-family">
          <div className="icon-circle" style={{background:'rgba(16,185,129,0.1)',color:'#10b981'}}>
            <Users size={20} />
          </div>
          <div>
            <p className="float-card-label">Family Trips</p>
            <h4 className="float-card-title">Long drive ahead?</h4>
            <p className="float-card-desc">Relax with family. Let us handle the road.</p>
          </div>
        </div>

        <div className="hero-floating-card fc-business">
          <div className="icon-circle" style={{background:'rgba(99,102,241,0.1)',color:'#6366f1'}}>
            <Briefcase size={20} />
          </div>
          <div>
            <p className="float-card-label">Business Travel</p>
            <h4 className="float-card-title">Big meeting today?</h4>
            <p className="float-card-desc">Prepare in the back seat. We drive.</p>
          </div>
        </div>

        <div className="hero-floating-card fc-medical">
          <div className="icon-circle" style={{background:'rgba(239,68,68,0.1)',color:'#ef4444'}}>
            <HeartPulse size={20} />
          </div>
          <div>
            <p className="float-card-label">Medical Need</p>
            <h4 className="float-card-title">Not feeling well?</h4>
            <p className="float-card-desc">Get driven home safely, no cab needed.</p>
          </div>
        </div>

        {/* ── FLOATING BRAND LOGO (RIGHT SPACE) ── */}
        <div className="hero-floating-logo">
          <Logo size={160} />
        </div>

        <div className="lp-hero-inner reveal-on-scroll">
          <div className="lp-chip">
            <span className="lp-chip-dot" />
            {t.chip}
          </div>

          <h1 className="lp-hero-title">
            {t.heroTitle1}<br />
            <span className="lp-gradient-text">{t.heroTitle2}</span><br />
            {t.heroTitle3}
          </h1>

          <p className="lp-hero-sub">{t.heroSub}</p>

          <div className="lp-hero-cta">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-btn-primary">
              {t.heroCta1} <ArrowRight size={18} />
            </a>
            <a href="#how" className="lp-btn-ghost">
              {t.heroCta2} <ChevronDown size={18} />
            </a>
          </div>

          {/* ── LIVE RADAR MAP ANIMATION ── */}
          <div className="lp-hero-radar">
            {/* Center pulsing point (user) */}
            <div className="radar-center">
              <div className="radar-pulse"></div>
              <div className="radar-pulse delay"></div>
              <div className="user-dot">
                <Logo size={52} />
              </div>
            </div>

            {/* Floating Service Markers */}
            <div className="driver-marker d1">
              <Car size={16} />
              <span className="eta-badge">Driver - 3 min</span>
            </div>
            <div className="driver-marker d2" style={{ background: '#3b82f6', borderColor: 'transparent' }}>
              <Droplets size={16} color="#fff" />
              <span className="eta-badge">Wash - 5 min</span>
            </div>
            <div className="driver-marker d3">
              <Car size={16} style={{ color: '#94a3b8' }} />
            </div>
            <div className="driver-marker d4" style={{ background: '#3b82f6', borderColor: 'transparent' }}>
              <Droplets size={16} color="#fff" />
              <span className="eta-badge">Wash - 2 min</span>
            </div>
            <div className="driver-marker d5">
              <Car size={16} />
              <span className="eta-badge">Driver - 8 min</span>
            </div>
            <div className="driver-marker d6">
              <Droplets size={16} style={{ color: '#93c5fd' }} />
            </div>

            <div className="radar-status">
              <span className="status-dot"></span> CircleInd: Finding drivers, car wash...
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ─────────── */}
      <section id="about" className="lp-who reveal-on-scroll">
        <div className="lp-who-inner">
          <div className="lp-section-tag" style={{textAlign:'center', display:'block'}}>{t.whoTitle}</div>
          <h2 className="lp-section-title">{t.whoSub}</h2>
          <div className="lp-who-grid">
            {t.whoCards.map((c, i) => (
              <div key={i} className="lp-who-card">
                <div className="lp-who-emoji">{c.icon}</div>
                <h3 className="lp-who-title">{c.title}</h3>
                <p className="lp-who-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────── */}
      <section id="how" className="lp-how reveal-on-scroll">
        <div className="lp-section-tag">{t.howTag}</div>
        <h2 className="lp-section-title">{t.howTitle}</h2>

        <div className="lp-steps lp-steps-3">
          {t.steps.map((s, i) => (
            <div
              key={i}
              className={`lp-step ${activeStep === i ? 'lp-step-active' : ''}`}
              onMouseEnter={() => setActiveStep(i)}
            >
              <div className="lp-step-num">0{i + 1}</div>
              <div className="lp-step-icon">{s.icon}</div>
              <h3 className="lp-step-title">{s.title}</h3>
              <p className="lp-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAR WASH SECTION ─────────── */}
      <section id="carwash" className="lp-carwash reveal-on-scroll">
        <div className="lp-carwash-inner">

          {/* Heading */}
          <div className="lp-carwash-header">
            <div className="lp-section-tag" style={{color:'#3b82f6'}}>
              <Droplets size={14} style={{verticalAlign:'middle', marginRight:6}}/>{t.washTag}
            </div>
            <h2 className="lp-section-title" style={{color:'#0f172a'}}>{t.washTitle}</h2>
            <p className="lp-carwash-sub">{t.washSub}</p>

            <div className="lp-wash-vehicles">
              <div className="lp-wash-vehicle-item">
                <div className="v-icon-wrap"><Bike size={24} /></div>
                <span>{t.washVehicles[0]}</span>
              </div>
              <div className="lp-wash-vehicle-item">
                <div className="v-icon-wrap"><Car size={24} /></div>
                <span>{t.washVehicles[1]}</span>
              </div>
              <div className="lp-wash-vehicle-item">
                <div className="v-icon-wrap"><Van size={24} /></div>
                <span>{t.washVehicles[2]}</span>
              </div>
              <div className="lp-wash-vehicle-item">
                <div className="v-icon-wrap"><Bus size={24} /></div>
                <span>{t.washVehicles[3]}</span>
              </div>
              <div className="lp-wash-vehicle-item">
                <div className="v-icon-wrap"><Truck size={24} /></div>
                <span>{t.washVehicles[4]}</span>
              </div>
            </div>
          </div>

          {/* 4 Cards — Clean Scatter Layout */}
          <div className="lp-wash-scatter">

            {/* Left column: 2 cards */}
            <div className="lp-wash-col">
              <div className="lp-wash-card wash-card-tl">
                <div className="lp-wash-icon" style={{background: t.washCards[0].bg, color: t.washCards[0].color}}>
                  {t.washCards[0].icon}
                </div>
                <h4 className="lp-wash-title">{t.washCards[0].title}</h4>
                <p className="lp-wash-desc">{t.washCards[0].desc}</p>
              </div>
              <div className="lp-wash-card wash-card-bl">
                <div className="lp-wash-icon" style={{background: t.washCards[2].bg, color: t.washCards[2].color}}>
                  {t.washCards[2].icon}
                </div>
                <h4 className="lp-wash-title">{t.washCards[2].title}</h4>
                <p className="lp-wash-desc">{t.washCards[2].desc}</p>
              </div>
            </div>

            {/* Centre visual */}
            <div className="lp-wash-centre">
              <div className="wash-centre-ring wash-ring-1" />
              <div className="wash-centre-ring wash-ring-2" />
              <div className="wash-centre-core">
                <Droplets size={36} color="#ffffff" />
                <span style={{textAlign: 'center', lineHeight: '1.2'}}>All Vehicle<br/>Washing</span>
              </div>
            </div>

            {/* Right column: 2 cards */}
            <div className="lp-wash-col">
              <div className="lp-wash-card wash-card-tr">
                <div className="lp-wash-icon" style={{background: t.washCards[1].bg, color: t.washCards[1].color}}>
                  {t.washCards[1].icon}
                </div>
                <h4 className="lp-wash-title">{t.washCards[1].title}</h4>
                <p className="lp-wash-desc">{t.washCards[1].desc}</p>
              </div>
              <div className="lp-wash-card wash-card-br">
                <div className="lp-wash-icon" style={{background: t.washCards[3].bg, color: t.washCards[3].color}}>
                  {t.washCards[3].icon}
                </div>
                <h4 className="lp-wash-title">{t.washCards[3].title}</h4>
                <p className="lp-wash-desc">{t.washCards[3].desc}</p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-btn-primary" style={{marginTop:'40px', alignSelf:'center'}}>
            {t.washCta} <ArrowRight size={18} />
          </a>

        </div>
      </section>

      {/* ── CUSTOMER & DRIVER BENEFITS ── */}
      <section id="benefits" className="lp-benefits">
        
        {/* Customer Benefits - White Background */}
        <div className="lp-benefits-customer reveal-on-scroll">
          <div className="lp-benefits-inner">
            <h2 className="lp-section-title">{t.customerBenefitsTitle}</h2>
            <div className="lp-benefits-grid">
              {t.customerBenefitsCards.map((c, i) => (
                <div key={i} className="lp-benefits-card customer-card">
                  <div className="lp-benefits-icon">{c.icon}</div>
                  <h4 className="lp-benefits-title">{c.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="lp-trust-strip reveal-on-scroll">
          <div className="lp-trust-strip-inner">
            {t.trustBadges.map((badge, i) => (
              <React.Fragment key={i}>
                <span className="lp-trust-badge">{badge}</span>
                {i < t.trustBadges.length - 1 && <span className="lp-trust-dot">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Driver Benefits - Purple Background */}
        <div className="lp-benefits-driver reveal-on-scroll">
          <div className="lp-benefits-inner">
            <h2 className="lp-section-title" style={{color: '#fff'}}>{t.driverBenefitsTitle}</h2>
            <div className="lp-benefits-grid">
              {t.driverBenefitsCards.map((c, i) => (
                <div key={i} className="lp-benefits-card driver-card">
                  <div className="lp-benefits-icon">{c.icon}</div>
                  <h4 className="lp-benefits-title">{c.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </section>

      {/* ── WHY CUSTOMERS LOVE IT ───── */}
      <section id="why" className="lp-why reveal-on-scroll">
        <div className="lp-why-inner">
          <div className="lp-section-tag light" style={{textAlign:'center', display:'block'}}>{t.whyTitle}</div>
          <div className="lp-why-grid">
            {t.whyCards.map((c, i) => (
              <div key={i} className="lp-why-card">
                <div className="lp-why-icon">{c.icon}</div>
                <h4 className="lp-why-title">{c.title}</h4>
                <p className="lp-why-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────── */}
      <section id="contact" className="lp-cta">
        <div className="lp-cta-glow" />
        <div className="lp-cta-check-row">
          {['No subscription needed', 'Book in under 1 minute', 'Cancel anytime'].map((t2, i) => (
            <span key={i} className="lp-cta-check"><CheckCircle size={16}/> {t2}</span>
          ))}
        </div>
        <h2 className="lp-cta-title">{t.ctaTitle}</h2>
        <p className="lp-cta-sub">{t.ctaSub}</p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-btn-primary lp-btn-large">
          {t.ctaBtn} <ArrowRight size={20} />
        </a>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer className="lp-footer">
        {/* ── CLASSY APPLE-STYLE WHATSAPP BLOCK ── */}
        <div className="lp-wa-classy-block reveal-on-scroll">
          <div className="lp-wa-classy-qr-wrap">
            <img src={WA_QR} alt="WhatsApp QR Code" className="lp-wa-classy-qr" />
          </div>
          <div className="lp-wa-classy-content">
            <h3 className="lp-wa-classy-heading">Need a driver instantly?</h3>
            <p className="lp-wa-classy-sub">Scan the code or tap the button to chat with our support team on WhatsApp. Fast, simple, and direct.</p>
            <a aria-label="Chat with us on WhatsApp" href={WA_LINK} target="_blank" rel="noopener noreferrer" className="lp-wa-classy-btn">
              <svg viewBox="0 0 24 24" fill="#25d366" width="22" height="22">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="lp-footer-divider" />
        <div className="lp-footer-brand">
          <Logo size={22} />
          <span>{lang === 'en' ? 'CircleInd' : 'CircleInd'}</span>
        </div>
        <div className="lp-footer-contact">
          <a href="mailto:circleindrive@gmail.com">circleindrive@gmail.com</a>
          <span className="dot-sep">•</span>
          <a href="tel:+918838038494">+91 88380 38494</a>
          <span className="dot-sep">•</span>
          <span>Gobichettipalayam</span>
        </div>
        <p className="lp-footer-copy">{t.footer}</p>
      </footer>

      {/* ── CONCISE WHATSAPP PILL ─── */}
      <a aria-label="Chat with CircleInd on WhatsApp" href={WA_LINK} target="_blank" rel="noopener noreferrer" className="wa-premium-pill">
        <div className="wa-pill-icon">
          <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="wa-ping-ring" />
        </div>
        <div className="wa-pill-text">
          <span className="wa-pill-title">Need a driver?</span>
          <span className="wa-pill-sub">Chat with us</span>
        </div>
      </a>
    </div>
  );
};

export default Landing;
