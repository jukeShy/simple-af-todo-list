import './footer.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer indigo">
      <div className="container">
        <span>&copy; 2019 bla bla bla</span>
        <Link to="/about">About</Link>
      </div>
    </footer>
  )
}

export default Footer;