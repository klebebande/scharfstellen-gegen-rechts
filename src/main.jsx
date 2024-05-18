import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';

import './index.css';
import SubpageNazis from './pages/Nazis';
import SubpageTäter from './pages/Täter';
import SubpageHetze from './pages/Hetze';
import SubpageHerz from './pages/Herzen';
import SubpageKartoffel from './pages/Kartoffel';
import SubpageFilterblase from './pages/Filterblase';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nazis" element={<SubpageNazis />} />
        <Route path="/herz" element={<SubpageHerz />} />
        <Route path="/hetze" element={<SubpageHetze />} />
        <Route path="/kartoffel" element={<SubpageKartoffel />} />
        <Route path="/filterblase" element={<SubpageFilterblase />} />
        <Route path="/taeter" element={<SubpageTäter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
