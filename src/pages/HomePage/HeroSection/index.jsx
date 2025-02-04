import React, { useEffect, useState } from 'react';
import '../still.css';

const Hero = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScroll(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-container" style={{ 
      transform: `scale(${1 + scroll * 0.001})`,
      opacity: 1 - scroll * 0.002
    }}>
      <div className="hero-content">
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">💡</span>
            <span className="feature-text">İNOVASYON</span>
          </div>
          <span className="dot">•</span>
          <div className="feature">
            <span className="feature-icon">🧠</span>
            <span className="feature-text">BİLGİ</span>
          </div>
          <span className="dot">•</span>
          <div className="feature">
            <span className="feature-icon">🚀</span>
            <span className="feature-text">HIZ</span>
          </div>
        </div>
        <h1 className="hero-title">
            Her Başarı Bir Tohum,
          <br />
          <img src=""  />
          <span className="highlight">Tohum İletişim Akademisi</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;