// src/pages/Employee/Awards.jsx
import React from "react";
import "./Awards.css";

const Awards = () => {
  // Dummy data
  const awardsData = [
    "Best Performer - September",
    "Employee of the Month - October",
    "Outstanding Attendance - November"
  ];

  return (
    <div className="employee-page">
      <h2>Awards</h2>
      <div className="card">
        <ul>
          {awardsData.map((award, i) => (
            <li key={i}>{award}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Awards;
