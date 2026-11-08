import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Admission from './pages/Admission';
import BusinessSchedule from './pages/BusinessSchedule';
import CsSchedule from './pages/CsSchedule';
import EngineeringSchedule from './pages/EngineeringSchedule';
import Campus from './pages/Campus';
import Careers from './pages/Careers';
import Complete from './pages/Complete';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/business-schedule" element={<BusinessSchedule />} />
            <Route path="/cs-schedule" element={<CsSchedule />} />
            <Route path="/engineering-schedule" element={<EngineeringSchedule />} />
            <Route path="/campus-life" element={<Campus />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/complete" element={<Complete />} />
          </Routes>
        </main>

        <footer className="footer">© 2026 Aurevia University.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;