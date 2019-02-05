import './header.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="indigo">
      <div className="container">
        <h1><Link to="/">To Do list 2019</Link></h1>
      </div>
    </header>
  )
}

export default Header;