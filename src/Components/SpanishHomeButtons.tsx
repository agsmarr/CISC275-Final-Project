import {Button} from 'react-bootstrap';
import './HomeButtons.css';
export function SpanHomeButtons() {
    const goToBasicQuiz = () => {
        window.location.hash = '/basic-quiz';
      };
    
    const goToDetailedQuiz = () => {
        window.location.hash = '/detailed-quiz';
      };
        return (<div>
            <h1 id = "bottom-h1">¡Elige un test!</h1>
            <p id = "bottom-p">¡Elige entre un test básico o detallado para descubrir qué tipo de carrera es mejor para ti!
            </p>
            <div className = "Buttons">
                <div className="quiz-container">
                    {/*<Link to="/span-basic-quiz">*/}
                    <Button id="Basic" onClick={goToBasicQuiz}>Cuestionario de Preguntas Básicas</Button>
                    {/* adding Basic Question description */}
                        <div className="quiz-description">
                        <p>
                        ¡Vaya a la página de 'Preguntas básicas' para responder algunas preguntas básicas sobre usted y determinar qué carrera es la adecuada para usted!
                        </p>
            </div>
            </div> 
                <div className="quiz-container">
                    {/*<Link to="/span-detailed-quiz">*/}
                    <Button id="Detailed" onClick={goToDetailedQuiz}>Cuestionario de Preguntas Detalladas</Button>
                    {/*</Link>*/}
                        {/* adding Detailed Question description */}
                        <div className="quiz-description">
                        <p>
                        ¡Vaya a la página 'Preguntas detalladas' para responder algunas preguntas básicas sobre usted y determinar la carrera profesional adecuada para usted!
                        </p>
                </div>
                </div>

            </div>
            
    </div>)
}
