import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">
        <strong>
          <em>Show</em>
        </strong>
        <span>
          <em>Bizz</em>
        </span>
      </Link>
    </div>
    <ul className="nav-links">
      <li className="links">
        <Link to="/">latest show</Link>
      </li>
      <li className="links">
        <Link to="/">top rated</Link>
      </li>
      <li className="links">
        <Link to="/">favorite</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
