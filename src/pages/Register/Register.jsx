import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import "./Register.css";

const Register = () => {
  const { user, registerUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [message, setMessage] = useState("");

  // Only admin can access registration
  if (!user || user.role !== "admin") {
    navigate("/login");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");

    const result = registerUser({ name, email, password, role });

    if (!result.success) {
      setMessage(result.message);
      return;
    }

    setMessage("User registered successfully!");
    setName("");
    setEmail("");
    setPassword("");
    setRole("employee");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register User</h2>

        {message && <p className="register-message">{message}</p>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="register-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            className="register-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="employee">Employee</option>
            <option value="hr">HR</option>
            <option value="manager">Manager</option>
            <option value="outsource">Outsource</option>
          </select>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
