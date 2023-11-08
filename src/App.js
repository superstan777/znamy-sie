import "./App.css";
import { AddQuestion } from "./components/AddQuestion";
import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { UpperText } from "./components/UpperText";
import { supabase } from "./client";
import { RoundCounter } from "./components/RoundCounter";
import { ErrorScreen } from "./components/ErrorScreen";
import { LoadingScreen } from "./components/LoadingScreen";

export const shadows = {
  blue: "0px 10px 20px #d9e8f1",
  red: "0px 10px 20px #EED6DA",
};

export const colors = {
  blue: "#092c50",
  red: "#973D54",
};

//loading, ok, error
// handle errors
// dark mode
function App() {
  const [counter, setCounter] = useState(0);
  const [player, setPlayer] = useState(0);
  const [playerOneQuestions, setPlayerOneQuestions] = useState();
  const [playerTwoQuestions, setPlayerTwoQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [playerColors, setPlayerColors] = useState({
    color: colors.blue,
    shadow: shadows.blue,
  });
  const [error, setError] = useState(null);
  const [appState, setAppState] = useState("loading");

  useEffect(() => {
    drawQuestion();
    changeColors();
  }, [player]);

  useEffect(() => {
    fetchAllQuestions();
  }, []);

  const changeColors = () => {
    if (player === 2) {
      setPlayerColors({ color: colors.red, shadow: shadows.red });
    } else {
      setPlayerColors({ color: colors.blue, shadow: shadows.blue });
    }
  };

  const fetchAllQuestions = async () => {
    try {
      const { data } = await supabase.from("questions").select("text");
      const formatedData = data.map((obj) => obj.text);
      setPlayerOneQuestions(formatedData);
      setPlayerTwoQuestions(formatedData);
      setAppState("ok");
    } catch (e) {
      console.log(e);
      setError(e.message);
      setAppState("error");
    }
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const drawQuestion = () => {
    let number;

    if (player === 1) {
      number = getRandomIntInclusive(0, playerOneQuestions.length - 1);
      if (playerOneQuestions.length === 0) {
        setCurrentQuestion("No more questions");
      } else {
        setCurrentQuestion(playerOneQuestions[number]);
        const newArray = playerOneQuestions.filter(
          (item) => item !== currentQuestion
        );
        setPlayerOneQuestions(newArray);
      }
    } else if (player === 2) {
      number = getRandomIntInclusive(0, playerTwoQuestions.length - 1);
      if (playerTwoQuestions.length === 0) {
        setCurrentQuestion("No more questions");
      } else {
        setCurrentQuestion(playerTwoQuestions[number]);
        const newArray = playerTwoQuestions.filter(
          (item) => item !== currentQuestion
        );
        setPlayerTwoQuestions(newArray);
      }
    }
  };

  const drawButtonHandler = () => {
    setCounter(counter + 1);
    if (player === 1) {
      setPlayer(2);
    } else {
      setPlayer(1);
    }
  };

  const renderSwitch = (param) => {
    switch (param) {
      case "loading":
        return <LoadingScreen />;
      case "ok":
        return (
          <>
            <RoundCounter counter={counter} />
            {/* <AddQuestion /> */}
            <UpperText>
              {player === 0 ? "NACIŚNIJ ABY ROZPOCZĄĆ" : `GRACZ ${player}`}
            </UpperText>
            <Card
              player={player}
              currentQuestion={currentQuestion}
              shadow={playerColors.shadow}
            />

            <Button onClick={drawButtonHandler} colors={playerColors}>
              {player === 0 ? "GRAJ" : "NASTĘPNY"}
            </Button>
          </>
        );
      case "error":
        return <ErrorScreen colors={playerColors} />;
      default:
        return "default";
    }
  };

  return <div className="App">{renderSwitch(appState)}</div>;
}

export default App;
