import React from "react";
import "./index.css";

function Home() {
  return (
    <div>
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
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default Home;
