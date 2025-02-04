import React, { useEffect, useState, useRef } from 'react';
import '../still.css';

const ConceptLaunch = () => {
  const [isInView, setIsInView] = useState(false);
  const [scale, setScale] = useState(1);
  const podcastRef = useRef(null);

  useEffect(() => {
    // Podcast div'inin görünür olup olmadığını kontrol et
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (podcastRef.current) {
      observer.observe(podcastRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Sadece görünür olduktan sonra scroll'u dinle
    if (!isInView) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newScale = 1 + (scrolled * 0.003); // Büyüme hızı
      setScale(Math.min(newScale, 20)); // Maximum 20 kat büyüme
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView]);

  return (
    <div 
      className="concept-container"
      style={{
        backgroundColor: isInView ? `rgba(0, 0, 0, ${(scale - 1) / 19})` : '#ffffff'
      }}
    >
      <div className="concept-content">
        <div className="title-section">
          <h1>
            Concept-to-Launch UI/UX
            <br />
            & Beyond <span className="highlight">for Startups and
            <br />
            Enterprises</span>
          </h1>
        </div>
        <div className="description-section">
          <p>
            Right from concept to post-launch, we have your back. As a holistic UI/UX design company, we
            help startups, mid-markets and corporations carve their own niche by breathing life into concepts
            that engage and convert!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConceptLaunch;