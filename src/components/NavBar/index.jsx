import React from "react";
import "./navbar.css";
export default function index() {
  return (
    <div className="navbar-content">
      <div className="icon">
        <img src ="Vector.png" alt ="icon"/>
        <h3>IGSTUDIO</h3>
      </div>
      <div className="menu-content">
        <div className="menu-items">
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
      </div>
      <div className="contact-button">
        <p>Contact Now</p>
      </div>
    </div>
  );
}
