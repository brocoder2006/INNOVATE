import React from 'react';
import { MapPin, Zap, Users, Wifi, Coffee, ArrowUpRight } from 'lucide-react';

const campusMap = "/Users/apple/.gemini/antigravity-ide/brain/fad1b7fc-1c06-4543-acd0-df61281e7520/innovate_campus_map_1789818310245.jpg";

export default function SanctumSection() {
  return (
    <section className="section" id="sanctum" data-testid="sanctum-section">
      <div className="cyber-grid" />
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border-emerald)',
            background: 'rgba(10, 15, 29, 0.9)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
          }}
          data-testid="sanctum-card"
        >
          {/* Map Preview Image */}
          <div style={{ position: 'relative', minHeight: '380px' }}>
            <img 
              src={campusMap} 
              alt="MSIT Campus Map" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent 60%, rgba(10,15,29,1))'
              }}
            />
          </div>

          {/* Campus Details */}
          <div style={{ padding: '48px' }}>
            <div className="eyebrow" data-testid="sanctum-eyebrow">
              <MapPin size={16} /> CHAPTER 06 · THE SANCTUM
            </div>

            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, margin: '10px 0 16px', textTransform: 'uppercase' }} data-testid="sanctum-title">
              MSIT KOLKATA CAMPUS.<br />
              <span className="text-gradient-emerald">YOUR BATTLE BASE.</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }} data-testid="sanctum-address">
              Meghnad Saha Institute of Technology, Nazirabad, Action Area III, Kolkata, West Bengal 700150
            </p>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                margin: '24px 0 30px',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} className="text-emerald-bright" /> 24x7 Hacking Zones
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Wifi size={16} className="text-cyan-bright" /> Gigabit WiFi Network
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Coffee size={16} className="text-lime-bright" /> Meals & Red Bull Lounge
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={16} className="text-gold-bright" /> Sleeping Pods & Rest Area
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Meghnad+Saha+Institute+of+Technology+Kolkata" 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-emerald"
              data-testid="sanctum-maps-btn"
            >
              Open Campus Location in Maps <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
