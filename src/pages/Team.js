import React from "react";
import MemberCard from "../components/MemberCard";
import Button from "../components/Button";

export default function Team() {
  return (
    <div id="team-container">
      <h4>Our team.</h4>
      <div className="member-cards-container">
        <MemberCard
          image="https://unsplash.it/200/400"
          member="Mark John"
          role="Developer"
          facebook="www.facebook.com"
          google="www.google.com"
          twitter="www.twitter.com"
        />
        <MemberCard
          image="https://unsplash.it/200/400"
          member="Sarah Levo"
          role="Designer"
          facebook="www.facebook.com"
          google="www.google.com"
          twitter="www.twitter.com"
        />
        <MemberCard
          image="https://unsplash.it/200/400"
          member="Xavi Miko"
          role="CEO"
          facebook="www.facebook.com"
          google="www.google.com"
          twitter="www.twitter.com"
        />
      </div>
      <div className="solutions">
        <div className="solutions-image">
          <img src="https://unsplash.it/400" alt="solutions" />
        </div>
        <div className="solutions-info">
          <p className="solutions-title">
            Innovative solutions to booset your creative <span>projects.</span>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            dicta, eius, unde, incidunt consectetur omnis dolores voluptates
            suscipit natus saepe dolore possimus animi distinctio iusto
            consequatur eum placeat! Vitae consequatur pariatur inventore saepe?
          </p>
          <Button text="Button Text" />
        </div>
      </div>
    </div>
  );
}
