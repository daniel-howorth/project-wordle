import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuestHistory] = React.useState([]);

  function updateGuessHistory(nextGuessValue) {
    const nextGuessEntry = { id: crypto.randomUUID(), value: nextGuessValue };
    const nextGuessHistory = [...guessHistory, nextGuessEntry];
    setGuestHistory(nextGuessHistory);
    console.log(nextGuessHistory);
  }

  return (
    <>
      <GuessResults guessHistory={guessHistory} />
      <GuessInput updateGuessHistory={updateGuessHistory} />
    </>
  );
}

export default Game;
