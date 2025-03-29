import React, { useState } from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Fleet Owner, Delhi",
      image: "/images/testimonial-1.jpg",
      quote: "BharatLoads has transformed how I manage my fleet. I've reduced empty miles by 40% and increased my monthly revenue significantly. The app is incredibly easy to use.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Logistics Manager, Mumbai",
      image: "/images/testimonial-2.jpg",
      quote: "Finding reliable transporters used to be my biggest challenge. With BharatLoads, I can quickly find verified carriers with competitive rates and track shipments in real-time.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Independent Truck Owner, Gujarat",
      image: "/images/testimonial-3.jpg",
      quote: "As an independent operator, BharatLoads has been a game-changer. I no longer have to rely on middlemen and can find loads directly, improving my earnings by 30%.",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by <span className="highlight">Thousands</span> Across India</h2>
          <p>Hear what our users have to say about their experience with BharatLoads</p>
        </div>
        
        <div className="testimonials-carousel">
          <button className="carousel-control prev" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>
          
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`} 
                key={index}
                style={{transform: `translateX(${(index - activeIndex) * 100}%)`}}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  
                  <p className="testimonial-text">{testimonial.quote}</p>
                  
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>★</span>
                    ))}
                  </div>
                </div>
                
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-control next" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>
        
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;