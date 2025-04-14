import React, {useState} from 'react';
import './BasicQuizPage.css';
import { Button, Form } from 'react-bootstrap';
const BasicQuizPage = () => {
  const[answer2, setAnswer2] = useState<string>("");
  const[answer3, setAnswer3] = useState<string>("");
  const[answer4, setAnswer4] = useState<string>("");
  const[answer5, setAnswer5] = useState<string>("");
  const[answer6, setAnswer6] = useState<string>("");
  const[answer7, setAnswer7] = useState<string>("");
  /* Setting Answers*/
  function updateAnswer2(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer2(event.target.value);
  }
  function updateAnswer3(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer3(event.target.value);
  }
  function updateAnswer4(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer4(event.target.value);
  }
  function updateAnswer5(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer5(event.target.value);
  }
  function updateAnswer6(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer6(event.target.value);
  }
  function updateAnswer7(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer7(event.target.value);
  }
  /* Navigation back home */
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
      <div className = "question-box">
        <div className = "question-boxes">
          <h2 className = "question-headers">Question 1</h2>
          <div className = "questions">What subjects or topics do you enjoy the most?</div>
          <div className = "answers">
            <Form.Check type = "checkbox" id = "question1-answer1" label = "The Arts"></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer2" label = "Humanities"></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer3" label = "Social Sciences"></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer4" label = "STEM subjects (Science, Technology, Engineering, Math)"></Form.Check>
            <Form.Check type = "checkbox" id = "question1-answer5" label = "None of the Above"></Form.Check>
          </div>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 2</h2>
          <div className = "questions">Do you prefer working with people, data, or objects?</div>
          <div className = "answers">
            <Form.Check type = "radio" id = "question2-answer1" label = "People" value = "People" onChange={updateAnswer2} checked = {answer2 === "People"}></Form.Check>
            <Form.Check type = "radio" id = "question2-answer2" label = "Data" value = "Data" onChange={updateAnswer2} checked = {answer2 === "Data"}></Form.Check>
            <Form.Check type = "radio" id = "question2-answer3" label = "Objects" value = "Objects" onChange={updateAnswer2} checked = {answer2 === "Objects"}></Form.Check>
          </div>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 3</h2>
          <div className = "questions">Would you prefer to work indoors or outdoors?</div>
          <Form.Check type = "radio" id = "question3-answer1" label = "Indoors" value = "Indoors" onChange={updateAnswer3} checked = {answer3 === "Indoors"}></Form.Check>
          <Form.Check type = "radio" id = "question3-answer2" label = "Outdoors" value = "Outdoors" onChange={updateAnswer3} checked = {answer3 === "Outdoors"}></Form.Check>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 4</h2>
          <div className = "questions">Would you like to work alone or in a team?</div>
          <Form.Check type = "radio" id = "question4-answer1" label = "Alone" value = "Alone" onChange={updateAnswer4} checked = {answer4 === "Alone"}></Form.Check>
          <Form.Check type = "radio" id = "question4-answer2" label = "In a Team" value = "In a Team" onChange={updateAnswer4} checked = {answer4 === "In a Team"}></Form.Check>
        </div> 
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 5</h2>
          <div className = "questions">Do you like leading a team or following instructions?</div>
          <Form.Check type = "radio" id = "question5-answer1" label = "Leading a Team" value = "Leading a Team" onChange={updateAnswer5} checked = {answer5 === "Leading a Team"}></Form.Check>
          <Form.Check type = "radio" id = "question5-answer2" label = "Following Instructions" value = "Following Instructions" onChange={updateAnswer5} checked = {answer5 === "Following Instructions"}></Form.Check>
        </div> 
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 6</h2>
          <div className = "questions">Do you enjoy routine tasks or trying new things often?</div>
          <Form.Check type = "radio" id = "question6-answer1" label = "Routine Tasks" value = "Routine Tasks" onChange={updateAnswer6} checked = {answer6 === "Routine Tasks"}></Form.Check>
          <Form.Check type = "radio" id = "question6-answer2" label = "Trying New Things" value = "Trying New Things" onChange={updateAnswer6} checked = {answer6 === "Trying New Things"}></Form.Check>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 7</h2>
          <div className = "questions">What is more important to you: money, assisting community, or doing what you love?</div>
          <Form.Check type = "radio" id = "question7-answer1" label = "Money" value = "Money" onChange={updateAnswer7} checked = {answer7 === "Money"}></Form.Check>
          <Form.Check type = "radio" id = "question7-answer2" label = "Assisting Community" value = "Assisting Community" onChange={updateAnswer7} checked = {answer7 === "Assisting Community"}></Form.Check>
          <Form.Check type = "radio" id = "question7-answer3" label = "Doing What You Love" value = "Doing What You Love" onChange={updateAnswer7} checked = {answer7 === "Doing What You Love"}></Form.Check>
        </div>
        <Button id = "Submit-Button">Get Results!</Button>
      </div>
    </div>
  );
};

export default BasicQuizPage;