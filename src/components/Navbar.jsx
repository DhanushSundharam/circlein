import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, LogOut, ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',      href: '/#home'     },
  { label: 'About',     href: '/#about'    },
  { label: 'Services',  href: '/services' },
  { label: 'Why Us',    href: '/whyus'     },
  { label: 'Our Team',  href: '/team'      },
  { label: 'FAQ',       href: '/faq'       },
  { label: 'Blog',      href: '/blog'      },
  { label: 'Support',   href: '/support'   },
  { label: 'Contact',   href: '/#contact'  },
];

const Navbar = ({ user, setUser }) => {
  const navigate   = useNavigate();
  const location   = useLocation();
  const isLanding  = location.pathname === '/';
  const [active, setActive] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Highlight active section on scroll
  useEffect(() => {
    if (!isLanding) return;
    
    // Gather all target IDs including those inside dropdowns
    const ids = [];
    NAV_LINKS.forEach(l => {
      if (l.href) ids.push(l.href.slice(1));
      if (l.dropdown) l.dropdown.forEach(d => ids.push(d.href.slice(1)));
    });

    const onScroll = () => {
      const scrollY = window.scrollY + 90;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isLanding]);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    e.preventDefault();

    if (href.startsWith('/#') || href.startsWith('#')) {
      const id = href.split('#')[1];
      if (isLanding) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActive(id);
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar-container">
        {/* Left: Brand */}
        <div className="navbar-left">
          <Link to="/" className="navbar-brand flex items-center" style={{ textDecoration: 'none', gap: '8px' }}>
            <Logo size={36} />
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.8rem', letterSpacing: '-0.02em', margin: 0, display: 'flex', alignItems: 'center' }}>
              <span style={{color: '#8b5cf6', fontWeight: '500'}}>Circle</span>
              <span style={{color: '#111827', fontWeight: '600'}}>Ind</span>
            </h2>
          </Link>
        </div>

        {/* Center: Nav Links */}
        {!user && (
          <div className="navbar-center">
            <nav className="navbar-links" aria-label="Site sections">
              {NAV_LINKS.map((link) => {
                const isActive = isLanding 
                  ? active === link.href.split('#')[1]
                  : location.pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                    onClick={e => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}

        {/* Right: Actions & Mobile Toggle */}
        <div className="navbar-right flex items-center gap-md">
          {user && (
            <>
              <div className="user-info flex items-center gap-sm">
                <User size={20} />
                <span>{user.name}</span>
                <span className="role-badge">{user.role}</span>
              </div>
              <button className="btn-icon" onClick={handleLogout} title="Logout">
                <LogOut size={20} />
              </button>
            </>
          )}

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-overlay"
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" id="mobile-menu-overlay" role="dialog" aria-label="Mobile navigation menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${location.pathname === link.href || active === link.href.split('#')[1] ? 'active' : ''}`}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
