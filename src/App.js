import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import StyleSwitcher from "./Components/Switcher/StyleSwitcher";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Education  from "./Components/Education/education";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import ScrollTop from "./Components/ScrollTop";
import Preloader from "./Components/Preloader/Preloader";
// import Particle from "./Components/Particle";
import Contact from "./Components/Contact/contact"

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <main className="main__app">
      {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <ScrollTop smooth />
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Particle darkMode={darkMode} /> */}
          <StyleSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        </BrowserRouter>
      )}
    </main>
  );
}

export default App;
