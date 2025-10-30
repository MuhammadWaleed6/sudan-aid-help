import React, { useState } from 'react';
import { FaEdit, FaUser, FaEnvelope, FaMapMarkerAlt, FaList, FaImage, FaPaperPlane, FaHeart, FaComment, FaShare, FaEye, FaCheckCircle, FaTimes } from 'react-icons/fa';

const SubmitStory = () => {
  const [storyForm, setStoryForm] = useState({
    title: '',
    author: '',
    email: '',
    location: '',
    story: '',
    category: '',
    images: []
  });

  const [submittedStories, setSubmittedStories] = useState([
    {
      id: 1,
      title: "Hope in Darkness: A Mother's Journey",
      author: "Fatima Ahmed",
      location: "North Darfur",
      category: "survival",
      story: "When the conflict reached our village, I had to make the hardest decision of my life - leave everything behind to protect my three children. We walked for days with nothing but the clothes on our backs. The kindness of strangers and aid workers kept us alive. Today, my children are safe in a refugee camp, attending school again. There is hope even in the darkest times.",
      date: "2024-01-10",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 45,
      comments: 12
    },
    {
      id: 2,
      title: "Medical Heroes on the Frontline",
      author: "Dr. Sarah Johnson",
      location: "Khartoum",
      category: "aid-work",
      story: "As a volunteer doctor, I've witnessed both heartbreak and miracles in Sudan. Yesterday, we delivered a baby in our makeshift clinic. The mother named her 'Amal' - hope in Arabic. Despite the challenges, seeing new life and the resilience of the Sudanese people reminds me why this work matters.",
      date: "2024-01-08",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 67,
      comments: 23
    },
    {
      id: 3,
      title: "Building Tomorrow: Education in Crisis",
      author: "Ahmed Hassan",
      location: "West Darfur",
      category: "education",
      story: "I'm a teacher who refused to let the crisis stop education. We created a school under a tree, using stones as chairs and the ground as our blackboard. 50 children come every day, eager to learn. Education is their weapon against despair, their bridge to a better future.",
      date: "2024-01-05",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: 89,
      comments: 34
    }
  ]);

  const handleInputChange = (e) => {
    setStoryForm({
      ...storyForm,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // In real app, upload to Supabase storage
    setStoryForm({
      ...storyForm,
      images: files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, save to Supabase database
    const newStory = {
      id: submittedStories.length + 1,
      ...storyForm,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      comments: 0,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };
    
    setSubmittedStories([newStory, ...submittedStories]);
    setStoryForm({
      title: '',
      author: '',
      email: '',
      location: '',
      story: '',
      category: '',
      images: []
    });
    
    alert('آپ کی کہانی کامیابی سے جمع ہو گئی! Your story has been submitted successfully!');
  };

  const categories = [
    { value: 'survival', label: 'Survival Stories', icon: <FaHeart /> },
    { value: 'aid-work', label: 'Aid Work', icon: <FaUser /> },
    { value: 'education', label: 'Education', icon: <FaEdit /> },
    { value: 'community', label: 'Community Support', icon: <FaShare /> },
    { value: 'hope', label: 'Messages of Hope', icon: <FaHeart /> },
    { value: 'family', label: 'Family Stories', icon: <FaUser /> }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="submit-story" className="py-5 page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-4">Share Your Story</h2>
            <p className="lead text-muted">
              آپ کی آواز اہم ہے - Your voice matters. Share your experiences, hope, and resilience 
              to inspire others and raise awareness about Sudan's humanitarian crisis.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Submit Story Form */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="card shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0"><FaEdit className="me-2" />Submit Your Story</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Story Title *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={storyForm.title}
                      onChange={handleInputChange}
                      placeholder="Give your story a meaningful title"
                      required
                    />
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="author" className="form-label">Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={storyForm.author}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={storyForm.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="location" className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        value={storyForm.location}
                        onChange={handleInputChange}
                        placeholder="City, State/Region"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="category" className="form-label">Category *</label>
                      <select
                        className="form-select"
                        id="category"
                        name="category"
                        value={storyForm.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.icon} {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="story" className="form-label">Your Story *</label>
                    <textarea
                      className="form-control"
                      id="story"
                      name="story"
                      rows="6"
                      value={storyForm.story}
                      onChange={handleInputChange}
                      placeholder="Share your experience, hope, or message. Write in English, Arabic, or any language you're comfortable with..."
                      required
                    ></textarea>
                    <div className="form-text">
                      Minimum 100 characters. Be respectful and authentic.
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="images" className="form-label">Upload Images (Optional)</label>
                    <input
                      type="file"
                      className="form-control"
                      id="images"
                      name="images"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <div className="form-text">
                      Upload up to 3 images (JPG, PNG, max 5MB each)
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-100 btn-lg">
                    <FaPaperPlane className="me-2" />Submit Story
                  </button>
                </form>
                
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    🔒 Your story will be reviewed before publishing<br/>
                    📧 We'll notify you once it's live
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Stories Feed */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold">Community Stories</h4>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-outline-primary">Latest</button>
                <button className="btn btn-sm btn-outline-secondary">Most Liked</button>
              </div>
            </div>

            {submittedStories.map((story, index) => (
              <div key={story.id} className="card mb-4 shadow-sm border-0" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="img-fluid rounded-start h-100"
                      style={{ objectFit: 'cover', minHeight: '200px' }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="badge bg-primary">
                          {categories.find(cat => cat.value === story.category)?.icon} {categories.find(cat => cat.value === story.category)?.label}
                        </span>
                        <small className="text-muted">{formatDate(story.date)}</small>
                      </div>
                      
                      <h5 className="card-title fw-bold mb-2">{story.title}</h5>
                      <p className="text-muted mb-2">
                        <small>📍 {story.location} • ✍️ {story.author}</small>
                      </p>
                      
                      <p className="card-text">
                        {story.story.length > 150 
                          ? `${story.story.substring(0, 150)}...` 
                          : story.story
                        }
                      </p>
                      
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex gap-3">
                          <button className="btn btn-sm btn-outline-danger">
                            <FaHeart className="me-1" />{story.likes}
                          </button>
                          <button className="btn btn-sm btn-outline-primary">
                            <FaComment className="me-1" />{story.comments}
                          </button>
                          <button className="btn btn-sm btn-outline-secondary">
                            <FaShare className="me-1" />Share
                          </button>
                        </div>
                        <button className="btn btn-sm btn-primary">
                          <FaEye className="me-1" />Read Full Story
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Load More */}
            <div className="text-center mt-4">
              <button className="btn btn-outline-primary btn-lg">
                Load More Stories
              </button>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light border-0">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3"><FaList className="me-2" />Story Guidelines</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Share authentic, personal experiences</li>
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Be respectful and sensitive to others</li>
                      <li className="mb-2"><FaCheckCircle className="text-success me-2" />Focus on hope, resilience, and humanity</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled">
                      <li className="mb-2"><FaTimes className="text-danger me-2" />No hate speech or discrimination</li>
                      <li className="mb-2"><FaTimes className="text-danger me-2" />No graphic violence or disturbing content</li>
                      <li className="mb-2"><FaTimes className="text-danger me-2" />No false information or misleading claims</li>
                    </ul>
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

export default SubmitStory;