import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="about-banner">
        <img className="banner" src="./images/banner3.jpg" alt="banner" />
      </div>
      <div className="about-content">
        <h1 className="about-title">About</h1>
        <hr className="line"></hr>
        <h2 className="subtitle">
          What is a <em>Trattoria</em>?
        </h2>
        <p className="paragraph">{`{trah-tuh-ree'-uh}`}</p>
        <p className="left-paragraph">
          <em>Trattoria</em> is an Italian term for a fairly casual, mid-priced
          restaurant. Less formal than the <em>ristorante</em>, the{" "}
          <em>Trattoria</em> is traditionally a family-run establishment that
          offers simple, delicious, and handmade fare and a relaxed atmosphere.
        </p>
        <p className="left-paragraph">
          Here you are welcomed as family, and your table is always waiting.
          We've been serving South Alabama since 2014 and remain true to our
          dedication to serve delicious Italian cuisine in a comfortable
          atmosphere.
        </p>
        <hr className="line"></hr>
        <div className="photos">
          <img
            className="photo-row"
            src="./images/trattoria-sign.jpg"
            alt="Trattoria"
          ></img>
          <img
            className="photo-row"
            src="./images/pasta-and-pizza.jpg"
            alt="Pizza & Pasta"
          ></img>
          <img
            className="photo-row"
            src="./images/neopolitan-pizza.jpg"
            alt="Fresh Pizza"
          ></img>
          <img
            className="photo-row"
            src="./images/tiramisu.jpg"
            alt="Tiramisu"
          ></img>
        </div>
        <hr className="line"></hr>
        <h2 className="subtitle">About the Owners</h2>
        <p className="name">
          <b>Jill Peterson</b>
          <hr className="entity-line"></hr>
        </p>
        <p className="left-paragraph">
          Jill Peterson is a dedicated culinary enthusiast with a deep-rooted
          passion for food. Her career in the restaurant industry began at the
          age of 14, where she first gained experience bussing tables at a
          famous steakhouse in Omaha, Nebraska. She subsequently joined
          Godfather's Pizza as a team member and later advanced to managing six
          restaurants concurrently in St. Louis, Missouri. The refined recipes
          and exceptional service at Trattoria's are a testament to Jill's
          extensive experience and profound appreciation for food.
        </p>
        <p className="name">
          <b>Greg Peterson</b>
          <hr className="entity-line"></hr>
        </p>
        <p className="left-paragraph">
          Greg Peterson embarked on his culinary journey at the age of 14,
          starting as a pizza maker in a modest pizzeria in Chicago. His
          experience includes roles in bussing tables and cooking throughout
          high school. Following his transition to a career in broadcast
          journalism, where he now serves as a news anchor for NBC 15 in Mobile,
          Alabama, Greg has traveled to many different locations across the
          country. Despite his diverse career, he has always been drawn to
          authentic Italian cuisine. His innovative approach of blending the
          casual, delectable offerings of Little Italy in New York City with the
          warm hospitality of South Alabama has resulted in a remarkable
          culinary fusion.
        </p>
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default About;
