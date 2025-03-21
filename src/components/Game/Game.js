import React from "react";
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
  const [guessHistory, setGuestHistory] = React.useState([]);

  function updateGuessHistory(nextGuessValue) {
    setGuestHistory([...guessHistory, nextGuessValue]);
  }

  return (
    <>
      <GuessResults
        guessHistory={guessHistory}
        maxGuesses={NUM_OF_GUESSES_ALLOWED}
      />
      <GuessInput updateGuessHistory={updateGuessHistory} />
    </>
  );
}

export default Game;
