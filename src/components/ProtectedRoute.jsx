import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useContext(AuthContext);

  // ✅ fallback if page refresh happens
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const currentUser = user || storedUser;

  if (!currentUser) {
    return <Navigate to="/login-selection" replace />;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/login-selection" replace />;
  }

  return children;
};

export default ProtectedRoute;
