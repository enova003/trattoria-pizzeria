import { useState } from "react";
import { quiz } from "./questions";
import "./quiz.css";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [pizzaRecommendation, setPizzaRecommendation] = useState("");
  const [theBull, setTheBull] = useState([0, 0, 0, 0, 0]);
  const [margherita, setMargherita] = useState([0, 0, 0, 0, 0]);
  const [veggie, setVeggie] = useState([0, 0, 0, 0, 0]);
  const [chickenAlfredo, setChickenAlfredo] = useState([0, 0, 0, 0, 0]);
  const [bbqChicken, setBBQChicken] = useState([0, 0, 0, 0, 0]);
  const [phillySteak, setPhillySteak] = useState([0, 0, 0, 0, 0]);
  const [buffaloChicken, setBuffaloChicken] = useState([0, 0, 0, 0, 0]);
  const [chickenPhilly, setChickenPhilly] = useState([0, 0, 0, 0, 0]);
  const [trattHot, setTrattHot] = useState([0, 0, 0, 0, 0]);
  const [theTrattoria, setTheTrattoria] = useState([0, 0, 0, 0, 0]);
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
    const sumTheBull = theBull.reduce((acc, curr) => acc + curr, 0);
    const sumMargherita = margherita.reduce((acc, curr) => acc + curr, 0);
    const sumVeggie = veggie.reduce((acc, curr) => acc + curr, 0);
    const sumChickenAlfredo = chickenAlfredo.reduce(
      (acc, curr) => acc + curr,
      0
    );
    const sumBBQ = bbqChicken.reduce((acc, curr) => acc + curr, 0);
    const sumPhillySteak = phillySteak.reduce((acc, curr) => acc + curr, 0);
    const sumBuffalo = buffaloChicken.reduce((acc, curr) => acc + curr, 0);
    const sumChickenPhilly = chickenPhilly.reduce((acc, curr) => acc + curr, 0);
    const sumTrattHot = trattHot.reduce((acc, curr) => acc + curr, 0);
    const sumTheTrattoria = theTrattoria.reduce((acc, curr) => acc + curr, 0);

    const pizzaSums = [
      { name: "The Bull", sum: sumTheBull },
      { name: "Margherita", sum: sumMargherita },
      { name: "Veggie", sum: sumVeggie },
      { name: "Chicken Alfredo", sum: sumChickenAlfredo },
      { name: "BBQ Chicken", sum: sumBBQ },
      { name: "Philly Steak", sum: sumPhillySteak },
      { name: "Buffalo Chicken", sum: sumBuffalo },
      { name: "Chicken Philly", sum: sumChickenPhilly },
      { name: "Tratt Hot", sum: sumTrattHot },
      { name: "The Trattoria", sum: sumTheTrattoria },
    ];

    const maxSum = Math.max(...pizzaSums.map((pizza) => pizza.sum));

    const topPizzas = pizzaSums
      .filter((pizza) => pizza.sum === maxSum)
      .map((pizza) => pizza.name);

    const results =
      topPizzas.length > 1
        ? `We recommend you order: ${topPizzas.join(" or ")}`
        : `We recommend you order: ${topPizzas[0]}`;

    setPizzaRecommendation(results);
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
      setTheBull((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });

      setMargherita((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });

      setVeggie((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });

      setTrattHot((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });

      setTheTrattoria((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });
    }

    if (userChoices[0] === "Alfredo sauce") {
      setChickenAlfredo((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });

      setPhillySteak((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });

      setChickenPhilly((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });
    }

    if (userChoices[0] === "BBQ sauce") {
      setBBQChicken((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });
    }

    if (userChoices[0] === "Buffalo sauce") {
      setBuffaloChicken((prev) => {
        const newState = [...prev];
        newState[0] = 1;
        return newState;
      });
    }
  };

  const determineQuestionTwo = () => {
    if (userChoices[1] === "Lots of cheese") {
      setMargherita((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });
    }

    if (userChoices[1] === "A variety of meats") {
      setTheBull((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });

      setBuffaloChicken((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });

      setTrattHot((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });
    }

    if (userChoices[1] === "Lots of veggies") {
      setVeggie((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });
    }

    if (userChoices[1] === "A mix of veggies and meat") {
      setTheTrattoria((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });

      setChickenPhilly((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });

      setPhillySteak((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });

      setBBQChicken((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });

      setChickenAlfredo((prev) => {
        const newState = [...prev];
        newState[1] = 1;
        return newState;
      });
    }
  };

  const determineQuestionThree = () => {
    if (userChoices[2] === "I love it spicy") {
      setTrattHot((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });

      setBBQChicken((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });

      setBuffaloChicken((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });
    }

    if (userChoices[2] === "Not a fan") {
      setMargherita((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });

      setVeggie((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });

      setTheBull((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });

      setChickenAlfredo((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });

      setPhillySteak((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });

      setChickenPhilly((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });

      setTheTrattoria((prev) => {
        const newState = [...prev];
        newState[2] = 1;
        return newState;
      });
    }
  };

  const determineQuestionFour = () => {
    if (userChoices[3] === "Chicken") {
      setBuffaloChicken((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });

      setChickenAlfredo((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });

      setBBQChicken((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });

      setChickenPhilly((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });
    }

    if (userChoices[3] === "Steak") {
      setPhillySteak((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });
    }

    if (userChoices[3] === "Pepperoni") {
      setTheBull((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });

      setTrattHot((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });

      setTheTrattoria((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });
    }

    if (userChoices[3] === "No meat for me") {
      setMargherita((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });

      setVeggie((prev) => {
        const newState = [...prev];
        newState[3] = 1;
        return newState;
      });
    }
  };

  const determineQuestionFive = () => {
    if (userChoices[4] === "Simple yet delicious") {
      setVeggie((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });

      setMargherita((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });
    }

    if (userChoices[4] === "Rich and creamy") {
      setChickenAlfredo((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });

      setPhillySteak((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });

      setChickenPhilly((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });
    }

    if (userChoices[4] === "Bold, strong, and flavorful") {
      setTrattHot((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });

      setBBQChicken((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });

      setBuffaloChicken((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });
    }

    if (userChoices[4] === "Meaty and interesting") {
      setTheTrattoria((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });

      setTheBull((prev) => {
        const newState = [...prev];
        newState[4] = 1;
        return newState;
      });
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
