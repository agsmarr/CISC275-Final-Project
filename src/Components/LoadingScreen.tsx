import React from 'react';
import './LoadingScreen.css'
import flower from './ComponentImages/FlowerLogo.jpg'

export function LoadingScreen() {
    return (
    <div>
        <div id = "loading-box">
            {/*Flower image tilts from side to side animation in CSS*/}
            <img id = "flower-image" src = {flower} alt = ""></img>
            {/*Elipses animation in CSS*/}
            <div id = "loading-message">Generating Results</div>
        </div>
    </div>);
}