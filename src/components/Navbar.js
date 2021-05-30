/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="main_nav">
    <div>
      <h1>Math Magician</h1>
    </div>
    <nav>
      <ul className="nav_list">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/qoutes">
            Qoutes
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
