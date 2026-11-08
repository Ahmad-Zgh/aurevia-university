import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Admission.css';

function Admission() {
  const navigate = useNavigate();

  // When the form is sent, go to the "Registration Complete" page
  function handleSubmit(e) {
    e.preventDefault();
    navigate('/complete');
  }

  return (
    <div className="page admissions-page">
      <div className="container admissions-container">

        <Link to="/" className="back-link">← Home</Link>

        <div className="white-box">
          <h2 className="page-title admissions-title">Admissions</h2>

          <div className="text">
            <p>
              At Aurevia University, we aim to keep the admission process simple, clear, and
              accessible for all applicants, so each step is easy to follow.
            </p>
            <p>
              Students can choose from majors such as Computer Science, Business, and Engineering.
              Each program gives both knowledge and practical skills to help students succeed after
              graduation.
            </p>
            <p>
              To apply, students fill in the registration form below. We encourage students to apply
              early, as some majors have limited seats.
            </p>
          </div>

          <h4 className="admissions-subtitle">Registration Schedule</h4>

          <div className="table-responsive admissions-table">
            <table className="table table-bordered table-striped text-center mb-0">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Dates</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Application Opens</td><td>June 1</td></tr>
                <tr><td>Application Deadline</td><td>August 15</td></tr>
                <tr><td>Admission Results</td><td>September 1</td></tr>
                <tr><td>Registration Period</td><td>September 5 – 20</td></tr>
              </tbody>
            </table>
          </div>

          <h4 className="admissions-subtitle">Application Form</h4>

          <form onSubmit={handleSubmit}>
            {/* Bootstrap grid: 1 field per row on phones, 2 per row on computers */}
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" required />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label">Major</label>
                <select className="form-select" required>
                  <option value="">Choose a major</option>
                  <option>Computer Science</option>
                  <option>Business</option>
                  <option>Engineering</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 apply-form-btn">Apply</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Admission;