import React from 'react';
import { Link } from 'react-router-dom';
import './EngineeringSchedule.css';

function EngineeringSchedule() {
  return (
    <div className="page engineering-page">
      <div className="container engineering-container">

        <Link to="/" className="back-link engineering-back">← Home</Link>

        {/* On phones, "EVERY DAY" gets its own line (d-sm-none = hidden from small screens up) */}
        <h4 className="engineering-slogan">
          EVERY DAY <br className="d-sm-none" /> YOU HAVE A CHANCE TO CHANGE <br /> (2026)
        </h4>

        <div className="white-box engineering-box">
          <h1 className="page-title engineering-title">Engineering</h1>

          <p className="text">
            Engineering at Aurevia University is a dynamic and forward-looking discipline that applies
            scientific knowledge and mathematical principles to the design, development, and
            maintenance of innovative systems and technologies.
          </p>

          <h4 className="engineering-title">Program Schedule</h4>

          <div className="table-responsive engineering-table">
            <table className="table table-bordered table-striped table-hover mb-0">
              <thead>
                <tr>
                  <th>Semester</th>
                  <th>Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Semester 1</td><td>Engineering Mathematics I, Physics I, Introduction to Engineering</td></tr>
                <tr><td>Semester 2</td><td>Programming Fundamentals, Physics II, Engineering Drawing</td></tr>
                <tr><td>Semester 3</td><td>Data Structures, Digital Electronics, Circuit Analysis</td></tr>
                <tr><td>Semester 4</td><td>Algorithms, Microprocessors, Signals and Systems</td></tr>
                <tr><td>Semester 5</td><td>Software Engineering, Embedded Systems, Computer Networks</td></tr>
                <tr><td>Semester 6</td><td>Control Systems, Operating Systems, Database Systems</td></tr>
                <tr><td>Semester 7</td><td>Artificial Intelligence, Robotics, Project I</td></tr>
                <tr><td>Semester 8</td><td>Final Year Project, Internship, Advanced Engineering Topics</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EngineeringSchedule;
