import React from "react";

function GuessResults({ guessHistory }) {
  return (
    <div className="guess-results">
      {guessHistory.map(({ id, value }) => (
        <p key={id}>{value}</p>
      ))}
    </div>
  );
}

export default GuessResults;
