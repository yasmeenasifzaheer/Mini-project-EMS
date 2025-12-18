// src/pages/Dashboard.jsx
import React from "react";
import LogoutButton from "../components/LogoutButton";

const roleInfo = {
  Admin: {
    title: "Admin Panel",
    description: "Manage users, view reports, etc."
  },
  HR: {
    title: "HR Dashboard",
    description: "Manage employees, leaves, and HR operations."
  },
  Manager: {
    title: "Manager Dashboard",
    description: "View team performance, approve requests, and manage projects."
  },
  Employee: {
    title: "Employee Dashboard",
    description: "View tasks, submit reports, and track attendance."
  },
  Outsource: {
    title: "Outsource Dashboard",
    description: "View assigned tasks, update status, and track project progress."
  }
};

const Dashboard = ({ user }) => {
  if (!user) return <p>Loading...</p>;

  const info = roleInfo[user.role];

  return (
    <div>
      <h1>Welcome, {user.fullName} ({user.role})</h1>
      <p>Email: {user.email}</p>
      <LogoutButton userId={user.id} />

      <div style={{ marginTop: "20px" }}>
        <h2>{info.title}</h2>
        <p>{info.description}</p>
      </div>
    </div>
  );
};

export default Dashboard;
