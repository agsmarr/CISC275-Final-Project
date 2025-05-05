import React from 'react';
import {Button} from 'react-bootstrap';
import './AboutUsPage.css';
import image1 from './ComponentImages/Saieda.jpg';
import image2 from './ComponentImages/Yaqing.jpg';
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
    <body>
        <div id = "about-us-message">
            <h1 className = "about-header">About Us</h1>
            <p>Our team has developed an assessment tool that helps users to make career decisions! 
                Whether you're a high school student, college student, or a professional who's looking for a career change, our app can help you figure out the next steps in your career.
                We strive to provide a fun and user-friendly experience that utilizes AI-generated responses to guide users towards careers that best fit their lifestyle and interests.
                Navigate back to the home page to check out our basic and detailed career assessments or meet the developers below!</p>
        </div>
        <h1 className = "about-header">Meet the Developers!</h1>
        <div className = "intro-border">
            <div className = "intro-box">
                <div className = "picture-box">
                <img className = "images" src = {image1} alt = ""></img>
                    <p>Saieda Ali Zada</p>
                    <a href = "mailto:saieda@udel.edu">saieda@udel.edu</a>
                </div>
                <p className = "intros">I am Saieda, a junior in the CISC department at the University of Delaware.
                    I enjoy playing volleyball, cooking, and painting.
                </p>
            </div>
        </div>
        <div className = "intro-border">
            <div className = "intro-box">
                <div className = "picture-box">
                <img className = "images" src = {image2} alt = ""></img>
                    <p>Yaqing Jiang</p>
                    <a href = "mailto:yaqingj@udel.edu">yaqingj@udel.edu</a>
                </div>
                <p className = "intros">I'm Yaqing. I'm a junior at UD. I like to ice skate, ski, and roller blade.</p>
            </div>
        </div>
        <div className = "intro-border">
            <div className = "intro-box">
                <div className = "picture-box">
                    <img className = "images" src = {image3} alt = ""></img>
                    <p>Amanda Smarr</p>
                    <a href = "mailto:agsmarr@udel.edu">agsmarr@udel.edu</a>
                </div>
                <p className = "intros">I'm Amanda, and I'm a sophomore at UD. 
                    I am a CS major with a cybersecurity concentration, and I currently work as an organizer for the HenHacks team!</p>
            </div>
        </div>
    </body>
    </div>)
}
export default AboutUs