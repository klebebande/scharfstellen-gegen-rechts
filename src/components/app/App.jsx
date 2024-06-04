// src/components/app/App.jsx

// src/components/app/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../home/Home"

import SubpageNazis from "../sticker/Nazis";
import SubpageHetze from "../sticker/Hetze";
import SubpageKartoffel from "../sticker/Kartoffel";
import SubpageFilterblase from "../sticker/Filterblase";
import SubpageTaeter from "../sticker/Taeter";
import SubpageHerzen from "../sticker/Herzen";

import NotFound from "../notFound/NotFound";

const App = () => {
  return (
    <div className="App container-fluid p-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/nazis" element={<SubpageNazis />} />
          <Route path="/hetze" element={<SubpageHetze />} />
          <Route path="/kartoffel" element={<SubpageKartoffel />} />
          <Route path="/filterblase" element={<SubpageFilterblase />} />
          <Route path="/taeter" element={<SubpageTaeter />} />
          <Route path="/herzen" element={<SubpageHerzen />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;



// src/components/app/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "../home/Home";
// import SubpageNazis from "../sticker/Nazis";
// import SubpageHetze from "../sticker/Hetze";
// import SubpageKartoffel from "../sticker/Kartoffel";
// import SubpageFilterblase from "../sticker/Filterblase";
// import SubpageTaeter from "../sticker/Taeter";
// import SubpageHerzen from "../sticker/Herzen";
// import Footer from "../footer/Footer";
// import NotFound from "../notFound/NotFound";

// const App = () => {
//   return (
//     <div className="App container-fluid p-0">
//       <h1>Scharfstellen gegen Rechts!</h1>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/nazis" element={<SubpageNazis />} />
          // <Route path="/hetze" element={<SubpageHetze />} />
          // <Route path="/kartoffel" element={<SubpageKartoffel />} />
          // <Route path="/filterblase" element={<SubpageFilterblase />} />
          // <Route path="/taeter" element={<SubpageTaeter />} />
          // <Route path="/herzen" element={<SubpageHerzen />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// };

// export default App;
