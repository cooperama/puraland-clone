import React from "react";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div id="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>We are Puraland</h1>
          <h3>
            Popular web development agency. Discover more possibilities of your
            website.
          </h3>
        </div>
        <Button text="Discover us." />
      </div>
    </div>
  );
}
