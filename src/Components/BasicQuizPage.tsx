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
        <Button id = "previous-button" onClick={() => (question !== 1) ? setQuestion(question - 1): setQuestion(question)}>Previous</Button>
        <Button id = "next-button" onClick={()=> (question !== 7) ? setQuestion(question + 1): setQuestion(question)}>Next</Button> 
      </div>
      <div className = "questions">
        {/* Questions go in span tag --> when next question button is clicked, correct question will display */}
        {(question === 1) ? <span>What subjects or topics do you enjoy the most?</span> : 
        (question === 2) ? <span>Do you prefer working with people, data, or objects?</span> : 
        (question === 3) ? <span>Would you prefer to work indoors or outdoors?</span> : 
        (question === 4) ? <span>Would you rather work alone or in a team?</span> : 
        (question === 5) ? <span>Do you like leading a team or following instructions?</span> : 
        (question === 6) ? <span>Do you enjoy routine tasks or trying new things often?</span> : 
        (question === 7) ? <span>What is more important to you: money, assisting community, or doing what you love?</span> : 
        <span></span>}
      </div>
    </div>
  );
};

export default BasicQuizPage;