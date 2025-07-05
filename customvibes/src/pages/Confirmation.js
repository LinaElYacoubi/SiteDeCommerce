import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Confirmation.css';

function Confirmation() {
  return (
    <main className="confirmation-main">
      <Container className="pt-5 text-center">
        <h1 className="confirmation-title mb-4">Thank You for Your Order!</h1>
        <p className="confirmation-desc">Your order has been successfully placed. We will notify you once it’s shipped.</p>
        <Link to="/survey">
          <Button variant="warning" className="btn confirmation-btn mt-3 px-4 py-2">Tell us how we did</Button>
        </Link>
      </Container>
    </main>
  );
}

export default Confirmation;