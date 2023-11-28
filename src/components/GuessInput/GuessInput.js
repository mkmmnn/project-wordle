import React, { useState } from "react";

function GuessInput({ handleNewGuess, wonGame }) {
  const [currentGuess, setCurrentGuess] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewGuess(currentGuess);
    setCurrentGuess("");
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="guess-input">Enter Guess: </label>
        <input
          required
          disabled={wonGame}
          maxLength="5"
          pattern="[a-zA-Z]{5}"
          id="guess-input"
          type="text"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
