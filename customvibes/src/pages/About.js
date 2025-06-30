import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';
import aboutImg from '../assets/Aboutus.png'; 

function About() {
  return (
    <main className="about-main">
      <section className="about-hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h1 className="about-title">About CustomVibes</h1>
              <p className="about-desc">
                CustomVibes is your go-to destination for high-quality personalized mugs, totes, and t-shirts.<br />
                We believe everyone deserves to express their creativity — that’s why we make it easy to turn your ideas into unique products that bring joy every day.
              </p>
              <ul className="about-list">
                <li>✨ 100% customizable products</li>
                <li>🧡 Made with love in Canada</li>
                <li>🚚 Fast, reliable delivery</li>
              </ul>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={aboutImg}
                alt="CustomVibes team or product"
                className="img-fluid about-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

     

    </main>
  );
}

export default About;
