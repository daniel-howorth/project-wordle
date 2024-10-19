import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const results = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${results && results[num].status}`}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;

/**
 * Conditionally applying css classes to render different element styles.
 * If your iterator might not always exist, see if you can use range instead.
 */
