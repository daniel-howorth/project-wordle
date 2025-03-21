import React from "react";

function GuessInput() {
  const [guessValue, setGuessValue] = React.useState("");

  return (
    <form
      class="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.info(guessValue);
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessValue}
        onChange={(event) => {
          setGuessValue(event.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
