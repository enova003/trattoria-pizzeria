import React from "react";
import "./pizza-quiz.css";

import Quiz from "../components/quiz-components/quiz";

function PizzaQuiz() {
  return (
    <div>
      <div className="quiz-banner">
        <img className="banner" src="./images/banner-4.jpg" alt="banner" />
      </div>
      <div className="quiz-content">
        <h1 className="pizza-quiz-title">Pizza Quiz</h1>
        <hr className="line"></hr>
      </div>
      <Quiz />
    </div>
  );
}

export default PizzaQuiz;