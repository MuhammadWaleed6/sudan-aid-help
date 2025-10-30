import React from 'react';
import { FaFileContract, FaGavel, FaHandshake, FaEnvelope } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <section className="py-5 page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h1 className="display-4 fw-bold mb-4">
              <FaFileContract className="me-3 text-primary" />Terms of Service
            </h1>
            <p className="lead text-muted">
              Please read these terms carefully before using our platform and services.
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
                    <FaHandshake className="me-2 text-primary" />Acceptance of Terms
                  </h3>
                  <p>By accessing and using Sudan Aid Platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                </div>

                <div className="mb-5">
                  <h3 className="fw-bold mb-3">Use of Services</h3>
                  <p>You may use our services for:</p>
                  <ul>
                    <li>Making donations to humanitarian causes</li>
                    <li>Volunteering for approved activities</li>
                    <li>Sharing appropriate stories and experiences</li>
                    <li>Accessing educational content about Sudan crisis</li>
                  </ul>
                </div>

                <div className="mb-5">
                  <h3 className="fw-bold mb-3">Donations</h3>
                  <p>All donations are:</p>
                  <ul>
                    <li>Voluntary and non-refundable</li>
                    <li>Used exclusively for humanitarian purposes</li>
                    <li>Tax-deductible where applicable</li>
                    <li>Processed through secure payment systems</li>
                  </ul>
                </div>

                <div className="mb-5">
                  <h3 className="fw-bold mb-3">
                    <FaGavel className="me-2 text-warning" />Prohibited Activities
                  </h3>
                  <p>You agree not to:</p>
                  <ul>
                    <li>Use the platform for illegal activities</li>
                    <li>Submit false or misleading information</li>
                    <li>Interfere with platform security</li>
                    <li>Violate intellectual property rights</li>
                  </ul>
                </div>

                <div className="alert alert-info border-0">
                  <h5 className="fw-bold mb-2">
                    <FaEnvelope className="me-2" />Questions?
                  </h5>
                  <p className="mb-0">
                    Contact us at legal@sudanaid.org for any questions about these terms.
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

export default TermsOfService;