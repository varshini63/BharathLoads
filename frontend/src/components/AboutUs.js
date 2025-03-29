import React from 'react';
import { FaUsers, FaEye, FaBullseye, FaMapMarkedAlt, FaTruck, FaHandshake } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div id="about-us" className="about-container">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About BharatLoads</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle">Transforming India's Logistics Landscape</p>
        </div>
      </div>

      <div className="about-main">
        <div className="about-section">
          <div className="section-content">
            <h2>Who We Are</h2>
            <p>
              At BharatLoads, we are transforming India's logistics by connecting transporters and truck owners 
              through an innovative, map-based load-truck matching platform. Our mission is to enhance efficiency, 
              transparency, and profitability in the logistics industry by using technology to streamline operations.
            </p>
            <p>
              Our platform is designed to help businesses stay competitive in the fast-evolving transport industry, 
              saving time and maximizing opportunities for both sides.
            </p>
          </div>
          <div className="section-image logistics-image"></div>
        </div>

        <div className="vision-mission-container">
          <div className="vision-box">
            <div className="icon-container">
              <FaEye className="vision-icon" />
            </div>
            <h2>Our Vision</h2>
            <p>
              We envision a future where technology connects transporters and truck owners seamlessly. 
              We strive to create a platform that empowers both parties, driving collaboration, innovation, 
              and growth. Through our commitment to excellence, we aim to build a more sustainable and 
              efficient logistics industry.
            </p>
          </div>
          
          <div className="mission-box">
            <div className="icon-container">
              <FaBullseye className="mission-icon" />
            </div>
            <h2>Our Mission</h2>
            <p>
              We are redefining transportation by providing an intuitive platform that connects truck owners 
              and transporters more efficiently. By combining advanced technology with trust and transparency, 
              we aim to reshape the logistics ecosystem, making transportation faster, more reliable, and profitable.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaMapMarkedAlt className="value-icon" />
              <h3>Innovation</h3>
              <p>Pioneering technology solutions that transform the logistics industry</p>
            </div>
            <div className="value-card">
              <FaTruck className="value-icon" />
              <h3>Efficiency</h3>
              <p>Optimizing operations to save time and maximize resource utilization</p>
            </div>
            <div className="value-card">
              <FaHandshake className="value-icon" />
              <h3>Trust</h3>
              <p>Building reliable partnerships through transparent business practices</p>
            </div>
            <div className="value-card">
              <FaUsers className="value-icon" />
              <h3>Empowerment</h3>
              <p>Enabling stakeholders to achieve greater success through our platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;