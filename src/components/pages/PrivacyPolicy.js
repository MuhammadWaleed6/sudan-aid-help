import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <section className="py-5 page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-4">
              <FaShieldAlt className="me-3 text-primary" />Privacy Policy
            </h1>
            <p className="lead text-muted">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <small className="text-muted">Last updated: January 2024</small>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-sm border-0" data-aos="fade-up">
              <div className="card-body p-5">
                
                <div className="mb-5">
                  <h3 className="fw-bold mb-3">
                    <FaLock className="me-2 text-primary" />Information We Collect
                  </h3>
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul>
                    <li>Personal information (name, email, phone number)</li>
                    <li>Donation and payment information</li>
                    <li>Volunteer application details</li>
                    <li>Communication preferences</li>
                    <li>Stories and testimonials you submit</li>
                  </ul>
                </div>

                <div className="mb-5">
                  <h3 className="fw-bold mb-3">
                    <FaUserShield className="me-2 text-success" />How We Use Your Information
                  </h3>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Process donations and provide receipts</li>
                    <li>Coordinate volunteer activities</li>
                    <li>Send updates about our humanitarian work</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Improve our services and website</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="alert alert-info border-0">
                  <h5 className="fw-bold mb-2">
                    <FaEnvelope className="me-2" />Contact Us
                  </h5>
                  <p className="mb-0">
                    Questions about this Privacy Policy? Contact us at privacy@sudanaid.org
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

export default PrivacyPolicy;