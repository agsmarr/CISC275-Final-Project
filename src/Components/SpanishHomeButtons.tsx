import {Button} from 'react-bootstrap';
import './HomeButtons.css';
export function HomeButtons() {
    const goToBasicQuiz = () => {
        window.location.hash = '/span-basic-quiz';
      };
    
    const goToDetailedQuiz = () => {
        window.location.hash = '/span-detailed-quiz';
      };
        return (<div>
            <h1 id = "bottom-h1">Choose a quiz!</h1>
            <p id = "bottom-p">Choose between a basic or detailed quiz to discover what type of career is best for you!
            </p>
            <div className = "Buttons">
                <div className="quiz-container">
                    {/*<Link to="/basic-quiz">*/}
                    <Button id="Basic" onClick={goToBasicQuiz}>Basic Questions Quiz</Button>
                    
                    {/* adding Basic Question description */}
                        <div className="quiz-description">
                        <p>
                        Navigate to the 'Basic Questions' Page to answer some basic questions about yourself to determine the career fit for you!
                        </p>
            </div>
            </div> 
                <div className="quiz-container">
                    {/*<Link to="/detailed-quiz">*/}
                    <Button id="Detailed" onClick={goToDetailedQuiz}>Detailed Questions Quiz</Button>
                    {/*</Link>*/}
                        {/* adding Detailed Question description */}
                        <div className="quiz-description">
                        <p>
                        Navigate to the 'Detailed Questions' Page to answer some basic questions about yourself to determine the career fit for you!
                        </p>
                </div>
                </div>

            </div>
            
    </div>)
}
