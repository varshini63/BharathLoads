import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import Investors from './components/Investors';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading BharatLoads...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AboutUs />
        <Investors />
        <Testimonials />
        <ContactUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;