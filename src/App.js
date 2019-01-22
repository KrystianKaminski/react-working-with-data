import React, { Component } from 'react';
import CardList from './CardList';
import Form from './Form';



class App extends Component {
  state = {
    cards: [
      {
        name: "Philippe Bruhat (BooK)",
        avatar_url: "https://avatars0.githubusercontent.com/u/44421?v=4",
        company: "Booking.com"
      },
      {
        name: "Inzaghi",
        avatar_url: "https://avatars2.githubusercontent.com/u/7274953?v=4",
        company: "-"
      },
      {
        name: "pato",
        avatar_url: "https://avatars0.githubusercontent.com/u/608083?v=4",
        company: "-"
      }
    ]
  }

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
  }
  render() {
    return (
      <div>
        <Form
          onSubmit={this.addNewCard}
        />
        <CardList
          cards={this.state.cards}
        />
      </div>
    );
  }
}

export default App;
