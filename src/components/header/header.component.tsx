import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="headline">
        <Link className="headline-link" to="/">
          product list page
        </Link>
      </h2>
      <span>
        <Link to="/product">product page</Link>
      </span>
    </div>
  );
};

export default Header;
