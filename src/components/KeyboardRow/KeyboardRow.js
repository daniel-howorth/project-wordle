import React from "react";
import KeyboardKey from "../KeyboardKey";
import { checkGuess } from "../../game-helpers";

function KeyboardRow({ letters, answer, latestGuess }) {
  const results = checkGuess(latestGuess, answer);
  return (
    <div className="keyboard-row">
      {letters.map((letter, index) => (
        <KeyboardKey
          key={index}
          status={latestGuess && results[latestGuess.indexOf(letter)]?.status}
        >
          {letter}
        </KeyboardKey>
      ))}
    </div>
  );
}

export default KeyboardRow;
