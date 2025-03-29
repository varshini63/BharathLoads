
import React from 'react';
import './HowItWorks.css';
import { FaMobile, FaSearch, FaHandshake, FaTruck } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMobile />,
      title: "Download & Register",
      description: "Get started by downloading the BharatLoads app and creating your profile as a transporter or truck owner.",
      color: "#4361EE"
    },
    {
      icon: <FaSearch />,
      title: "Find Matches",
      description: "Enter your route details to find available loads or trucks that match your requirements.",
      color: "#3A0CA3"
    },
    {
      icon: <FaHandshake />,
      title: "Connect & Negotiate",
      description: "Communicate directly with verified partners to discuss terms and finalize the deal.",
      color: "#F72585"
    },
    {
      icon: <FaTruck />,
      title: "Track & Complete",
      description: "Monitor the journey in real-time and complete the transaction with secure payment processing.",
      color: "#4CC9F0"
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How <span className="highlight">BharatLoads</span> Works</h2>
          <p>A simple four-step process to transform your logistics operations</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{index + 1}</div>
              <div className="step-icon" style={{ backgroundColor: step.color }}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
          
          <div className="steps-connector"></div>
        </div>
        
        <div className="demo-container">
          <div className="demo-content">
            <h3>See BharatLoads in Action</h3>
            <p>Watch how our app streamlines the logistics process for both transporters and truck owners.</p>
            <a href="#" className="watch-demo-btn">Watch Demo</a>
          </div>
          
          <div className="demo-video">
            <div className="video-placeholder">
              
              <div className="play-button">
                <svg width="80" height="80" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="rgba(0,0,0,0.7)" />
                  <polygon points="35,25 35,75 75,50" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
