import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './WhyUs.css'; 
import { T } from '../utils/content';

const WhyUs = () => {
  const [lang, setLang] = useState('en');
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

    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="why-us-page pt-24">
      
      {/* ── HERO SECTION ── */}
      <section className="wu-hero">
        <div className="wu-hero-inner">
          <h1 className="reveal-up">
            Explore <span className="highlight-pill yellow">better</span> rides,<br />
            inspire your next<br />
            journey <strong>with us</strong>.
          </h1>
          <div className="wu-scroll-indicator reveal-up" style={{transitionDelay: '0.2s'}}>
            Scroll Down
          </div>
        </div>
        <div className="wu-hero-desc reveal-up" style={{transitionDelay: '0.4s'}}>
          We are a team of drivers, tech innovators, and customer support specialists. Together, we believe that progress only happens when you refuse to play things safe.
        </div>
      </section>

      <main>
        
        {/* ── CUSTOMER SECTION ── */}
        <section className="wu-feature reveal-up">
          <div className="wu-feature-text">
            <h2>Tomorrow should<br/>be better than <span className="highlight-pill">today</span></h2>
            <p>
              We are committed to providing the safest, most transparent, and reliable ride experience. Together, we believe that progress only happens when you refuse to play things safe.
            </p>
            <Link to="/#home" className="wu-link">
              Book a Ride <ArrowRight size={16} />
            </Link>
          </div>
          <div className="wu-feature-img">
            <img src="/customer_ride.jpg" alt="Happy customer in a premium ride" />
          </div>
        </section>

        {/* ── DRIVER SECTION ── */}
        <section className="wu-feature reverse reveal-up">
          <div className="wu-feature-text">
            <h2>See how we can<br/>help you <span className="highlight-pill" style={{backgroundColor: '#e0f2fe'}}>progress</span></h2>
            <p>
              Join a community that respects your work and maximizes your earnings. We add a layer of fearless insights and action that allows changemakers to accelerate their progress in areas such as driving, earning, and social growth.
            </p>
            <Link to="/#home" className="wu-link">
              Join as Driver <ArrowRight size={16} />
            </Link>
          </div>
          <div className="wu-feature-img">
            <img src="/professional_driver.jpg" alt="Professional happy driver" />
          </div>
        </section>

        {/* ── BENEFITS LIST SECTION ── */}
        <section className="wu-list-section reveal-up">
          <h2>What we <span className="highlight-pill" style={{backgroundColor: '#fce7f3'}}>offer</span> you!</h2>
          <div className="wu-list">
            
            {/* Combining top benefits to match the list style */}
            <div className="wu-list-item">
              <div className="wu-list-icon">
                {t.customerBenefitsCards[0].icon}
              </div>
              <div className="wu-list-content">
                <div className="wu-list-title">{t.customerBenefitsCards[0].title}</div>
                <div className="wu-list-desc">All our drivers undergo strict verification.</div>
              </div>
              <div className="wu-list-arrow"><ArrowRight size={20} /></div>
            </div>

            <div className="wu-list-item">
              <div className="wu-list-icon">
                {t.customerBenefitsCards[2].icon}
              </div>
              <div className="wu-list-content">
                <div className="wu-list-title">{t.customerBenefitsCards[2].title}</div>
                <div className="wu-list-desc">No hidden fees, no surge pricing, ever.</div>
              </div>
              <div className="wu-list-arrow"><ArrowRight size={20} /></div>
            </div>

            <div className="wu-list-item">
              <div className="wu-list-icon">
                {t.driverBenefitsCards[0].icon}
              </div>
              <div className="wu-list-content">
                <div className="wu-list-title">{t.driverBenefitsCards[0].title}</div>
                <div className="wu-list-desc">Keep 100% of what you earn on every ride.</div>
              </div>
              <div className="wu-list-arrow"><ArrowRight size={20} /></div>
            </div>

            <div className="wu-list-item">
              <div className="wu-list-icon">
                {t.driverBenefitsCards[1].icon}
              </div>
              <div className="wu-list-content">
                <div className="wu-list-title">{t.driverBenefitsCards[1].title}</div>
                <div className="wu-list-desc">Be your own boss and drive when you want.</div>
              </div>
              <div className="wu-list-arrow"><ArrowRight size={20} /></div>
            </div>

          </div>
        </section>

      </main>

      <Footer lang={lang} setLang={setLang} />
    </div>
  );
};

export default WhyUs;
