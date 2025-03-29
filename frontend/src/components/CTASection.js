import React from 'react';
import './CTASection.css';
import { FaGooglePlay, FaApple, FaTruck, FaWarehouse } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="cta-section" id="download">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-content">
            <h2>Ready to Transform Your <span className="highlight">Logistics Business?</span></h2>
            <p>Join thousands of transporters and truck owners who are already benefiting from BharatLoads. Download the app today and experience the future of logistics.</p>
            
            <div className="user-types">
              <div className="user-type">
                <div className="user-icon">
                  <FaTruck />
                </div>
                <h4>For Truck Owners</h4>
                <ul>
                  <li>Find loads in your area</li>
                  <li>Reduce empty miles</li>
                  <li>Get paid faster</li>
                </ul>
              </div>
              
              <div className="user-type">
                <div className="user-icon">
                  <FaWarehouse />
                </div>
                <h4>For Transporters</h4>
                <ul>
                  <li>Access verified carriers</li>
                  <li>Real-time tracking</li>
                  <li>Competitive pricing</li>
                </ul>
              </div>
            </div>
            
            <div className="download-options">
              <a href="#" className="download-btn google-play">
                <FaGooglePlay className="btn-icon" />
                <div className="btn-text">
                  <span className="small-text">GET IT ON</span>
                  <span className="large-text">Google Play</span>
                </div>
              </a>
              
              <a href="#" className="download-btn app-store">
                <FaApple className="btn-icon" />
                <div className="btn-text">
                  <span className="small-text">DOWNLOAD ON THE</span>
                  <span className="large-text">App Store</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="cta-image">
            <div className="app-screenshots">
              <img src="/images/app-screen-1.png" alt="BharatLoads App Screenshot 1" className="screenshot screenshot-1" />
              
            </div>
            <div className="cta-background-element"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
