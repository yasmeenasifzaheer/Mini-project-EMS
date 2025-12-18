/* src/pages/Outsource/OutsourceDashboard.jsx */
import React from "react";
import { Link } from "react-router-dom";

const OutsourceDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Outsource Employee Dashboard</h2>

      <div style={{ marginTop: "20px" }}>
        <Link to="/outsource/attendance">
          <button style={{ marginRight: "10px" }}>Attendance</button>
        </Link>

        <Link to="/outsource/tasks">
          <button style={{ marginRight: "10px" }}>Tasks</button>
        </Link>

        <Link to="/outsource/notification">
          <button style={{ marginRight: "10px" }}>Notifications</button>
        </Link>

        <Link to="/outsource/profile">
          <button>Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default OutsourceDashboard;
