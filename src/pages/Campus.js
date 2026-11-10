import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Campus.css';

function Campus() {
  return (
    <div className="page campus-page">
      <div className="container campus-container">                  {/*  container = centers the content */}

        <Link to="/" className="back-link">← Home</Link>

        <div className="white-box campus-box">
          <h2 className="page-title">Campus Life</h2>

          <div className="text">
            <p>
              Campus life at Aurevia University is active and enjoyable. Students can do more than
              just study, as there are many activities and events to join.
            </p>
            <p className="mb-0">                                    {/*  mb-0 = no space under the last paragraph */}
              The campus has useful facilities like libraries, study areas, sports spaces, and places
              to relax with friends. Students can join clubs, attend events, or take part in different
              activities during the year.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Campus;