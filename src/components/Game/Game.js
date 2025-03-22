import React from "react";
import StatusBanner from "../StatusBanner/StatusBanner";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("");
  const [guessHistory, setGuestHistory] = React.useState([]);
  const numOfGusses = guessHistory.length;

  // function updateGameStatus(result) {
  //   if (result !== "won" || result !== "lost") {
  //     throw Error("Invalid game status");
  //   }

  //   setGameStatus(result);
  // }

  function checkGameWon(guessValue) {
    if (guessValue === answer) {
      setGameStatus("won");
    }
  }

  function checkGameLost(numOfGuesses) {
    if (numOfGuesses >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function updateGuessHistory(nextGuessValue) {
    setGuestHistory([...guessHistory, nextGuessValue]);
  }

  return (
    <>
      <GuessResults
        guessHistory={guessHistory}
        maxGuesses={NUM_OF_GUESSES_ALLOWED}
        answer={answer}
      />
      <GuessInput
        updateGuessHistory={updateGuessHistory}
        checkGameWon={checkGameWon}
        checkGameLost={checkGameLost}
        numOfGuesses={numOfGusses}
        gameStatus={gameStatus}
      />
      <StatusBanner
        gameStatus={gameStatus}
        answer={answer}
        numOfGuesses={numOfGusses}
      />
    </>
  );
}

export default Game;
