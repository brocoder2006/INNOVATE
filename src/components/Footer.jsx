import React from 'react';
import { Shield, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer({ onRequestRegister }) {
  return (
    <footer className="site-footer" id="cta" data-testid="site-footer">
      <div className="container">
        {/* Call to Action Banner */}
        <div 
          className="panel-wood-night"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 27, 25, 0.95), rgba(18, 16, 15, 0.98))',
            border: '2px solid var(--gold-coin)',
            borderRadius: '24px',
            padding: '48px 40px',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            marginBottom: '60px',
            boxShadow: 'var(--glow-gold)'
          }}
          data-testid="footer-cta-banner"
        >
          <div>
            <div className="pin-tag" style={{ marginBottom: '12px' }}>
              READY TO CLASH?
            </div>
            <h2 className="text-glow-gold" style={{ fontSize: '2.5rem', fontWeight: 900, marginTop: '6px', textTransform: 'uppercase' }}>
              ENTER THE <span className="text-gradient-emerald">CLAN ARENA</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '6px', fontSize: '1rem' }}>
              Assemble your squad and register for INNOVATE 2026 at MSIT Kolkata.
            </p>
          </div>

          <button 
            onClick={onRequestRegister}
            className="btn-3d-green"
            data-testid="footer-apply-cta"
          >
            Register with Devfolio <ArrowUpRight size={18} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div className="brand-logo" style={{ marginBottom: '16px' }}>
              <div className="brand-crest"><Shield size={20} /></div>
              <div className="brand-text"><span>INNO</span>VATE <small style={{ color: 'var(--gold-bright)' }}>2026</small></div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '320px' }}>
              Meghnad Saha Institute of Technology (MSIT) · Greenovation Club.<br />
              Clash with codes. Conquer with vision.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.82rem', color: 'var(--gold-bright)', marginBottom: '14px', letterSpacing: '0.1em' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Genesis</a></li>
              <li><a href="#story" style={{ color: 'inherit', textDecoration: 'none' }}>Mission Lore</a></li>
              <li><a href="#tracks" style={{ color: 'inherit', textDecoration: 'none' }}>Battle Tracks</a></li>
              <li><a href="#timeline" style={{ color: 'inherit', textDecoration: 'none' }}>Quest Map</a></li>
              <li><a href="#treasury" style={{ color: 'inherit', textDecoration: 'none' }}>Treasury Spoils</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.82rem', color: 'var(--gold-bright)', marginBottom: '14px', letterSpacing: '0.1em' }}>
              ORGANIZER
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Greenovation Club<br />
              Department of CSE & IT<br />
              MSIT Kolkata Campus<br />
              West Bengal 700150
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.82rem', color: 'var(--gold-bright)', marginBottom: '14px', letterSpacing: '0.1em' }}>
              COMMUNITY
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li><a href="https://discord.gg/UhjCnh9R5U" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Discord Clan ↗</a></li>
              <li><a href="https://innovate-2026.devfolio.co/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Devfolio Page ↗</a></li>
              <li><a href="https://msit.edu.in" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>MSIT Portal ↗</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(232, 197, 71, 0.15)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <div>© 2026 INNOVATE · Meghnad Saha Institute of Technology. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Crafted for student warriors with <Heart size={14} fill="#e8c547" color="#e8c547" />
          </div>
        </div>
      </div>
    </footer>
  );
}
