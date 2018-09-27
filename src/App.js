import React, { Component } from 'react';
import './App.css';
import GameForm from './game-form';
import GuessNumber from './guess-number';
import GuessList from './guess-list';
import GuessTemperature from './guess-temperature';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      message: "Enter a number between 1 and 100",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Hot and Cold Game</h1>
          <h2>{this.state.message}</h2>
          <GameForm clickHandler={this.handleGuess} />
          <GuessNumber />
          <GuessList />
          <GuessTemperature />
      </div>
    );
  }
}


