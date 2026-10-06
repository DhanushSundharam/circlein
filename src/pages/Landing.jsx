import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Car, MapPin, Clock, ArrowRight, ChevronDown,
  Shield, Star, Phone, CheckCircle, Smile, Navigation, MessageCircle,
  PartyPopper, Briefcase, Users, HeartPulse,
  Droplets, Wrench, Sparkles, Truck, User, Zap, Wind, Brush, Globe, Bike, Van, Bus,
  ShieldCheck, BadgeCheck, IndianRupee, Gift
} from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import './Landing.css';

// ── Change this to your WhatsApp number ──
const WA_NUMBER = '918838038494'; // +91 88380 38494
const WA_MESSAGE = encodeURIComponent('Hi! I want to book a driver through CircleInd.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const WA_QR = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(WA_LINK)}&color=6d28d9&bgcolor=ffffff&margin=12`;

const WA_WASH_MESSAGE = encodeURIComponent('Hi! I want to book a vehicle wash through CircleInd.');
const WA_WASH_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_WASH_MESSAGE}`;

import { T } from '../utils/content';

const PILL_COLORS = [
  { bg: '#d1f4e6', dot: '#179373' }, // Teal
  { bg: '#dbeafe', dot: '#3b82f6' }, // Blue
  { bg: '#f3e8ff', dot: '#a855f7' }, // Purple
  { bg: '#ffedd5', dot: '#f97316' }, // Orange
  { bg: '#fce7f3', dot: '#ec4899' }, // Pink
];
const rawRoute = [[77.437875,11.451016],[77.437894,11.451157],[77.437511,11.45117],[77.437461,11.451174],[77.437142,11.451189],[77.43697,11.451265],[77.436887,11.451302],[77.436854,11.451317],[77.436433,11.451495],[77.43638,11.451506],[77.436336,11.451518],[77.436164,11.451565],[77.436069,11.451591],[77.435252,11.451661],[77.43521,11.451946],[77.435161,11.452475],[77.435128,11.452835],[77.43511,11.453033],[77.435114,11.453285],[77.435267,11.454461],[77.43529,11.454638],[77.435351,11.454907],[77.435362,11.454972],[77.435498,11.454973],[77.435661,11.454977],[77.435872,11.454983],[77.436376,11.454996],[77.436774,11.455006],[77.437024,11.455016],[77.437384,11.45503],[77.437593,11.455038],[77.438103,11.455056],[77.438206,11.455057],[77.438639,11.455056],[77.438834,11.455396],[77.438977,11.455599],[77.439146,11.455767],[77.439707,11.456213],[77.439786,11.456292],[77.439812,11.456319],[77.439889,11.456441],[77.440148,11.45693],[77.440249,11.457092],[77.440329,11.457207],[77.440372,11.457226],[77.440469,11.457327],[77.440611,11.457434],[77.441197,11.457749],[77.441557,11.457928],[77.441666,11.458004],[77.441913,11.458179],[77.442056,11.458284],[77.442256,11.45843],[77.442564,11.458625],[77.442833,11.458778],[77.443185,11.458868],[77.44326,11.458887],[77.443584,11.45897],[77.443644,11.459003],[77.443706,11.457652],[77.443708,11.457614],[77.444167,11.457581],[77.444262,11.457574],[77.444566,11.457544],[77.445562,11.457447],[77.445483,11.457097]];
const routeCoords = rawRoute.map(c => [c[1], c[0]]);

const RoutePathGenerator = ({ routeCoords, setCarPath }) => {
  const map = useMap();
  useEffect(() => {
    const generate = () => {
      const points = routeCoords.map(ll => map.latLngToContainerPoint(ll));
      setCarPath(points.map((p, i) => `${i===0?'M':'L'} ${p.x} ${p.y}`).join(' '));
    };
    generate();
    map.on('zoomend moveend resize', generate);
    return () => map.off('zoomend moveend resize', generate);
  }, [map, routeCoords, setCarPath]);
  return null;
};

const Landing = () => {
  const [lang, setLang] = useState('en');
  const [activeStep, setActiveStep] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [carPath, setCarPath] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const whoScrollRef = useRef(null);
  const whyScrollRef = useRef(null);

  useEffect(() => {
    const handleAutoScroll = (ref) => {
      if (ref.current && window.innerWidth <= 768) {
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        const scrollAmount = clientWidth * 0.85 + 16;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          ref.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          ref.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
        }
      }
    };

    const interval = setInterval(() => {
      handleAutoScroll(whoScrollRef);
      handleAutoScroll(whyScrollRef);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  const t = T[lang];

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

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    currentTarget.style.setProperty('--mouse-x', `${clientX}px`);
    currentTarget.style.setProperty('--mouse-y', `${clientY}px`);
  };

  return (
    <div className="landing-page" onMouseMove={handleMouseMove}>
      <div className="landing-glow"></div>
      <div className="lp-ambient-background">
        <div className="lp-blob lp-blob-1" style={{ transform: `translate3d(0, ${scrollY * 0.4}px, 0) rotate(${scrollY * 0.05}deg)` }}></div>
        <div className="lp-blob lp-blob-2" style={{ transform: `translate3d(0, ${scrollY * -0.25}px, 0) scale(${1 + scrollY * 0.001})` }}></div>
        <div className="lp-blob lp-blob-3" style={{ transform: `translate3d(${scrollY * -0.3}px, ${scrollY * 0.5}px, 0)` }}></div>
        <div className="lp-blob lp-blob-4" style={{ transform: `translate3d(${scrollY * 0.2}px, ${scrollY * -0.4}px, 0) rotate(${scrollY * -0.02}deg)` }}></div>
        <div className="lp-blob lp-blob-5" style={{ transform: `translate3d(${scrollY * -0.1}px, ${scrollY * 0.3}px, 0) scale(${1 + scrollY * 0.0005})` }}></div>
      </div>
      {/* ── SEO CONTENT BLOCK (visually hidden, crawlable by Google) ── */}
      <div style={{position:'absolute',width:'1px',height:'1px',overflow:'hidden',clip:'rect(0,0,0,0)',whiteSpace:'nowrap'}} aria-hidden="true">
        <h2>Gobi Driver Service &amp; Car Wash Service — CircleInd Gobichettipalayam</h2>
        <h3>Driver Hire in Gobichettipalayam</h3>
        <p>CircleInd is the #1 driver hire service in Gobichettipalayam (Gobi), Tamil Nadu. Hire a driver in Gobi. Hire a driver in Gobichettipalayam. Driver on hire Gobichettipalayam. Driver on call Gobichettipalayam. Personal driver Gobichettipalayam. Private driver Gobi. Driver service Gobi. Gobi driver service. Gobichettipalayam driver service. Driver near me Gobichettipalayam. Driver agency Gobichettipalayam. Car driver hire Gobichettipalayam. Acting driver Gobichettipalayam. Acting drivers in Gobichettipalayam. Acting driver Gobi. Temporary driver Gobichettipalayam. Driver on hourly basis Gobichettipalayam. Driver on daily basis Gobichettipalayam.</p>
        <h3>Driver for All Occasions in Gobichettipalayam</h3>
        <p>Book a driver in Gobichettipalayam for weddings, night outs, outstation trips, business travel, family trips, medical needs, hospital visits and daily commute. Wedding driver Gobichettipalayam. Night driver Gobi. Outstation driver Gobichettipalayam. Corporate driver Gobi. 24 hour driver Gobichettipalayam. Driver for party Gobichettipalayam. Driver for hospital Gobichettipalayam. Driver for function Gobichettipalayam. Driver for family trip Gobichettipalayam.</p>
        <h3>Verified Drivers with Fixed Pricing in Gobi</h3>
        <p>CircleInd offers verified drivers in Gobichettipalayam with fixed pricing and no bargaining. Experienced driver Gobichettipalayam. Safe driver Gobichettipalayam. Verified driver Gobichettipalayam. Driver for own car Gobichettipalayam. Driver on demand Gobi. Driver for rent Gobichettipalayam. Professional driver Tamil Nadu. Driver hire Erode. Driver hire Erode district.</p>
        <h3>Premium Car Wash Service in Gobichettipalayam</h3>
        <p>CircleInd offers premium car wash service in Gobichettipalayam. Car wash Gobi. Car wash service Gobi. Premium car wash Gobichettipalayam. Car washing service Gobichettipalayam. Car washing center Gobichettipalayam. Vehicle wash Gobichettipalayam. Vehicle wash Gobi. Car cleaning Gobichettipalayam. Car cleaning service Gobi. Best car wash Gobi. Car wash near me Gobichettipalayam.</p>
        <h3>All Vehicle Types — Bike, Car, Truck Wash in Gobi</h3>
        <p>Bike wash Gobichettipalayam. Bike wash Gobi. Two wheeler wash Gobichettipalayam. Car wash Gobichettipalayam. Truck wash Gobichettipalayam. Heavy vehicle wash Gobichettipalayam. Full detail car wash Gobichettipalayam. Express car wash Gobichettipalayam. Interior car cleaning Gobichettipalayam. Car interior cleaning Gobi. Car exterior wash Gobichettipalayam. Car detailing Gobichettipalayam. Automatic car wash Gobichettipalayam. Car seat cleaning Gobichettipalayam. Doorstep car wash Gobichettipalayam. Mobile car wash Gobi. Vehicle washing near me Gobichettipalayam.</p>
        <h3>CircleInd — Contact &amp; Booking</h3>
        <p>Serving Gobichettipalayam, Gobi, Erode district, Tamil Nadu. Contact CircleInd via WhatsApp for instant driver booking or car wash booking. CircleInd driver booking. CircleInd car wash booking. CircleInd Gobichettipalayam. circlein.in. circleindia. circlegobi. circlegobichettipalayam. CircleInd services. CircleInd verified driver. Driver hire Tamil Nadu. Acting driver Chennai. Acting driver Coimbatore. Acting driver Madurai. Acting driver Salem. Acting driver Trichy. Acting driver Tiruppur. Driver on call Tamil Nadu. erode driver. erode hire a drivers. eroad car wash. eroad. கோபிசெட்டிபாளையம் ஓட்டுனர். கோபி கார் வாஷ். வாகன சுத்திகரிப்பு கோபிசெட்டிபாளையம்.</p>
      </div>

      <button aria-label="Toggle language" className="lang-toggle-btn" onClick={() => setLang(l => l === 'en' ? 'ta' : 'en')}>
        <Globe size={16} />
        {lang === 'en' ? 'தமிழ்' : 'English'}
      </button>

      {/* ── HERO ────────────────────── */}
      <section id="home" className="lp-hero-new">
        <div className="hero-container">
          <div className="hero-left">
            <div className="lp-hero-content reveal-on-scroll">
              <div className="hero-eyebrow">HIRE VERIFIED DRIVERS</div>
              <h1 className="hero-headline">
                Your Car <br/>
                Our Care <br/>
                <span 
                  className="notion-pill"
                  style={{
                    '--pill-bg': PILL_COLORS[wordIndex].bg,
                    '--pill-dot': PILL_COLORS[wordIndex].dot
                  }}
                >
                  <span key={wordIndex} className="rotating-text">{t.heroWords[wordIndex]}</span>
                </span>
              </h1>
              <p className="hero-subheadline" itemProp="description">
                {t.heroSub}
              </p>
            </div>
            <div className="hero-badges-wrapper desktop-badges reveal-on-scroll" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '30px', marginBottom: '40px', alignSelf: 'flex-start' }}>
              <a href="#" aria-label="Get it on Google Play" style={{ display: 'block', height: '54px', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
                <img src="/playstore.svg" alt="Google Play Store Badge" style={{ height: '100%', width: 'auto' }} />
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ 
                height: '54px', 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0 28px', 
                borderRadius: '100px', 
                border: '1.5px solid #e5e7eb', 
                color: '#1a1a1a', 
                fontWeight: '600',
                fontSize: '16px',
                textDecoration: 'none',
                background: '#ffffff',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }} onMouseOver={e => {e.currentTarget.style.borderColor='#1a1a1a'; e.currentTarget.style.transform='translateY(-2px)'}} onMouseOut={e => {e.currentTarget.style.borderColor='#e5e7eb'; e.currentTarget.style.transform='translateY(0)'}}>
                Book a Driver
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-floating-mockups">
              <img src="/DemoImage.png?v=3" alt="CircleInd App Driver Search" className="hero-phone-mockup phone-left" />
              <img src="/homeshots.png?v=3" alt="CircleInd App Home Dashboard" className="hero-phone-mockup phone-center" />
              <img src="/third_phone.png?v=3" alt="CircleInd App Services" className="hero-phone-mockup phone-right" />
            </div>
          </div>
          
          {/* Mobile badges duplicate (rendered below phones on mobile) */}
          <div className="hero-badges-wrapper mobile-badges reveal-on-scroll" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '10px', marginBottom: '20px', alignSelf: 'center' }}>
            <a href="#" aria-label="Get it on Google Play" style={{ display: 'block', height: '54px', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform='scale(1)'}>
              <img src="/playstore.svg" alt="Google Play Store Badge" style={{ height: '100%', width: 'auto' }} />
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ 
              height: '54px', 
              display: 'flex', 
              alignItems: 'center', 
              padding: '0 28px', 
              borderRadius: '100px', 
              border: '1.5px solid #e5e7eb', 
              color: '#1a1a1a', 
              fontWeight: '600',
              fontSize: '16px',
              textDecoration: 'none',
              background: '#ffffff',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }} onMouseOver={e => {e.currentTarget.style.borderColor='#1a1a1a'; e.currentTarget.style.transform='translateY(-2px)'}} onMouseOut={e => {e.currentTarget.style.borderColor='#e5e7eb'; e.currentTarget.style.transform='translateY(0)'}}>
              Book a Driver
            </a>
          </div>
          
        </div>

        <div className="hero-arch-container">
          <div className="hero-arch-bg"></div>


          <div className="hero-mockup-window floating-element-2">
            <div className="mockup-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <div className="mockup-url">circleind.in</div>
            </div>
            <div className="mockup-body-calendar">
              <div className="calendar-grid-bg"></div>
              
              <div className="sticky-notes-board">
                <div className="hero-sticky-note note-yellow">
                  <div className="pushpin red-pin"></div>
                  <div className="note-text">Tomorrow 5AM:<br/>Airport drop ✈️</div>
                </div>
                <div className="hero-sticky-note note-pink">
                  <div className="pushpin blue-pin"></div>
                  <div className="note-text">Weekend:<br/>Family trip to Ooty 🌄</div>
                </div>
                <div className="hero-sticky-note note-blue">
                  <div className="pushpin green-pin"></div>
                  <div className="note-text">Monday:<br/>Daily office commute 🏢</div>
                </div>
                <div className="hero-sticky-note note-green">
                  <div className="pushpin yellow-pin"></div>
                  <div className="note-text">Next week:<br/>Book car wash 🧽</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ── WHO IS THIS FOR ─────────── */}
      <section id="about" className="lp-who reveal-on-scroll" aria-label="Who is CircleInd for?">
        <div className="lp-who-inner">
          <p className="lp-section-tag" style={{textAlign:'center', display:'block'}}>{t.whoTitle}</p>
          <h2 className="lp-section-title">{t.whoSub}</h2>
          <div className="pinned-cards-board" role="list" ref={whoScrollRef}>
            {/* Background dashed line */}
            <svg className="board-dashed-line" viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden="true">
              <path d="M 0,100 C 250,200 750,0 1000,100" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="10, 10" />
            </svg>
            
            {t.whoCards.map((c, i) => (
              <article key={i} className={`pinned-card card-angle-${i % 4}`} role="listitem">
                <div className="push-pin">
                  <div className={`pin-head pin-color-${i % 4}`}></div>
                  <div className="pin-shadow"></div>
                </div>
                
                <div className={`pinned-top bg-pastel-${i % 5}`}>
                  <span className={`pinned-number text-color-${i % 5}`}>0{i + 1}</span>
                  <div className="pinned-icon">{c.icon}</div>
                </div>
                
                <div className="pinned-bottom">
                  <h3 className="pinned-title">{c.title}</h3>
                  <p className="pinned-desc">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      


      {/* ── WHY CUSTOMERS LOVE IT ───── */}
      <section id="why" className="lp-why reveal-on-scroll" aria-label="Why customers love CircleInd">
        <div className="lp-why-inner">
          <h2 className="lp-section-title" style={{textAlign:'center', display:'block', marginBottom: '40px'}}>{t.whyTitle}</h2>
          <div className="lp-why-grid bento-grid" role="list" ref={whyScrollRef}>
            {t.whyCards.map((c, i) => (
              <article key={i} className={`lp-why-card bento-${i}`} role="listitem">
                <div className="bento-content">
                  <h3 className="lp-why-title">{c.title}</h3>
                  <p className="lp-why-desc">{c.desc}</p>
                </div>
                <div className="lp-why-icon bento-icon" aria-hidden="true">{c.icon}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── CTA ─────────────────────── */}
      <section id="contact" className="lp-calendar-cta" aria-label="Get started with CircleInd">
        <div className="calendar-bg-grid" aria-hidden="true">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <div key={day} className="calendar-header">{day}</div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="calendar-cell">
              <span className="calendar-date">{i + 1}</span>
              {i === 1 && <div className="calendar-scribble scribble-x">X</div>}
              {i === 3 && <div className="calendar-scribble scribble-text">No Subscription</div>}
              {i === 11 && <div className="calendar-scribble scribble-text">Cancel Anytime!</div>}
              {i === 24 && <div className="calendar-scribble scribble-check">✓</div>}
            </div>
          ))}
        </div>

        <div className="sticky-notes-cluster">
          {/* Guarantees Note - Yellow */}
          <div className="sticky-note note-yellow note-left">
            <div className="push-pin"><div className="pin-head pin-red"></div><div className="pin-shadow"></div></div>
            <div className="sticky-pill-container"><span className="sticky-pill pill-dark">GUARANTEES</span></div>
            <ul className="sticky-list">
              <li><CheckCircle size={20} className="sticky-icon"/> No subscription needed</li>
              <li><CheckCircle size={20} className="sticky-icon"/> Book in under 1 minute</li>
              <li><CheckCircle size={20} className="sticky-icon"/> Cancel anytime</li>
            </ul>
          </div>

          {/* Main Note - Blue */}
          <div className="sticky-note note-blue note-center">
            <div className="push-pin"><div className="pin-head pin-blue"></div><div className="pin-shadow"></div></div>
            <div className="sticky-pill-container"><span className="sticky-pill">QUICK START</span></div>
            <h2 className="sticky-title">{t.ctaTitle}</h2>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="sticky-action-btn">
              {t.ctaBtn} <ArrowRight size={24} aria-hidden="true" />
            </a>
          </div>

          {/* Promise Note - Pink */}
          <div className="sticky-note note-pink note-right">
            <div className="push-pin"><div className="pin-head pin-yellow"></div><div className="pin-shadow"></div></div>
            <div className="sticky-pill-container"><span className="sticky-pill pill-dark">THE PROMISE</span></div>
            <p className="sticky-desc text-dark">{t.ctaSub}</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <Footer lang={lang} setLang={setLang} />

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
