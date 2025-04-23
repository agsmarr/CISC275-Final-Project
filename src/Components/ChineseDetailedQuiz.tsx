import React, {useState} from 'react';
import { Button, Form ,ProgressBar} from 'react-bootstrap';
import './DetailedQuizPage.css'
const ChineseDetailedQuiz = () => {
  const [textAnswer1, setTextAnswer1] = useState('');
  const [textAnswer2, setTextAnswer2] = useState('');
  const [textAnswer3, setTextAnswer3] = useState('');
  const [textAnswer4, setTextAnswer4] = useState('');
  const [textAnswer5, setTextAnswer5] = useState('');
  const [textAnswer6, setTextAnswer6] = useState('');
  const [textAnswer7, setTextAnswer7] = useState('');
  const [textAnswer8, setTextAnswer8] = useState('');
  const textAnsweredCount = [
    textAnswer1,
    textAnswer2,
    textAnswer3,
    textAnswer4,
    textAnswer5,
    textAnswer6,
    textAnswer7,
    textAnswer8,
  ].filter((a) => a.trim() !== '').length;
  const textProgress = (textAnsweredCount / 8) * 100;
  const textAnswers = [textAnswer1, textAnswer2, textAnswer3, textAnswer4, textAnswer5, textAnswer6, textAnswer7,textAnswer8];
  const answeredCount = textAnswers.filter((a) => a.trim() !== '').length;
  const isAllAnswered = answeredCount === textAnswers.length;
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
      <h1 id = "detailed-header">Detailed Questions Quiz</h1>
      <div className="sticky-progress-bar">
        <ProgressBar now={textProgress} variant="info" label={`${Math.round(textProgress)}%`} />
      </div>
      <div className = "question-box">
      <Form>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 1</h2>
        <Form.Group className="questions" controlId="q1">
          <Form.Label>Do you like to commute to work? If yes, how far?</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer1}
            onChange={(e) => setTextAnswer1(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 2</h2>
        <Form.Group className="questions" controlId="q2">
          <Form.Label>What do you do in your leisure time?</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer2}
            onChange={(e) => setTextAnswer2(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 3</h2>
        <Form.Group className="questions" controlId="q3">
          <Form.Label>What activities interests you? Why?</Form.Label>
          <Form.Control
           type="text"
           value={textAnswer3}
           onChange={(e) => setTextAnswer3(e.target.value)}
           />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 4</h2>
        <Form.Group className="questions" controlId="q4">
          <Form.Label>What are your favorite classes and why?</Form.Label>
          <Form.Control
           type="text"
          value={textAnswer4}
          onChange={(e) => setTextAnswer4(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 5</h2>
        <Form.Group className="questions" controlId="q5">
          <Form.Label>What are your soft and hard skills?</Form.Label>
          <Form.Control
          type="text"
          value={textAnswer5}
          onChange={(e) => setTextAnswer5(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 6</h2>
        <Form.Group className="questions" controlId="q6">
          <Form.Label>What are the three top characteristics you want to have in your work environment?</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer6}
            onChange={(e) => setTextAnswer6(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 7</h2>
        <Form.Group className="questions" controlId="q7">
          <Form.Label>How important is job salary compared to job satisfaction when choosing a career?</Form.Label>
          <Form.Control
           type="text"
           value={textAnswer7}
           onChange={(e) => setTextAnswer7(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className = "question-boxes">
        <h2 className = "question-headers">Question 8</h2>
        <Form.Group className="questions" controlId="q8">
         <Form.Label>Do you see yourself in a leadership role or would you rather specialize in a specific skill?</Form.Label>
          <Form.Control
            type="text"
            value={textAnswer8}
            onChange={(e) => setTextAnswer8(e.target.value)}
          />
        </Form.Group>
        </div>
      </Form>
      <Button
        id="Submit-Button"onClick={() => alert("Results submitted!")}disabled={!isAllAnswered}
        style={{backgroundColor: isAllAnswered ? 'purple' : 'grey',cursor: isAllAnswered ? 'pointer' : 'not-allowed',}}>
          Get Results!
      </Button>
      </div>
    </div>
  );
};

export default ChineseDetailedQuiz;