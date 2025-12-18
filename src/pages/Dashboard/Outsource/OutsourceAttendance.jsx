/* src/pages/Outsource/OutsourceAttendance.jsx */
import React, { useState } from "react";

const OutsourceAttendance = () => {
  const [attendance, setAttendance] = useState([]);

  const markAttendance = () => {
    const today = new Date().toLocaleDateString();
    setAttendance([...attendance, today]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Attendance</h2>

      <button onClick={markAttendance}>Mark Attendance</button>

      <h3 style={{ marginTop: "20px" }}>Attendance History</h3>
      <ul>
        {attendance.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default OutsourceAttendance;
