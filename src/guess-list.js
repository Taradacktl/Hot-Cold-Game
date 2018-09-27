import React, { Component } from 'react';
import './guess-list.css';

export default function GuessList(props) {
    const numbers= props.guesses.map((guess, index) => (
        <ul key={index}>
          {guess}
        </ul>
    ));
    return (
        <div className="guess-list">
            <h2>Your guesses: {numbers}</h2>
        </div>
    );
}