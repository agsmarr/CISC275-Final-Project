import {Button} from 'react-bootstrap';
import './HomeButtons.css';
export function HomeButtons() {
    /*testing*/ 
    return (<div>
        <h1>Choose a quiz!</h1>
        <p>Choose between a basic or detailed quiz to discover what type of career is best for you!
        </p>
        <div className = "Buttons">
            <div className="quiz-container">
                <Button id = "Basic">Basic Questions Quiz</Button>
                {/* adding Basic Question description */}
                    <div className="quiz-description">
                    <p>
                    Navigate to the 'Basic Questions' Page to answer some basic questions about yourself to determine the career fit for you!
                    </p>
        </div>
        </div> 
            <div className="quiz-container">
                <Button id = "Detailed">Detailed Questions Quiz</Button>
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
