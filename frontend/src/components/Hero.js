import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const Hero = () => {
  const statsRef = useRef([]);

  useEffect(() => {
  
    const animateStats = () => {
      statsRef.current.forEach((statElement, index) => {
        if (!statElement) return;
        
        
        const valueText = statElement.textContent;
        const targetValue = parseInt(valueText.replace(/,/g, '').replace(/\+/g, ''));
        const hasSuffix = valueText.includes('+');
        
        const duration = 2000; 
        const startTime = Date.now();
        const startValue = 0;
        
        const updateCounter = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          
          if (elapsed < duration) {
          
            const value = Math.floor(startValue + (targetValue - startValue) * (elapsed / duration));
            statElement.textContent = value.toLocaleString() + (hasSuffix ? '+' : '');
            
            
            requestAnimationFrame(updateCounter);
          } else {
           
            statElement.textContent = targetValue.toLocaleString() + (hasSuffix ? '+' : '');
          }
        };

        setTimeout(() => {
          updateCounter();
        }, 1000 + index * 200); 
      });
    };
    
    
    setTimeout(animateStats, 500);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transforming Logistics <span className="highlight">Across India</span></h1>
          <p className="hero-subtitle" style={{ color: "blue" }}>
  Connect with trusted transporters and find loads in real-time.  
  BharatLoads brings efficiency and transparency to your logistics operations.
</p>
          
          <div className="hero-cta">
            <a href="#download" className="primary-btn">
              <FaGooglePlay className="btn-icon" />
              <span>Google Play</span>
            </a>
            <a href="#download" className="secondary-btn">
              <FaApple className="btn-icon" />
              <span>App Store</span>
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3 ref={el => statsRef.current[0] = el}>5,000+</h3>
              <p>Transporters</p>
            </div>
            <div className="stat-item">
              <h3 ref={el => statsRef.current[1] = el}>10,000+</h3>
              <p>Truck Owners</p>
            </div>
            <div className="stat-item">
              <h3 ref={el => statsRef.current[2] = el}>50,000+</h3>
              <p>Loads Delivered</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="phone-mockup">
            <img src="/images/app-mockup.png" alt="BharatLoads App" />
          </div>
        </div>
        <div className="hero-background-element"></div>
      </div>
      
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;