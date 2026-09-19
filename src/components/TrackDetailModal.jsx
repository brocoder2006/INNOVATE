import React from 'react';
import { X, Trophy, Cpu, Code2, ArrowRight } from 'lucide-react';

export default function TrackDetailModal({ track, onClose, onRequestRegister }) {
  if (!track) return null;

  const Icon = track.icon;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" data-testid="track-detail-modal">
      <div className="modal-content" style={{ maxWidth: '620px' }}>
        <button className="modal-close-btn" onClick={onClose} data-testid="close-track-modal">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <div className="track-icon-box" style={{ width: '52px', height: '52px', margin: 0 }}>
            <Icon size={24} />
          </div>
          <div>
            <span className="font-hand" style={{ fontSize: '1.1rem', color: 'var(--gold-bright)' }}>
              ★ OFFICIAL BATTLE REALM
            </span>
            <h2 className="text-glow-gold" style={{ fontSize: '1.6rem', fontWeight: 900 }}>{track.name}</h2>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
          {track.desc}
        </p>

        <div style={{ background: 'rgba(232, 197, 71, 0.12)', border: '1px solid rgba(232, 197, 71, 0.3)', borderRadius: '14px', padding: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-bright)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Trophy size={18} /> Realm Spoils & Prize
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--gold-bright)', marginTop: '4px' }}>
            {track.prize}
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-accent)', color: 'var(--gold-bright)', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 800 }}>
            Recommended Weaponry & Tech Stack
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {track.techStack.map(tech => (
              <span key={tech} style={{ padding: '4px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(232, 197, 71, 0.25)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={() => { onClose(); onRequestRegister(); }}
            className="btn-3d-green"
            style={{ width: '100%' }}
            data-testid="modal-choose-track-btn"
          >
            Claim & Register for Track <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
