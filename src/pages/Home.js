import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <div className="container home">

      <h1 className="home-title">Aurevia University</h1>
      <p className="home-subtitle">Empowering the next generation of academic leaders</p>

      {/* Slideshow (Bootstrap carousel): changes picture every 4 seconds */}
      <div className="carousel slide carousel-fade slideshow" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238" className="d-block w-100 slide-img" alt="Campus" />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585" className="d-block w-100 slide-img" alt="Students" />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" className="d-block w-100 slide-img" alt="Library" />
          </div>
        </div>
      </div>

      <div className="welcome">
        <h4>Welcome to our University!</h4>
        <p>
          Aurevia University is dedicated to nurturing the next generation of leaders, innovators,
          and thinkers. Our mission is to provide a world-class education that combines academic
          excellence with real-world experience. With a diverse community of students and faculty,
          cutting-edge facilities, and a commitment to research and innovation, we empower our
          students to achieve their full potential.
        </p>
      </div>

      <h3 className="majors-title">Majors</h3>

      {/* Bootstrap grid: 1 button per row on phones, 3 side by side on computers */}
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <Link to="/cs-schedule" className="btn btn-outline-primary w-100 major-btn">Computer Science Track</Link>
        </div>
        <div className="col-12 col-md-4">
          <Link to="/business-schedule" className="btn btn-outline-success w-100 major-btn">Business Track</Link>
        </div>
        <div className="col-12 col-md-4">
          <Link to="/engineering-schedule" className="btn btn-outline-danger w-100 major-btn">Engineering Track</Link>
        </div>
      </div>

      <div className="table-responsive home-table">
        <table className="table table-bordered table-hover mb-0">
          <thead className="table-dark">
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>Degree</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Computer Science</td><td>4 Years</td><td>BSc</td></tr>
            <tr><td>Business</td><td>4 Years</td><td>BBA</td></tr>
            <tr><td>Engineering</td><td>4 Years</td><td>BEng</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Home;
