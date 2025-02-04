import React, { useRef, useState, useEffect } from 'react';
import './header.css';
import Logo from '../../assets/images/TİA_LOGO.png';
import { Menu } from 'lucide-react';

const Header = () => {
  const [bgStyle, setBgStyle] = useState({ left: '8px', width: 'calc(100% / 6 - 16px)' });
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const menuRef = useRef(null);

  const menuItems = [
    { id: 1, text: 'Anasayfa' },
    { id: 2, text: 'Hakkımızda' },
    { id: 3, text: 'Portfolio' },
    { id: 4, text: 'Referanslar' },
    { id: 5, text: 'S.S.S' },
    { id: 6, text: 'Ekibimiz' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
        setMenuOpen(false);
      } else {
        setIsScrolled(false);
        setMenuOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHover = (e) => {
    if (!menuRef.current) return;
    
    const item = e.target;
    const rect = item.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const left = rect.left - menuRect.left;

    setBgStyle({
      left: `${left}px`,
      width: `${width}px`
    });
  };

  const handleMouseLeave = () => {
    setBgStyle({ left: '8px', width: 'calc(100% / 6 - 16px)' });
    // setMenuOpen(false); // Bu satırı kaldırdık
};

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-grid">
          <div className={`logo-section ${isScrolled ? 'fade-out' : 'fade-in'}`}>
            <img src={Logo} className="logo" alt="Tohum İletişim Akademisi" />
          </div>

          <div className="menu-container">
            {isScrolled && (
              <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu size={24} />
              </div>
            )}
            <div 
              className={`menu-section ${menuOpen ? 'menu-open' : 'menu-closed'}`} 
              ref={menuRef} 
              onMouseLeave={handleMouseLeave}
            >
              {menuItems.map((item, index) => (
                <a
                  key={item.id}
                  href="#"
                  className={`menu-item ${index === 0 ? 'first-item' : ''}`}
                  onMouseEnter={handleHover}
                >
                  {item.text}
                </a>
              ))}
              <div className="menu-background" style={bgStyle}></div>
            </div>
          </div>

          <div className={`contact-section ${isScrolled ? 'slide-out' : 'slide-in'}`}>
            <span>iletişim</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;