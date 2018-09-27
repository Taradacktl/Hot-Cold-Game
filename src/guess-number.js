import React, { Component } from 'react';
import './guess-number.css';

export default function GuessNumber(props) {

 
    return (
        <div className="guess-number">
            <h2 id="guessNumber">Guess number: {props.guessNumber}</h2>
        </div>
    );
}