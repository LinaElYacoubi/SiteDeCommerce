import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: '#f7f7f7',
      padding: '1rem 2rem',
      borderTop: '1px solid #eee',
      textAlign: 'center',
      color: '#888',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%'
    }}>
      &copy; {new Date().getFullYear()} CustomVibes – If you have any questions or other problems, please post them in the comments.
    </footer>
  );
}

export default Footer;
