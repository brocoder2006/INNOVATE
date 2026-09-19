import React from 'react';
import { Leaf, Cpu, Globe, Shield, ArrowUpRight, Zap, Award, CheckCircle } from 'lucide-react';

const arenaImage = "/Users/apple/.gemini/antigravity-ide/brain/fad1b7fc-1c06-4543-acd0-df61281e7520/innovate_arena_bg_1789818285517.jpg";

export default function StorySection() {
  return (
    <section className="section" id="story" data-testid="story-section" style={{ background: 'linear-gradient(180deg, var(--bg-dark), #141211)' }}>
      <div className="cyber-grid" />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div className="pin-tag" data-testid="story-eyebrow" style={{ marginBottom: '16px' }}>
              <Leaf size={16} /> THE PREMISE & VISION
            </div>

            <h2 className="section-title text-glow-gold" data-testid="story-title" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
              INNOVATE <span className="text-gradient-emerald">CHRONICLES</span>
            </h2>

            <p className="section-intro" data-testid="story-intro" style={{ marginBottom: '24px', fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              Hosted at <strong>Meghnad Saha Institute of Technology (MSIT), Kolkata</strong>, INNOVATE 2026 represents the ultimate clash of software engineering and hardware innovation.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '30px' }} data-testid="story-body">
              Over 30 uninterrupted hours, clans of student developers, hardware tinkerers, and AI visionaries clash to build functional, battle-tested solutions. Guided by industry warlords and tech mentors, step into the arena and turn vision into reality.
            </p>

            <div className="cards-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="card-stone" style={{ padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-bright)', fontWeight: 700, marginBottom: '6px', fontFamily: 'var(--font-accent)' }}>
                  <Zap size={18} /> Hardware + Software
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Dedicated IoT testing gear, microcontrollers, and 3D dev stations.</p>
              </div>

              <div className="card-stone" style={{ padding: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gem-bright)', fontWeight: 700, marginBottom: '6px', fontFamily: 'var(--font-accent)' }}>
                  <Globe size={18} /> Clan Mentorship
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>1-on-1 guidance from senior architects and industry leaders.</p>
              </div>
            </div>
          </div>

          {/* Interactive Arena Visual */}
          <div 
            className="card-stone coc-float"
            style={{ 
              padding: '12px',
              borderRadius: '24px',
              border: '2px solid var(--gold-coin)',
              boxShadow: 'var(--glow-gold)' 
            }}
            data-testid="story-visual-card"
          >
            <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={arenaImage} 
                alt="MSIT INNOVATE Arena Floor" 
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block', filter: 'brightness(0.9) contrast(1.1)' }} 
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  padding: '24px', 
                  background: 'linear-gradient(0deg, rgba(16, 14, 13, 0.95), transparent)', 
                  backdropFilter: 'blur(10px)' 
                }}
              >
                <span className="font-hand" style={{ fontSize: '1.2rem', color: 'var(--gold-bright)' }}>
                  ★ MSIT AUDITORIUM ARENA
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '4px', color: 'var(--text-main)' }}>The 30-Hour Clan Battlefield</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Where 1,500+ builders assemble to write code, wire circuits, and conquer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
