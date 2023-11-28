import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [wonGame, setWonGame] = React.useState(false);
  const handleNewGuess = (newGuess) => {
    setGuesses([...guesses, newGuess]);
  };
  return (
    <>
      {wonGame && <HappyBanner guessCount={guesses.length} />}
      {!wonGame && guesses.length == 6 && <SadBanner correctAnswer={answer} />}
      <GuessResults guesses={guesses} answer={answer} setWonGame={setWonGame} />
      <GuessInput handleNewGuess={handleNewGuess} wonGame={wonGame} />
    </>
  );
}

export default Game;
