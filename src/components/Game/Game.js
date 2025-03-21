import React from "react";
import GuessInput from "../GuessInput/GuessInput";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuestHistory] = React.useState([]);

  function updateGuessHistory(guessHistory, nextGuess) {
    const nextGuessHistory = [...guessHistory, nextGuess];
    setGuestHistory(nextGuessHistory);
    console.log(nextGuessHistory);
  }

  return (
    <GuessInput
      guessHistory={guessHistory}
      updateGuessHistory={updateGuessHistory}
    ></GuessInput>
  );
}

export default Game;
