import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Support.css';
import Logo from '../components/Logo';

const Support = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="support-page-wrapper pt-24">
      <main className="support-container">
        <div className="sub-nav-links">
          <Link to="/support" className="active">Support</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <Logo size={48} />
          <h1 className="support-title" style={{ margin: 0 }}>
            <span style={{ fontFamily: "'Outfit', sans-serif" }}>
              <span style={{ color: '#8b5cf6', fontWeight: '500' }}>Circle</span>
              <span style={{ color: '#1a1a1a', fontWeight: '600' }}>Ind</span>
            </span>
            {' '}— Support
          </h1>
        </div>
        <p className="support-subtitle">
          Need a hand with CircleInd? We're here to help you get the best driver and car wash services.
        </p>

        <div className="support-callout">
          The fastest way to reach us is email — <a href="mailto:circleindrive@gmail.com">circleindrive@gmail.com</a>. We typically reply within 1–2 business days.
        </div>

        <section className="support-faq-section">
          <h2>Frequently asked questions</h2>

          <div className="support-faq-item">
            <h3>How do I book a service?</h3>
            <p>
              You can book a driver or a car wash station directly from the CircleInd app home screen. Once requested, your booking remains pending until a driver or station accepts it. 
            </p>
          </div>

          <div className="support-faq-item">
            <h3>What is the cancellation policy?</h3>
            <p>
              You may cancel a booking before the service begins. Depending on when you cancel, charges may apply. If a driver or station cancels the booking, you will be offered an alternative provider or a full refund if applicable.
            </p>
          </div>

          <div className="support-faq-item">
            <h3>How do I make payments?</h3>
            <p>
              CircleInd supports CASH, UPI, and CARD payments. For UPI payments, you will pay directly to the service provider's UPI ID. CircleInd does not collect payments on behalf of third parties.
            </p>
          </div>

          <div className="support-faq-item">
            <h3>How do I delete my account and data?</h3>
            <p>
              In the app, go to your Profile and request account deletion, or contact us at <strong>circleindrive@gmail.com</strong>. This permanently removes your associated data subject to our data retention policies.
            </p>
          </div>

          <div className="support-faq-item">
            <h3>Is my data private?</h3>
            <p>
              Yes. We collect necessary data (such as phone numbers for OTP login and location for routing) solely to facilitate bookings. We don't sell your data to third parties. See our <a href="/privacy">Privacy Policy</a> for full details.
            </p>
          </div>
        </section>

        <div className="support-callout" style={{ marginTop: '32px' }}>
          Still stuck? Email <a href="mailto:circleindrive@gmail.com">circleindrive@gmail.com</a> and we'll sort it out.
        </div>
      </main>

      <Footer lang={lang} setLang={setLang} />
    </div>
  );
};

export default Support;
