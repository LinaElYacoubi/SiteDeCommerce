import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import './ProductDetail.css';
import { useCart } from '../data/CartContext';
import productsData from '../data/product'; 

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const { addToCart, feedbackMessage } = useCart();

  if (!product) {
    return (
      <Container className="pt-5 text-center">
        <h2>Product not found.</h2>
        <Link to="/products" className="btn btn-secondary mt-4">Back to Products</Link>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.priceValue,
    });
  };

  return (
    <main className="product-detail-main">
      <Container>
        <Row className="align-items-center pt-5 pb-4 g-4">
          <Col md={6} className="text-center">
            <div className="product-detail-img-bg">
              <img src={product.image} alt={product.name} className="product-detail-img" />
            </div>
          </Col>
          <Col md={6}>
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-desc">{product.descriptionLong}</p>
            <div className="product-detail-price mb-3">{product.price} CAD</div>
            {feedbackMessage && <Alert variant="success">{feedbackMessage}</Alert>}
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Add your custom text</Form.Label>
                <Form.Control type="text" placeholder="e.g. Best Mom Ever" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload your image (optional)</Form.Label>
                <Form.Control type="file" accept="image/*" />
              </Form.Group>
              <Button variant="warning" className="add-cart-btn px-4" onClick={handleAddToCart}>Add to Cart</Button>
            </Form>
            <Link to="/products" className="btn btn-link mt-4 ms-0">← Back to All Products</Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default ProductDetail;
