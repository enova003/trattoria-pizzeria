import { useState, useEffect } from "react";
import { quiz } from "./questions";
import "./quiz.css";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
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
  const [userChoices, setUserChoices] = useState(["", "", "", "", ""]);

  const { questions } = quiz;
  const { question, choices } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      handleQuestions();
      determineRecomendation();
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  useEffect(() => {
    if (activeQuestion === questions.length - 1) {
      handleQuestions();
      determineRecomendation();
    }
  }, [userChoices]);

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);

    setUserChoices((prevChoices) => {
      const updatedChoices = [...prevChoices];
      updatedChoices[activeQuestion] = answer;
      return updatedChoices;
    });
  };

  const determineQuestionOne = () => {
    if (userChoices[0] === "Red sauce") {
      setTheBull((prevValue) => prevValue + 1);
      setMargherita((prevValue) => prevValue + 1);
      setVeggie((prevValue) => prevValue + 1);
      setTrattHot((prevValue) => prevValue + 1);
      setTheTrattoria((prevValue) => prevValue + 1);
    }

    if (userChoices[0] === "Alfredo sauce") {
      setChickenAlfredo((prevValue) => prevValue + 3);
      setPhillySteak((prevValue) => prevValue + 3);
      setChickenPhilly((prevValue) => prevValue + 3);
    }

    if (userChoices[0] === "BBQ sauce") {
      setBBQChicken((prevValue) => prevValue + 3);
    }

    if (userChoices[0] === "Buffalo sauce") {
      setBuffaloChicken((prevValue) => prevValue + 3);
    }
  };

  const determineQuestionTwo = () => {
    if (userChoices[1] === "Delicious cheeses") {
      setMargherita((prevValue) => prevValue + 1);
    }

    if (userChoices[1] === "A variety of meats") {
      setTheBull((prevValue) => prevValue + 1);
      setBuffaloChicken((prevValue) => prevValue + 1);
      setTrattHot((prevValue) => prevValue + 1);
    }

    if (userChoices[1] === "Lots of veggies") {
      setVeggie((prevValue) => prevValue + 1);
    }

    if (userChoices[1] === "A mix of veggies and meat") {
      setTheTrattoria((prevValue) => prevValue + 1);
      setChickenPhilly((prevValue) => prevValue + 1);
      setPhillySteak((prevValue) => prevValue + 1);
      setBBQChicken((prevValue) => prevValue + 1);
      setChickenAlfredo((prevValue) => prevValue + 1);
    }
  };

  const determineQuestionThree = () => {
    if (userChoices[2] === "That sounds great") {
      setTrattHot((prevValue) => prevValue + 2);
      setBBQChicken((prevValue) => prevValue + 1);
      setBuffaloChicken((prevValue) => prevValue + 1);
    }

    if (userChoices[2] === "Not now") {
      setMargherita((prevValue) => prevValue + 1);
      setVeggie((prevValue) => prevValue + 1);
      setTheBull((prevValue) => prevValue + 1);
      setChickenAlfredo((prevValue) => prevValue + 1);
      setPhillySteak((prevValue) => prevValue + 1);
      setChickenPhilly((prevValue) => prevValue + 1);
      setTheTrattoria((prevValue) => prevValue + 1);
    }
  };

  const determineQuestionFour = () => {
    if (userChoices[3] === "Chicken") {
      setBuffaloChicken((prevValue) => prevValue + 1);
      setChickenAlfredo((prevValue) => prevValue + 1);
      setBBQChicken((prevValue) => prevValue + 1);
      setChickenPhilly((prevValue) => prevValue + 1);
    }

    if (userChoices[3] === "Steak") {
      setPhillySteak((prevValue) => prevValue + 1);
    }

    if (userChoices[3] === "Pepperoni") {
      setTheBull((prevValue) => prevValue + 1);
      setTrattHot((prevValue) => prevValue + 1);
      setTheTrattoria((prevValue) => prevValue + 1);
    }

    if (userChoices[3] === "No meat for me") {
      setMargherita((prevValue) => prevValue + 3);
      setVeggie((prevValue) => prevValue + 3);
    }
  };

  const handleQuestions = () => {
    determineQuestionOne();
    determineQuestionTwo();
    determineQuestionThree();
    determineQuestionFour();
  };

  const determineRecomendation = () => {
    const pizzaScores = [
      { name: "The Bull", score: theBull },
      { name: "a Margherita pizza", score: margherita },
      { name: "a Veggie pizza", score: veggie },
      { name: "a Chicken Alfredo pizza", score: chickenAlfredo },
      { name: "a BBQ Chicken pizza", score: bbqChicken },
      { name: "a Philly Steak pizza", score: phillySteak },
      { name: "a Buffalo Chicken pizza", score: buffaloChicken },
      { name: "a Chicken Philly pizza", score: chickenPhilly },
      { name: "a Tratt Hot pizza", score: trattHot },
      { name: "The Trattoria", score: theTrattoria },
    ];

    const maxScore = Math.max(...pizzaScores.map((pizza) => pizza.score));

    const topPizzas = pizzaScores
      .filter((pizza) => pizza.score === maxScore)
      .map((pizza) => pizza.name);

    const recommendationText =
      topPizzas.length > 1
        ? `We recommend ordering ${topPizzas.join(" or ")}`
        : `We recommend ordering ${topPizzas[0]}`;

    setPizzaRecommendation(recommendationText);
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
                {activeQuestion === questions.length - 1 ? "Results" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Results</h3>
            <p>{pizzaRecommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
