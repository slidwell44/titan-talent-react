import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <div className="logo">
          <img src="cropped-titan-logo-yellow-1.png" alt="Titan Talent Logo" className="logo-image" />
          <Link to="/">Titan Talent Acquisition</Link>
        </div>
        <div className="tagline">
          Bespoke Employment Solutions Tailored To Your Business
        </div>
      </div>
      <nav className="nav-menu">
        <Dropdown />
      </nav>
    </header>
  );
};

export default Header;