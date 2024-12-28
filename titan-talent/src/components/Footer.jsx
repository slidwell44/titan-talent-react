import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Titan Talent Acquisition</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/">LinkedIn</a>
        <a href="https://www.twitter.com/">Twitter</a>
        <a href="https://www.facebook.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
