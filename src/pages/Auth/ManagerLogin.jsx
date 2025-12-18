import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./ManagerLogin.css";

const ManagerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  const [showReset, setShowReset] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const defaultUsers = [
    { email: "manager@ems.com", password: "manager123", role: "Manager" },
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
      navigate("/manager");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again later.");
    }
  };

  /* =======================
     FORGOT PASSWORD
  ======================= */
  const handleForgotPassword = () => {
    if (!email) {
      setError("Please enter your email first");
      return;
    }
    setError("");
    setInfo(`Password reset link sent to ${email} `);
  };

  /* =======================
     RESET PASSWORD
  ======================= */
  const handleResetPassword = () => {
    if (!newPassword) {
      setError("Please enter a new password");
      return;
    }

    setError("");
    setInfo("Password reset successful. Please login.");
    setShowReset(false);
    setPassword("");
    setNewPassword("");
  };

  return (
    <div className="login-container">
      <h2>Manager Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
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

      {/* 🔹 FORGOT / RESET PASSWORD */}
      <div className="auth-links">
        <button
          type="button"
          className="link-btn"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </button>

        <button
          type="button"
          className="link-btn"
          onClick={() => setShowReset(!showReset)}
        >
          Reset Password
        </button>
      </div>

      {/* 🔹 RESET PASSWORD FORM */}
      {showReset && (
        <div className="reset-box">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleResetPassword}>Update Password</button>
        </div>
      )}
    </div>
  );
};

export default ManagerLogin;
