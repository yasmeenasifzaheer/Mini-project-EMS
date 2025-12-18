/* src/pages/Outsource/OutsourceProfile.jsx */
import React from "react";

const OutsourceProfile = () => {
  const mockUser = {
    name: "Outsource Employee",
    email: "employee@outsource.com",
    role: "Outsource",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>

      <p><strong>Name:</strong> {mockUser.name}</p>
      <p><strong>Email:</strong> {mockUser.email}</p>
      <p><strong>Role:</strong> {mockUser.role}</p>
    </div>
  );
};

export default OutsourceProfile;
