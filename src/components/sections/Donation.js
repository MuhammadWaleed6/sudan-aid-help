import React, { useState } from 'react';
import { ngos } from '../../data/mockData';
import { FaHeart, FaBreadSlice, FaTint, FaMedkit, FaHome, FaShieldAlt, FaLock, FaChartBar, FaBuilding, FaSeedling, FaHospital, FaGraduationCap, FaMoon } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

const Donation = () => {
  const [donationForm, setDonationForm] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setDonationForm({
      ...donationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your donation intent! You will be redirected to the payment processor.');
    // In a real app, this would integrate with a payment processor
  };

  const urgentNeeds = [
    { item: "Emergency Food Supplies", cost: "$50", icon: <FaBreadSlice /> },
    { item: "Clean Water for Family", cost: "$25", icon: <FaTint /> },
    { item: "Medical Kit", cost: "$75", icon: <FaMedkit /> },
    { item: "Shelter Materials", cost: "$100", icon: <FaHome /> }
  ];

  return (
    <section id="donate" className="py-5 page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-4">Make a Difference Today</h2>
            <p className="lead text-muted">
              Your donation directly supports families in crisis. Every contribution, 
              no matter the size, helps save lives and restore hope.
            </p>
          </div>
        </div>

        {/* Urgent Needs */}
        <div className="row mb-5">
          <div className="col-12" data-aos="fade-up">
            <div className="card bg-danger text-white mb-4">
              <div className="card-body text-center py-4">
                <h4 className="fw-bold mb-3"><MdSecurity className="me-2" />Urgent Needs</h4>
                <div className="row">
                  {urgentNeeds.map((need, index) => (
                    <div key={index} className="col-lg-3 col-md-6 mb-3">
                      <div className="display-6 mb-2 text-white">{need.icon}</div>
                      <h6 className="fw-bold">{need.item}</h6>
                      <p className="mb-0">{need.cost}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* NGO Partners */}
          <div className="col-lg-8" data-aos="fade-right">
            <h4 className="fw-bold mb-4">Trusted NGO Partners</h4>
            <div className="row g-4">
              {ngos.map((ngo, index) => (
                <div key={index} className="col-lg-12 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div className="display-4 text-primary">
                          {ngo.logo === 'FaBuilding' && <FaBuilding />}
                          {ngo.logo === 'FaSeedling' && <FaSeedling />}
                          {ngo.logo === 'FaHospital' && <FaHospital />}
                          {ngo.logo === 'FaGraduationCap' && <FaGraduationCap />}
                          {ngo.logo === 'FaMoon' && <FaMoon />}
                          {ngo.logo === 'FaHeart' && <FaHeart />}
                        </div>
                        {ngo.verified && (
                          <span className="badge bg-success"><FaShieldAlt className="me-1" />Verified</span>
                        )}
                      </div>
                      <h5 className="card-title fw-bold">{ngo.name}</h5>
                      <p className="card-text text-muted mb-3">{ngo.description}</p>
                      {ngo.impact && (
                        <div className="mb-3">
                          <small className="text-primary fw-medium">
                            <FaChartBar className="me-1" />{ngo.impact}
                          </small>
                        </div>
                      )}
                      <a 
                        href={ngo.donateLink}
                        className="btn btn-primary w-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaHeart className="me-2" />Donate to {ngo.name}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Donation Form */}
          <div className="col-lg-4" data-aos="fade-left">
            <div className="card shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0"><FaHeart className="me-2" />Quick Donation</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={donationForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={donationForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Donation Amount ($)</label>
                    <select
                      className="form-select"
                      id="amount"
                      name="amount"
                      value={donationForm.amount}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Amount</option>
                      <option value="25">$25 - Clean Water</option>
                      <option value="50">$50 - Food Supplies</option>
                      <option value="75">$75 - Medical Kit</option>
                      <option value="100">$100 - Shelter</option>
                      <option value="custom">Custom Amount</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message (Optional)</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      value={donationForm.message}
                      onChange={handleInputChange}
                      placeholder="Your message of support..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-success w-100 btn-lg">
                    <FaHeart className="me-2" />Donate Now
                  </button>
                </form>
                
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    <FaLock className="me-1" />Secure payment processing<br/>
                    <FaShieldAlt className="me-1" />100% of donations reach beneficiaries
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up">
            <div className="card bg-light border-0">
              <div className="card-body text-center py-5">
                <h4 className="fw-bold mb-4">Your Impact</h4>
                <div className="row">
                  <div className="col-md-3">
                    <h2 className="text-primary fw-bold">$25</h2>
                    <p>Provides clean water for a family for one week</p>
                  </div>
                  <div className="col-md-3">
                    <h2 className="text-success fw-bold">$50</h2>
                    <p>Feeds a family of 5 for two weeks</p>
                  </div>
                  <div className="col-md-3">
                    <h2 className="text-warning fw-bold">$75</h2>
                    <p>Provides essential medical supplies</p>
                  </div>
                  <div className="col-md-3">
                    <h2 className="text-danger fw-bold">$100</h2>
                    <p>Helps build emergency shelter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;