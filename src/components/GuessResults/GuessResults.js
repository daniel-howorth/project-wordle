import React from "react";
import { range } from "../../utils";

function GuessResults({ guessHistory, maxGuesses }) {
  return (
    <div className="guess-results">
      {range(maxGuesses).map(() => (
        <p className="guess">
          <span className="cell"></span>
        </p>
      ))}
    </div>

    // <div className="guess-results">
    //   {guessHistory.map(({ id, value }) => (
    //     <p key={id}>{value}</p>
    //   ))}
    // </div>
  );
}

export default GuessResults;
