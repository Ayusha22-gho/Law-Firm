import React from "react";
import './hero.css';

export default function index() {
  return (
    <div className="hero-section">
      <div className="hero-intro">
        <p>Let’s Introduce Ourself</p>
      </div>
      <div className="divider"></div>
      <div className="hero-info">
        <p className="hero-info-heading">Criminal Lawyer</p>
        <p className="hero-info-para">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}
