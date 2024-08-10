import { useState } from "react";
import { quiz } from "./questions";
import "./quiz.css";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [pizzaRecommendation, setPizzaRecommendation] = useState("");
  const [theBull, setTheBull] = useState(0);
  const [margherita, setMargherita] = useState(0);
  const [veggie, setVeggie] = useState(0);
  const [chickenAlfredo, setChickenAlfredo] = useState(0);
  const [bbqChicken, setBBQChicken] = useState(0);
  const [phillySteak, setPhillySteak] = useState(0);
  const [buffaloChicken, setBuffaloChicken] = useState(0);
  const [chickenPhilly, setChickenPhilly] = useState(0);
  const [trattHot, setTrattHot] = useState(0);
  const [theTrattoria, setTheTrattoria] = useState(0);

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> example </span>
            </p>
            <p>
              Correct Answers:<span> example</span>
            </p>
            <p>
              Wrong Answers:<span> example</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
