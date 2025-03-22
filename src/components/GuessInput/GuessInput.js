import React from "react";

function GuessInput({
  updateGuessHistory,
  checkGameWon,
  checkGameLost,
  numOfGuesses,
  gameStatus,
}) {
  const [guessValue, setGuessValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        updateGuessHistory(guessValue);
        setGuessValue("");
        checkGameWon(guessValue);
        checkGameLost(numOfGuesses + 1);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus === "won" || gameStatus === "lost"}
        required
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
