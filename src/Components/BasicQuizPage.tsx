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
        <div className = "header-buttons">
          <Button id = "last-button" onClick={() => (question != 1) ? setQuestion(question - 1): setQuestion(question)}>Last Question</Button>
          <Button variant="secondary" id="home-button" onClick={goBackHome}>
            Home Page
          </Button>
          <Button id = "next-button" onClick={()=> (question != 7) ? setQuestion(question + 1): setQuestion(question)}>Next Question</Button>
        </div>
      </header>
      <h1 id = "basic-header">Basic Questions Quiz</h1>
      <h2>Question {question}</h2>
    </div>
  );
};

export default BasicQuizPage;