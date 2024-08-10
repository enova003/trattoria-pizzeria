import { useState } from "react";
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
      setActiveQuestion(0);
      handleQuestions();
      determineRecomendation();
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);

    setUserChoices((prevChoices) => {
      const updatedChoices = [...prevChoices];
      updatedChoices[activeQuestion] = answer;
      return updatedChoices;
    });
  };

  const determineRecomendation = () => {
    const pizzaScores = [
      { name: "The Bull", score: theBull },
      { name: "Margherita", score: margherita },
      { name: "Veggie", score: veggie },
      { name: "Chicken Alfredo", score: chickenAlfredo },
      { name: "BBQ Chicken", score: bbqChicken },
      { name: "Philly Steak", score: phillySteak },
      { name: "Buffalo Chicken", score: buffaloChicken },
      { name: "Chicken Philly", score: chickenPhilly },
      { name: "Tratt Hot", score: trattHot },
      { name: "The Trattoria", score: theTrattoria },
    ];

    const maxScore = Math.max(...pizzaScores.map((pizza) => pizza.score));

    const topPizzas = pizzaScores
      .filter((pizza) => pizza.score === maxScore)
      .map((pizza) => pizza.name);

    const recommendationText =
      topPizzas.length > 1
        ? `We recommend you order: ${topPizzas.join(" or ")}`
        : `We recommend you order: ${topPizzas[0]}`;

    setPizzaRecommendation(recommendationText);
  };

  const handleQuestions = () => {
    determineQuestionOne();
    determineQuestionTwo();
    determineQuestionThree();
    determineQuestionFour();
    determineQuestionFive();
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
      setChickenAlfredo((prevValue) => prevValue + 1);

      setPhillySteak((prevValue) => prevValue + 1);

      setChickenPhilly((prevValue) => prevValue + 1);
    }

    if (userChoices[0] === "BBQ sauce") {
      setBBQChicken((prevValue) => prevValue + 1);
    }

    if (userChoices[0] === "Buffalo sauce") {
      setBuffaloChicken((prevValue) => prevValue + 1);
    }
  };

  const determineQuestionTwo = () => {
    if (userChoices[1] === "Lots of cheese") {
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
    if (userChoices[2] === "I love it spicy") {
      setTrattHot((prevValue) => prevValue + 1);

      setBBQChicken((prevValue) => prevValue + 1);

      setBuffaloChicken((prevValue) => prevValue + 1);
    }

    if (userChoices[2] === "Not a fan") {
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
      setMargherita((prevValue) => prevValue + 1);

      setVeggie((prevValue) => prevValue + 1);
    }
  };

  const determineQuestionFive = () => {
    if (userChoices[4] === "Simple yet delicious") {
      setVeggie((prevValue) => prevValue + 1);

      setMargherita((prevValue) => prevValue + 1);
    }

    if (userChoices[4] === "Rich and creamy") {
      setChickenAlfredo((prevValue) => prevValue + 1);

      setPhillySteak((prevValue) => prevValue + 1);

      setChickenPhilly((prevValue) => prevValue + 1);
    }

    if (userChoices[4] === "Bold, strong, and flavorful") {
      setTrattHot((prevValue) => prevValue + 1);

      setBBQChicken((prevValue) => prevValue + 1);

      setBuffaloChicken((prevValue) => prevValue + 1);
    }

    if (userChoices[4] === "Meaty and interesting") {
      setTheTrattoria((prevValue) => prevValue + 1);

      setTheBull((prevValue) => prevValue + 1);
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
                {activeQuestion === questions.length - 1 ? "Results" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Results</h3>
            <p>
              Based on your answers, we recommend you order: <br />{" "}
              {pizzaRecommendation}{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;




/* 
import { useState } from "react";
import { quiz } from "./questions";
import "./quiz.css";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [pizzaRecommendation, setPizzaRecommendation] = useState("");
  const [userChoices, setUserChoices] = useState(["", "", "", "", ""]);

  const [pizzaScores, setPizzaScores] = useState({
    theBull: 0,
    margherita: 0,
    veggie: 0,
    chickenAlfredo: 0,
    bbqChicken: 0,
    phillySteak: 0,
    buffaloChicken: 0,
    chickenPhilly: 0,
    trattHot: 0,
    theTrattoria: 0
  });

  const { questions } = quiz;
  const { question, choices } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      handleQuestions();
      determineRecommendation();
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    setUserChoices((prevChoices) => {
      const updatedChoices = [...prevChoices];
      updatedChoices[activeQuestion] = answer;
      return updatedChoices;
    });
  };

  const determineRecommendation = () => {
    const maxScore = Math.max(...Object.values(pizzaScores));
    const topPizzas = Object.entries(pizzaScores)
      .filter(([_, score]) => score === maxScore)
      .map(([name]) => name);

    const recommendationText =
      topPizzas.length > 1
        ? `We recommend you order: ${topPizzas.join(" or ")}`
        : `We recommend you order: ${topPizzas[0]}`;

    setPizzaRecommendation(recommendationText);
  };

  const handleQuestions = () => {
    const questionHandlers = [
      determineQuestionOne,
      determineQuestionTwo,
      determineQuestionThree,
      determineQuestionFour,
      determineQuestionFive
    ];
    questionHandlers.forEach(handler => handler());
  };

  const updateScore = (pizzaType) => {
    setPizzaScores(prevScores => ({
      ...prevScores,
      [pizzaType]: prevScores[pizzaType] + 1
    }));
  };

  const determineQuestionOne = () => {
    if (userChoices[0] === "Red sauce") {
      ["theBull", "margherita", "veggie", "trattHot", "theTrattoria"].forEach(updateScore);
    } else if (userChoices[0] === "Alfredo sauce") {
      ["chickenAlfredo", "phillySteak", "chickenPhilly"].forEach(updateScore);
    } else if (userChoices[0] === "BBQ sauce") {
      updateScore("bbqChicken");
    } else if (userChoices[0] === "Buffalo sauce") {
      updateScore("buffaloChicken");
    }
  };

  // Similar changes for other determineQuestion functions

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
                  key={`${answer}-${index}`}
                  className={selectedAnswerIndex === index ? "selected-answer" : null}
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
            <p>
              Based on your answers, we recommend you order: <br />
              {pizzaRecommendation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
*/
