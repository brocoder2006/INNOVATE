import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, RotateCcw, X, Sparkles, ChevronRight, MessageSquare, Bot } from 'lucide-react';

export const STORY_CHAPTERS = [
  {
    id: 'hero',
    title: 'Chapter 0: Genesis',
    subtitle: 'The Call to Innovators',
    pose: 'excited',
    dialogue: "Greetings Innovator! I am Nova, your Cyber Guide. Welcome to INNOVATE 2026 — the 30-hour flagship Eco-Tech & AI hackathon organized by Meghnad Saha Institute of Technology's Greenovation Club!"
  },
  {
    id: 'story',
    title: 'Chapter 1: The Mission',
    subtitle: 'Greenovation Club MSIT',
    pose: 'explaining',
    dialogue: "At MSIT Kolkata, we believe technology must heal our planet. Our Greenovation Club unites coders, hardware builders, and dreamers to invent zero-carbon, high-impact innovations."
  },
  {
    id: 'tracks',
    title: 'Chapter 2: The Arenas',
    subtitle: 'Choose Your Battle Track',
    pose: 'pointing',
    dialogue: "Explore 6 distinct domains! From Sustainable AI & Renewable Energy to Robotics, Cyber Security, and Web3. Select a track that sparks your passion and claim your glory!"
  },
  {
    id: 'timeline',
    title: 'Chapter 3: The Roadmap',
    subtitle: '30-Hour Hackathon Odyssey',
    pose: 'thinking',
    dialogue: "Every hero follows a path. Register your clan, submit your synopsis, qualify for screening, and assemble at MSIT Campus on August 22-23 for 30 uninterrupted hours of building!"
  },
  {
    id: 'treasury',
    title: 'Chapter 4: The Vault',
    subtitle: '₹2.5L+ Spoils of War',
    pose: 'triumph',
    dialogue: "Over ₹2.5 Lakhs in cash prizes, cloud credits, VIP mentorships, swag, and incubation grants await victorious hacker clans! Tap the war chests to reveal your rewards!"
  },
  {
    id: 'guild',
    title: 'Chapter 5: The Guild',
    subtitle: 'Mentors & Jury Council',
    pose: 'explaining',
    dialogue: "You will not walk alone. Industry architects from TCS, Amazon, LTM, and MSIT professors will mentor your team throughout the 30-hour marathon."
  },
  {
    id: 'sanctum',
    title: 'Chapter 6: The Sanctum',
    subtitle: 'MSIT Campus, Kolkata',
    pose: 'pointing',
    dialogue: "Our campus in New Town, Kolkata becomes your battle headquarters! Enjoy 24x7 gigabit WiFi, hardware labs, free meals, sleeping pods, and endless Red Bull!"
  },
  {
    id: 'scrolls',
    title: 'Chapter 7: Ancient Scrolls',
    subtitle: 'Player Queries & FAQ',
    pose: 'neutral',
    dialogue: "Got questions warrior? Participation is 100% free, cross-college teams are welcome, and AI coding tools are permitted! Tap any scroll to hear more."
  },
  {
    id: 'cta',
    title: 'Chapter 8: Call to Arms',
    subtitle: 'Enter The Arena',
    pose: 'triumph',
    dialogue: "The countdown has begun! Assemble your team of 1 to 4 hackers, hit 'Apply with Devfolio', and let your code rewrite the future. See you at MSIT!"
  }
];

