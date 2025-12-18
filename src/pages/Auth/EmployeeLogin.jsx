import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./EmployeeLogin.css";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [showReset, setShowReset] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const defaultUsers = [
    { email: "employee@ems.com", password: "employee123", role: "Employee" },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setInfo("");

    try {
      const response = await axios.get(
        "https://693ada1a9b80ba7262cba5a1.mockapi.io/Users"
      );

      const users = response.data;
      const allUsers = [...defaultUsers, ...users];

      const user = allUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        setError("Invalid email or password");
        return;
      }

      login(user);
      navigate("/employee");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again later.");
    }
  };

  /* ================= FORGOT PASSWORD ================= */
  const handleForgotPassword = () => {
    if (!email) {
      setError("Enter email to reset password");
      return;
    }
    setError("");
    setInfo(`Password reset link sent to ${email}`);
  };

  /* ================= RESET PASSWORD ================= */
  const handleResetPassword = () => {
    if (!newPassword) {
      setError("Enter new password");
      return;
    }
    setError("");
    setInfo("Password reset successful. Please login.");
    setShowReset(false);
    setNewPassword("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Employee Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}
        {info && <p className="info">{info}</p>}

        <button type="submit">Login</button>
      </form>

      {/* 🔹 FORGOT / RESET LINKS */}
      <div className="auth-links">
        <button type="button" onClick={handleForgotPassword}>
          Forgot Password?
        </button>

        <button
          type="button"
          onClick={() => setShowReset(!showReset)}
        >
          Reset Password
        </button>
      </div>

      {/* 🔹 RESET PASSWORD BOX */}
      {showReset && (
        <div className="reset-box">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleResetPassword}>
            Update Password
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeLogin;
