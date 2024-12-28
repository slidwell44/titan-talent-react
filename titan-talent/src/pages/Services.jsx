import React from 'react';

const Services = () => {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Executive Search</h3>
          <p>Finding the right leaders for your organization...</p>
        </div>
        <div className="service-item">
          <h3>Talent Acquisition</h3>
          <p>End-to-end recruitment solutions tailored to your needs...</p>
        </div>
        {/* ...More service items... */}
      </div>
    </div>
  );
};

export default Services;
