import React, { useState } from 'react';
import { Shield, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection, onRequestRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Mission', href: '#story' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Treasury', href: '#treasury' },
    { label: 'Guild', href: '#guild' },
    { label: 'Venue', href: '#sanctum' },
    { label: 'Scrolls', href: '#scrolls' },
  ];

  return (
    <nav className="site-nav" data-testid="site-navigation">
      <a href="#hero" className="brand-logo" data-testid="brand-logo">
        <div className="brand-crest">
          <Shield size={20} />
        </div>
        <div className="brand-text">
          <span>INNO</span>VATE <small style={{ fontSize: '0.7rem', color: 'var(--gold-bright)', fontWeight: 800 }}>2026</small>
          <span className="brand-tag">MSIT</span>
        </div>
      </a>

      <div className="nav-links" data-testid="desktop-nav-links">
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            data-testid={`nav-link-${link.label.toLowerCase().replaceAll(' ', '-')}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button 
          onClick={onRequestRegister}
          className="btn-3d-green"
          style={{ padding: '9px 18px', fontSize: '0.8rem' }}
          data-testid="nav-apply-btn"
        >
          Register <ArrowUpRight size={14} />
        </button>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', color: 'var(--emerald-bright)', cursor: 'pointer', display: 'none' }}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
