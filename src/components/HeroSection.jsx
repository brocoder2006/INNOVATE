import React, { useState, useEffect } from 'react';
import { Sparkles, CalendarDays, MapPin, Users, ArrowUpRight, Trophy, Zap, ShieldCheck, Leaf } from 'lucide-react';

const heroImage = "/Users/apple/.gemini/antigravity-ide/brain/fad1b7fc-1c06-4543-acd0-df61281e7520/innovate_hero_bg_1789818257536.jpg";

export default function HeroSection({ onRequestRegister }) {
  // Live Countdown state calculation target: August 22, 2026
  const [timeLeft, setTimeLeft] = useState({ days: 154, hours: 14, mins: 32, secs: 45 });

  useEffect(() => {
    const targetDate = new Date('2026-08-22T09:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, mins, secs });
      }
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero" data-testid="hero-section">
      <div className="hero-bg-media" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero-scrim" />
      <div className="cyber-grid" />

      <div className="container hero-content">
        <div className="pin-tag" data-testid="hero-announcement" style={{ marginBottom: '20px' }}>
          <Leaf size={16} className="text-lime-bright" /> 
          INNOVATE 2026 · GREENOVATION CLUB MSIT FLAGSHIP HACKATHON
          <Leaf size={16} className="text-lime-bright" />
        </div>

        <div className="hero-glass-pill" style={{ marginBottom: '16px' }}>
          <CalendarDays size={15} /> 22–23 AUGUST, 2026 · 30-HOUR HACKATHON AT MSIT KOLKATA
        </div>

        <h1 className="hero-title text-glow-gold" data-testid="hero-title">
          INNOVATE <span className="text-gradient-emerald">2026</span><br />
          <span style={{ fontSize: '0.45em', letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase', textShadow: 'none', display: 'block', marginTop: '8px' }}>
            CLASH WITH CODES · CONQUER WITH VISION
          </span>
        </h1>

        <p className="hero-subtitle" data-testid="hero-subtitle">
          Join India's premier 30-hour software and hardware hackathon. Rally your clan, assemble battle-ready prototypes, and claim victory at MSIT Kolkata.
        </p>

        {/* Live Countdown Timer Grid */}
        <div className="timer-container" data-testid="hero-countdown-timer">
          <div className="timer-box">
            <strong data-testid="timer-days">{String(timeLeft.days).padStart(2, '0')}</strong>
            <span>Days</span>
          </div>
          <div className="timer-box">
            <strong data-testid="timer-hours">{String(timeLeft.hours).padStart(2, '0')}</strong>
            <span>Hours</span>
          </div>
          <div className="timer-box">
            <strong data-testid="timer-mins">{String(timeLeft.mins).padStart(2, '0')}</strong>
            <span>Minutes</span>
          </div>
          <div className="timer-box">
            <strong data-testid="timer-secs">{String(timeLeft.secs).padStart(2, '0')}</strong>
            <span>Seconds</span>
          </div>
        </div>

        <div className="hero-actions" data-testid="hero-actions">
          <button 
            onClick={onRequestRegister}
            className="btn-3d-green"
            data-testid="hero-apply-btn"
          >
            Apply with Devfolio <ArrowUpRight size={18} />
          </button>
          
          <a 
            href="https://discord.gg/UhjCnh9R5U" 
            target="_blank" 
            rel="noreferrer"
            className="btn-3d-gold"
            data-testid="hero-discord-btn"
          >
            <Users size={18} /> Join Discord Clan
          </a>
        </div>

        <div style={{ marginTop: '28px', display: 'flex', gap: '24px', color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-accent)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CalendarDays size={15} className="text-gold-bright" /> MARCH 2026
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={15} className="text-gold-bright" /> MSIT KOLKATA CAMPUS · INDIA
          </span>
        </div>

        {/* Stats Strip */}
        <div className="stats-strip" data-testid="hero-stats-strip">
          <div className="stat-item" data-testid="stat-prize">
            <div className="stat-number">₹2.5L+</div>
            <div className="stat-label">Clan Treasury</div>
            <div className="stat-desc">Cash bounties & rewards</div>
          </div>
          <div className="stat-item" data-testid="stat-duration">
            <div className="stat-number">30 HRS</div>
            <div className="stat-label">Sprint Battle</div>
            <div className="stat-desc">Non-stop hardware + dev code</div>
          </div>
          <div className="stat-item" data-testid="stat-participants">
            <div className="stat-number">1500+</div>
            <div className="stat-label">Warriors Assembled</div>
            <div className="stat-desc">Top coders nationwide</div>
          </div>
          <div className="stat-item" data-testid="stat-partners">
            <div className="stat-number">25+</div>
            <div className="stat-label">Allied Sponsors</div>
            <div className="stat-desc">Industry tech giants</div>
          </div>
        </div>
      </div>
    </section>
  );
}
