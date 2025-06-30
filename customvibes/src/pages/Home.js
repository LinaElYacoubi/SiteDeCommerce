import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css';

// Images à placer dans src/assets/
import heroImg from '../assets/home.png';
import mug from '../assets/mug.png';
import tote from '../assets/tote.png';
import tshirt from '../assets/tshirt.png';

const popularProducts = [
  {
    name: 'Custom Mug',
    image: mug,
    description: 'Add your own text or image to our best-selling mug!',
    link: '/products/1'
  },
  {
    name: 'Personalized Tote',
    image: tote,
    description: 'Design your unique eco-friendly tote bag.',
    link: '/products/2'
  },
  {
    name: 'Custom T-shirt',
    image: tshirt,
    description: 'Create a t-shirt with your favourite phrase or photo.',
    link: '/products/3'
  }
];

function Home() {
  return (
    <main className="home-main">
      {/* HERO SECTION */}
     
     <section className="hero-section">
  <div className="hero-row">
    <div className="col-md-6 col-12 text-center text-md-start">
      <h1 className="hero-title">We Print <br/> Your Ideas.</h1>
      <p className="hero-subtitle">Make it yours with CustomVibes – mugs, totes, t-shirts & more.</p>
      <a href="/products" className="btn hero-btn mt-3 px-4 py-2">Shop Now</a>
    </div>
    <div className="col-md-6 col-12 d-flex justify-content-center">
      <div className="hero-img-bg">
        <img
          src={require('../assets/home.png')}
          alt="Custom products"
          className="img-fluid hero-img"
        />
      </div>
    </div>
  </div>
</section>


      {/* POPULAR PRODUCTS */}
      <section className="popular-products">
        <h2 className="popular-title mb-4">Most Popular Products</h2>
        <Container>
          <Row className="g-4">
            {popularProducts.map((prod, idx) => (
              <Col xs={12} sm={6} md={4} key={idx}>
                <Card className="h-100 border-0 shadow-sm popular-product-card position-relative">
                  {/* Badge exemple */}
                  {idx === 0 && (
                    <span className="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle-x best-badge">Best Seller</span>
                  )}
                  <div className="d-flex align-items-center justify-content-center card-img-container">
                    <Card.Img
                      variant="top"
                      src={prod.image}
                      alt={prod.name}
                      className="product-img"
                    />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="product-name">{prod.name}</Card.Title>
                    <Card.Text className="product-desc">{prod.description}</Card.Text>
                    <Button
                      as={Link}
                      to={prod.link}
                      variant="outline-warning"
                      className="mt-auto w-100 product-btn"
                    >
                      See More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Home;
