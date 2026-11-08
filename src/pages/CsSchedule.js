import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CsSchedule.css';

function CsSchedule() {
  return (
    <div className="page cs-page">
      <div className="container cs-container">

        <Link to="/" className="back-link cs-back">← Home</Link>

        <h4 className="cs-slogan">
          EVERY DAY YOU HAVE A CHANCE TO CHANGE <br /> (2026)
        </h4>

        <div className="white-box">
          <h1 className="page-title cs-title">Computer Science</h1>

          <p className="text">
            Computer Science is a dynamic field that focuses on the theory, design, development, and
            application of computer systems and software. It explores how computers process data and
            support modern technologies used in everyday life.
          </p>

          <h4 className="cs-title">Program Schedule</h4>

          <div className="table-responsive cs-table">
            <table className="table table-bordered table-striped table-hover mb-0">
              <thead>
                <tr>
                  <th>Semester</th>
                  <th>Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Semester 1</td><td>Introduction to Programming, Discrete Mathematics, Computer Fundamentals</td></tr>
                <tr><td>Semester 2</td><td>Object-Oriented Programming, Calculus I, Digital Logic</td></tr>
                <tr><td>Semester 3</td><td>Data Structures, Computer Organization, Probability and Statistics</td></tr>
                <tr><td>Semester 4</td><td>Algorithms, Operating Systems, Database Systems</td></tr>
                <tr><td>Semester 5</td><td>Software Engineering, Computer Networks, Web Development</td></tr>
                <tr><td>Semester 6</td><td>Artificial Intelligence, Cybersecurity, Human-Computer Interaction</td></tr>
                <tr><td>Semester 7</td><td>Machine Learning, Cloud Computing, Project I</td></tr>
                <tr><td>Semester 8</td><td>Final Year Project, Internship, Advanced Topics in Computer Science</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CsSchedule;
