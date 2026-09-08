import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Car, MapPin, Clock, ArrowRight, ChevronDown,
  Shield, Star, Phone, CheckCircle, Smile, Navigation, MessageCircle,
  PartyPopper, Briefcase, Users, HeartPulse,
  Droplets, Wrench, Sparkles, Truck, User, Zap, Wind, Brush, Globe, Bike, Van, Bus,
  ShieldCheck, BadgeCheck, IndianRupee, Gift,
  MoreHorizontal, Heart, Send, Bookmark
} from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import './Landing.css';
import './Team.css';

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

const Team = () => {
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
    <div className="team-page pt-24">
      <div className="team-main-content">
        {/* ── HERO SECTION ────────────── */}
        <section className="team-hero reveal-on-scroll">
          <h1>Meet our beautiful team</h1>
          <p>Our philosophy is simple; hire great people and give them the resources and support to do their best work.</p>
          <div className="team-hero-actions">
            {/* Keeping it clean, as per Untitled UI */}
            {/* You can add buttons here if needed later */}
          </div>
        </section>

        {/* ── TEAM CARDS ────────────── */}
        <section className="team-grid-container reveal-on-scroll">
          <div className="insta-team-grid">
            {t.teamMembers.map((member, i) => (
              <article key={i} className={`insta-team-card ${i % 2 === 0 ? 'bg-blue' : 'bg-black'}`}>
                
                <div className="insta-header">
                  <div className="insta-user">
                    <div className="insta-avatar">
                      <User size={14} color="#fff" />
                    </div>
                    <span className="insta-username">circleind</span>
                  </div>
                  <MoreHorizontal size={20} color="#111" />
                </div>
                
                <div className="insta-body">
                  <h3 className="insta-name">{member.name}</h3>
                  <p className="insta-role">{member.role}</p>
                  
                  {i % 2 === 0 ? (
                    <div className="insta-graphic-blue">
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="#111" strokeWidth="4" />
                        <path d="M 20 50 Q 50 10 80 50 T 20 50" fill="none" stroke="#111" strokeWidth="4" />
                      </svg>
                    </div>
                  ) : (
                    <div className="insta-graphic-black">
                      <div className="blue-blot b1"></div>
                      <div className="blue-blot b2"></div>
                      <div className="blue-blot b3"></div>
                    </div>
                  )}
                </div>
                
                <div className="insta-footer">
                  <div className="insta-actions-left">
                    <Heart size={22} color="#111" />
                    <MessageCircle size={22} color="#111" />
                    <Send size={22} color="#111" />
                  </div>
                  <div className="insta-actions-right">
                    <Bookmark size={22} color="#111" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer lang={lang} setLang={setLang} />
    </div>
);
};

export default Team;