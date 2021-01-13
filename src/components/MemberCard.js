import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookF,
  Google,
  Twitter,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

export default function MemberCard({
  image,
  member,
  role,
  facebook,
  gmail,
  twitter,
}) {
  return (
    <div className="member-card">
      <div className="member-image">
        <img src={image} alt={member} />
      </div>
      <div className="member-info">
        <p className="member-name">{member}</p>
        <p className="member-role">{role}</p>
        <div className="member-contacts">
          <FontAwesomeIcon icon={FacebookF} />
          <FontAwesomeIcon icon={Google} />
          <FontAwesomeIcon icon={Twitter} />
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>
    </div>
  );
}
