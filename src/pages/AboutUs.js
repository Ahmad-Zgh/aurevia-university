import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AboutUs.css';

function AboutUs() {
  return (
    <div className="page about-page">
      <div className="container about-container">                   {/*  container = centers the content */}

        <Link to="/" className="back-link">← Home</Link>

        <div className="white-box about-box">
          <h2 className="page-title">About Us</h2>

          <div className="text">
            <p>
              Aurevia University is a modern university that focuses on helping students learn and
              succeed. It provides a good environment where students can study and improve their skills.
            </p>
            <p>
              The university offers different majors such as Computer Science, Business, and
              Engineering. These programs help students understand both theory and practical work
              so they are ready for real-life jobs.
            </p>
            <p>
              The campus has useful facilities like labs, libraries, and study areas. Students can
              work together, share ideas, and learn in a comfortable environment.
            </p>
            <p>
              Teachers at Aurevia University support students and help them during their studies.
              Students also get chances to work on projects and gain experience.
            </p>
            <p className="about-goal">
              At Aurevia University, the goal is to help students learn, grow, and build a strong future.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;