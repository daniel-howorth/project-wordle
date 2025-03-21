import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessValue, answer }) {
  // const chars = guessValue ? guessValue.split("") : Array(5).fill("");

  const guessResults = checkGuess(guessValue, answer) || [];
  console.log(guessResults);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${guessResults[num]?.status}`}>
          {guessValue ? guessValue[num] : undefined}
        </span>
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
