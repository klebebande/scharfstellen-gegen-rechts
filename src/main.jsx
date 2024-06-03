import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';

import './index.css';

// import SubpageNazis from './pages/Nazis';
// import SubpageTäter from './pages/Täter';
// import SubpageHetze from './pages/Hetze';
// import SubpageHerz from './pages/Herzen';
// import SubpageKartoffel from './pages/Kartoffel';
// import SubpageFilterblase from './pages/Filterblase';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/nazis" element={<SubpageNazis />} />
//         <Route path="/herz" element={<SubpageHerz />} />
//         <Route path="/hetze" element={<SubpageHetze />} />
//         <Route path="/kartoffel" element={<SubpageKartoffel />} />
//         <Route path="/filterblase" element={<SubpageFilterblase />} />
//         <Route path="/taeter" element={<SubpageTäter />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nazis" element={<div><h1>Nazis Page</h1><p>Welcome to the Nazis page.</p></div>} />
        <Route path="/herzen" element={<div><h1>Herz Page</h1><p>Welcome to the Herz page.</p></div>} />
        <Route path="/hetze" element={<div><h1>Hetze Page</h1><p>Welcome to the Hetze page.</p></div>} />
        <Route path="/kartoffel" element={<div><h1>Kartoffel Page</h1><p>Welcome to the Kartoffel page.</p></div>} />
        <Route path="/filterblase" element={<div><h1>Filterblase Page</h1><p>Welcome to the Filterblase page.</p></div>} />
        <Route path="/taeter" element={<div><h1>Taeter Page</h1><p>Welcome to the Taeter page.</p></div>} />
        <Route path="*" element={<div><h1>Page Not Found</h1></div>} />
      </Routes>
    </Router>
  </React.StrictMode>
);