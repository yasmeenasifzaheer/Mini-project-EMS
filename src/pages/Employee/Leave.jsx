// src/pages/Employee/Leave.jsx
import React, { useState } from "react";
import "./Leave.css";

const Leave = () => {
  const [reason, setReason] = useState("");

  const submitLeaveRequest = () => {
    if (!reason) {
      alert("Please enter a reason for leave.");
      return;
    }
    alert("Leave request sent to HR");
    setReason("");
  };

  return (
    <div className="employee-page">
      <h2>Leave Request</h2>
      <div className="card">
        <textarea
          placeholder="Reason for leave"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button onClick={submitLeaveRequest}>Apply Leave</button>
      </div>
    </div>
  );
};

export default Leave;
