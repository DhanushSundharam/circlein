import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
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
import './Services.css';

// ── Change this to your WhatsApp number ──
const WA_NUMBER = '918838038494'; // +91 88380 38494
const WA_MESSAGE = encodeURIComponent('Hi! I want to book a driver through CircleInd.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const WA_QR = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(WA_LINK)}&color=6d28d9&bgcolor=ffffff&margin=12`;

const WA_WASH_MESSAGE = encodeURIComponent('Hi! I want to book a vehicle wash through CircleInd.');
const WA_WASH_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_WASH_MESSAGE}`;

const WA_MECHANIC_MESSAGE = encodeURIComponent('Hi! I need mechanic services through CircleInd.');
const WA_MECHANIC_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MECHANIC_MESSAGE}`;

import { T } from '../utils/content';

const PILL_COLORS = [
  { bg: '#d1f4e6', dot: '#179373' }, // Teal
  { bg: '#dbeafe', dot: '#3b82f6' }, // Blue
  { bg: '#f3e8ff', dot: '#a855f7' }, // Purple
  { bg: '#ffedd5', dot: '#f97316' }, // Orange
  { bg: '#fce7f3', dot: '#ec4899' }, // Pink
];

const Services = () => {
  const [lang, setLang] = useState('en');
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
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
    <div className="services-page pt-24">
      {/* ── HERO SECTION ────────────── */}
      <section className="services-hero reveal-on-scroll">
        <h1>Premium services<br/>at your fingertips.</h1>
        <p>From routine rides to your most important trips, CircleInd reliably completes tasks end-to-end, powered by Gobichettipalayam's finest partners.</p>
      </section>

      <main className="lp-main">
        
        {/* ── FEATURE 1: HOW IT WORKS (DRIVER) ────────────── */}
        <section className="feature-split-section reveal-on-scroll">
          <div className="feature-text-content">
            <h2>{t.howTitle}</h2>
            <p>We've streamlined the driver booking process. Tell us where your car is, choose how long you need the driver, and we'll dispatch a verified professional directly to you.</p>
            <p>Our philosophy is simple: provide safe, stress-free rides in the comfort of your own vehicle.</p>
          </div>
          
          <div className="feature-visual bg-gradient-purple">
            <div className="mockup-container purple-mockup">
              {t.steps.map((s, i) => (
                <div key={i} className="mockup-step">
                  <div className="mockup-icon">
                    {s.icon}
                  </div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURE 2: PREMIUM CAR WASH ────────────── */}
        <section className="feature-split-section reverse reveal-on-scroll">
          <div className="feature-text-content">
            <h2>{t.washTitle}</h2>
            <p>{t.washSub}</p>
            <div className="services-cta-wrap" style={{ textAlign: 'left', marginTop: '32px' }}>
              <a
                href={WA_WASH_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="services-cta-btn"
                title="Book a vehicle wash via WhatsApp — CircleInd Gobichettipalayam"
                aria-label="Book All Vehicle Washing via WhatsApp"
              >
                {t.washCta} <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="feature-visual bg-gradient-blue">
             <div className="mockup-container blue-mockup">
               <div className="mockup-wash-list">
                 {t.washCards.map((card, idx) => (
                   <div key={idx} className="mockup-wash-card">
                     <div className="mockup-wash-icon" style={{ background: card.bg, color: card.color }}>
                       {card.icon}
                     </div>
                     <div>
                       <h4>{card.title}</h4>
                       <p>{card.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </section>

        {/* ── FEATURE 3: MECHANIC SERVICES ────────────── */}
        <section className="feature-split-section reveal-on-scroll">
          <div className="feature-text-content">
            <h2>{t.mechanicTitle}</h2>
            <p>{t.mechanicSub}</p>
            <div className="services-cta-wrap" style={{ textAlign: 'left', marginTop: '32px' }}>
              <a
                href={WA_MECHANIC_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="services-cta-btn"
                title="Book a mechanic via WhatsApp — CircleInd Gobichettipalayam"
                aria-label="Book Mechanic Service via WhatsApp"
              >
                {t.mechanicCta} <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div className="feature-visual bg-gradient-orange">
            <div className="mockup-container purple-mockup">
              {t.mechanicCards.map((card, i) => (
                <div key={i} className="mockup-step">
                  <div className="mockup-icon" style={{ color: card.color }}>
                    {card.icon}
                  </div>
                  <div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer lang={lang} setLang={setLang} />
    </div>
);
};

export default Services;