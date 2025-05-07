import React from 'react';
import './LoadingScreen.css'
import flower from './ComponentImages/FlowerLogo.jpg'

export function LoadingScreen() {
    return (
    <div>
        <div id = "loading-box">
            <img id = "flower-image" src = {flower} alt = ""></img>
            <div id = "loading-message">Generando resultados</div>
        </div>
    </div>);
}