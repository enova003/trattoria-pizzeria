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
          Friday - Sunday: 11 AM - 10 PM
          <br />
          Tuesday - Thursday: 11 AM - 9 PM
        </p>
      </div>
      <Sidebar />
      <div className="home-banner">
        <img className="banner" src="./images/banner-home.jpg" alt="banner" />
      </div>
      <div className="home-content">
        <h1 className="title">Trattoria Pizzeria</h1>
        <hr className="line"></hr>
        <p>
          Not sure what to order?
          <br />
          Try taking our quick, 5-question pizza quiz
        </p>
        <a href="./pizza-quiz" className="nav-links">
          Pizza Quiz
        </a>
        <hr className="line"></hr>
        <div className="catering">
          <p className="home-text">
            At Trattoria Pizzeria, we specialize in bringing the authentic
            flavors of Italy directly to your event. Whether you're hosting an
            intimate gathering of 5 or a large celebration with up to 100
            guests, we have the perfect catering solution for you. From
            corporate meetings and birthday parties to weddings and casual
            get-togethers, we are here to make your occasion special. For more
            information or to discuss your catering needs, please give us a call
            at (251) 375-0076. We look forward to helping you create a delicious
            and unforgettable event!
          </p>
        </div>
        <hr className="line"></hr>
        <div className="text-and-photos">
          <p className="home-text">
            We are deeply committed to delivering an exceptional experience by
            focusing on two core principles: the quality of our ingredients and
            the excellence of our service. We meticulously select the freshest,
            highest-quality ingredients to ensure that every dish we serve not
            only meets but exceeds your expectations.
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
            src="./images/pizza-toss.jpg"
            alt="Tossing Pies"
          ></img>
          <p className="home-text">
            Since 2014, our pizzeria has proudly been awarded the{" "}
            <em>Best Pizza in South Alabama</em>, the{" "}
            <em>Best Pizza in Baldwin County</em>, and the{" "}
            <em>Best Kept Restaurant Secret in Baldwin County</em>.
          </p>
        </div>
        <div className="text-and-photos">
          <p className="home-text">
            Our menu features a delectable range of traditional Italian dishes,
            including wood-fired pizzas, homemade pasta, fresh salads, and
            indulgent desserts. We can customize our offerings to suit your
            preferences and dietary needs, ensuring that you enjoy a memorable
            dining experience.
          </p>
          <img
            className="div-photos"
            src="./images/pizza-parlor.jpg"
            alt="Pizza Parlor"
          ></img>
        </div>
        <div />
        <hr className="line"></hr>
      </div>
      <div className="footer">
        Trattoria Pizzeria &copy; | 251-375-0076 | 11611 US Highway 31 Spanish
        Fort , AL 36527 | info@trattoriapizzaitalian.com
      </div>
    </Router>
  );
}

export default App;
