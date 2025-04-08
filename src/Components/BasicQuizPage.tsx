import React from 'react';
import './BasicQuizPage.css';
import { Button } from 'react-bootstrap';
const BasicQuizPage = () => {
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
      <h1>Basic Questions Quiz</h1>
      <p>This is the Basic Quiz Page</p>
      {/* Add your basic quiz content here */}
      
    </div>
  );
};

export default BasicQuizPage;