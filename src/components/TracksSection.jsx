import React, { useState } from 'react';
import { Cpu, Shield, Zap, Gem, Sparkles, Flame, Target, Users, Trophy, ArrowRight, ExternalLink } from 'lucide-react';

export const HACKATHON_TRACKS = [
  {
    id: 'eco-ai',
    name: 'Eco-Tech & Sustainable AI',
    tagline: 'Green Computing, Carbon Intelligence & Smart Grid',
    prize: '₹25,000 + Premium Swag',
    color: 'emerald',
    icon: Cpu,
    desc: 'Develop AI/ML algorithms engineered for low energy consumption, smart agricultural monitoring, carbon footprint analytics, and climate resilience.',
    techStack: ['Python', 'PyTorch', 'TensorFlow Lite', 'OpenCV', 'Green Software SDKs']
  },
  {
    id: 'robotics-iot',
    name: 'Robotics & IoT Hardware',
    tagline: 'Embedded Automation, Drones & Smart Sensors',
    prize: '₹25,000 + Hardware Kits',
    color: 'lime',
    icon: Zap,
    desc: 'Build functional physical prototypes, automated drones, smart waste sorters, or IoT sensor networks addressing campus and urban sustainability.',
    techStack: ['ESP32', 'Arduino', 'Raspberry Pi', 'ROS', 'MQTT', 'Circuit Design']
  },
  {
    id: 'cyber-web3',
    name: 'Cyber-Security & Web3',
    tagline: 'Decentralized Apps, Zero Knowledge & Threat Defense',
    prize: '₹25,000 + Crypto Grants',
    color: 'cyan',
    icon: Shield,
    desc: 'Craft resilient cybersecurity tools, automated vulnerability scanners, or decentralized Web3 infrastructure powering transparent supply chains.',
    techStack: ['Solidity', 'Rust', 'Ethers.js', 'Go', 'Kali Tools', 'ZK-Proofs']
  },
  {
    id: 'energy-ev',
    name: 'Smart Energy & EV Tech',
    tagline: 'Renewable Networks, Battery Management & EV Systems',
    prize: '₹25,000 + Incubation',
    color: 'amber',
    icon: Flame,
    desc: 'Innovate solutions for electric vehicle charge optimization, smart battery health monitoring, microgrid distribution, and solar telemetry.',
    techStack: ['C++', 'CAN Bus', 'MATLAB', 'Node.js', 'InfluxDB', 'Grafana']
  },
  {
    id: 'ui-ux',
    name: 'UI/UX & Design Craft',
    tagline: 'World-Class Product Design, Accessibility & Micro-Interactions',
    prize: '₹20,000 + Pro Licenses',
    color: 'pink',
    icon: Sparkles,
    desc: 'Recognizing the clan with the most breathtaking, intuitive user interface, accessible design system, and fluid micro-animations.',
    techStack: ['Figma', 'React', 'TailwindCSS', 'Framer Motion', 'Spline 3D']
  },
  {
    id: 'moonshot',
    name: 'Open Innovation & Moonshot',
    tagline: 'High-Impact Breakthrough Ideas Across Any Domain',
    prize: '₹20,000 + Venture Fast-Track',
    color: 'purple',
    icon: Trophy,
    desc: 'No boundaries! Bring your wildest moonshot idea in EdTech, FinTech, Healthcare, or Social Impact and transform it into a working prototype.',
    techStack: ['Any Stack', 'Next.js', 'Flutter', 'Firebase', 'FastAPI']
  }
];

export default function TracksSection({ onSelectTrack }) {
  return (
    <section className="section" id="tracks" data-testid="tracks-section">
      <div className="cyber-grid" />
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pin-tag" data-testid="tracks-eyebrow" style={{ marginBottom: '16px' }}>
            <Sparkles size={16} /> CHOOSE YOUR REALM
          </div>
          <h2 className="section-title text-glow-gold" data-testid="tracks-title" style={{ fontSize: '2.5rem' }}>
            CLAN <span className="text-gradient-emerald">BATTLE TRACKS</span>
          </h2>
          <p className="section-intro" data-testid="tracks-intro" style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--text-muted)' }}>
            Whether your clan specializes in AI neural nets, IoT circuit boards, cybersecurity, or UI craft, choose your domain and claim glory.
          </p>
        </div>

        <div className="tracks-grid" data-testid="tracks-grid">
          {HACKATHON_TRACKS.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div 
                key={track.id} 
                className="track-card" 
                onClick={() => onSelectTrack(track)}
                data-testid={`track-card-${idx}`}
              >
                <div className="track-header">
                  <div className="track-icon-box">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="track-title">{track.name}</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--gold-bright)', fontFamily: 'var(--font-accent)', fontWeight: 700 }}>
                      {track.tagline}
                    </p>
                  </div>
                </div>
                
                <p className="track-desc">{track.desc}</p>
                
                <div className="track-bounty-tag">
                  <Trophy size={14} /> {track.prize}
                </div>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(232, 197, 71, 0.15)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>TRACK 0{idx + 1}</span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold-bright)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Inspect Specs <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
