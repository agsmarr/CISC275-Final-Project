import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const BasicQuizPage = () => {
  return (
    <div>
      <h1>Basic Questions Quiz</h1>
      <p>This is the Basic Quiz Page</p>
      {/* Add your basic quiz content here */}
      <Link to="/">
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default BasicQuizPage;