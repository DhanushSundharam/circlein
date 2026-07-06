import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, LogOut, ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',      href: '#home'     },
  { label: 'About',     href: '#about'    },
  { 
    label: 'Services', 
    dropdown: [
      { label: 'Drivers', href: '#how' },
      { label: 'All Vehicle Washing', href: '#carwash' }
    ]
  },
  { label: 'Why Us',    href: '#why'      },
  { label: 'Contact',   href: '#contact'  },
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
    const id = href.slice(1);
    setMobileMenuOpen(false); // Close menu on click
    if (isLanding) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
    } else {
      e.preventDefault();
      navigate('/' + href);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center h-full">
        {/* Brand */}
        <Link to="/" className="navbar-brand flex items-center gap-sm" style={{textDecoration: 'none'}}>
          <Logo size={28} />
          <h2 style={{color: 'var(--text-primary)'}}>CircleInd</h2>
        </Link>

        {/* Nav Links — only show on landing */}
        {isLanding && !user && (
          <nav className="navbar-links">
            {NAV_LINKS.map((link, idx) => {
              if (link.dropdown) {
                return (
                  <div key={idx} className="nav-dropdown-container">
                    <div className="nav-dropdown-btn">
                      {link.label}
                      <ChevronDown size={14} style={{marginTop: '2px'}} />
                    </div>
                    <div className="nav-dropdown-menu">
                      {link.dropdown.map(drop => (
                        <a
                          key={drop.href}
                          href={drop.href}
                          className="nav-dropdown-item"
                          onClick={e => handleNavClick(e, drop.href)}
                        >
                          {drop.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${active === link.href.slice(1) ? 'nav-link-active' : ''}`}
                  onClick={e => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        )}

        {/* Actions & Mobile Toggle */}
        <div className="navbar-actions flex items-center gap-md">
          {user ? (
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
          ) : null}

          {/* Mobile Hamburger Toggle */}
          {isLanding && (
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isLanding && mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          {NAV_LINKS.map((link, idx) => {
            if (link.dropdown) {
              return (
                <div key={idx} className="mobile-nav-group">
                  <div className="mobile-nav-group-title">{link.label}</div>
                  {link.dropdown.map(drop => (
                    <a
                      key={drop.href}
                      href={drop.href}
                      className="mobile-nav-link sub-link"
                      onClick={e => handleNavClick(e, drop.href)}
                    >
                      {drop.label}
                    </a>
                  ))}
                </div>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
