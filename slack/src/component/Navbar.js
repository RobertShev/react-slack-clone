import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/components/_navbar.scss';

function Navbar() {
  return (
    <nav>
      <h2>random name</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/enterprise">Enterprise</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
