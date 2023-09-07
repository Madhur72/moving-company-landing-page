import React from 'react';
import '../App.css'; 
import logo from "../assets/Logo.svg"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
          <h1>MovEx</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Email: madhurdubey72@gmail.com</p>
          <p>Phone: +91 8770-563-453</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MovEx. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
