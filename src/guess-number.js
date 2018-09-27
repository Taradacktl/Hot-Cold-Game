import React, { Component } from 'react';
import './guess-number.css';

export default function GuessNumber(props) {
    const numbers= props.guesses.map(n=>( <span>{n}</span> )) 
    return (
        <div className="guess-number">
            <h2>Guessed numbers:{numbers}</h2>
        </div>
    );
}