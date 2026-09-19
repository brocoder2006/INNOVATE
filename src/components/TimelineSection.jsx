import React, { useState } from 'react';
import { Calendar, Shield, CheckCircle2, Star, Trophy, Code, MapPin, Flag } from 'lucide-react';

export const MILESTONES = [
  {
    step: '01',
    name: 'Registration Opens',
    date: 'Jan 15, 2026',
    desc: 'Assemble your clan of 1-4 members and register on Devfolio.',
    status: 'Completed',
    icon: Flag
  },
  {
    step: '02',
    name: 'Idea Submission',
    date: 'May 15 – June 20, 2026',
    desc: 'Submit your project abstract and technical architecture proposal.',
    status: 'Active',
    icon: Code
  },
  {
    step: '03',
    name: 'Finalists Declared',
    date: 'June 25, 2026',
    desc: 'Top 100 shortlisted clans revealed for the on-campus finale.',
    status: 'Upcoming',
    icon: Star
  },
  {
    step: '04',
    name: 'Mentor Briefing',
    date: 'July 15, 2026',
    desc: 'Pre-hackathon online workshop & mentor alignment session.',
    status: 'Upcoming',
    icon: Shield
  },
  {
    step: '05',
    name: 'Clan Check-In',
    date: 'Aug 21, 2026 · 6 PM',
    desc: 'Arrival at MSIT Campus, swag distribution, lodging check-in.',
    status: 'Upcoming',
    icon: MapPin
  },
  {
    step: '06',
    name: 'The 30-Hour Clash',
    date: '22–23 August, 2026',
    desc: '30 hours non-stop hacking, midnight pizza, live jury pitch.',
    status: 'Finale',
    icon: Trophy
  }
];

export default function TimelineSection() {
  const [selectedNode, setSelectedNode] = useState(1);

  return (
    <section className="section" id="timeline" data-testid="timeline-section" style={{ background: '#12100f' }}>
      <div className="cyber-grid" />
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pin-tag" style={{ marginBottom: '16px' }} data-testid="timeline-eyebrow">
            <Calendar size={16} /> WAR MAP & ROADMAP
          </div>
          <h2 className="section-title text-glow-gold" data-testid="timeline-title" style={{ fontSize: '2.5rem' }}>
            THE CLAN <span className="text-gradient-emerald">QUEST TIMELINE</span>
          </h2>
          <p className="section-intro" data-testid="timeline-intro" style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--text-muted)' }}>
            From registration call to the 30-hour on-campus clash at MSIT Kolkata. Follow the battle timeline below.
          </p>
        </div>

        <div className="timeline-events" data-testid="timeline-nodes">
          {MILESTONES.map((item, index) => {
            const Icon = item.icon;
            const isActive = selectedNode === index;
            return (
              <div 
                key={item.step}
                className={`timeline-card ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedNode(index)}
                style={{ cursor: 'pointer', border: isActive ? '1px solid var(--gold-coin)' : '1px solid rgba(232, 197, 71, 0.15)', boxShadow: isActive ? 'var(--glow-gold)' : 'none' }}
                data-testid={`timeline-node-${index}`}
              >
                <div className="timeline-time">
                  <span style={{ display: 'block', fontSize: '0.72rem', opacity: 0.7 }}>PHASE {item.step}</span>
                  {item.date}
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>{item.name}</h3>
                    <span 
                      style={{ 
                        fontSize: '0.65rem', 
                        padding: '2px 8px', 
                        borderRadius: '6px', 
                        fontFamily: 'var(--font-accent)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        background: item.status === 'Completed' ? 'rgba(16,185,129,0.15)' : item.status === 'Active' ? 'rgba(232,197,71,0.2)' : 'rgba(255,255,255,0.05)',
                        color: item.status === 'Completed' ? 'var(--gem-bright)' : item.status === 'Active' ? 'var(--gold-bright)' : 'var(--text-muted)',
                        border: '1px solid ' + (item.status === 'Completed' ? 'var(--gem-green)' : item.status === 'Active' ? 'var(--gold-coin)' : 'rgba(255,255,255,0.1)')
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Phase Detail Card */}
        <div 
          className="card-stone"
          style={{ 
            marginTop: '36px', 
            padding: '24px', 
            textAlign: 'center',
            maxWidth: '800px',
            marginInline: 'auto'
          }}
          data-testid="timeline-detail-box"
        >
          <span style={{ color: 'var(--gold-bright)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}>
            CURRENT BATTLE PHASE {MILESTONES[selectedNode].step}: {MILESTONES[selectedNode].name}
          </span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginTop: '4px', color: 'var(--text-main)' }}>{MILESTONES[selectedNode].date}</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '8px auto 0', fontSize: '0.9rem' }}>
            {MILESTONES[selectedNode].desc} Shortlisted clans receive travel logistics support, lodging passes, and hardware lab allocation.
          </p>
        </div>
      </div>
    </section>
  );
}
