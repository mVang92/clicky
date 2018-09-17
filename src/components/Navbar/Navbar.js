import React from "react";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  let styles = {
    backgroundColor: "red"
  };

  return (
    <header className="navbar" style={styles}>
      <h1>Crystal Clicky Game</h1>
    </header>
  )
}

export default Navbar;
