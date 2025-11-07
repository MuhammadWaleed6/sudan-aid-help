import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsUpdates } from '../../data/mockData';
import { FaExternalLinkAlt, FaShare, FaBookmark } from 'react-icons/fa';
import { MdWarning } from 'react-icons/md';

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchUpdates = () => {
      setTimeout(() => {
        setUpdates(newsUpdates);
        setLoading(false);
      }, 1000);
    };

    fetchUpdates();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="updates" className="py-5">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading latest updates...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="updates" className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-4">Live Updates & News</h2>
            <p className="lead text-muted">
              Stay informed with the latest developments and humanitarian reports from Sudan
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            {updates.map((update, index) => (
              <div key={update.id} className={`card mb-4 shadow-sm ${update.urgent ? 'border-danger border-2' : 'border-0'}`} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="d-flex gap-2">
                      <span className="badge bg-primary">{update.source}</span>
                      {update.urgent && (
                        <span className="badge bg-danger"><MdWarning className="me-1" />Urgent</span>
                      )}
                    </div>
                    <small className="text-muted">{formatDate(update.date)}</small>
                  </div>
                  
                  <h5 className="card-title fw-bold mb-3">{update.title}</h5>
                  <p className="card-text text-muted mb-3">{update.summary}</p>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <a 
                      href={update.link} 
                      className="btn btn-outline-primary btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="me-1" />Read More
                    </a>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-secondary">
                        <FaShare className="me-1" />Share
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <FaBookmark className="me-1" />Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="alert alert-warning border-0 shadow-sm" role="alert">
              <div className="d-flex align-items-center">
                <div className="display-6 me-3"><MdWarning className="text-warning" /></div>
                <div>
                  <h6 className="alert-heading fw-bold mb-1">Emergency Alert</h6>
                  <p className="mb-0">
                    Urgent need for medical supplies in North Darfur. 
                    <Link to="/donate" className="alert-link ms-1">Donate now to help</Link>
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

export default LiveUpdates;