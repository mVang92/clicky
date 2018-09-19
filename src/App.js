import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function shuffleArray(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: cards,
    clicked: [],
    score: 0,
    topScore: 0,
    rightWrong: ""
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.initiateReset();
    }
  };

  handleIncrement() {
    let newTopScore;
    newTopScore = this.state.score + 1;
    this.setState({score: this.state.score + 1, rightWrong: ""})

    if (newTopScore > this.state.topScore) {
      this.setState({ topScore: newTopScore });
    }

    // if (newTopScore > this.state.topScore) {
    //   this.setState({ rightWrong: "You have the highest score now!" });
    // }

    if (newTopScore >= 5) {
      this.winnerReset();
    }
    this.initiateShuffle();
  }

  initiateReset() {
    this.initiateShuffle();
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      rightWrong: "Loser",
      clicked: []
    })
  }

  winnerReset() {
    this.setState({
      score: 0,
      rightWrong: "You win!",
      clicked: []
    })
  }

  initiateShuffle() {
    let newShuffle = shuffleArray(cards);
    this.setState({ cards: newShuffle });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          rightWrong={this.state.rightWrong}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.cards.map(card => (
            <ImgCard
              id={card.id}
              key={cards.id}
              image={card.image}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              initiateReset={this.initiateReset}
              initiateShuffle={this.initiateShuffle}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
