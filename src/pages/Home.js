import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

function Home() {
  return (
    <div className="container home">                                {/*  container = centers the page */}

      <h1 className="home-title">Aurevia University</h1>
      <p className="home-subtitle">Empowering the next generation of academic leaders</p>

      <div className="carousel slide carousel-fade slideshow" data-bs-ride="carousel" data-bs-interval="4000">
      {/*  carousel = slideshow | slide = moves between pictures | carousel-fade = fade effect
           data-bs-ride="carousel" = starts by itself | data-bs-interval="4000" = every 4 seconds */}
        <div className="carousel-inner">                            {/*  carousel-inner = holds the pictures */}
          <div className="carousel-item active">                    {/*  carousel-item = one picture | active = shown first */}
            <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238" className="d-block w-100 slide-img" alt="Campus" />
            {/*  d-block = own full line | w-100 = width 100% */}
          </div>
          <div className="carousel-item">                           {/*  carousel-item = second picture */}
            <img src="https://images.unsplash.com/photo-1562774053-701939374585" className="d-block w-100 slide-img" alt="Students" />
          </div>
          <div className="carousel-item">                           {/*  carousel-item = third picture */}
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

      <div className="row g-3">                                     {/*  row = grid row | g-3 = gap between buttons */}
        <div className="col-12 col-md-4">                           {/*  col-12 = full width on phones | col-md-4 = 1/3 on computers */}
          <Link to="/cs-schedule" className="btn btn-outline-primary w-100 major-btn">Computer Science Track</Link>
          {/*  btn = button | btn-outline-primary = blue outline | w-100 = full width */}
        </div>
        <div className="col-12 col-md-4">
          <Link to="/business-schedule" className="btn btn-outline-success w-100 major-btn">Business Track</Link>
          {/*  btn-outline-success = green outline */}
        </div>
        <div className="col-12 col-md-4">
          <Link to="/engineering-schedule" className="btn btn-outline-danger w-100 major-btn">Engineering Track</Link>
          {/*  btn-outline-danger = red outline */}
        </div>
      </div>

      <div className="table-responsive home-table">                 {/*  table-responsive = scrolls sideways on phones */}
        <table className="table table-bordered table-hover mb-0">
        {/* table = table style | table-bordered = cell borders | table-hover = highlight row | mb-0 = no space under */}
          <thead className="table-dark">                            {/*  table-dark = dark header row */}
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