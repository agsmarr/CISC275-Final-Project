import React from 'react';
import {Button} from 'react-bootstrap';
import './AboutUsPage.css';
import image3 from './ComponentImages/Amanda.jpg';
function AboutUs() {
    const goBackHome = () => {
        window.location.hash = '/';
      };
    return (<div>
    <header>
        <Button variant="secondary" id="home-button" onClick={goBackHome}>
          Home Page
        </Button>
    </header>
    <div>
        <div id = "Saieda-intro">
            <div className = "picture-box">
                <p>Saieda Ali Zada</p>
                <a href = "mailto:saieda@udel.edu">saieda@udel.edu</a>
            </div>
        </div>
        <div id = "Yaqing-intro">
            <div className = "picture-box">
                <p>Yaqing Jiang</p>
                <a href = "mailto:yaqingj@udel.edu">yaqingj@udel.edu</a>
            </div>
        </div>
        <div className = "intro-border">
            <div id = "Amanda-intro">
                <div className = "picture-box">
                    <img src = {image3} alt = ""></img>
                    <p>Amanda Smarr</p>
                    <a href = "mailto:agsmarr@udel.edu">agsmarr@udel.edu</a>
                </div>
                <p className = "intros">Hi! I'm Amanda. I'm a sophomore at UD. I am a CS major with a cybersecurity concentration, and I currently work as an organizer for the HenHacks team.</p>
            </div>
        </div>
    </div>
    </div>)
}
export default AboutUs