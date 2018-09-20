import React from "react";

const Scores = props => {
  return (
    <header className="scores">
      <span id="guess">{props.rightWrong}</span>
      <span id="topScore">Top Score: {props.topScore}</span>
      <span id="break"> | </span>
      <span id="score"> Score: {props.score}</span>
    </header>
  )
}

export default Scores;