import React from 'react';
import '../still.css'

const FinchLanding = () => {
  return (
    <div className="finch">
      <main className="finch__main">
        <div className="finch__content">
          <h1 className="finch__title">
            hayallerinizi<br />
            tasarlıyor ve<br />
            geliştiriyoruz
          </h1>

          <div className="finch__contact">
            <a href="tel:+919662128608" className="finch__contact-item">
              <span className="finch__contact-icon">
                <span className="icon">☎</span>
              </span>
              +90 9662128608
            </a>
            <a href="mailto:ravi@thefinch.design" className="finch__contact-item">
              <span className="finch__contact-icon">
                <span className="icon">✉</span>
              </span>
              info@tia.com
            </a>
          </div>
        </div>

        <div className="finch__social">
          <a href="#" className="finch__social-link">Instagram</a>
          <a href="#" className="finch__social-link">Dribbble</a>
          <a href="#" className="finch__social-link">Behance</a>
          <a href="#" className="finch__social-link">LinkedIn</a>
        </div>

        <footer className="finch__footer">
          <p>Copyright © 2024, TheFinch Design Studio | <a href="#">Terms of Use</a> • <a href="#">Privacy Policy</a></p>
        </footer>
      </main>

      <nav className="finch__nav">
        <a href="#" className="finch__nav-link">Our Services</a>
        <a href="#" className="finch__nav-link">Our Solutions</a>
        <a href="#" className="finch__nav-link">Our Portfolio</a>
        <a href="#" className="finch__nav-link">About Us</a>
        <a href="#" className="finch__nav-link">Contact Us</a>
      </nav>
    </div>
  );
};

export default FinchLanding;