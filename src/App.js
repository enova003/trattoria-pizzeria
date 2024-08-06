import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="top-border">
        <img
          className="logo"
          src="./images/trattoria_logo.png"
          alt="Trattoria Logo"
        />
        <p className="top-contact">
          251-375-0076
          <br />
          11611 US Highway 31 Spanish Fort, AL 36527
          <br />
          <br />
          Friday - Sunday: 11 AM - 10 PM<br/>Tuesday - Thursday: 11 AM - 9 PM
        </p>
      </div>
      <Sidebar />
      <div className="home-banner">
        <img className="banner" src="./images/banner-home.jpg" alt="banner" />
      </div>
      <div className="home-content">
        <h1 className="title">
          Welcome to the official website for Trattoria Pizzeria
        </h1>
        <hr className="line"></hr>
        <p>
          Not sure what to order?
          <br />
          Try taking our quick, 5-question pizza quiz!
        </p>
        <a href="./pages/pizza-quiz" className="nav-links">
          Pizza Quiz
        </a>
        <hr className="line"></hr>
        <div className="text-and-photos">
          <p>
            At Trattoria Pizzeria, we pride ourselves on brick oven baking, and
            fresh ingredients
          </p>
          <img
            className="div-photos"
            src="./images/pizza-oil-pour.jpg"
            alt="Oil Pour"
          ></img>
        </div>
        <div className="text-and-photos">
          <img
            className="div-photos"
            src="./images/margarita-pizza.jpg"
            alt="Margarita Pizza"
          ></img>
          <p>
            Since 2014, our pizzeria has proudly be awarded the{" "}
            <em>Best Pizza in South Alabama</em>, the{" "}
            <em>Best Pizza in Baldwin County</em>, and the{" "}
            <em>Best Kept Restaurant Secret in Baldwin County</em>.
          </p>
        </div>
        <div className="text-and-photos">
          <p>
            We continue to strive for excellence, and we are dedicated to
            providing only the best to all.
          </p>
          <img
            className="div-photos"
            src="./images/pizza-oil-pour.jpg"
            alt="Margarita Pizza"
          ></img>
        </div>
        <div />
      </div>
      <div className="footer">
        Trattoria Pizzeria &copy; | 251-375-0076 | 11611 US Highway 31 Spanish Fort ,
        AL 36527 | info@trattoriapizzaitalian.com
      </div>
    </Router>
  );
}

export default App;
