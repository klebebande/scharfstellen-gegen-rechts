import React from 'react';
import queryString from 'query-string';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Homepage';
import NotFound from './NotFound';

import SubpageNazis from './pages/Nazis';
import SubpageHetze from './pages/Hetze';
import SubpageKartoffel from './pages/Kartoffel';
import SubpageFilterblase from './pages/Filterblase';
import SubpageTaeter from './pages/Taeter';
import SubpageHerzen from './pages/Herzen';

const RedirectHandler = ({ children }) => {
  const location = useLocation();
  const parsedQuery = queryString.parse(location.search);
  const redirectedPath = parsedQuery['/'];

  if (redirectedPath) {
    window.history.replaceState({}, '', redirectedPath);
    return (
      <Routes>
        <Route path="/nazis" element={<SubpageNazis />} />
        <Route path="/taeter" element={<SubpageTaeter />} />
        <Route path="/hetze" element={<SubpageHetze />} />
        <Route path="/herzen" element={<SubpageHerzen />} />
        <Route path="/kartoffel" element={<SubpageKartoffel />} />
        <Route path="/filterblase" element={<SubpageFilterblase />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return children;
};

function App() {
  return (
    <Router>
      <RedirectHandler>
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
      </RedirectHandler>
    </Router>
  );
}

export default App;
