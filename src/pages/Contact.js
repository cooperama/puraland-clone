import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSearch,
  faCrow,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-pura">
        <h5>
          <span>Pura</span> Agency.
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo,
          incidunt earum eaque commodi soluta molestiae quo quaerat deleniti
          repudiandae, nesciunt qui atque adipisci! Rerum provident, facere
          laudantium qui labore possimus vitae quisquam pariatur hic.
        </p>
      </div>
      <div className="contact-us">
        <p className="contact-title">Reach us</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, harum.
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> support@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +001-123-456-7890
        </p>
        <div className="contact-link">
          <FontAwesomeIcon icon={faBook} />
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faCrow} />
        </div>
      </div>
    </div>
  );
}
