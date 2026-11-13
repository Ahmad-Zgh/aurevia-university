import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Admission.css';

function Admission() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/complete');
  }

  return (
    <div className="page admissions-page">
      <div className="container admissions-container">              {/*  container = centers the content */}

        <Link to="/" className="back-link">← Home</Link>

        <div className="white-box">
          <h2 className="page-title ">Admissions</h2>

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

          <div className="table-responsive admissions-table">        {/*  table-responsive = scrolls sideways on phones */}
            <table className="table table-bordered table-striped text-center mb-0">
            {/*  table = table style | table-bordered = cell borders | table-striped = grey every other row
                 text-center = centered text | mb-0 = no space under */}
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
            <div className="row g-3">                               {/*  row = grid row | g-3 = gap between fields */}
              <div className="col-12 col-md-6">                     {/*  col-12 = 1 per row on phones | col-md-6 = 2 per row on computers */}
                <label className="form-label">Full Name</label>    {/*  form-label = field name style */}
                <input type="text" className="form-control" required />   {/*  form-control = styled text box */}
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
                <select className="form-select" required>           {/*  form-select = styled dropdown */}
                  <option value="">Choose a major</option>
                  <option>Computer Science</option>
                  <option>Business</option>
                  <option>Engineering</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 apply-form-btn">Apply</button>
            {/* 🅱️ btn = button | btn-primary = blue | w-100 = full width */}
          </form>
        </div>

      </div>
    </div>
  );
}

export default Admission;