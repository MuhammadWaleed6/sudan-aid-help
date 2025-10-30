import React, { useState } from 'react';
import { mapData } from '../../data/mockData';
import { FaMapMarkerAlt, FaHeart, FaChartBar } from 'react-icons/fa';
import { MdLocationOn, MdMap } from 'react-icons/md';

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'critical': return '#dc3545';
      case 'urgent': return '#fd7e14';
      default: return '#198754';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'critical': return 'danger';
      case 'urgent': return 'warning';
      default: return 'success';
    }
  };

  return (
    <section id="map" className="py-5 bg-light page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-4">Crisis Map</h2>
            <p className="lead text-muted">
              Interactive overview showing displacement hotspots and aid distribution centers across Sudan
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8" data-aos="fade-right">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <div className="row g-3">
                  {mapData.map((location) => (
                    <div key={location.id} className="col-md-6">
                      <div 
                        className={`card h-100 border-2 ${selectedLocation?.id === location.id ? 'border-primary' : 'border-light'} hover-card`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <div 
                              className="rounded-circle me-3"
                              style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: getStatusColor(location.status),
                                border: '3px solid white',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                              }}
                            ></div>
                            <h6 className="fw-bold mb-0">{location.name}</h6>
                          </div>
                          
                          <div className="mb-2">
                            <span className={`badge bg-${getStatusBadge(location.status)} mb-2`}>
                              {location.status.toUpperCase()}
                            </span>
                          </div>
                          
                          <p className="mb-2">
                            <strong>Displaced:</strong> {location.displaced}
                          </p>
                          <p className="text-muted small mb-0">
                            {location.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Static Map Placeholder */}
                <div className="mt-4">
                  <div 
                    className="bg-secondary rounded d-flex align-items-center justify-content-center text-white"
                    style={{ height: '300px', backgroundImage: 'linear-gradient(45deg, #6c757d 25%, transparent 25%), linear-gradient(-45deg, #6c757d 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #6c757d 75%), linear-gradient(-45deg, transparent 75%, #6c757d 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}
                  >
                    <div className="text-center">
                      <div className="display-1 mb-3"><MdMap className="text-white" /></div>
                      <h5>Sudan Crisis Map</h5>
                      <p className="mb-0">Interactive map showing affected regions</p>
                      <small className="text-light">Click on location cards above for details</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-left">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0"><MdLocationOn className="me-2" />Location Details</h5>
              </div>
              <div className="card-body">
                {selectedLocation ? (
                  <div>
                    <h6 className="fw-bold">{selectedLocation.name}</h6>
                    <div className="mb-3">
                      <span className={`badge bg-${getStatusBadge(selectedLocation.status)} mb-2`}>
                        {selectedLocation.status.toUpperCase()}
                      </span>
                    </div>
                    <p><strong>Displaced People:</strong> {selectedLocation.displaced}</p>
                    <p className="text-muted">{selectedLocation.description}</p>
                    
                    <div className="mt-4">
                      <button className="btn btn-primary btn-sm w-100 mb-2">
                        <FaHeart className="me-1" />Donate for This Region
                      </button>
                      <button className="btn btn-outline-secondary btn-sm w-100">
                        <FaChartBar className="me-1" />View Detailed Report
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted">
                    <div className="display-1 mb-3"><MdMap className="text-secondary" /></div>
                    <p>Click on a location card to view details</p>
                  </div>
                )}
              </div>
            </div>

            {/* Legend */}
            <div className="card shadow-sm border-0 mt-3">
              <div className="card-header">
                <h6 className="mb-0">Map Legend</h6>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div style={{
                    width: '12px', 
                    height: '12px', 
                    backgroundColor: '#dc3545', 
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}></div>
                  <small>Critical Situation</small>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div style={{
                    width: '12px', 
                    height: '12px', 
                    backgroundColor: '#fd7e14', 
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}></div>
                  <small>Urgent Attention</small>
                </div>
                <div className="d-flex align-items-center">
                  <div style={{
                    width: '12px', 
                    height: '12px', 
                    backgroundColor: '#198754', 
                    borderRadius: '50%',
                    marginRight: '8px'
                  }}></div>
                  <small>Aid Centers</small>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card shadow-sm border-0 mt-3">
              <div className="card-header bg-info text-white">
                <h6 className="mb-0"><FaChartBar className="me-2" />Quick Stats</h6>
              </div>
              <div className="card-body">
                <div className="row text-center">
                  <div className="col-6 mb-3">
                    <h5 className="text-danger fw-bold">5.1M</h5>
                    <small>Total Displaced</small>
                  </div>
                  <div className="col-6 mb-3">
                    <h5 className="text-warning fw-bold">15</h5>
                    <small>Affected States</small>
                  </div>
                  <div className="col-6">
                    <h5 className="text-success fw-bold">50+</h5>
                    <small>Aid Centers</small>
                  </div>
                  <div className="col-6">
                    <h5 className="text-primary fw-bold">24/7</h5>
                    <small>Response</small>
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

export default InteractiveMap;