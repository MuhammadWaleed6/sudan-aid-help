import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to="/">
          <img 
            src="/logo-sudan.png" 
            alt="Sudan Aid Platform" 
            height="40" 
            className={`me-2 ${darkMode ? 'logo-dark-mode' : ''}`}
          />
        </Link>
        
        <div className="d-flex align-items-center order-lg-2">
          <button 
            className="btn btn-outline-secondary btn-sm me-2 d-none d-md-block" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-white" /> : <FaMoon className="text-dark" />}
          </button>
          
          <Link to="/donate" className="btn btn-primary btn-sm me-3 d-none d-md-block">
            Donate
          </Link>
          
          <button 
            className="navbar-toggler border-0 p-1" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
          <ul className="navbar-nav ms-auto me-auto">
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/about">About Crisis</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/donate">Donate</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/updates">Updates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/volunteer">Volunteer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/stories">Stories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/contact">Contact</Link>
            </li>
          </ul>
          
          {/* Mobile-only buttons */}
          <div className="d-lg-none mt-3 pb-3">
            <div className="d-flex gap-2 mb-2">
              <Link to="/donate" className="btn btn-primary flex-fill">
                🤲 Donate Now
              </Link>
              <button 
                className="btn btn-outline-secondary" 
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun className="text-white" /> : <FaMoon className="text-dark" />}
              </button>
            </div>
            <Link to="/stories" className="btn btn-outline-primary w-100">
              📝 Share Your Story
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;