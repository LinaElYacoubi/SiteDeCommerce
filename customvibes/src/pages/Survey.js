import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Survey.css';

function Survey() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="survey-main">
      <Container className="pt-5">
        <h1 className="survey-title mb-4">We’d love to get your feedback!</h1>
        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="survey-desc mb-3">
              <Form.Label>How satisfied are you with your experience?</Form.Label>
              <Form.Select required>
                <option value="">Select one</option>
                <option>Very satisfied 😊</option>
                <option>Satisfied 🙂</option>
                <option>Neutral 😐</option>
                <option>Dissatisfied 🙁</option>
                <option>Very dissatisfied 😠</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="survey-desc mb-3">
              <Form.Label>Comments (optional)</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="warning" type="submit" className="btn survey-btn mt-3 px-4 py-2">
              Submit Feedback
            </Button>
          </Form>
        ) : (
          <p className="survey-desc mt-4">Thank you for your feedback! 💛</p>
        )}
      </Container>
    </main>
  );
}

export default Survey;