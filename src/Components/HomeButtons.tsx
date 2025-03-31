import {Button} from 'react-bootstrap';
import './HomeButtons.css';
import { Link } from 'react-router-dom';
export function HomeButtons() {
    return (<div>
        <h1>Choose a quiz!</h1>
        <p>Choose between a basic or detailed quiz to discover what type of career is best for you!
        </p>
        <div className = "Buttons">
            <div className="quiz-container">
                <Link to="/basic-quiz">
                <Button id = "Basic">Basic Questions Quiz</Button>
                </Link>
                {/* adding Basic Question description */}
                    <div className="quiz-description">
                    <p>
                    Navigate to the 'Basic Questions' Page to answer some basic questions about yourself to determine the career fit for you!
                    </p>
        </div>
        </div> 
            <div className="quiz-container">
                <Link to="/detailed-quiz">
                <Button id = "Detailed">Detailed Questions Quiz</Button>
                </Link>
                    {/* adding Detailed Question description */}
                    <div className="quiz-description">
                    <p>
                    Navigate to the 'Detailed Questions' Page to answer some basic questions about yourself to determine the career fit for you!
                    </p>
            </div>
            </div>
            <div className="quiz-container">
                <Link to="/career-assessment">
                <Button id="CareerAssessment">Career Assessment</Button>
                </Link>
            </div>
        </div>
    </div>)
}
