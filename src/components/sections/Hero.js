import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaHandsHelping } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Hero = () => {
  return (
    <section 
      className="hero-section d-flex align-items-center text-white position-relative"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80") center/cover',
        paddingTop: '80px'
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-3 fw-bold mb-4" data-aos="fade-up">
              Help Sudan Rise Again
            </h1>
            <p className="lead mb-5" data-aos="fade-up" data-aos-delay="200">
              Join us in providing critical humanitarian aid to millions of displaced families 
              in North Darfur and across Sudan. Every donation saves lives.
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="400">
              <Link 
                to="/donate" 
                className="btn btn-primary btn-lg px-5 py-3"
                role="button"
              >
                <FaHeart className="me-2" />Donate Now
              </Link>
              <Link 
                to="/volunteer" 
                className="btn btn-outline-light btn-lg px-5 py-3"
                role="button"
              >
                <FaHandsHelping className="me-2" />Volunteer
              </Link>
            </div>
            
            <div className="mt-5 pt-5" data-aos="fade-up" data-aos-delay="600">
              <div className="row text-center">
                <div className="col-md-4">
                  <h3 className="fw-bold text-warning">10.7M</h3>
                  <p className="mb-0">People Need Aid</p>
                  <small className="text-light opacity-75">UN OCHA 2024</small>
                </div>
                <div className="col-md-4">
                  <h3 className="fw-bold text-danger">5.1M</h3>
                  <p className="mb-0">Internally Displaced</p>
                  <small className="text-light opacity-75">IOM Report</small>
                </div>
                <div className="col-md-4">
                  <h3 className="fw-bold text-info">1.5M</h3>
                  <p className="mb-0">Refugees in Neighbors</p>
                  <small className="text-light opacity-75">UNHCR Data</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <div className="scroll-indicator">
          <MdKeyboardArrowDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;