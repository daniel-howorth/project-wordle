import React from "react";

import KeyboardRow from "../KeyboardRow";
import { KEYBOARD_LETTERS } from "../../constants";

function Keyboard({ answer, guessHistory }) {
  const latestGuess = guessHistory[guessHistory?.length - 1]?.guess;
  return (
    <div className="keyboard">
      {KEYBOARD_LETTERS.map((letters, index) => (
        <KeyboardRow
          key={index}
          letters={letters}
          latestGuess={latestGuess}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default Keyboard;
