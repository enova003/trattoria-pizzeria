import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="about-banner">
        <img className="banner" src="./images/banner2.jpg" alt="banner" />
      </div>
      <div className="about-content">
        <h1 className="title">About</h1>
        <hr className="line"></hr>
        <p className="conten">
          <b className="title">
            What is a <em>Trattoria</em>?
          </b>
          <br />
          <br />
          {`{trah-tuh-ree'-uh}`}
          <br />
          <br />
          <em>Trattoria</em> is an Italian term for a fairly casual, mid-priced
          restaurant. Less formal than the <em>ristorante</em>, the{" "}
          <em>Trattoria</em> is traditionally a family-run establishment that
          offers simple, delicious, and handmade fare and a relaxed atmosphere.
        </p>
        <hr className="line"></hr>
        <p className="content">
          <b className="title">About the Owners</b>
          <br /> <br />
          Jill Peterson <br />
          Jill Peterson is a dedicated culinary enthusiast with a deep-rooted
          passion for food. Her career in the restaurant industry began at the
          age of 14, where she first gained experience bussing tables at a
          famous steakhouse in Omaha, Nebraska. She subsequently joined
          Godfather's Pizza as a team member and later advanced to managing six
          restaurants concurrently in St. Louis, Missouri. The refined recipes
          and exceptional service at Trattoria's are a testament to Jill's
          extensive experience and profound appreciation for food.
          <br /> <br />
          Greg Peterson <br />
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
      </div>
    </div>
  );
}

export default About;
