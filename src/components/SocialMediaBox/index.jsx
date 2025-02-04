import React, { useState } from 'react';
import './still.css';
import { Share2, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialMediaBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="social-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="main-icon">
        <Share2 size={24} color="#fff" />
      </div>
      <div className={`social-icons ${isHovered ? 'show' : ''}`}>
        <a href="#" className="social-icon facebook">
          <Facebook size={20} color="#fff" />
        </a>
        <a href="#" className="social-icon instagram">
          <Instagram size={20} color="#fff" />
        </a>
        <a href="#" className="social-icon linkedin">
          <Linkedin size={20} color="#fff" />
        </a>
        <a href="#" className="social-icon twitter">
          <Twitter size={20} color="#fff" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaBox;