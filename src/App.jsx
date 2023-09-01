import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Services from "./components/Services.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SobreMi" element={<AboutMe />} />
          <Route path="/Servicios" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
