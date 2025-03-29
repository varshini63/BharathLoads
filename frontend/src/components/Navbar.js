import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <img src="/images/bharatloads-logo.png" alt="BharatLoads Logo" className="logo" />
        </div>
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#features" className="nav-link" onClick={() => setIsMenuOpen(false)}>Features</a>
          </li>
          <li className="nav-item">
            <a href="#how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          </li>
          <li className="nav-item">
            <a href="#about-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</a>
          </li>
          <li className="nav-item">
            <a href="#investors" className="nav-link" onClick={() => setIsMenuOpen(false)}>Investors</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#contact-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="#download" className="nav-link cta-button" onClick={() => setIsMenuOpen(false)}>Download App</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;