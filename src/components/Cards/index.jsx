import React from "react";
import "./card.css";

export default function index() {
  return (
    <div className="card-div">
    <p className="card-heading">Why Choose us?</p>
    <div className="card-layout">

   
    <div className="card-container">
      <div className="card-icon">
        <img src="cardIcon.png" alt="card-icon" />
      </div>
      <div className="card-success">
        <p>98% Success Rate</p>
      </div>
      <div className="card-content">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </p>
      </div>
        <button className="card-button">Read More</button>
    </div>

    <div className="card-container-second">
      <div className="card-icon">
        <img src="cardIcon.png" alt="card-icon" />
      </div>
      <div className="card-success">
        <p>100% Success Rate</p>
      </div>
      <div className="card-content">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </p>
      </div>
        <button className="card-button">Read More</button>
    </div>

    <div className="card-container">
      <div className="card-icon">
        <img src="cardIcon.png" alt="card-icon" />
      </div>
      <div className="card-success">
        <p>100% Success Rate</p>
      </div>
      <div className="card-content">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </p>
      </div>
        <button className="card-button">Read More</button>
    </div>

    </div>
    </div>
  );
}
