import React, { useState } from 'react';
import { Button, Form, ProgressBar } from 'react-bootstrap';
import './DetailedQuizPage.css';
import { generateDetailedCareerReport, validateAnswer } from './chatgpt';
import {LoadingScreen} from './LoadingScreen';

const DetailedQuizPage = () => {
  const [answers, setAnswers] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState('');
  const [showReport, setShowReport] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleChange = (fieldName: keyof typeof answers, value: string) => {
    setAnswers(prev => ({ ...prev, [fieldName]: value }));
    if (submitAttempted) {
      const validation = validateAnswer(value, fieldName);
      setErrors(prev => ({ ...prev, [fieldName]: validation.isValid ? '' : validation.message }));
    }
  };

  const handleBlur = (fieldName: keyof typeof answers) => {
    const validation = validateAnswer(answers[fieldName], fieldName);
    setErrors(prev => ({ ...prev, [fieldName]: validation.isValid ? '' : validation.message }));
  };

  const validateAll = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    (Object.keys(answers) as Array<keyof typeof answers>).forEach((key) => {
      const validation = validateAnswer(answers[key], key);
      if (!validation.isValid) {
        newErrors[key] = validation.message;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const answeredCount = Object.values(answers).filter(a => a.trim() !== '').length;
  const progress = (answeredCount / 8) * 100;
  const isAllAnswered = answeredCount === 8;

  /*Chat GPT integration */
  // Set up asynchronous communication with the GPT API to handle user interactions.
  const handleSubmit = async () => {
    setSubmitAttempted(true);
    const isValid = validateAll();
  
    if (!isValid || !isAllAnswered) return;
  
    setLoading(true);
    window.alert('Generating career report...'); // Info message
  
    try {
      const apiKey = localStorage.getItem('MYKEY');
      if (!apiKey) {
        window.alert('Please enter your OpenAI API key in the footer first.');
        setLoading(false);
        return;
      }
  
      const generatedReport = await generateDetailedCareerReport(answers, apiKey.replace(/"/g, ''));
      setReport(generatedReport);
      setShowReport(true);
  
      window.alert('Career report generated successfully!');
    } catch (error) {
      console.error('Error:', error);
      setReport('Failed to generate report. Please try again.');
      setShowReport(true);
      window.alert('Failed to generate report. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  /*Navigate to home page*/
  const goBackHome = () => {
    window.location.hash = '/';
  };
  /*Navigate to basic quiz*/
  const gotoBasic = () => {
    window.location.hash = '/basic-quiz';
  }

  return (
    <div>
      {/*If loading is true, loading screen will show
        If report is generated, the report will show
        The quiz will show if loading is false & showReport is false */}
      {loading ? <LoadingScreen></LoadingScreen> : !showReport ?
      <div>
      <header>
        <Button variant="secondary" id="home-button" onClick={goBackHome}>
          Home Page
        </Button>
      </header>
      <h1 id="detailed-header">Detailed Questions Quiz</h1>
      <div className="sticky-progress-bar">
        <ProgressBar now={progress} variant="info" label={`${Math.round(progress)}%`} />
      </div>
      {/*Detailed quiz questions */}
      <div className="question-box">
        <Form>
          {[
            { id: 'q1', label: 'Do you like to commute to work? If yes, how far?', field: 'answer1' },
            { id: 'q2', label: 'What do you do in your leisure time?', field: 'answer2' },
            { id: 'q3', label: 'What activities interest you? Why?', field: 'answer3' },
            { id: 'q4', label: 'What are your favorite classes and why?', field: 'answer4' },
            { id: 'q5', label: 'What are your soft and hard skills?', field: 'answer5' },
            { id: 'q6', label: 'What are the three top characteristics you want in your work environment?', field: 'answer6' },
            { id: 'q7', label: 'How important is job salary compared to job satisfaction?', field: 'answer7' },
            { id: 'q8', label: 'Do you see yourself in a leadership role or would you rather specialize?', field: 'answer8' },
          ].map((q, index) => (
            <div className="question-boxes" key={q.id}>
              <h2 className="question-headers">Question {index + 1}</h2>
              <Form.Group controlId={q.id}>
                <Form.Label>{q.label}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={answers[q.field as keyof typeof answers]}
                  onChange={(e) => handleChange(q.field as keyof typeof answers, e.target.value)}
                  onBlur={() => handleBlur(q.field as keyof typeof answers)}
                  isInvalid={!!errors[q.field]}
                />
                <Form.Control.Feedback type="invalid">
                  {errors[q.field]}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          ))}
        </Form>
        {/*Submit button --> only enabled when all questions are answered */}
        <Button
          id="Submit-Button"
          onClick={handleSubmit}
          disabled={!isAllAnswered || loading || Object.values(errors).some(e => e)}
          className="submit-btn"
        >
          Get Results!  
        </Button>
        </div> 
        </div> :
        (
          <div className = "report-border">
            <div className="report-section">
              <div className = "report-text">
                {/*Report below*/}
                <h2>Personalized Career Report</h2>
                <div style={{ 
                whiteSpace: 'pre-wrap',
                textAlign: 'left',
                marginTop: '15px'
              }}>
                {report}
                </div>
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
              onClick={() => gotoBasic()}>
              Basic Quiz Page
            </Button>
            </div>
          </div>
        )}
      </div>);
};

export default DetailedQuizPage;