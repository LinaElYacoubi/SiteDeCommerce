import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <main className="checkout-main">
      <Container className="pt-5">
        <h1 className="checkout-title mb-4">Checkout</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="checkout-desc mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" required />
          </Form.Group>

          <Form.Group className="checkout-desc mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="checkout-desc mb-3">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control type="text" placeholder="123 Main St" required />
          </Form.Group>

          <Form.Group className="checkout-desc mb-3">
            <Form.Label>Payment Info (dummy)</Form.Label>
            <Form.Control type="text" placeholder="Card Number" required />
          </Form.Group>

          <Button variant="warning" type="submit" className="btn checkout-btn mt-3 px-4 py-2">
            Confirm Order
          </Button>
        </Form>
      </Container>
    </main>
  );
}

export default Checkout;