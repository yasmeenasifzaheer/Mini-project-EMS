// src/pages/Employee/Profile.jsx
import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [employee, setEmployee] = useState(null);
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setEmployee(loggedUser);
  }, []);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
    alert("Resume uploaded successfully (dummy)");
  };

  if (!employee) return null;

  return (
    <div className="employee-page">
      <h2>My Profile</h2>
      <div className="card">
        <p><b>Name:</b> {employee.fullName}</p>
        <p><b>Email:</b> {employee.email}</p>
        <p><b>Role:</b> {employee.role}</p>
        <p><b>Department:</b> {employee.department}</p>
        <div className="resume-upload">
          <label>Upload Resume:</label>
          <input type="file" onChange={handleResumeUpload} />
          {resume && <p>Uploaded: {resume.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
