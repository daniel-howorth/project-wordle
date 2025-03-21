import React from "react";

import { range } from "../../utils";

function Guess({ guessValue }) {
  // const chars = guessValue ? guessValue.split("") : Array(5).fill("");

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
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
