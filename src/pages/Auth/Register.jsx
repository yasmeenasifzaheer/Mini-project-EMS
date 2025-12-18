import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const editData = location.state || {};

  const [fullName, setFullName] = useState(editData.name || "");
  const [email, setEmail] = useState(editData.email || "");
  const [password, setPassword] = useState(editData.password || "");
  const [role, setRole] = useState(editData.role || "Employee");
  const [department, setDepartment] = useState(editData.department || "");
  const [joinDate, setJoinDate] = useState(editData.joined || "");
  const [salary, setSalary] = useState(editData.salary || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (editData.id) {
      // Editing existing user
      const index = registeredUsers.findIndex((u) => u.id === editData.id);
      if (index !== -1) {
        registeredUsers[index] = {
          ...registeredUsers[index],
          name: fullName,
          email,
          password,
          role,
          department,
          joined: joinDate,
          salary,
        };
      }
      alert("User updated successfully!");
    } else {
      // New user
      const newUser = {
        id: Date.now(),
        name: fullName,
        email,
        password,
        role,
        department,
        joined: joinDate,
        salary,
      };
      registeredUsers.push(newUser);
      alert("New user registered successfully!");
    }

    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    navigate("/admin");
  };

  const handleClose = () => {
    navigate("/admin");
  };

  return (
    <div className="register-container">
      <h2>{editData.id ? "Edit User" : "Register User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={!editData.id}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
          <option value="Outsource">Outsource</option>
        </select>
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="date"
          placeholder="Join Date"
          value={joinDate}
          onChange={(e) => setJoinDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <div style={{ marginTop: "10px" }}>
          <button type="submit">{editData.id ? "Update" : "Register"}</button>
          <button type="button" onClick={handleClose} style={{ marginLeft: "10px" }}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

