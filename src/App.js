import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import LiveUpdates from './components/sections/LiveUpdates';
import InteractiveMap from './components/sections/InteractiveMap';
import Donation from './components/sections/Donation';
import Volunteer from './components/sections/Volunteer';
import Gallery from './components/sections/Gallery';
import SubmitStory from './components/sections/SubmitStory';
import Contact from './components/sections/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';
import CookiePolicy from './components/pages/CookiePolicy';

import './App.css';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Scroll to top button
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      className={`btn btn-primary position-fixed ${isVisible ? 'd-block' : 'd-none'}`}
      style={{
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={scrollToTop}
      title="Scroll to top"
    >
      <FaArrowUp style={{ marginLeft: '-6px' }} />
    </button>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-theme' : ''}`}>
        <ScrollToTop />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <LiveUpdates />
              <InteractiveMap />
              <Donation />
              <Volunteer />
              <Gallery />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/updates" element={<LiveUpdates />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/stories" element={<SubmitStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
        
        <Footer darkMode={darkMode} />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;