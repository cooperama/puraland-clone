import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSearch, faCrow } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faBook} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faCrow} />
        </div>
      </div>
    </div>
  );
}
