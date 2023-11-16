import React from "react";
import NavBar from "../NavBar";
import "./home.css"
export default function index() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-content">
        <div className="home-info">
          <div className="home-heading">
            <p className="first-line">You don’t have to</p>
            <p className="second-line">Fight them Alone.</p>
          </div>
          <div className="home-para">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
          </div>
          <div className="home-email">
                <input type = "email" placeholder="Enter your email address"/>
                <button>Let's Talk</button>
          </div>
        </div>
        <div className="home-img">
            <img src = "image.png" alt ="profile" />
        </div>
      </div>
    </div>
  );
}
