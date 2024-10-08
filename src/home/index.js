import React from "react";
import "./home.css";
import banner from "../images/banner-home.jpg";
import oilPour from "../images/pizza-oil-pour.jpg";
import tossingImage from "../images/pizza-toss.jpg";
import girlImage from "../images/girl-pizza.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home-banner">
        <img className="banner" src={banner} alt="banner" />
      </div>
      <div className="home-content">
        <h1 className="home-title">Trattoria Pizza & Italian</h1>
        <hr className="line"></hr>
        <p className="quiz">
          Unsure what pizza to order?
          <br />
          Try taking our quick, 4-question pizza quiz
        </p>
        <Link to="/pizza-quiz" className="nav-links">
          Pizza Quiz
        </Link>
        <hr className="line"></hr>
        <div className="catering">
          <p className="left-text">
            At Trattoria Pizza & Italian, we specialize in bringing the authentic
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
          <p className="right-text">
            We are deeply committed to delivering an exceptional experience by
            focusing on two core principles: the quality of our ingredients and
            the excellence of our service. We meticulously select the freshest,
            highest-quality ingredients to ensure that every dish we serve not
            only meets but exceeds your expectations.
          </p>
          <img
            className="div-photos"
            src={oilPour}
            alt="Oil Pour"
          ></img>
        </div>
        <div className="text-and-photos">
          <img
            className="div-photos"
            src={tossingImage}
            alt="Tossing Pies"
          ></img>
          <p className="left-text">
            Since 2014, our pizzeria has proudly been awarded the{" "}
            <em>Best Pizza in South Alabama</em>, the{" "}
            <em>Best Pizza in Baldwin County</em>, and the{" "}
            <em>Best Kept Restaurant Secret in Baldwin County</em>.
          </p>
        </div>
        <div className="text-and-photos">
          <p className="right-text">
            Our menu features a delectable range of traditional Italian dishes,
            including wood-fired pizzas, homemade pasta, fresh salads, and
            indulgent desserts. We can customize our offerings to suit your
            preferences and dietary needs, ensuring that you enjoy a memorable
            dining experience.
          </p>
          <img
            className="div-photos"
            src={girlImage}
            alt="Pizza Oven"
          ></img>
        </div>
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default Home;
