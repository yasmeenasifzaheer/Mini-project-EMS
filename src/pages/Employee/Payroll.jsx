// src/pages/Employee/Payroll.jsx
import React from "react";
import "./Payroll.css";

const Payroll = () => {
  // Dummy data
  const payrollData = [
    { month: "September", salary: "₹30,000", status: "Paid" },
    { month: "October", salary: "₹30,000", status: "Paid" },
    { month: "November", salary: "₹30,000", status: "Pending" },
    { month: "December", salary: "₹30,000", status: "Pending" },
  ];

  return (
    <div className="employee-page">
      <h2>Payroll</h2>
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Salary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((p, i) => (
              <tr key={i}>
                <td>{p.month}</td>
                <td>{p.salary}</td>
                <td>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payroll;
