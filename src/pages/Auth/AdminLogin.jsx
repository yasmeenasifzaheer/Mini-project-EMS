import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // ✅ DEFAULT ADMIN
  const defaultAdmins = [
    {
      FullName: "System Admin",
      Email: "admin@ems.com",
      Password: "admin123",
      Role: "Admin",
      Department: "Administration",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.get(
        "https://693ada1a9b80ba7262cba5a1.mockapi.io/Users"
      );

      const allUsers = [...defaultAdmins, ...res.data];

      const user = allUsers.find(
        (u) =>
          u.Email === email &&
          u.Password === password &&
          u.Role === "Admin"
      );

      if (!user) {
        setError("Invalid Admin credentials");
        return;
      }

      login({
        fullName: user.FullName,
        email: user.Email,
        role: user.Role,
        department: user.Department,
      });

      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
    
    </div>
  );
};

export default AdminLogin;
