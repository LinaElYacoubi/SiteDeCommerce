import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../data/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="cart-main">
      <Container className="pt-5">
        <h1 className="cart-title mb-4">Your Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <div className='cart-table-wrapper'>
            <Table striped bordered hover className="custom-cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
            <h4 className="cart-total">Total: ${totalPrice.toFixed(2)}</h4>
            <Link to="/checkout">
              <Button variant="warning" className="btn cart-btn mt-3 px-4 py-2">Proceed to Checkout</Button>
            </Link>
          </>
        ) : (
          <p className="cart-desc">Your cart is empty.</p>
        )}
      </Container>
    </main>
  );
}

export default Cart;