import React, { Component } from 'react';
import './game-form.css';

export default function GameForm(props) {
    return (
        <div className="game-form">
            <input id="the-number" type="number" placeholder="Enter your number" min={1} max={100} />
            <br></br>
            <button onClick={ev => {
                ev.preventDefault()
                props.clickHandler(document.getElementById('the-number').value)
            }}>Guess</button>
        </div>
    );
};