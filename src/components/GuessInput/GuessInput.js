import React from "react";

function GuessInput() {
  const [guessValue, setGuessValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.info(guessValue);
        setGuessValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern=".{5}"
        title="Please enter a five letter word"
        value={guessValue}
        onChange={(event) => {
          setGuessValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