export default function CharacterGuide({ currentChapterIndex, onChapterSelect, isAudioEnabled, setIsAudioEnabled, onRequestRegister }) {
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const speechSynthRef = useRef(null);

  const currentChapter = STORY_CHAPTERS[currentChapterIndex] || STORY_CHAPTERS[0];

  // Typewriter effect for dialogue text
  useEffect(() => {
    let index = 0;
    const text = currentChapter.dialogue;
    setDisplayedText('');
    setIsTyping(true);

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text.charAt(index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [currentChapterIndex]);

  // Web Speech API Voice synthesis effect
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop prior speech

      if (isAudioEnabled && currentChapter?.dialogue) {
        const utterance = new SpeechSynthesisUtterance(currentChapter.dialogue);
        utterance.rate = 1.05;
        utterance.pitch = 1.1;
        
        // Select a good English voice if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        window.speechSynthesis.speak(utterance);
      }
    }
  }, [currentChapterIndex, isAudioEnabled]);

  const speakCurrentText = () => {
    if ('speechSynthesis' in window && currentChapter?.dialogue) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentChapter.dialogue);
      utterance.rate = 1.05;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="character-hud-container" data-testid="character-hud">
      {/* Speech Bubble Box */}
      {isBubbleOpen && (
        <div className="speech-bubble-box" data-testid="character-speech-bubble">
          <div className="speech-bubble-header">
            <span className="chapter-badge">{currentChapter.title}</span>
            <div className="speech-controls">
              <button 
                className="speech-btn" 
                onClick={speakCurrentText} 
                title="Replay Voice Narration"
                data-testid="replay-voice-btn"
              >
                <RotateCcw size={14} />
              </button>
              <button 
                className="speech-btn" 
                onClick={() => setIsAudioEnabled(!isAudioEnabled)} 
                title={isAudioEnabled ? "Mute Voice" : "Enable Voice"}
                data-testid="mute-toggle-btn"
              >
                {isAudioEnabled ? <Volume2 size={14} className="text-emerald-bright" /> : <VolumeX size={14} />}
              </button>
              <button 
                className="speech-btn" 
                onClick={() => setIsBubbleOpen(false)} 
                title="Close Speech Window"
                data-testid="close-speech-btn"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <p className="speech-text" data-testid="speech-text-content">
            {displayedText}
            {isTyping && <span className="typing-cursor" />}
          </p>

          <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
              {currentChapterIndex + 1} of {STORY_CHAPTERS.length} Chapters
            </span>
            <button 
              onClick={onRequestRegister}
              className="btn btn-emerald"
              style={{ padding: '6px 12px', fontSize: '0.7rem' }}
              data-testid="character-register-cta"
            >
              Apply Now <ChevronRight size={12} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Nova Character Avatar Card */}
      <div 
        className="character-avatar-card" 
        onClick={() => setIsBubbleOpen(!isBubbleOpen)}
        data-testid="character-avatar-card"
      >
        <div className="character-svg-wrapper">
          <svg className="nova-avatar-svg nova-hover-thruster" viewBox="0 0 100 100" fill="none">
            {/* Background Glow Ring */}
            <circle cx="50" cy="50" r="46" fill="rgba(249, 115, 22, 0.15)" stroke="#f97316" strokeWidth="2" />
            
            {/* Floating Green Target Eye Companion */}
            <circle cx="18" cy="22" r="7" fill="none" stroke="#84cc16" strokeWidth="2" />
            <circle cx="18" cy="22" r="2.5" fill="#a3e635" />

            {/* Puffy Coral Pink Hood on Back */}
            <path d="M 22 55 Q 50 85 78 55 Z" fill="#f43f5e" stroke="#e11d48" strokeWidth="3" />

            {/* Orange Jacket Torso */}
            <path d="M 24 72 L 76 72 L 72 90 L 28 90 Z" fill="#f97316" stroke="#ea580c" strokeWidth="3" />

            {/* Male Face turned sideways glance */}
            <path d="M 32 40 L 60 40 L 56 60 L 44 64 L 36 60 Z" fill="#d1a684" stroke="#0f172a" strokeWidth="2" />

            {/* Eyes looking sideways */}
            <circle cx="42" cy="48" r="2.5" fill="#0f172a" />
            <circle cx="54" cy="48" r="2.5" fill="#0f172a" />
            
            {/* Cool Expression */}
            <path d="M 42 56 Q 48 60 54 56" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* White & Cyan Headphones under Bucket Hat */}
            <rect x="15" y="42" width="10" height="18" rx="4" fill="#ffffff" stroke="#06b6d4" strokeWidth="2" />
            <rect x="75" y="42" width="10" height="18" rx="4" fill="#ffffff" stroke="#06b6d4" strokeWidth="2" />

            {/* Light Blue Bucket Hat Top Crown */}
            <path d="M 26 26 L 74 26 L 70 38 L 30 38 Z" fill="#bae6fd" stroke="#93c5fd" strokeWidth="2" />

            {/* Bucket Hat Slanted Brim */}
            <path d="M 20 38 C 24 38, 76 38, 80 38 L 84 46 L 16 46 Z" fill="#93c5fd" stroke="#60a5fa" strokeWidth="2" />

            {/* Cyan Headband Line */}
            <path d="M 29 34 L 71 34" stroke="#06b6d4" strokeWidth="3" fill="none" />

            {/* Lime Green Square Badge on Hat */}
            <rect x="44" y="24" width="12" height="10" rx="2" fill="#84cc16" stroke="#4ade80" strokeWidth="1" />
          </svg>
        </div>

        <div className="character-hud-info">
          <span className="character-name">
            NAVIGATOR <Sparkles size={12} className="text-lime-bright" />
          </span>
          <span className="character-title">Data Quest Guide</span>
        </div>
      </div>
    </div>
  );
}
