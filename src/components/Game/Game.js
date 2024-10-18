import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

  /*
    Rather than passing the state var and setter to the component, define a function that uses them and pass this instead.
    This keeps the state and how it's used all in one place.
  */
  function updateGuessHistory(guess) {
    const nextGuess = { id: crypto.randomUUID(), guess };
    setGuessHistory([...guessHistory, nextGuess]);
  }

  return (
    <>
      <GuessResults guessHistory={guessHistory} />
      <GuessInput updateGuessHistory={updateGuessHistory} />
    </>
  );
}

export default Game;
