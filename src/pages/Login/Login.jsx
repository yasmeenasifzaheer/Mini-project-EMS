import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Make sure this import exists

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get(
        "https://693ada1a9b80ba7262cba5a1.mockapi.io/Users"
      );
      const users = response.data;

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        setError("Invalid email or password");
        return;
      }

      await axios.put(
        `https://693ada1a9b80ba7262cba5a1.mockapi.io/Users/${user.id}`,
        { isLoggedIn: true, lastLogin: new Date().toISOString() }
      );

      switch (user.role) {
        case "Admin":
          navigate("/admin");
          break;
        case "HR":
          navigate("/hr-dashboard");
          break;
        case "Manager":
          navigate("/manager");
          break;
        case "Employee":
          navigate("/employee");
          break;
        case "Outsource":
          navigate("/outsource");
          break;
        default:
          setError("Invalid role");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
