import React, {useState} from 'react';
import './BasicQuizPage.css';
import { Button, Form } from 'react-bootstrap';
const BasicQuizPage = () => {
  const[question, setQuestion] = useState<number>(1);
  const[answer2, setAnswer2] = useState<string>("");
  function updateAnswer2(event: React.ChangeEvent<HTMLInputElement>) {
      setAnswer2(event.target.value);
  }
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
      <div className = "question-box">
        {/* Questions go in span tag --> when next question button is clicked, correct question will display */}
        <span id = "question1">
          <div className = "questions">What subjects or topics do you enjoy the most?</div>
          <div className = "answers1">
            <Form.Check type = "checkbox" id = "question1-answer1" label = "The Arts"></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer2" label = "Humanities"></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer3" label = "Social Sciences"></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer4" label = "STEM subjects (Science, Technology, Engineering, Math)"></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer5" label = "None of the Above"></Form.Check>
          </div>
        </span>
        <span id = "question2">
          <div className = "questions">Do you prefer working with people, data, or objects?</div>
          <div className = "answers2">
            <Form.Check type = "radio" id = "question2-answer1" label = "People" value = "People" onChange={updateAnswer2} checked = {answer2 === "People"}></Form.Check>
            <Form.Check type = "radio" id = "question2-answer2" label = "Data" value = "Data" onChange={updateAnswer2} checked = {answer2 === "Data"}></Form.Check>
            <Form.Check type = "radio" id = "question2-answer3" label = "Objects" value = "Objects" onChange={updateAnswer2} checked = {answer2 === "Objects"}></Form.Check>
          </div>
        </span>
        <span>
          <div id = "quest-3">Would you prefer to work indoors or outdoors?</div>
        </span>
        <span>
          <div id = "quest-4">Would you like to work alone or in a team?</div>
        </span> 
        <span>Do you like leading a team or following instructions?</span> : 
        <span>Do you enjoy routine tasks or trying new things often?</span> : 
        <span>What is more important to you: money, assisting community, or doing what you love?</span>
      </div>
    </div>
  );
};

export default BasicQuizPage;