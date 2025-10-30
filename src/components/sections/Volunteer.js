import React, { useState } from 'react';
import { FaUserMd, FaUsers, FaDollarSign, FaLanguage, FaHandsHelping } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Volunteer = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skills: '',
    availability: '',
    experience: ''
  });

  const handleInputChange = (e) => {
    setVolunteerForm({
      ...volunteerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for volunteering! We will contact you soon with opportunities.');
    setVolunteerForm({
      name: '',
      email: '',
      phone: '',
      location: '',
      skills: '',
      availability: '',
      experience: ''
    });
  };

  const volunteerOpportunities = [
    {
      title: "Field Coordinator",
      location: "Sudan/Chad Border",
      type: "On-site",
      duration: "3-6 months",
      description: "Coordinate aid distribution and manage local volunteer teams",
      requirements: ["Experience in humanitarian work", "Arabic language skills preferred"],
      icon: <FaUsers />
    },
    {
      title: "Medical Volunteer",
      location: "Refugee Camps",
      type: "On-site",
      duration: "2-4 weeks",
      description: "Provide medical care and health education to displaced families",
      requirements: ["Medical degree or nursing certification", "Emergency medicine experience"],
      icon: <FaUserMd />
    },
    {
      title: "Remote Fundraiser",
      location: "Remote",
      type: "Virtual",
      duration: "Ongoing",
      description: "Help raise funds through social media campaigns and events",
      requirements: ["Social media experience", "Marketing background helpful"],
      icon: <FaDollarSign />
    },
    {
      title: "Translator",
      location: "Remote/On-site",
      type: "Hybrid",
      duration: "Flexible",
      description: "Translate documents and assist with communication",
      requirements: ["Fluent in Arabic and English", "Translation experience"],
      icon: <FaLanguage />
    }
  ];

  return (
    <section id="volunteer" className="py-5 bg-light page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-4">Join Our Volunteer Network</h2>
            <p className="lead text-muted">
              Make a direct impact by volunteering your time and skills. 
              Whether on-site or remote, every contribution matters.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Volunteer Opportunities */}
          <div className="col-lg-8" data-aos="fade-right">
            <h4 className="fw-bold mb-4">Current Opportunities</h4>
            <div className="row g-4">
              {volunteerOpportunities.map((opportunity, index) => (
                <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="display-6 me-3">{opportunity.icon}</div>
                        <div>
                          <h5 className="card-title fw-bold mb-1">{opportunity.title}</h5>
                          <div className="d-flex gap-2 flex-wrap">
                            <span className="badge bg-primary">{opportunity.type}</span>
                            <span className="badge bg-secondary">{opportunity.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted mb-3"><MdLocationOn className="me-1" />{opportunity.location}</p>
                      <p className="card-text mb-3">{opportunity.description}</p>
                      
                      <div className="mb-3">
                        <h6 className="fw-bold">Requirements:</h6>
                        <ul className="list-unstyled">
                          {opportunity.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-muted">
                              <small>• {req}</small>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="btn btn-outline-primary w-100">
                        Apply for This Role
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Registration Form */}
          <div className="col-lg-4" data-aos="fade-left">
            <div className="card shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
              <div className="card-header bg-success text-white">
                <h5 className="mb-0"><FaHandsHelping className="me-2" />Volunteer Registration</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={volunteerForm.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={volunteerForm.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={volunteerForm.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={volunteerForm.location}
                      onChange={handleInputChange}
                      placeholder="City, Country"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="skills" className="form-label">Skills & Expertise</label>
                    <select
                      className="form-select"
                      id="skills"
                      name="skills"
                      value={volunteerForm.skills}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Primary Skill</option>
                      <option value="medical">Medical/Healthcare</option>
                      <option value="logistics">Logistics & Coordination</option>
                      <option value="translation">Translation/Languages</option>
                      <option value="fundraising">Fundraising/Marketing</option>
                      <option value="education">Education/Training</option>
                      <option value="technology">Technology/IT</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="availability" className="form-label">Availability</label>
                    <select
                      className="form-select"
                      id="availability"
                      name="availability"
                      value={volunteerForm.availability}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Availability</option>
                      <option value="full-time">Full-time (40+ hrs/week)</option>
                      <option value="part-time">Part-time (20-40 hrs/week)</option>
                      <option value="weekends">Weekends only</option>
                      <option value="flexible">Flexible schedule</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="experience" className="form-label">Previous Experience</label>
                    <textarea
                      className="form-control"
                      id="experience"
                      name="experience"
                      rows="3"
                      value={volunteerForm.experience}
                      onChange={handleInputChange}
                      placeholder="Tell us about your relevant experience..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-success w-100 btn-lg">
                    🤝 Join as Volunteer
                  </button>
                </form>
                
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    We'll contact you within 48 hours with suitable opportunities
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer Impact */}
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up">
            <div className="card bg-success text-white">
              <div className="card-body text-center py-5">
                <h4 className="fw-bold mb-4">Volunteer Impact</h4>
                <div className="row">
                  <div className="col-md-3">
                    <h2 className="fw-bold">1,200+</h2>
                    <p>Active Volunteers</p>
                  </div>
                  <div className="col-md-3">
                    <h2 className="fw-bold">50,000+</h2>
                    <p>People Helped</p>
                  </div>
                  <div className="col-md-3">
                    <h2 className="fw-bold">25</h2>
                    <p>Countries Represented</p>
                  </div>
                  <div className="col-md-3">
                    <h2 className="fw-bold">24/7</h2>
                    <p>Support Available</p>
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

export default Volunteer;