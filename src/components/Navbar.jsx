import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
      <div className="container">

        <div>
          <Link to="/" className="navbar-brand">Aurevia University</Link>
          <div className="brand-email">support@aureviauniversity.edu</div>
        </div>

        {/* ☰ button, only visible on phones */}
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link">About</Link>
            <Link to="/admissions" className="nav-link">Admissions</Link>
            <Link to="/campus-life" className="nav-link">Campus Life</Link>
            <Link to="/careers" className="nav-link">Career Center</Link>
            <Link to="/admissions" className="btn btn-success btn-sm apply-btn">Apply Now</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;