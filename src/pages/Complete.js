import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Complete.css';

function Complete() {
  return (
    <div className="page complete-page">
      <div className="container complete-container">

        <div className="white-box complete-box">
          <div className="check-icon">✔</div>

          <h1 className="complete-title">Registration Complete!</h1>

          <p className="text-secondary">
            Thank you for choosing Aurevia University! <br />
            We look forward to seeing you soon on our campus.
          </p>

          <Link to="/" className="btn btn-warning w-100 fw-bold">Return Home</Link>
        </div>

      </div>
    </div>
  );
}

export default Complete;
