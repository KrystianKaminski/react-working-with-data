import React, { Component } from 'react';
import CardList from './CardList';

let data = [
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

class App extends Component {
  render() {
    return (
      <div>
        <CardList
          cards={data}
        />
      </div>
    );
  }
}

export default App;
