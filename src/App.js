import React from "react";
import "./App.css";

import Sidebar from "./components/sidebar-components/Sidebar";
import Menu from "./menu/index";
import Home from "./home/index";
import About from "./about/index";
import PizzaQuiz from "./pizza-quiz/index";
import logo from "./images/trattoria_logo.png";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="top-border">
        <img
          className="logo"
          src={logo}
          alt="Trattoria Logo"
        />
        <p className="top-contact">
          251-375-0076
          <br />
          11611 US Highway 31 Spanish Fort, AL 36527
          <br />
          <br />
          Friday - Sunday: 11 AM - 10 PM
          <br />
          Tuesday - Thursday: 11 AM - 9 PM
        </p>
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/pizza-quiz" element={<PizzaQuiz />} />
      </Routes>
      <div className="footer">
        Trattoria Pizza & Italian &copy; | 251-375-0076 | 11611 US Highway 31 Spanish
        Fort, AL 36527 | info@trattoriapizzaitalian.com
      </div>
    </Router>
  );
}

export default App;