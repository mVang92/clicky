import React, { Component } from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cards });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar />
        <Wrapper>
          {this.state.cards.map(card => (
            <ImgCard
              removeFriend={this.removeFriend}
              id={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
