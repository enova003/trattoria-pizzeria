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
        <p className="left-paragraph">
          This brief, four-question quiz is crafted to offer you a personalized
          recommendation tailored to our specialty pizzas. By answering these
          questions, you'll receive a suggestion that aligns perfectly with your
          unique tastes and preferences.
        </p>
        <hr className="line"></hr>
      </div>
      <Quiz />
      <div className="quiz-content">
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default PizzaQuiz;
