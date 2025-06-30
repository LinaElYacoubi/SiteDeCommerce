import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productsData from '../data/product';
import './Products.css';

const categories = [...new Set(productsData.map(p => p.category))];
const colors = [...new Set(productsData.flatMap(p => p.colors || []))];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [search, setSearch] = useState('');

  const filteredProducts = productsData.filter((prod) => {
    const matchCategory = selectedCategory ? prod.category === selectedCategory : true;
    const matchColor = selectedColor ? (prod.colors && prod.colors.includes(selectedColor)) : true;
    const matchSearch = search
      ? prod.name.toLowerCase().includes(search.toLowerCase()) ||
        (prod.descriptionLong && prod.descriptionLong.toLowerCase().includes(search.toLowerCase()))
      : true;
    return matchCategory && matchColor && matchSearch;
  });

  return (
    <main className="products-main">
      <Container>
        <h1 className="products-title text-center mb-4">All Products</h1>
        <Row className="mb-4 g-3 justify-content-center align-items-end">
          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type product name…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Label>Color</Form.Label>
              <Form.Select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">All</option>
                {colors.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col xs={12} sm={6} md={4} key={product.id}>
                <Card className="product-card h-100 text-center">
                  <div className="card-img-container d-flex align-items-center justify-content-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="product-name">{product.name}</Card.Title>
                    <Card.Text className="product-desc">{product.descriptionLong}</Card.Text>
                    <div className="product-price mb-2">{product.price} CAD</div>
                    <Link to={`/products/${product.id}`}>
                      <Button className="product-btn">View & Personalize</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center text-muted py-5">
              <p>No products match your criteria.</p>
            </Col>
          )}
        </Row>
      </Container>
    </main>
  );
}

export default Products;
