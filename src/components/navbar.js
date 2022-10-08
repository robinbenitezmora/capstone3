import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">
        Current Weather and Forecast
      </Link>
    </div>
  </nav>
);

export default Navbar;
