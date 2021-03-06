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

  restartGame(){
    this.setState({
      guesses: [],
      guessNumber: 0,
      message: "Enter a number between 1 and 100",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  handleGuess(number) {
    if (number > 0 && number < 100) {
    const { correctAnswer } = this.state
    const diff = Math.abs(correctAnswer - number)
    let newMessage = 'You are Cold'
    if (diff < 20) {
      newMessage = 'Getting Warm'
    }
    if (diff < 10) {
      newMessage = 'You\'re Hot'
    }
    if (diff === 0) {
      newMessage = 'You won!'
    }
    if (this.state.guesses.length < 10){
      this.setState({ message: newMessage, 
        guesses: [...this.state.guesses, number],
        guessNumber: [this.state.guesses.length + 1]
      })
    }
    else this.setState({ message: 'Game Over'})
  }

else this.setState({ message: 'Number must be between 1 and 100'})
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">Hot and Cold Game</h1>
        <h2>{this.state.message}</h2>
        <GameForm clickHandler={this.handleGuess.bind(this)}
         restartButton={() => this.restartGame()}/>
        <GuessNumber guessNumber={this.state.guessNumber}/>
        <GuessList guesses={this.state.guesses}/>
      </div>
    );
  }
}


