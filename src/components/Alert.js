import React from "react";

export default function Alert() {
  return (
    <div className="alert-container">
      <button className="close-alert">close</button>
      <div className="alert-box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          voluptates libero illo incidunt quos autem.
        </p>
        <div>
          <p>Philippe daPont:</p>
          <a href="mailto:p.daponte@outlook.com">p.daponte@outlook.com</a>
        </div>
      </div>
    </div>
  );
}
