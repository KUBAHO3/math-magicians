import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ home, calculator, quote }) {
  return (
    <nav>
      <h2 className="logo">Math Magicians</h2>
      <ul className="nav-item">
        <li className="nav-item-list"><NavLink to={home} activeClassName="active">Home</NavLink></li>
        <li className="nav-item-list"><NavLink to={calculator} activeClassName="active">Calculator</NavLink></li>
        <li className="nav-item-list"><NavLink to={quote} activeClassName="active">Quote</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
