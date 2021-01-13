import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServicesCard({ icon, title, text }) {
  return (
    <div className="services-card">
      <FontAwesomeIcon icon={icon} />
      <p className="services-card-title">{title}</p>
      <p>{text}</p>
    </div>
  );
}
