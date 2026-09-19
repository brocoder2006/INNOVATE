import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    email: '',
    phone: '',
    college: '',
    track: 'eco-ai',
    membersCount: '3'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (err) {}
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" data-testid="registration-modal">
      <div className="modal-content" style={{ maxWidth: '580px' }}>
        <button className="modal-close-btn" onClick={onClose} data-testid="close-registration-modal">
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div className="pin-tag" style={{ marginBottom: '12px' }}>
              <Sparkles size={16} /> DEVFOLIO CLAN REGISTRATION
            </div>
            
            <h2 className="text-glow-gold" style={{ fontSize: '2rem', fontWeight: 900, margin: '6px 0 16px', textTransform: 'uppercase' }}>
              ASSEMBLE YOUR <span className="text-gradient-emerald">CLAN</span>
            </h2>

            <form onSubmit={handleSubmit} data-testid="registration-form">
              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-bright)', fontWeight: 700, marginBottom: '6px' }}>Clan / Team Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. CyberGreen Warriors" 
                  style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232, 197, 71, 0.3)', borderRadius: '12px', color: 'var(--text-main)', fontSize: '0.9rem' }} 
                  value={formData.teamName}
                  onChange={e => setFormData({ ...formData, teamName: e.target.value })}
                  data-testid="input-team-name"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-bright)', fontWeight: 700, marginBottom: '6px' }}>Team Leader Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rahul Sharma" 
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232, 197, 71, 0.3)', borderRadius: '12px', color: 'var(--text-main)', fontSize: '0.9rem' }}
                    value={formData.leaderName}
                    onChange={e => setFormData({ ...formData, leaderName: e.target.value })}
                    data-testid="input-leader-name"
                  />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-bright)', fontWeight: 700, marginBottom: '6px' }}>Leader Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@college.edu" 
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232, 197, 71, 0.3)', borderRadius: '12px', color: 'var(--text-main)', fontSize: '0.9rem' }}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-bright)', fontWeight: 700, marginBottom: '6px' }}>College / Institute *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. MSIT Kolkata" 
                    style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232, 197, 71, 0.3)', borderRadius: '12px', color: 'var(--text-main)', fontSize: '0.9rem' }}
                    value={formData.college}
                    onChange={e => setFormData({ ...formData, college: e.target.value })}
                    data-testid="input-college"
                  />
                </div>
                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-bright)', fontWeight: 700, marginBottom: '6px' }}>Members Count</label>
                  <select 
                    style={{ width: '100%', padding: '12px 16px', background: '#161413', border: '1px solid rgba(232, 197, 71, 0.3)', borderRadius: '12px', color: 'var(--text-main)', fontSize: '0.9rem' }}
                    value={formData.membersCount}
                    onChange={e => setFormData({ ...formData, membersCount: e.target.value })}
                    data-testid="select-members-count"
                  >
                    <option value="1">1 (Lone Wolf)</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members (Full Squad)</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-bright)', fontWeight: 700, marginBottom: '6px' }}>Preferred Battle Track</label>
                <select 
                  style={{ width: '100%', padding: '12px 16px', background: '#161413', border: '1px solid rgba(232, 197, 71, 0.3)', borderRadius: '12px', color: 'var(--text-main)', fontSize: '0.9rem' }}
                  value={formData.track}
                  onChange={e => setFormData({ ...formData, track: e.target.value })}
                  data-testid="select-track"
                >
                  <option value="eco-ai">🌿 Eco-Tech & Sustainable AI</option>
                  <option value="robotics-iot">🤖 Robotics & IoT Hardware</option>
                  <option value="cyber-web3">🔒 Cyber-Security & Web3</option>
                  <option value="energy-ev">⚡ Smart Energy & Electric Mobility</option>
                  <option value="ui-ux">🎨 UI/UX & Product Design</option>
                  <option value="moonshot">🚀 Open Innovation & Moonshot</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="btn-3d-green" 
                style={{ width: '100%', marginTop: '10px' }}
                data-testid="submit-registration-btn"
              >
                Submit Devfolio Pass <ArrowRight size={16} />
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }} data-testid="registration-success-view">
            <CheckCircle2 size={64} style={{ color: 'var(--gold-bright)', margin: '0 auto 16px' }} />
            <h2 className="text-glow-gold" style={{ fontSize: '2rem', fontWeight: 900 }}>REGISTRATION CONFIRMED!</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.6 }}>
              Welcome warrior! Clan <strong>{formData.teamName || 'Innovators'}</strong> has been registered for INNOVATE 2026 at MSIT Kolkata. Check your inbox for your official Devfolio pass!
            </p>
            <button 
              className="btn-glass"
              style={{ marginTop: '24px' }}
              onClick={onClose}
              data-testid="success-close-btn"
            >
              Back to Main Arena
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
