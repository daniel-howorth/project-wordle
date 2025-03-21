import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ value, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{value}</span>;
}

function Guess({ guessValue, answer }) {
  // const chars = guessValue ? guessValue.split("") : Array(5).fill("");

  const result = checkGuess(guessValue, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          value={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>

    // <p className="guess">
    //   {chars.map((char, index) => (
    //     <span key={index} className="cell">
    //       {char}
    //     </span>
    //   ))}
    // </p>
  );
}

export default Guess;
