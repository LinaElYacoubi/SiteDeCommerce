import { Container } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer mt-auto py-4">
      <Container className="text-center">
        <div className="footer-links">
          <a href="mailto:support@customvibes.com">Contact</a> | 
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} CustomVibes. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
