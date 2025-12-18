// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* 🔐 Protected Route */
import ProtectedRoute from "./components/ProtectedRoute";

/* 🔑 AUTH PAGES */
import LoginSelection from "./pages/Auth/LoginSelection";
import AdminLogin from "./pages/Auth/AdminLogin";
import HRLogin from "./pages/Auth/HRLogin";
import ManagerLogin from "./pages/Auth/ManagerLogin";
import EmployeeLogin from "./pages/Auth/EmployeeLogin";
import OutsourceLogin from "./pages/Auth/OutsourceLogin";
import Register from "./pages/Auth/Register";

/* 📊 DASHBOARDS */
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import HRDashboard from "./pages/Dashboard/HRDashboard";
import ManagerDashboard from "./pages/Dashboard/ManagerDashboard";
import EmployeeDashboard from "./pages/Dashboard/EmployeeDashboard";
import OutsourceDashboard from "./pages/Dashboard/OutsourceDashboard";

/* 👤 COMMON */
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      {/* 🔁 DEFAULT */}
      <Route path="/" element={<Navigate to="/login-selection" />} />

      {/* 🔐 LOGIN SELECTION */}
      <Route path="/login-selection" element={<LoginSelection />} />

      {/* 🔑 ROLE LOGINS */}
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/login/hr" element={<HRLogin />} />
      <Route path="/login/manager" element={<ManagerLogin />} />
      <Route path="/login/employee" element={<EmployeeLogin />} />
      <Route path="/login/outsource" element={<OutsourceLogin />} />

      {/* 📝 REGISTER (ADMIN ONLY) */}
      <Route
        path="/register"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <Register />
          </ProtectedRoute>
        }
      />

      {/* 🧑‍💼 ADMIN DASHBOARD */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* 🧑‍⚖️ HR DASHBOARD */}
      <Route
        path="/hr"
        element={
          <ProtectedRoute allowedRoles={["HR"]}>
            <HRDashboard />
          </ProtectedRoute>
        }
      />

      {/* 👨‍💼 MANAGER DASHBOARD */}
      <Route
        path="/manager"
        element={
          <ProtectedRoute allowedRoles={["Manager"]}>
            <ManagerDashboard />
          </ProtectedRoute>
        }
      />

      {/* 👨‍💻 EMPLOYEE DASHBOARD */}
      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRoles={["Employee"]}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      {/* 🏗️ OUTSOURCE DASHBOARD */}
      <Route
        path="/outsource"
        element={
          <ProtectedRoute allowedRoles={["Outsource"]}>
            <OutsourceDashboard />
          </ProtectedRoute>
        }
      />

      {/* ❌ FALLBACK */}
      <Route path="*" element={<Navigate to="/login-selection" />} />
    </Routes>
  );
};

export default App;
