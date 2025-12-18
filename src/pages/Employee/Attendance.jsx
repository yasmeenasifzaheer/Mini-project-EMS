// src/pages/Employee/Attendance.jsx
import React from "react";
import "./Attendance.css";

const Attendance = () => {
  // Dummy data
  const attendanceData = [
    { date: "01-12-2025", status: "Present" },
    { date: "02-12-2025", status: "Present" },
    { date: "03-12-2025", status: "Absent" },
    { date: "04-12-2025", status: "Present" },
  ];

  return (
    <div className="employee-page">
      <h2>My Attendance</h2>
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((a, i) => (
              <tr key={i}>
                <td>{a.date}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
