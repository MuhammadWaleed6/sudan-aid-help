import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      </div>
    </Router>
  );
}

export default App;