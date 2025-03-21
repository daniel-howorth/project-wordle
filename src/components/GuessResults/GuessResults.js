import React from "react";
import Guess from "../Guess/Guess";

import { range } from "../../utils";

function GuessResults({ guessHistory, maxGuesses }) {
  return (
    <div className="guess-results">
      {range(maxGuesses).map((num) => (
        <Guess guessValue={guessHistory[num]} key={num} />
      ))}
    </div>
  );
}

export default GuessResults;
