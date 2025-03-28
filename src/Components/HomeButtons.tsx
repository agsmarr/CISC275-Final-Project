import {Button} from 'react-bootstrap';
import './HomeButtons.css';
export function HomeButtons() {
    return (<div>
        <h1>Choose a quiz!</h1>
        <p>Choose between a basic or detailed quiz to discover what type of career is best for you!
        </p>
        <div className = "Buttons">
        <Button id = "Basic">Basic Questions Quiz</Button>
        <Button id = "Detailed">Detailed Questions Quiz</Button>
        </div>
    </div>)
}
