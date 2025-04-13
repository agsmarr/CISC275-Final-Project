import React, {useState} from 'react';
import './BasicQuizPage.css';
import { Button } from 'react-bootstrap';
const BasicQuizPage = () => {
  const[question, setQuestion] = useState<number>(1);
  const goBackHome = () => {
    window.location.hash = '/';
  };
  return (
    <div>
      <header>
          <Button variant="secondary" id="home-button" onClick={goBackHome}>
            Home Page
          </Button>
      </header>
      <h1 id = "basic-header">Basic Questions Quiz</h1>
      <p id = "description">Use the 'Next' button to move forward to the next question. Use the 'Previous' button to re-visit the previous question!</p>
      <h2>Question {question}</h2>
      <div className = "basic-navigation">
        <Button id = "previous-button" onClick={() => (question != 1) ? setQuestion(question - 1): setQuestion(question)}>Previous</Button>
        <Button id = "next-button" onClick={()=> (question != 7) ? setQuestion(question + 1): setQuestion(question)}>Next</Button> 
      </div>
      <div className = "questions">
        {/* Questions go in span tag --> when next question button is clicked, correct question will display */}
        {(question === 1) ? <span>This is question 1</span> : 
        (question === 2) ? <span>This is question 2</span> : 
        (question === 3) ? <span>This is question 3</span> : 
        (question === 4) ? <span>This is question 4</span> : 
        (question === 5) ? <span>This is question 5</span> : 
        (question === 6) ? <span>This is question 6</span> : 
        (question === 7) ? <span>This is question 7</span> : 
        <span></span>}
      </div>
    </div>
  );
};

export default BasicQuizPage;