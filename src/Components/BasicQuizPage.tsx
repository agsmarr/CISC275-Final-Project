import React from 'react';
import './BasicQuizPage.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const BasicQuizPage = () => {
  return (
    <div>
      <header><Link to="/">
        <Button variant="secondary" id = "home-button">Home Page</Button>
      </Link></header>
      <h1>Basic Questions Quiz</h1>
      <p>This is the Basic Quiz Page</p>
      {/* Add your basic quiz content here */}
      
    </div>
  );
};

export default BasicQuizPage;