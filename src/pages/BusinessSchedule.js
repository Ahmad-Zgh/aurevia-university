import React from 'react';
import { Link } from 'react-router-dom';
import '../css/BusinessSchedule.css';

function BusinessSchedule() {
  return (
    <div className="page business-page">
      <div className="container business-container">                {/*  container = centers the content */}

        <Link to="/" className="back-link business-back">← Home</Link>

        <h4 className="business-slogan">
          EVERY DAY <br className="d-sm-none" /> YOU HAVE A CHANCE TO CHANGE <br /> (2026)
          {/* d-sm-none = this line break only shows on phones (hidden from 576px and up) */}
        </h4>

        <div className="white-box">
          <h1 className="page-title">Business</h1>

          <p className="text">
            Business Studies at Aurevia University equip students with a deep and practical
            understanding of how organizations operate, compete, and grow in today's dynamic global
            marketplace.
          </p>

          <h4 className="business-subtitle">Program Schedule</h4>

          <div className="table-responsive business-table">         {/*  table-responsive = scrolls sideways on phones */}
            <table className="table table-bordered table-striped table-hover mb-0">
              {/*  table = table style | table-bordered = cell borders | table-striped = grey every other row
                 table-hover = highlight row under the mouse | mb-0 = no space under */}
              <thead>
                <tr>
                  <th>Semester</th>
                  <th>Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Semester 1</td><td>Principles of Management, Microeconomics, Business Mathematics</td></tr>
                <tr><td>Semester 2</td><td>Principles of Marketing, Macroeconomics, Business Communication</td></tr>
                <tr><td>Semester 3</td><td>Financial Accounting, Organizational Behavior, Business Statistics</td></tr>
                <tr><td>Semester 4</td><td>Operations Management, Corporate Finance, Business Law</td></tr>
                <tr><td>Semester 5</td><td>Human Resource Management, Strategic Management, Digital Marketing</td></tr>
                <tr><td>Semester 6</td><td>Entrepreneurship, International Business, Project Management</td></tr>
                <tr><td>Semester 7</td><td>Business Analytics, Leadership and Ethics, Internship I</td></tr>
                <tr><td>Semester 8</td><td>Capstone Project, Internship II, Advanced Topics in Business</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BusinessSchedule;