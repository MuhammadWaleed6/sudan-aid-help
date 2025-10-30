import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmergency } from 'react-icons/md';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: ''
  });

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "help@sudanaid.org",
      link: "mailto:help@sudanaid.org",
      description: "General inquiries and support"
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+1 (234) 567-8900",
      link: "tel:+1234567890",
      description: "24/7 Emergency Hotline"
    },
    {
      icon: <MdEmergency />,
      title: "Emergency Line",
      details: "+1 (234) 567-8911",
      link: "tel:+1234567891",
      description: "Urgent humanitarian emergencies"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office Location",
      details: "123 Humanitarian Ave, Washington DC",
      link: "#",
      description: "Main coordination office"
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: '#', color: 'text-primary' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#', color: 'text-info' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#', color: 'text-danger' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#', color: 'text-primary' }
  ];

  return (
    <section id="contact" className="py-5 page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-4">Contact Us</h2>
            <p className="lead text-muted">
              Get in touch with our team for support, partnerships, or emergency assistance. 
              We're here to help 24/7.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="mb-5">
              <h4 className="fw-bold mb-4">Get In Touch</h4>
              <div className="row g-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="col-12">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body p-4">
                        <div className="d-flex align-items-start">
                          <div className="display-6 text-primary me-3">
                            {info.icon}
                          </div>
                          <div>
                            <h6 className="fw-bold mb-1">{info.title}</h6>
                            <a 
                              href={info.link} 
                              className="text-decoration-none fw-medium"
                            >
                              {info.details}
                            </a>
                            <p className="text-muted small mb-0 mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="card bg-primary text-white mb-4" data-aos="fade-up">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">
                  <FaClock className="me-2" />Office Hours
                </h5>
                <div className="mb-2">
                  <strong>Emergency Response:</strong> 24/7
                </div>
                <div className="mb-2">
                  <strong>General Support:</strong> Mon-Fri 9AM-6PM EST
                </div>
                <div>
                  <strong>Weekend Support:</strong> Sat-Sun 10AM-4PM EST
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card border-0 shadow-sm" data-aos="fade-up">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Follow Our Mission</h5>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`btn btn-outline-secondary btn-sm ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8" data-aos="fade-left">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-light">
                <h5 className="mb-0 fw-bold">
                  <FaPaperPlane className="me-2" />Send Us a Message
                </h5>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="type" className="form-label">Inquiry Type</label>
                      <select
                        className="form-select"
                        id="type"
                        name="type"
                        value={contactForm.type}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Type</option>
                        <option value="general">General Inquiry</option>
                        <option value="donation">Donation Support</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media & Press</option>
                        <option value="emergency">Emergency Assistance</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="6"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg">
                    <FaPaperPlane className="me-2" />Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up">
            <div className="alert alert-danger border-0 shadow-sm" role="alert">
              <div className="d-flex align-items-center">
                <MdEmergency className="display-6 me-3" />
                <div>
                  <h5 className="alert-heading fw-bold mb-1">Emergency Situations</h5>
                  <p className="mb-0">
                    For urgent humanitarian emergencies requiring immediate assistance, 
                    please call our emergency hotline: 
                    <a href="tel:+1234567891" className="alert-link ms-1 fw-bold">
                      +1 (234) 567-8911
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up">
            <div className="card bg-light border-0">
              <div className="card-body p-5">
                <h4 className="fw-bold text-center mb-4">Frequently Asked Questions</h4>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="fw-bold">How can I donate?</h6>
                    <p className="text-muted mb-3">
                      Visit our donation page or contact us directly. We accept various payment methods.
                    </p>
                    
                    <h6 className="fw-bold">Can I volunteer remotely?</h6>
                    <p className="text-muted mb-3">
                      Yes! We have many remote volunteer opportunities including translation and fundraising.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-bold">How are donations used?</h6>
                    <p className="text-muted mb-3">
                      100% of donations go directly to humanitarian aid. Administrative costs are covered separately.
                    </p>
                    
                    <h6 className="fw-bold">Do you provide tax receipts?</h6>
                    <p className="text-muted mb-3">
                      Yes, we provide tax-deductible receipts for all donations made through our platform.
                    </p>
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

export default Contact;