import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-button">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/" onClick={toggleDropdown}>Home</Link>
          <Link to="/services" onClick={toggleDropdown}>Services</Link>
          <Link to="/about" onClick={toggleDropdown}>About</Link>
          <Link to="/contact" onClick={toggleDropdown}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;