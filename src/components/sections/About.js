import React from 'react';
import { statistics } from '../../data/mockData';
import { FaHome, FaMedkit, FaHandsHelping, FaChild } from 'react-icons/fa';
import { MdPeople, MdPublic, MdChildCare, MdHelp } from 'react-icons/md';

const About = () => {
  const crisisAspects = [
    {
      title: "North Darfur Crisis",
      description: "Ongoing conflict has displaced over 2.1 million people in the region",
      icon: <FaHome />,
      color: "danger"
    },
    {
      title: "Humanitarian Aid",
      description: "Emergency food, water, and medical supplies reaching affected areas",
      icon: <FaMedkit />,
      color: "success"
    },
    {
      title: "Volunteer Support",
      description: "Local and international volunteers providing critical assistance",
      icon: <FaHandsHelping />,
      color: "primary"
    },
    {
      title: "Child Protection",
      description: "Special programs ensuring safety and education for displaced children",
      icon: <FaChild />,
      color: "warning"
    }
  ];

  return (
    <section id="about" className="py-5 bg-light page-content">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-4">Current Situation in Sudan</h2>
            <p className="lead text-muted">
              Sudan faces one of the world's largest humanitarian crises. Millions need 
              immediate assistance as conflict continues to displace families across the region.
            </p>
          </div>
        </div>

        {/* Crisis Aspects Cards */}
        <div className="row g-4 mb-5">
          {crisisAspects.map((aspect, index) => (
            <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="card-body text-center p-4">
                  <div className={`display-1 text-${aspect.color} mb-3`}>
                    {aspect.icon}
                  </div>
                  <h5 className="card-title fw-bold">{aspect.title}</h5>
                  <p className="card-text text-muted">{aspect.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="card bg-primary text-white">
              <div className="card-body py-5">
                <h3 className="text-center mb-4">Crisis by Numbers</h3>
                <div className="row text-center">
                  {statistics.map((stat, index) => {
                    const IconComponent = stat.icon === 'MdHelp' ? MdHelp : 
                                        stat.icon === 'MdPeople' ? MdPeople :
                                        stat.icon === 'MdChildCare' ? MdChildCare : MdPublic;
                    return (
                      <div key={index} className="col-lg-3 col-md-6 mb-3">
                        <div className="display-1 mb-2"><IconComponent /></div>
                        <h2 className="fw-bold">{stat.value}</h2>
                        <p className="mb-1">{stat.label}</p>
                        <small className="opacity-75">Source: {stat.source}</small>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;