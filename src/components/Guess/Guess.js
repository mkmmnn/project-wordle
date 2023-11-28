import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer, setWonGame, setLostGame }) {
  const checkedGuess = value ? checkGuess(value, answer) : [];
  if (
    checkedGuess.length > 0 &&
    checkedGuess.every((entry) => entry.status === "correct")
  ) {
    setWonGame(true);
  }
  return (
    <p className="guess">
      {range(5).map((num) => {
        const style = checkedGuess[num] && checkedGuess[num].status;
        return (
          <span key={num} className={`cell ${style}`}>
            {value ? value[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
