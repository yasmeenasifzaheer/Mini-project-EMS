/* src/pages/Outsource/OutsourceNotification.jsx */
import React from "react";

const OutsourceNotification = () => {
  const notifications = [
    "Your task has been updated.",
    "HR sent a new announcement.",
    "Attendance marked successfully.",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notifications</h2>

      <ul>
        {notifications.map((note, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            {note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutsourceNotification;
