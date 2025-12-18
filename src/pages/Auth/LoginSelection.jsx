import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSelection.css";

const roles = [
  { name: "Admin", route: "/login/admin" },
  { name: "HR", route: "/login/hr" },
  { name: "Manager", route: "/login/manager" },
  { name: "Employee", route: "/login/employee" },
  { name: "Outsource", route: "/login/outsource" }
];

const LoginSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="login-selection-container">
      <h1>EMS Login Selection</h1>
      <div className="role-cards">
        {roles.map((role, i) => (
          <div
            key={i}
            className="role-card"
            onClick={() => navigate(role.route)}
          >
            <h2>{role.name}</h2>
              </div>
        ))}
      </div>
    </div>
  );
};

export default LoginSelection;
