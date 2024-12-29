import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2>Our talent is finding yours</h2>
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
