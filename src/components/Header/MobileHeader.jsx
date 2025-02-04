import React, { useState } from 'react';
import './header.css';
import Logo from '../../assets/images/TİA_LOGO.png';
import { Menu } from 'lucide-react';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, text: 'Anasayfa' },
    { id: 2, text: 'Hakkımızda' },
    { id: 3, text: 'Portfolio' },
    { id: 4, text: 'Referanslar' },
    { id: 5, text: 'S.S.S' },
    { id: 6, text: 'Ekibimiz' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-container">
        <div className="mobile-nav-content">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="mobile-logo" />
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <div className="menu-items">
            {menuItems.map((item) => (
              <a key={item.id} href="#" className="mobile-menu-item">
                {item.text}
              </a>
            ))}
            <div className="mobile-contact">
              <span>İletişim</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileHeader;