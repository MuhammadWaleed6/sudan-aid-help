import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all');

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Displaced Families Receiving Aid',
      category: 'aid-distribution',
      description: 'Families in North Darfur receiving emergency food supplies from humanitarian organizations.'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Medical Care in Refugee Camps',
      category: 'medical',
      description: 'Healthcare workers providing essential medical services to displaced children.'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Clean Water Distribution',
      category: 'water',
      description: 'Installing water pumps and distribution systems in affected communities.'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Emergency Shelter Construction',
      category: 'shelter',
      description: 'Volunteers helping to build temporary shelters for displaced families.'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Children in Learning Spaces',
      category: 'education',
      description: 'Temporary schools providing education to displaced children in refugee camps.'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Community Support Programs',
      category: 'community',
      description: 'Local communities coming together to support displaced families.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Media', icon: '📷' },
    { key: 'aid-distribution', label: 'Aid Distribution', icon: '📦' },
    { key: 'medical', label: 'Medical Care', icon: '🏥' },
    { key: 'water', label: 'Water Access', icon: '💧' },
    { key: 'shelter', label: 'Shelter', icon: '🏠' },
    { key: 'education', label: 'Education', icon: '📚' },
    { key: 'community', label: 'Community', icon: '🤝' }
  ];

  const filteredMedia = filter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter);

  const openModal = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="gallery" className="py-5 page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 fw-bold mb-4">Stories from the Field</h2>
            <p className="lead text-muted">
              Witness the impact of humanitarian aid and the resilience of the Sudanese people 
              through these powerful images and stories.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`btn ${filter === category.key ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                  onClick={() => setFilter(category.key)}
                >
                  {category.icon} {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {filteredMedia.map((media) => (
            <div key={media.id} className="col-lg-4 col-md-6">
              <div className="card shadow-sm border-0 h-100 gallery-item">
                <div className="position-relative overflow-hidden">
                  <img
                    src={media.src}
                    alt={media.title}
                    className="card-img-top gallery-image"
                    style={{ height: '250px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => openModal(media)}
                    loading="lazy"
                  />
                  <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <button 
                      className="btn btn-light btn-sm"
                      onClick={() => openModal(media)}
                    >
                      🔍 View Details
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="card-title fw-bold">{media.title}</h6>
                  <p className="card-text text-muted small">{media.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-secondary">
                      {categories.find(cat => cat.key === media.category)?.label}
                    </span>
                    <button 
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => openModal(media)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="card bg-primary text-white">
              <div className="card-body py-5">
                <h4 className="fw-bold mb-3">Share Your Story</h4>
                <p className="mb-4">
                  Have photos or stories from Sudan? Help us raise awareness by sharing your experiences.
                </p>
                <Link to="/stories" className="btn btn-light btn-lg">
                  📤 Submit Your Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Media Details */}
      {selectedMedia && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{selectedMedia.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-100"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <div className="p-4">
                  <p className="text-muted mb-3">{selectedMedia.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary">
                      {categories.find(cat => cat.key === selectedMedia.category)?.label}
                    </span>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-secondary">
                        📤 Share
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        💾 Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;