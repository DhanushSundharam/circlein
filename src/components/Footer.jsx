import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ lang, setLang }) => {
  const currentYear = new Date().getFullYear();
  const displayYear = currentYear > 2026 ? `2026–${currentYear}` : '2026';

  return (
    <footer className="circle-footer" role="contentinfo">
      <div className="circle-footer-row top-row">
        <div className="circle-footer-copy">© {displayYear}</div>
        <div className="circle-footer-links">
          <Link to="/blog">Blog</Link>
          <Link to="/team">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/whyus">Why Us</Link>
          <Link to="#">Terms of Use</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Cookie Policy</Link>
        </div>
      </div>
      <div className="circle-footer-row bottom-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="circle-footer-logo" style={{ fontSize: '1.75rem', fontWeight: '800', letterSpacing: '-0.5px', color: '#fff' }}>
            <span>CircleInd</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'transform 0.2s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '40px', width: 'auto' }} />
            </a>
          </div>
        </div>
        <div className="circle-footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#fff', fontSize: '0.9rem', textAlign: 'right' }}>
          <div style={{ fontWeight: '500', color: '#fff', marginBottom: '4px' }}>Contact Us</div>
          <a href="tel:+918838038494" style={{ color: 'inherit', textDecoration: 'none' }}>+91 8838038494</a>
          <a href="mailto:circleindrive@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>circleindrive@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
