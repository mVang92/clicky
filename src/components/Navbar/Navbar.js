import React from "react";

const Navbar = props => {
  return (
    <header className="navbar">
      <h1>Crystal Clicky Game</h1>
      <div id="guess">{props.rightWrong}</div>
      <div id="score">Score: {props.score}</div>
      <div>|</div>
      <div id="topScore">Top Score: {props.topScore}</div>
    </header>
  )
}

export default Navbar;
