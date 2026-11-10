import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
    {/*  navbar = navigation bar | navbar-expand-md = full menu on computers, ☰ on phones
         navbar-dark = light text | bg-primary = blue background | sticky-top = stays on top when scrolling */}

      <div className="container">                                   {/*  container = centers the content */}

        <div>
          <Link to="/" className="navbar-brand">Aurevia University</Link>   {/*  navbar-brand = style for the name */}
          <div className="brand-email">support@aureviauniversity.edu</div>
        </div>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
        {/*  navbar-toggler = the ☰ button, only on phones
             data-bs-toggle="collapse" = when clicked, open/close something
             data-bs-target="#menu" = the thing to open is id="menu" */}
          <span className="navbar-toggler-icon"></span>             {/*  navbar-toggler-icon = draws the ☰ lines */}
        </button>

        <div className="collapse navbar-collapse" id="menu">
        {/*  collapse = hidden on phones until ☰ is clicked | navbar-collapse = shown on computers */}
          <div className="navbar-nav ms-auto">                      {/* navbar-nav = lines up the links | ms-auto = pushes them right */}
            <Link to="/" className="nav-link">Home</Link>           {/*  nav-link = style for a menu link */}
            <Link to="/about-us" className="nav-link">About</Link>
            <Link to="/admissions" className="nav-link">Admissions</Link>
            <Link to="/campus-life" className="nav-link">Campus Life</Link>
            <Link to="/careers" className="nav-link">Career Center</Link>
            <Link to="/admissions" className="btn btn-success btn-sm apply-btn">Apply Now</Link>
            {/*  btn = button | btn-success = green | btn-sm = small */}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;