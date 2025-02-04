import React, { useEffect, useState, useRef } from 'react';
import { Play, Music2, Mic2, Headphones } from 'lucide-react';
import '../still.css';

const PodcastTransition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsLeaving(false);
        } else {
          // Aşağı doğru çıkışı kontrol et
          if (entry.boundingClientRect.top < 0) {
            setIsLeaving(true);
          }
          setIsVisible(false);
        }
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementMiddle = rect.top + rect.height / 2;
      const viewportMiddle = viewportHeight / 2;
      const distance = Math.abs(elementMiddle - viewportMiddle);
      const maxDistance = (viewportHeight + rect.height) / 2;
      
      let progress = 1 - (distance / maxDistance);
      progress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`podcast-section ${isVisible ? 'is-visible' : ''} ${isLeaving ? 'is-leaving' : ''}`}
    >
      <div 
        className="gradient-overlay" 
        style={{
          opacity: scrollProgress,
          transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }} 
      />

      <div className="circles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="circle"
            style={{
              transform: `scale(${1 + scrollProgress * 2.5})`,
              opacity: Math.max(0, 1 - scrollProgress * 1.5),
              transitionDelay: `${i * 0.03}s`
            }}
          />
        ))}
      </div>

      <div className="floating-icons">
        {[
          { Icon: Music2, delay: 0, position: { top: '30%', left: '20%' } },
          { Icon: Mic2, delay: 0.2, position: { top: '40%', right: '25%' } },
          { Icon: Headphones, delay: 0.4, position: { bottom: '35%', left: '30%' } }
        ].map(({ Icon, delay, position }, index) => (
          <div
            key={index}
            className="floating-icon"
            style={{
              ...position,
              animationDelay: `${delay}s`,
              opacity: scrollProgress,
              transform: `translateY(${(1 - scrollProgress) * 20}px)`
            }}
          >
            <Icon size={32} />
          </div>
        ))}
      </div>

      <div
        className="podcast-content"
        style={{
          transform: `scale(${1 + (scrollProgress * 2.5)}) rotate(${scrollProgress * 270}deg)`,
          opacity: scrollProgress
        }}
      >
        <div className="podcast-inner">
          <div className="glow-effect" />
          <div className="play-icon">
            <Play size={24} />
          </div>
          <div className="podcast-waves">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="wave" />
            ))}
          </div>
        </div>
      </div>

      <h1
        className="transition-text"
        style={{
          opacity: scrollProgress,
          transform: `translateY(${(1 - scrollProgress) * 30}px) scale(${0.8 + scrollProgress * 0.2})`
        }}
      >
        PODCAST
      </h1>

      <div
        className="feature-circles"
        style={{ opacity: scrollProgress }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="feature-circle" />
        ))}
      </div>
    </section>
  );
};

export default PodcastTransition;