import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import './HomeButtons.css';

export function HomeButtons() {
    return (<div>
        <p>Choose a quiz!</p>
        <div className = "Buttons">
        <Button id = "Basic">Basic Questions Quiz</Button>
        <Button id = "Detailed">Detailed Questions Quiz</Button>
        </div>
    </div>)
}