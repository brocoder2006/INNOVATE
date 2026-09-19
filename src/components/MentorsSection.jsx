import React from 'react';
import { Users, ArrowUpRight, Award, Shield } from 'lucide-react';

export const MENTORS = [
  { name: 'Parichay Das', role: 'Principal Architect, AI Solutions', org: 'LTM' },
  { name: 'Daipayan Guha', role: 'ML Engineer', org: 'Tata Consultancy Services' },
  { name: 'Subrata Acharjee', role: 'Senior QA Lead', org: 'TCS' },
  { name: 'Chandan Kumar Sarkar', role: 'Senior Data Engineer', org: 'TCS' },
  { name: 'Alik Agarwala', role: 'Software Engineer', org: 'Amazon' },
  { name: 'Aniket Chakraborty', role: 'Founder & Tech Lead', org: 'Pujo Planner' },
  { name: 'Devesh Tulshyan', role: 'Fullstack (AI + Cloud) Engineer', org: 'TCS' },
  { name: 'Jyotirmoy Roy', role: 'Software Engineer', org: 'Rezolve AI' },
  { name: 'Jeevan Joshi', role: 'SDE Intern', org: 'Amazon' },
  { name: 'Narendra Nath Chatterjee', role: 'Senior Android Engineer-II', org: 'Ajaib' },
  { name: 'Prasun Das', role: 'SDE-II (Delivery Lead)', org: 'Redoq' },
  { name: 'Dr. Sourav Mitra', role: 'Head of Greenovation Lab', org: 'MSIT Kolkata' }
];

export default function MentorsSection() {
  return (
    <section className="section" id="guild" data-testid="mentors-section" style={{ background: '#0e0c0b' }}>
      <div className="cyber-grid" />
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pin-tag" style={{ marginBottom: '16px' }} data-testid="guild-eyebrow">
            <Users size={16} /> WARLORDS & MENTORS
          </div>
          <h2 className="section-title text-glow-gold" data-testid="guild-title" style={{ fontSize: '2.5rem' }}>
            CLAN <span className="text-gradient-emerald">MASTERS & JUDGES</span>
          </h2>
          <p className="section-intro" data-testid="guild-intro" style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--text-muted)' }}>
            1-on-1 architecture feedback, live code reviews, and mentoring from industry leaders and MSIT faculty.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }} data-testid="mentors-grid">
          {MENTORS.map((mentor, idx) => (
            <div 
              key={mentor.name}
              className="card-stone"
              style={{ padding: '20px' }}
              data-testid={`mentor-card-${idx}`}
            >
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'var(--gradient-gold)',
                  display: 'grid',
                  placeItems: 'center',
                  color: '#1a1206',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  marginBottom: '14px',
                  boxShadow: 'var(--glow-gold)'
                }}
              >
                {mentor.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{mentor.name}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{mentor.role}</p>
              
              <span 
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  color: 'var(--gold-bright)',
                  background: 'rgba(232, 197, 71, 0.12)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(232, 197, 71, 0.25)'
                }}
              >
                @{mentor.org}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
