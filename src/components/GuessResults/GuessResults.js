import React from "react";

function GuessResults({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map(({ id, guess }) => (
        <p key={id} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
