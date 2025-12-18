import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear auth
    navigate("/login"); // redirect to login
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-logo">EMS</h2>
      </div>
      <div className="navbar-right">
        {user && (
          <>
            <span className="navbar-user">{user.email} ({user.role})</span>
            <button className="navbar-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
