import React from 'react';
import { FaCookie, FaCog, FaChartBar, FaEnvelope } from 'react-icons/fa';

const CookiePolicy = () => {
  return (
    <section className="py-5 page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-4">
              <FaCookie className="me-3 text-primary" />Cookie Policy
            </h1>
            <p className="lead text-muted">
              Learn how we use cookies to improve your experience on our platform.
            </p>
            <small className="text-muted">Last updated: January 2024</small>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-sm border-0" data-aos="fade-up">
              <div className="card-body p-5">
                
                <div className="mb-5">
                  <h3 className="fw-bold mb-3">What Are Cookies?</h3>
                  <p>Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.</p>
                </div>

                <div className="mb-5">
                  <h3 className="fw-bold mb-3">
                    <FaCog className="me-2 text-primary" />Types of Cookies We Use
                  </h3>
                  
                  <div className="mb-4">
                    <h5 className="fw-bold">Essential Cookies</h5>
                    <p>Required for basic website functionality, including:</p>
                    <ul>
                      <li>User authentication</li>
                      <li>Security features</li>
                      <li>Form submissions</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold">
                      <FaChartBar className="me-2 text-success" />Analytics Cookies
                    </h5>
                    <p>Help us understand how visitors use our site:</p>
                    <ul>
                      <li>Page views and traffic sources</li>
                      <li>User behavior patterns</li>
                      <li>Performance optimization</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold">Preference Cookies</h5>
                    <p>Remember your choices and settings:</p>
                    <ul>
                      <li>Language preferences</li>
                      <li>Dark/light mode selection</li>
                      <li>Donation preferences</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="fw-bold mb-3">Managing Cookies</h3>
                  <p>You can control cookies through:</p>
                  <ul>
                    <li>Browser settings (disable/enable cookies)</li>
                    <li>Our cookie consent banner</li>
                    <li>Third-party opt-out tools</li>
                  </ul>
                  <div className="alert alert-warning border-0 mt-3">
                    <small><strong>Note:</strong> Disabling essential cookies may affect website functionality.</small>
                  </div>
                </div>

                <div className="alert alert-info border-0">
                  <h5 className="fw-bold mb-2">
                    <FaEnvelope className="me-2" />Questions?
                  </h5>
                  <p className="mb-0">
                    Contact us at privacy@sudanaid.org for cookie-related questions.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;