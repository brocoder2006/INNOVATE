import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sword, ArrowUpRight } from 'lucide-react';

export const FAQS = [
  {
    q: 'Who is eligible to participate in INNOVATE 2026?',
    a: 'Any undergraduate or postgraduate student currently enrolled in an accredited college, university, or institute across India is eligible to assemble a clan and clash.'
  },
  {
    q: 'What is the required team size?',
    a: 'Clans must consist of 1 to 4 members. You can participate solo as a lone wolf or assemble a squad of up to 4 warriors.'
  },
  {
    q: 'Are cross-college and cross-branch teams allowed?',
    a: 'Yes! Warriors from different colleges, universities, and academic departments can unite under a single clan banner.'
  },
  {
    q: 'What is the participation fee?',
    a: 'Participation is 100% FREE! Shortlisted finalists receive overnight accommodation, high-speed campus WiFi, snacks, unlimited meals, Red Bull, and premium swag at zero cost.'
  },
  {
    q: 'Are AI coding assistants and vibe coding allowed?',
    a: 'Yes! AI coding assistants (Cursor, GitHub Copilot, ChatGPT) are allowed to accelerate building, provided your team understands and defends your codebase during jury evaluation.'
  },
  {
    q: 'Where will the 30-hour grand finale take place?',
    a: 'The finale is an offline 30-hour on-campus event hosted at Meghnad Saha Institute of Technology (MSIT), New Town, Kolkata.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section" id="scrolls" data-testid="faq-section" style={{ background: '#0a0a0c' }}>
      <div className="cyber-grid" />
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '60px' }}>
          <div>
            <div className="pin-tag" style={{ marginBottom: '16px' }} data-testid="scrolls-eyebrow">
              <HelpCircle size={16} /> FREQUENTLY ASKED QUERIES
            </div>
            <h2 className="section-title text-glow-gold" data-testid="scrolls-title" style={{ fontSize: '2.5rem' }}>
              CLAN WARRIOR <span className="text-gradient-emerald">FAQ</span>
            </h2>
            <p className="section-intro" data-testid="scrolls-intro" style={{ color: 'var(--text-muted)', marginTop: '10px' }}>
              Got questions before entering the MSIT arena? Tap any scroll below to inspect intel.
            </p>

            <div 
              className="card-stone"
              style={{
                marginTop: '30px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
              data-testid="faq-discord-callout"
            >
              <Sword size={24} style={{ color: 'var(--gold-bright)' }} />
              <div>
                <strong style={{ fontSize: '0.9rem', display: 'block', color: 'var(--text-main)' }}>Still need intel?</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ask mentors on our official Discord.</span>
              </div>
              <a 
                href="https://discord.gg/UhjCnh9R5U" 
                target="_blank" 
                rel="noreferrer"
                className="btn-glass"
                style={{ marginLeft: 'auto', padding: '8px 14px', fontSize: '0.72rem' }}
              >
                Discord <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="faq-grid" data-testid="faq-list">
            {FAQS.map((faq, idx) => (
              <div 
                key={faq.q}
                className={`faq-item ${openIndex === idx ? 'active' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question" data-testid={`faq-toggle-${idx}`}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'var(--gold-bright)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      transform: openIndex === idx ? 'rotate(180deg)' : 'none', 
                      transition: 'transform 0.3s',
                      color: 'var(--gold-bright)'
                    }} 
                  />
                </div>

                {openIndex === idx && (
                  <p className="faq-answer" data-testid={`faq-answer-${idx}`}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
