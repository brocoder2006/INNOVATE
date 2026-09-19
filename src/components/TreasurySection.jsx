import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gem, Trophy, Sparkles, Gift, ArrowUpRight, Award, ExternalLink } from 'lucide-react';

export const WAR_CHESTS = [
  {
    rank: '1ST PLACE · CHAMPION',
    title: 'Grand Champion Clan',
    amount: '₹1,00,000',
    perks: '₹1,00,000 Cash + Gold Champion Trophy + Incubation Grant + VIP Membership',
    icon: '🏆',
    color: 'gold'
  },
  {
    rank: '2ND PLACE · RUNNER UP',
    title: 'First Runner-Up',
    amount: '₹60,000',
    perks: '₹60,000 Cash + Silver Shield + ₹50k Cloud Credits + Hardware Vouchers',
    icon: '🥈',
    color: 'silver'
  },
  {
    rank: '3RD PLACE · RUNNER UP',
    title: 'Second Runner-Up',
    amount: '₹40,000',
    perks: '₹40,000 Cash + Bronze Crest + VIP Developer Tool Access + Swag Pack',
    icon: '🥉',
    color: 'bronze'
  }
];

export const BOUNTIES = [
  { partner: 'All-Girls Team Prize', reward: '₹15,000 Cash Prize', desc: 'Special award celebrating the top-performing all-female hacker clan.' },
  { partner: 'Beginners Track', reward: '₹15,000 Cash Prize', desc: 'Awarded to the best first-time hackathon team building their debut product.' },
  { partner: 'N8N Automation', reward: 'Cloud Pro Access', desc: 'Free Cloud Pro access for all finalist teams to build workflow automation.' },
  { partner: 'Wolfram Research', reward: 'Wolfram|One & API', desc: 'One month of Wolfram|One with cloud credits, storage, and engine access.' },
  { partner: 'CodeCrafters', reward: 'VIP Pass', desc: 'VIP passes for top 3 teams to build Git, Docker, and SQLite from scratch.' },
  { partner: 'Edubuk Web3', reward: 'Verifiable Digital Badges', desc: 'Blockchain-verified certificates + free access to TruCV skill wallet.' },
  { partner: 'Keploy AI', reward: 'API Testing Credits', desc: 'Enterprise API test generation credits & swags for top 10 finalists.' },
  { partner: '.XYZ Domains', reward: 'Free .xyz Domains', desc: 'Free domain name for every participant team to launch their hack project.' }
];

export default function TreasurySection() {
  const [openedChest, setOpenedChest] = useState(null);

  const handleChestClick = (index) => {
    setOpenedChest(openedChest === index ? null : index);
    
    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Fallback if confetti fails
    }
  };

  return (
    <section className="section" id="treasury" data-testid="treasury-section">
      <div className="cyber-grid" />
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pin-tag" style={{ marginBottom: '16px' }} data-testid="treasury-eyebrow">
            <Gem size={16} /> CLAN TREASURY & REWARDS
          </div>
          <h2 className="section-title text-glow-gold" data-testid="treasury-title" style={{ fontSize: '2.5rem' }}>
            CLAIM YOUR <span className="text-gradient-gold">SPOILS OF WAR</span>
          </h2>
          <p className="section-intro" data-testid="treasury-intro" style={{ maxWidth: '680px', margin: '12px auto 0', color: 'var(--text-muted)' }}>
            Over ₹2,50,000 in cash bounties, trophies, incubation grants, and partner developer perks. Tap the chests to claim your loot!
          </p>
        </div>

        {/* Grand Champion Hero Card */}
        <div className="treasury-hero-card" data-testid="treasury-hero-card">
          <span className="font-hand" style={{ fontSize: '1.4rem', color: 'var(--gold-bright)' }}>★ GRAND CHAMPIONS OF INNOVATE 2026 ★</span>
          <h3 style={{ fontSize: '2.5rem', color: 'var(--gold-bright)', margin: '8px 0' }} className="text-glow-gold">
            ₹1,00,000 GRAND PRIZE
          </h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', maxWidth: '600px', margin: '0 auto 20px' }}>
            Ultimate Clan Trophy + ₹1,00,000 Cash + Seed Incubation Fast-Track + Premium Swag Box
          </p>
          <button 
            className="btn-3d-gold"
            onClick={() => handleChestClick(0)}
            data-testid="chest-hero-action-btn"
          >
            Claim Grand Spoils 🏆
          </button>
        </div>

        {/* War Chest Cards Grid */}
        <div className="prizes-grid" style={{ marginBottom: '60px' }} data-testid="war-chests-grid">
          {WAR_CHESTS.map((chest, index) => (
            <div 
              key={chest.rank}
              className="prize-card"
              onClick={() => handleChestClick(index)}
              data-testid={`chest-card-${index}`}
            >
              <div className="prize-badge">{chest.icon}</div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-accent)', color: 'var(--gold-bright)', fontWeight: 800 }}>
                {chest.rank}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '6px 0', color: 'var(--text-main)' }}>{chest.title}</h3>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--gold-bright)', marginBottom: '10px' }}>
                {chest.amount}
              </div>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                {openedChest === index ? chest.perks : 'Tap to inspect chest spoils'}
              </p>

              <button 
                className="btn-glass"
                style={{ width: '100%', fontSize: '0.78rem' }}
                data-testid={`chest-action-btn-${index}`}
              >
                {openedChest === index ? 'Loot Unlocked ✦' : 'Inspect Loot'}
              </button>
            </div>
          ))}
        </div>

        {/* Special Bounties & Partner Perks */}
        <div style={{ borderTop: '1px solid rgba(232, 197, 71, 0.2)', paddingTop: '50px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span className="font-hand" style={{ fontSize: '1.2rem', color: 'var(--gold-bright)' }}>
              SPECIAL TRACK ALLIANCES
            </span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--text-main)' }}>
              Partner Track Bounties
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }} data-testid="bounties-grid">
            {BOUNTIES.map((bounty, idx) => (
              <div 
                key={bounty.partner}
                className="card-stone"
                style={{ padding: '20px' }}
                data-testid={`bounty-card-${idx}`}
              >
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--gold-bright)', fontFamily: 'var(--font-accent)', fontWeight: 800 }}>
                    {bounty.partner}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '6px 0', color: 'var(--text-main)' }}>{bounty.reward}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{bounty.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
