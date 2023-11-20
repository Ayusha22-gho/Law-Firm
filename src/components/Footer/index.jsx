import React from "react";
import "./footer.css";

export default function index() {
  return (
    <div className="footer-container">
      <div className="footer-bar">
        <div className="footer-icon">
          <img src="Vector.png" alt="icon" />
          <h3>IGSTUDIO</h3>
        </div>
        <div className="footer-menu">
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <div className="footer-share">
        <img src="insta.png" alt="icon" />
        <img src="facebook.png" alt="icon" />
        <img src="twitter.png" alt="icon" />
        <img src="pinterest.png" alt="icon" />
        </div>
      </div>
      <div className="footer-certificate">
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
}
