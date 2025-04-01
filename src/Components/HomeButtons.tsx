import {Button} from 'react-bootstrap';
import './HomeButtons.css';
import { useNavigate } from 'react-router-dom';
export function HomeButtons() {
const navigate = useNavigate();
        return (<div>
            <h1>Choose a quiz!</h1>
            <p>Choose between a basic or detailed quiz to discover what type of career is best for you!
            </p>
            <div className = "Buttons">
                <div className="quiz-container">
                    {/*<Link to="/basic-quiz">*/}
                    <Button id = "Basic" onClick={()=> {navigate("/basic-quiz")}}>Basic Questions Quiz</Button>
                    {/* adding Basic Question description */}
                        <div className="quiz-description">
                        <p>
                        Navigate to the 'Basic Questions' Page to answer some basic questions about yourself to determine the career fit for you!
                        </p>
            </div>
            </div> 
                <div className="quiz-container">
                    {/*<Link to="/detailed-quiz">*/}
                    <Button id = "Detailed" onClick={()=> {navigate("/detailed-quiz")}}>Detailed Questions Quiz</Button>
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
