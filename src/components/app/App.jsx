import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import SubpageNazis from "../sticker/Nazis/Nazis";
import SubpageHetze from "../sticker/Hetze/Hetze";
import SubpageKartoffel from "../sticker/Kartoffel/Kartoffel";
import SubpageFilterblase from "../sticker/Filterblase/Filterblase";
import SubpageTaeter from "../sticker/Taeter/Taeter";
import SubpageHerzen from "../sticker/Herzen/Herzen";
import NotFound from "../notFound/NotFound";
import Header from "../header/Header";
import About from "../about/About";
import PrivacyPolicy from '../privacy/PrivacyPolicy';
import "./App.css";
import CookieConsent from '../cookies/CookieConsent';

const App = () => {
  useEffect(() => {
    const header = document.querySelector(".App-header");
    const setPadding = () => {
      if (header) {
        document.documentElement.style.setProperty("--header-height", `${header.offsetHeight}px`);
      }
    };

    setPadding();
    window.addEventListener("resize", setPadding);
    return () => window.removeEventListener("resize", setPadding);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <CookieConsent />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/nazis" element={<SubpageNazis />} />
            <Route path="/hetze" element={<SubpageHetze />} />
            <Route path="/kartoffel" element={<SubpageKartoffel />} />
            <Route path="/filterblase" element={<SubpageFilterblase />} />
            <Route path="/taeter" element={<SubpageTaeter />} />
            <Route path="/herzen" element={<SubpageHerzen />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
