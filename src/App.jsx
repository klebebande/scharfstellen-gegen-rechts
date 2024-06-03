import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import NotFound from './NotFound';

import SubpageNazis from './pages/Nazis';
import SubpageHetze from './pages/Hetze';
import SubpageKartoffel from './pages/Kartoffel';
import SubpageFilterblase from './pages/Filterblase';
import SubpageTaeter from './pages/Taeter';
import SubpageHerzen from './pages/Herzen';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nazis">Subpage 1</Link></li>
          <li><Link to="/herzen">Subpage 2</Link></li>
          <li><Link to="/hetze">Subpage 3</Link></li>
          <li><Link to="/kartoffel">Subpage 4</Link></li>
          <li><Link to="/filterblase">Subpage 5</Link></li>
          <li><Link to="/taeter">Subpage 6</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nazis" element={<SubpageNazis />} />
        <Route path="/taeter" element={<SubpageTaeter />} />
        <Route path="/hetze" element={<SubpageHetze />} />
        <Route path="/herzen" element={<SubpageHerzen />} />
        <Route path="/kartoffel" element={<SubpageKartoffel />} />
        <Route path="/filterblase" element={<SubpageFilterblase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

