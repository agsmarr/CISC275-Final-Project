import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const CareerAssessmentPage = () => {
  return (
    <div>
      <h1>Career Assessment</h1>
      <p>This is the Career Assessment Page</p>
      {/* Add your Career Assessment content here */}
      <Link to="/">
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </div>
  );
};

export default CareerAssessmentPage;