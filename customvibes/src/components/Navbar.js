import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      background: '#f7f7f7',
      padding: '1rem 2rem',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#ED64A6' }}>
        CustomVibes
      </div>
      <div>
        <Link to="/" style={{ margin: '0 15px' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 15px' }}>About</Link>
        <Link to="/products" style={{ margin: '0 15px' }}>Products</Link>
        <Link to="/cart" style={{ margin: '0 15px' }}>Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
