import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guessHistory, setGuessHistory] = React.useState([]);

  /*
    Rather than passing the state var and setter to the component, define a function that uses them and pass this instead.
    This keeps the state and how it's used all in one place.
  */
  function handleSubmitGuess(guess) {
    const nextGuess = { id: crypto.randomUUID(), guess };
    const nextGuessHistory = [...guessHistory, nextGuess];
    setGuessHistory(nextGuessHistory);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuessHistory.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guessHistory={guessHistory} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard answer={answer} guessHistory={guessHistory} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guessHistory.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
