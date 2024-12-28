import React from 'react';
import { Link } from 'react-router-dom'; // if using React Router

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        {/* You could use an <img> tag or just text */}
        <Link to="/">TitanTalent</Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
