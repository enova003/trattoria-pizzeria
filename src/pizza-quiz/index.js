import React from "react";
import "./index.css";

function Quiz() {
  return (
    <div>
      <div className="quiz-banner">
        <img className="banner" src="./images/banner2.jpg" alt="banner" />
      </div>
      <div className="quiz-content">
        <h1 className="title">Pizza Quiz</h1>
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default Quiz;