import React from 'react';
import {Button} from 'react-bootstrap';
import './AboutUsPage.css';
import image1 from './ComponentImages/Saieda.jpg';
import image2 from './ComponentImages/Yaqing.jpg';
import image3 from './ComponentImages/Amanda.jpg';
function SpanishAboutUs() {
    const goBackHome = () => {
        window.location.hash = '/';
      };
    return (<div>
        {/*Home Page Button*/}
    <header>
        <Button variant="secondary" id="home-button" onClick={goBackHome}>
        Página de inicio
        </Button>
    </header>
    <body>
        {/*General About Us Message*/}
        <div id = "about-us-message">
            <h1 className = "about-header">Sobre Nosotras</h1>
            <p>Nuestro equipo ha desarrollado una herramienta de evaluación que ayuda a los usuarios a tomar decisiones profesionales.
                Ya seas estudiante de preparatoria, universitario o profesional que busca un cambio de carrera, nuestra aplicación puede ayudarte a determinar los próximos pasos en tu carrera.
                Nos esforzamos por ofrecer una experiencia divertida e intuitiva que utiliza respuestas generadas por IA para guiar a los usuarios hacia las carreras que mejor se adapten a su estilo de vida e intereses.
                ¡Vuelve a la página principal para consultar nuestras evaluaciones profesionales básicas y detalladas o conoce a los desarrolladores a continuación!</p>
        </div>
        {/*Developer Intros*/}
        <h1 className = "about-header">¡Conoce a las desarrolladoras!</h1>
        <div className = "intro-border">
            <div className = "intro-box">
                <div className = "picture-box">
                <img className = "images" src = {image1} alt = ""></img>
                    <p>Saieda Ali Zada</p>
                    <a href = "mailto:saieda@udel.edu">saieda@udel.edu</a>
                </div>
                <p className = "intros">Soy Saieda, estudiante de tercer año en el departamento de CISC de la Universidad de Delaware. Me gusta jugar al voleibol, cocinar y pintar.
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
                <p className = "intros">Soy Yaqing. Soy estudiante de penúltimo año en la UD. Me gusta patinar sobre hielo, esquiar y patinar en línea.</p>
            </div>
        </div>
        <div className = "intro-border">
            <div className = "intro-box">
                <div className = "picture-box">
                    <img className = "images" src = {image3} alt = ""></img>
                    <p>Amanda Smarr</p>
                    <a href = "mailto:agsmarr@udel.edu">agsmarr@udel.edu</a>
                </div>
                <p className = "intros">Soy Amanda y soy estudiante de segundo año en la UD.
                Estudio informática con especialización en ciberseguridad y actualmente trabajo como organizadora del equipo HenHacks.</p>
            </div>
        </div>
    </body>
    </div>)
}
export default SpanishAboutUs