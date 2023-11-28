import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer, setWonGame, setLostGame }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          value={guesses[num]}
          answer={answer}
          setWonGame={setWonGame}
          setLostGame={setLostGame}
        />
      ))}
    </div>
  );
}

export default GuessResults;
