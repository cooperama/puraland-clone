import React from "react";
import Button from "../components/Button";
import AboutCard from "../components/AboutCard";

export default function About() {
  const about1 =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quas eligendi nemo molestias culpa.";
  const about2 =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quas eligendi nemo molestias culpa.";
  const about3 =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quas eligendi nemo molestias culpa.";

  return (
    <div className="about-container">
      <div className="about-us">
        <h4>About us.</h4>
        <p>
          Pura comes with 11 unique and stunning demos. We have crafted each and
          every demo with extensive care and precision and the theme is power
          packed yet easy to use.
        </p>
        <Button text="Portfolio." />
      </div>
      <div className="about-cards-container">
        <AboutCard number="01" title="Design" text={about1} />
        <AboutCard number="02" title="New Ideas" text={about2} />
        <AboutCard number="03" title="Trending" text={about3} />
      </div>
    </div>
  );
}
