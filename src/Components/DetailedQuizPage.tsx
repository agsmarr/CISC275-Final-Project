import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button } from 'react-bootstrap';
const DetailedQuizPage = () => {
  return (
    <div>
      <h1>Detailed Questions Quiz</h1>
      <p>This is the Detailed Quiz Page</p>
      {/* Add your detailed quiz content here */}
      <Link to="/">
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default DetailedQuizPage;