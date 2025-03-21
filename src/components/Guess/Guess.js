import React from "react";

function Guess(guessValue) {
  return (
    <p className="guess">
      {guessValue.split("").map((char, index) => (
        <span key={index} className="cell">
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
