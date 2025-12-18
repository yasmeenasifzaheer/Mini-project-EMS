// src/components/Topbar.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div style={styles.topbar}>
      <div style={{ fontWeight: 700 }}>EMS System</div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {user ? (
          <>
            <small style={{ color: "#fff88" }}>{user.role}</small>
            <div style={{ color: "#fff" }}>{user.name}</div>
            <button onClick={handleLogout} style={styles.btn}>Logout</button>
          </>
        ) : (
          <Link to="/" style={styles.btn}>Login</Link>
        )}
      </div>
    </div>
  );
};

const styles = {
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "linear-gradient(90deg,#1e3c72,#2a5298)",
    color: "#fff",
  },
  btn: {
    background: "#fff",
    color: "#1e3c72",
    padding: "6px 10px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    textDecoration: "none"
  }
};

export default Topbar;
