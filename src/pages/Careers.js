import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Campus.css';

function Careers() {
  return (
    <div className="page careers-page">
      <div className="container careers-container">

        <Link to="/" className="back-link">← Home</Link>

        <div className="white-box careers-box">
          <h2 className="page-title">Career Opportunities</h2>

          <div className="text">
            <p>
              At Aurevia University, we help students get ready for their future careers. Our
              programs in Engineering, Computer Science, and Business give students both knowledge
              and practical skills.
            </p>
            <p className="mb-0">
              Computer Science students learn programming, data handling, and software development.
              They can work in jobs like software development, cybersecurity, and IT.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Careers;
