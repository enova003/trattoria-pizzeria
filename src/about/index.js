import React from "react";
import "./index.css";

function About() {
  return (
    <div>
      <div className="about-banner">
        <img className="banner" src="./images/banner2.jpg" alt="banner" />
      </div>
      <div className="about-content">
        <h1 className="title">About</h1>
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default About;
