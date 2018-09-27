import React, { Component } from 'react';
import './App.css';
import GameForm from './game-form';
import GuessNumber from './guess-number';
import GuessList from './guess-list';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      guessNumber: 0,
      message: "Enter a number between 1 and 100",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  handleGuess(number) {
    const { correctAnswer } = this.state
    const diff = Math.abs(correctAnswer - number)
    let newMessage = 'Cold'
    if (diff < 20) {
      newMessage = 'Warm'
    }
    if (diff < 10) {
      newMessage = 'Hot'
    }
    if (diff === 0) {
      newMessage = 'You won!'
    }
    this.setState({ message: newMessage, 
      guesses: [...this.state.guesses, number],
      guessNumber: [this.state.guesses.length + 1]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hot and Cold Game</h1>
        <h2>{this.state.message}</h2>
        <GameForm clickHandler={this.handleGuess.bind(this)} />
        <GuessNumber guessNumber={this.state.guessNumber}/>
        <GuessList guesses={this.state.guesses}/>
      </div>
    );
  }
}


