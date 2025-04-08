import React from 'react';
import { Button } from 'react-bootstrap';
const DetailedQuizPage = () => {
  const goBackHome = () => {
    window.location.hash = '/';
  };
  return (
    <div>
      <h1>Detailed Questions Quiz</h1>
      <p>This is the Detailed Quiz Page</p>
      {/* Add your detailed quiz content here */}
      <Button variant="secondary" onClick={goBackHome}>
        Back to Home
      </Button>
    </div>
  );
};

export default DetailedQuizPage;