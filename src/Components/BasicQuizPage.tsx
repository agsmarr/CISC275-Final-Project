/* To create the qustions, used chatpgt as a source.*/

import React, {useState} from 'react';
import './BasicQuizPage.css';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import { generateCareerReport } from './chatgpt';
import {LoadingScreen} from './LoadingScreen';
//Store the answer
const BasicQuizPage = () => {
  const[answer1, setAnswer1] = useState<string[]>([]);
  const[answer2, setAnswer2] = useState<string>("");
  const[answer3, setAnswer3] = useState<string>("");
  const[answer4, setAnswer4] = useState<string>("");
  const[answer5, setAnswer5] = useState<string>("");
  const[answer6, setAnswer6] = useState<string>("");
  const[answer7, setAnswer7] = useState<string>("");

//Calculate how much question is answered for the progress bar
  const totalQuestions = 7;
  const answeredCount =
    (answer1.length > 0 ? 1 : 0) + 
    (answer2 ? 1 : 0) + 
    (answer3 ? 1 : 0) + 
    (answer4 ? 1 : 0) + 
    (answer5 ? 1 : 0) + 
    (answer6 ? 1 : 0) + 
    (answer7 ? 1 : 0);
  const progress = (answeredCount / totalQuestions) * 100;

  /* Setting Answers*/
  const updateAnswer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setAnswer1((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

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
  const isAllAnswered = answeredCount === totalQuestions;

  /* Navigation back home */
  const goBackHome = () => {
    window.location.hash = '/';
  };
  /* Navigation to detailed quiz */
  const gotoDetailed = () => {
    window.location.hash = '/detailed-quiz';
  }

  //chatgpt integration part
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState('');
  const [showReport, setShowReport] = useState(false);
  // Set up asynchronous communication with the GPT API to handle user interactions.
  const handleSubmit = async () => {
    if (!isAllAnswered) return;
  
    setLoading(true);
    window.alert('Generation report...');
  
    try {
      const apiKey = localStorage.getItem('MYKEY');
      if (!apiKey) {
        window.alert('Please enter your OpenAI API key in the footer first.');
        setLoading(false);
        return;
      }
  
      const answers = {
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7
      };
  
      const generatedReport = await generateCareerReport(answers, apiKey.replace(/"/g, ''));
      setReport(generatedReport);
      setShowReport(true);
  
      window.alert('Career report generated successfully!');
    } catch (error) {
      console.error('Error:', error);
      setReport('Failed to generate report. Please check your API key and try again.');
      setShowReport(true);
      window.alert('Failed to generate report.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      {/*If loading is true, loading screen will show
        If report is generated, the report will show
        The quiz will show if loading is false & showReport is false */}
        {loading ? <LoadingScreen></LoadingScreen> : !showReport ? 
        <div>
          {/*Home page button */}
        <header>
            <Button variant="secondary" id="home-button" onClick={goBackHome}>
              Home Page
            </Button>
        </header>
        <h1 id="basic-header">Basic Questions Quiz</h1>
        {/*chatgpt integration part*/}
        {/*Progress bar*/}
        <div className="sticky-progress-bar mt-4">
          <ProgressBar now={progress} variant="info" label={`${Math.round(progress)}%`} />
        </div>
        {/*Basic Quiz Questions*/}
        <div className="question-box">
          <div className="question-boxes">
            <h2 className="question-headers">Question 1</h2>
            <div className="questions">What subjects or topics do you enjoy the most?</div>
            <div className="answers">
              <Form.Check type="checkbox" id="question1-answer1" label="The Arts" value="The Arts" onChange={updateAnswer1} checked={answer1.includes("The Arts")} />
              <Form.Check type="checkbox" id="question1-answer2" label="Humanities" value="Humanities" onChange={updateAnswer1} checked={answer1.includes("Humanities")} />
              <Form.Check type="checkbox" id="question1-answer3" label="Social Sciences" value="Social Sciences" onChange={updateAnswer1} checked={answer1.includes("Social Sciences")} />
              <Form.Check type="checkbox" id="question1-answer4" label="STEM subjects (Science, Technology, Engineering, Math)" value="STEM subjects (Science, Technology, Engineering, Math)" onChange={updateAnswer1} checked={answer1.includes("STEM subjects (Science, Technology, Engineering, Math)")} />
              <Form.Check type="checkbox" id="question1-answer5" label="None of the Above" value="None of the Above" onChange={updateAnswer1} checked={answer1.includes("None of the Above")} />
            </div>
          </div>
          <div className="question-boxes">
            <h2 className="question-headers">Question 2</h2>
            <div className="questions">Do you prefer working with people, data, or objects?</div>
            <div className="answers">
              <Form.Check type="radio" id="question2-answer1" label="People" value="People" onChange={updateAnswer2} checked={answer2 === "People"} />
              <Form.Check type="radio" id="question2-answer2" label="Data" value="Data" onChange={updateAnswer2} checked={answer2 === "Data"} />
              <Form.Check type="radio" id="question2-answer3" label="Objects" value="Objects" onChange={updateAnswer2} checked={answer2 === "Objects"} />
            </div>
          </div>
          <div className="question-boxes">
            <h2 className="question-headers">Question 3</h2>
            <div className="questions">Would you prefer to work indoors or outdoors?</div>
            <Form.Check type="radio" id="question3-answer1" label="Indoors" value="Indoors" onChange={updateAnswer3} checked={answer3 === "Indoors"} />
            <Form.Check type="radio" id="question3-answer2" label="Outdoors" value="Outdoors" onChange={updateAnswer3} checked={answer3 === "Outdoors"} />
          </div>
          <div className="question-boxes">
            <h2 className="question-headers">Question 4</h2>
            <div className="questions">Would you like to work alone or in a team?</div>
            <Form.Check type="radio" id="question4-answer1" label="Alone" value="Alone" onChange={updateAnswer4} checked={answer4 === "Alone"} />
            <Form.Check type="radio" id="question4-answer2" label="In a Team" value="In a Team" onChange={updateAnswer4} checked={answer4 === "In a Team"} />
          </div> 
          <div className="question-boxes">
            <h2 className="question-headers">Question 5</h2>
            <div className="questions">Do you like leading a team or following instructions?</div>
            <Form.Check type="radio" id="question5-answer1" label="Leading a Team" value="Leading a Team" onChange={updateAnswer5} checked={answer5 === "Leading a Team"} />
            <Form.Check type="radio" id="question5-answer2" label="Following Instructions" value="Following Instructions" onChange={updateAnswer5} checked={answer5 === "Following Instructions"} />
          </div> 
          <div className="question-boxes">
            <h2 className="question-headers">Question 6</h2>
            <div className="questions">Do you enjoy routine tasks or trying new things often?</div>
            <Form.Check type="radio" id="question6-answer1" label="Routine Tasks" value="Routine Tasks" onChange={updateAnswer6} checked={answer6 === "Routine Tasks"} />
            <Form.Check type="radio" id="question6-answer2" label="Trying New Things" value="Trying New Things" onChange={updateAnswer6} checked={answer6 === "Trying New Things"} />
          </div>
          <div className="question-boxes">
            <h2 className="question-headers">Question 7</h2>
            <div className="questions">What is more important to you: money, assisting community, or doing what you love?</div>
            <Form.Check type="radio" id="question7-answer1" label="Money" value="Money" onChange={updateAnswer7} checked={answer7 === "Money"} />
            <Form.Check type="radio" id="question7-answer2" label="Assisting Community" value="Assisting Community" onChange={updateAnswer7} checked={answer7 === "Assisting Community"} />
            <Form.Check type="radio" id="question7-answer3" label="Doing What You Love" value="Doing What You Love" onChange={updateAnswer7} checked={answer7 === "Doing What You Love"} />
          </div>
          {/*Submit button --> only enabled when isAllAnswered is true */}
          <Button
            id="Submit-Button"
            onClick={handleSubmit}
            disabled={!isAllAnswered || loading}
            style={{
              backgroundColor: isAllAnswered ? 'purple' : 'grey',
              cursor: isAllAnswered ? 'pointer' : 'not-allowed',
            }}
          >
            Get Results!
          </Button>
         </div>
         </div> :
        (
          <div className = "report-border">
            <div className="report-section">
              <div className = "report-text">
                {/* Report below */}
              <h2 id = "report-header">Personalized Career Report</h2>
              <div style={{ 
                whiteSpace: 'pre-wrap',
                textAlign: 'left',
                marginTop: '15px'
              }}>
                {report}
              </div>
              </div>
              <div className = "report-buttons">
                {/*Home Page Button*/}
              <Button style = {{fontSize: '25px', backgroundColor: '#7698dc', fontWeight: 'bold', color: '#f8f9fa', border: 'transparent', boxShadow: '8px 8px 10px rgb(174, 174, 174)'}}
                onClick={() => goBackHome()}
              >
                Back to Home Page
              </Button>
              {/*Detailed Quiz Page Button*/}
              <Button style = {{fontSize: '25px', backgroundColor: '#7698dc', fontWeight: 'bold', color: '#f8f9fa', border: 'transparent', boxShadow: '8px 8px 10px rgb(174, 174, 174)'}}
                onClick={() => gotoDetailed()}>
                Detailed Quiz Page
              </Button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};
export default BasicQuizPage;