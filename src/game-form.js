import React, { Component } from 'react';
import './game-form.css';

export default function GameForm(props) {
    return (
        <div className="game-form">
            <input type="number" placeholder= "Enter your number" min={1} max={100}/>
            <br></br>
            <button onClick= { ev=> {debugger}}>Guess</button>
        </div>
    );
};