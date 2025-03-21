import React from "react";
import Guess from "../Guess/Guess";

import { range } from "../../utils";

function GuessResults({ guessHistory, maxGuesses, answer }) {
  return (
    <div className="guess-results">
      {range(maxGuesses).map((num) => (
        <Guess guessValue={guessHistory[num]} answer={answer} key={num} />
      ))}
    </div>
  );
}

export default GuessResults;
