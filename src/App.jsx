import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import StorySection from './components/StorySection.jsx';
import TracksSection from './components/TracksSection.jsx';
import TimelineSection from './components/TimelineSection.jsx';
import TreasurySection from './components/TreasurySection.jsx';
import MentorsSection from './components/MentorsSection.jsx';
import SanctumSection from './components/SanctumSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import Footer from './components/Footer.jsx';
import RegistrationModal from './components/RegistrationModal.jsx';
import TrackDetailModal from './components/TrackDetailModal.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [activeSectionId, setActiveSectionId] = useState('hero');

  const mainRef = useRef(null);

  // Setup GSAP ScrollTrigger for active section tracking & text reveals
  useEffect(() => {
    const chapterIds = ['hero', 'story', 'tracks', 'timeline', 'treasury', 'guild', 'sanctum', 'scrolls', 'cta'];
    const triggers = [];

    chapterIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const trigger = ScrollTrigger.create({
          trigger: element,
          start: 'top 60%',
          end: 'bottom 60%',
          onEnter: () => {
            setActiveSectionId(id);
          },
          onEnterBack: () => {
            setActiveSectionId(id);
          }
        });
        triggers.push(trigger);
      }
    });

    // GSAP ScrollTrigger Blurry Bubble Text Reveal Animations
    const textRevealTargets = gsap.utils.toArray('.section-title, .pin-tag, .section-intro, .hero-glass-pill, .hero-title, .hero-subtitle, .treasury-hero-card h3, .card-stone h3, .faq-question-btn span');
    textRevealTargets.forEach((target) => {
      const anim = gsap.fromTo(
        target,
        {
          filter: 'blur(22px)',
          opacity: 0,
          scale: 0.78,
          clipPath: 'circle(0% at 50% 50%)',
          y: 45
        },
        {
          filter: 'blur(0px)',
          opacity: 1,
          scale: 1,
          clipPath: 'circle(160% at 50% 50%)',
          y: 0,
          duration: 2.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 94%',
            end: 'top 60%',
            scrub: 1.2
          }
        }
      );
      triggers.push(anim.scrollTrigger);
    });

    // GSAP ScrollTrigger Staggered Card & Container Reveal Animations
    const cardContainers = gsap.utils.toArray('.hero-actions, .timer-container, .stats-strip, .cards-grid-2, .tracks-grid, .prize-grid, .mentors-grid, .faq-accordion, .sanctum-grid');
    cardContainers.forEach((container) => {
      const children = container.children;
      if (children.length > 0) {
        const anim = gsap.fromTo(
          children,
          {
            y: 50,
            opacity: 0,
            scale: 0.94
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
        triggers.push(anim.scrollTrigger);
      }
    });

    // Refresh GSAP ScrollTrigger after mounting
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      triggers.forEach(t => t && t.kill && t.kill());
    };
  }, []);

  return (
    <div className="site-shell" ref={mainRef} data-testid="innovate-homepage">
      {/* Navigation Header */}
      <Navbar 
        activeSection={activeSectionId}
        onRequestRegister={() => setIsRegisterOpen(true)}
      />

      {/* Main Sections */}
      <main id="main-content">
        <HeroSection 
          onRequestRegister={() => setIsRegisterOpen(true)} 
        />

        <StorySection />

        <TracksSection 
          onSelectTrack={(track) => setSelectedTrack(track)} 
        />

        <TimelineSection />

        <TreasurySection />

        <MentorsSection />

        <SanctumSection />

        <FaqSection />

        <Footer 
          onRequestRegister={() => setIsRegisterOpen(true)} 
        />
      </main>

      {/* Devfolio Registration Form Modal */}
      <RegistrationModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Track Specification Modal */}
      <TrackDetailModal 
        track={selectedTrack}
        onClose={() => setSelectedTrack(null)}
        onRequestRegister={() => setIsRegisterOpen(true)}
      />
    </div>
  );
}
