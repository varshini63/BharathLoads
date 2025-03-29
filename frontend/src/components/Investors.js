import React, { useState } from 'react';
import { FaChartLine, FaHandshake, FaLightbulb, FaRegFileAlt, FaQuoteLeft, FaArrowRight } from 'react-icons/fa';
import './Investors.css';

const Investors = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    investmentCapacity: '',
    location: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      investmentCapacity: '',
      location: '',
      comments: ''
    });
    alert('Application submitted successfully!');
  };

  const investmentPoints = [
    {
      icon: <FaChartLine />,
      title: "Market Opportunity",
      description: "BharatLoads operates in the $215 billion Indian logistics market, which is fragmented and ready for digital transformation."
    },
    {
      icon: <FaHandshake />,
      title: "Strategic Partnerships",
      description: "We've established key partnerships with major transport associations and stakeholders across India's logistics landscape."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Technology",
      description: "Our map-based load-truck matching platform leverages AI and machine learning to optimize logistics operations."
    }
  ];

  return (
    <div id="investors" className="investors-container">
      <div className="investors-hero">
        <div className="investors-hero-content">
          <h1>Investor Relations</h1>
          <div className="investors-divider"></div>
          <p className="investors-subtitle">Join us in revolutionizing India's logistics ecosystem</p>
        </div>
      </div>

      <div className="investors-main">
        <div className="investment-opportunity">
          <h2>Investment Opportunity</h2>
          <p className="opportunity-description">
            BharatLoads represents a significant opportunity to invest in the digital transformation of India's 
            logistics industry. Our innovative platform connects transporters and truck owners, streamlining 
            operations and creating value across the supply chain.
          </p>
          
          <div className="investment-points">
            {investmentPoints.map((point, index) => (
              <div className="investment-point" key={index}>
                <div className="point-icon">
                  {point.icon}
                </div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="market-analysis">
          <div className="analysis-content">
            <h2>Market Analysis</h2>
            <p>
              India's logistics sector is poised for exponential growth, driven by infrastructure development, 
              government initiatives like GST and the National Logistics Policy, and increasing adoption of 
              digital solutions.
            </p>
            <div className="market-stats">
              <div className="stat-box">
                <h3>$215B</h3>
                <p>Indian Logistics Market Size</p>
              </div>
              <div className="stat-box">
                <h3>14%</h3>
                <p>Annual Growth Rate</p>
              </div>
              <div className="stat-box">
                <h3>85%</h3>
                <p>Fragmented Transport Sector</p>
              </div>
            </div>
          </div>
          <div className="growth-chart"></div>
        </div>

        <div className="testimonial-section">
          <div className="testimonial-container">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">
              "BharatLoads is addressing a fundamental inefficiency in India's logistics ecosystem. 
              Their innovative approach to connecting transporters and truck owners has the potential 
              to transform the industry."
            </p>
            <div className="testimonial-author">
              <div className="author-image"></div>
              <div className="author-info">
                <h4>Rajesh Kumar</h4>
                <p>Lead Investor, TechVentures Capital</p>
              </div>
            </div>
          </div>
        </div>

        <div className="financial-highlights">
          <h2>Financial Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <h3>Revenue Growth</h3>
              <p>125% YoY increase in platform transaction volume</p>
            </div>
            <div className="highlight-card">
              <h3>Market Penetration</h3>
              <p>Operations in 15 states across India with rapid expansion</p>
            </div>
            <div className="highlight-card">
              <h3>User Acquisition</h3>
              <p>200,000+ registered transporters and truck owners</p>
            </div>
            <div className="highlight-card">
              <h3>Efficiency Gains</h3>
              <p>30% reduction in empty miles for partner fleets</p>
            </div>
          </div>
        </div>

        <div className="investor-resources">
          <h2>Investor Resources</h2>
          <div className="resources-grid">
            <a href="#" className="resource-card">
              <FaRegFileAlt className="resource-icon" />
              <div className="resource-content">
                <h3>Pitch Deck</h3>
                <p>Download our latest investor presentation</p>
                <div className="resource-link">
                  View <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </a>
            <a href="#" className="resource-card">
              <FaRegFileAlt className="resource-icon" />
              <div className="resource-content">
                <h3>Financial Reports</h3>
                <p>Access quarterly and annual financial statements</p>
                <div className="resource-link">
                  View <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </a>
            <a href="#" className="resource-card">
              <FaRegFileAlt className="resource-icon" />
              <div className="resource-content">
                <h3>Market Research</h3>
                <p>Industry reports and market analysis</p>
                <div className="resource-link">
                  View <FaArrowRight className="arrow-icon" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="investor-application-section">
          <div className="application-header">
            <h2>Investor Application</h2>
            <p>For investor & income opportunity details, contact us today for complete information.</p>
          </div>
          
          <form className="investor-application-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter your name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Your Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="investmentCapacity">Investment Capacity</label>
              <input 
                type="text" 
                id="investmentCapacity" 
                name="investmentCapacity" 
                value={formData.investmentCapacity}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Your Location</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                value={formData.location}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="comments">Your Comments/Remarks</label>
              <textarea 
                id="comments" 
                name="comments" 
                rows="4"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-application">Submit Application</button>
          </form>
        </div>

        <div className="contact-investor">
          <h2>Connect With Our Team</h2>
          <p>
            Interested in learning more about investment opportunities with BharatLoads? 
            Our investor relations team is ready to discuss how you can be part of our journey.
          </p>
          <a href="#" className="contact-button">Schedule a Meeting</a>
        </div>
      </div>
    </div>
  );
};

export default Investors;