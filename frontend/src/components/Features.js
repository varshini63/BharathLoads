import React from 'react';
import './Features.css';
import { FaMapMarkerAlt, FaHistory, FaHandshake, FaStar, FaShieldAlt, FaRupeeSign } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location-Based Matching",
      description: "Find loads and trucks based on your location and route preferences for maximum efficiency.",
      color: "#FF6B6B"
    },
    {
      icon: <FaHistory />,
      title: "Real-Time Updates",
      description: "Get instant notifications about available loads, truck locations, and delivery status.",
      color: "#4ECDC4"
    },
    {
      icon: <FaHandshake />,
      title: "Transparent Marketplace",
      description: "Clear pricing, verified profiles, and direct communication between parties.",
      color: "#FFD166"
    },
    {
      icon: <FaStar />,
      title: "Ratings & Reviews",
      description: "Build trust through our comprehensive rating system for transporters and truck owners.",
      color: "#6A0572"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Transactions",
      description: "Safe payment processing and documentation management for peace of mind.",
      color: "#1A936F"
    },
    {
      icon: <FaRupeeSign />,
      title: "Competitive Pricing",
      description: "Compare rates across the marketplace to ensure the best deals for your business.",
      color: "#3D5A80"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features for <span className="highlight">Seamless Logistics</span></h2>
          <p>BharatLoads combines cutting-edge technology with user-friendly design to revolutionize how goods are transported across India.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
