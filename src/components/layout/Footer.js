import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaGlobe, FaLock } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#' }
  ];

  const quickLinks = [
    { name: 'About Crisis', path: '/about' },
    { name: 'Donate Now', path: '/donate' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Live Updates', path: '/updates' }
  ];

  const resources = [
    { name: 'Crisis Reports', url: '#' },
    { name: 'Financial Transparency', url: '#' },
    { name: 'Partner Organizations', url: '#' },
    { name: 'Media Kit', url: '#' }
  ];

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-5">
          {/* Brand and Mission */}
          <div className="col-lg-4">
            <div className="mb-5 mt-4">
               <img 
                  src="/logo-sudan.png" 
                  alt="Sudan Aid Platform" 
                  height="40" 
                  className="me-2 logo-dark-mode"
                />
              <p className="text-light mb-4 mt-4" style={{ lineHeight: '1.8' }}>
                Dedicated to providing humanitarian assistance and raising awareness 
                for the crisis in Sudan. Together, we can make a difference.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="mb-4">
              <h6 className="fw-bold mb-4 text-white">Follow Our Mission</h6>
              <div className="d-flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-white text-decoration-none p-2 rounded-circle bg-secondary bg-opacity-25 hover-social"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span className="fs-5">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4 text-white">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link 
                    to={link.path} 
                    className="text-light text-decoration-none hover-link d-block py-1"
                    style={{ fontSize: '15px' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4 text-white">Resources</h6>
            <ul className="list-unstyled">
              {resources.map((resource, index) => (
                <li key={index} className="mb-3">
                  <a 
                    href={resource.url} 
                    className="text-light text-decoration-none hover-link d-block py-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '15px' }}
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4">
            <h6 className="fw-bold mb-4 text-white">Contact & Support</h6>
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3 p-2">
                <FaEnvelope className="me-3 text-primary" style={{ fontSize: '18px' }} />
                <a href="mailto:help@sudanaid.org" className="text-light text-decoration-none" style={{ fontSize: '15px' }}>
                  help@sudanaid.org
                </a>
              </div>
              <div className="d-flex align-items-center mb-3 p-2">
                <FaPhone className="me-3 text-primary" style={{ fontSize: '18px' }} />
                <a href="tel:+1234567890" className="text-light text-decoration-none" style={{ fontSize: '15px' }}>
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="d-flex align-items-center mb-3 p-2">
                <FaGlobe className="me-3 text-primary" style={{ fontSize: '18px' }} />
                <span className="text-light" style={{ fontSize: '15px' }}>24/7 Emergency Hotline</span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card bg-danger border-0">
              <div className="card-body p-3">
                <h6 className="fw-bold mb-2"><FaPhone className="me-2" />Emergency Contact</h6>
                <p className="mb-2 small">For urgent humanitarian emergencies:</p>
                <a 
                  href="tel:+1234567890" 
                  className="text-white fw-bold text-decoration-none"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5 border-secondary opacity-50" />

        {/* Bottom Footer */}
        <div className="row align-items-center py-3">
          <div className="col-md-6">
            <p className="mb-0 text-white" style={{ fontSize: '15px' }}>
              © {currentYear} Sudan Aid Platform. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex flex-wrap justify-content-md-end gap-4">
              <Link to="/privacy" className="text-white text-decoration-none hover-link" style={{ fontSize: '14px' }}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white text-decoration-none hover-link" style={{ fontSize: '14px' }}>
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-white text-decoration-none hover-link" style={{ fontSize: '14px' }}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Transparency Statement */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-primary border-0">
              <div className="card-body p-4 text-center">
                <div className="text-white" style={{ fontSize: '15px' }}>
                  <FaLock className="me-2" /><strong>Transparency Commitment:</strong> 100% of donations go directly to humanitarian aid. 
                  Administrative costs are covered by separate funding sources.
                  <button className="btn btn-link text-white ms-2 text-decoration-underline p-0">View Financial Reports →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;