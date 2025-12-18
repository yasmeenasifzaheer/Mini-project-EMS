import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManagerDashboard.css";

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);

  // ================= PROFILE EMPLOYEES (9 TOTAL NOW)
  const profileEmployees = [
    {
      id: "EMP-101",
      name: "Ananya Sharma",
      role: "Frontend Developer",
      department: "Engineering",
      experience: "4 Years",
      joiningDate: "12-Jan-2020",
      salary: "₹45,000",
      awards: "UI Excellence Award 2023",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: "EMP-102",
      name: "Vikram Singh",
      role: "Backend Developer",
      department: "Engineering",
      experience: "6 Years",
      joiningDate: "18-Aug-2018",
      salary: "₹55,000",
      awards: "Best API Developer 2022",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: "EMP-103",
      name: "Neha Kapoor",
      role: "QA Engineer",
      department: "Quality Assurance",
      experience: "5 Years",
      joiningDate: "05-Mar-2019",
      salary: "₹42,000",
      awards: "Bug Slayer Award",
      status: "Deactive",
      image: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: "EMP-104",
      name: "Arjun Verma",
      role: "UI/UX Designer",
      department: "Design",
      experience: "7 Years",
      joiningDate: "22-Jul-2017",
      salary: "₹48,000",
      awards: "Best UX Design 2021",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: "EMP-105",
      name: "Pooja Nair",
      role: "HR Executive",
      department: "HR",
      experience: "3 Years",
      joiningDate: "10-Oct-2021",
      salary: "₹38,000",
      awards: "Employee of Month",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: "EMP-106",
      name: "Rohit Malhotra",
      role: "Cloud Engineer",
      department: "Engineering",
      experience: "5 Years",
      joiningDate: "15-Feb-2019",
      salary: "₹60,000",
      awards: "Cloud Innovator",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=16",
    },
    {
      id: "EMP-107",
      name: "Sneha Iyer",
      role: "Business Analyst",
      department: "Analytics",
      experience: "4 Years",
      joiningDate: "01-Jan-2020",
      salary: "₹48,000",
      awards: "Best Analyst",
      status: "Deactive",
      image: "https://i.pravatar.cc/150?img=17",
    },
    {
      id: "EMP-108",
      name: "Karan Patel",
      role: "Mobile Developer",
      department: "Engineering",
      experience: "6 Years",
      joiningDate: "22-Jul-2018",
      salary: "₹55,000",
      awards: "App Excellence",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=18",
    },
    {
      id: "EMP-109",
      name: "Meera Joshi",
      role: "Marketing Lead",
      department: "Marketing",
      experience: "5 Years",
      joiningDate: "30-Sep-2019",
      salary: "₹35,000",
      awards: "Best Campaign",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=19",
    },
  ];

  const employees = [
    { id: "EMP-201", name: "Ananya Sharma", project: "Project Alpha", attendance: "Present", performance: "Excellent", salary: "₹45,000" },
    { id: "EMP-202", name: "Vikram Singh", project: "Project Beta", attendance: "Present", performance: "Good", salary: "₹50,000" },
    { id: "EMP-203", name: "Neha Kapoor", project: "Project Gamma", attendance: "Absent", performance: "Average", salary: "₹40,000" },
    { id: "EMP-204", name: "Arjun Verma", project: "Project Alpha", attendance: "Present", performance: "Excellent", salary: "₹42,000" },
    { id: "EMP-205", name: "Pooja Nair", project: "HR Tool", attendance: "Present", performance: "Good", salary: "₹38,000" },
    { id: "EMP-206", name: "Rohit Malhotra", project: "Cloud Migration", attendance: "Present", performance: "Excellent", salary: "₹60,000" },
    { id: "EMP-207", name: "Sneha Iyer", project: "Client Analytics", attendance: "Absent", performance: "Good", salary: "₹48,000" },
    { id: "EMP-208", name: "Karan Patel", project: "Mobile App", attendance: "Present", performance: "Excellent", salary: "₹55,000" },
    { id: "EMP-209", name: "Meera Joshi", project: "Brand Campaign", attendance: "Present", performance: "Good", salary: "₹35,000" },
    { id: "EMP-210", name: "Amit Kulkarni", project: "Data Platform", attendance: "Present", performance: "Excellent", salary: "₹58,000" },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/login-selection");
  };

  return (
    <div className={`manager-layout ${darkMode ? "dark" : ""}`}>
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>Manager Dashboard</h2>
        <ul className="sidebar-menu">
          <li onClick={() => setActiveTab("profile")}>Profile</li>
          <li onClick={() => setActiveTab("projects")}>Project Status</li>
          <li onClick={() => setActiveTab("attendance")}>Team Attendance</li>
          <li onClick={() => setActiveTab("performance")}>Performance</li>
          <li onClick={() => setActiveTab("payroll")}>Payroll</li>
        </ul>
        <button className="logout" onClick={logout}>Logout</button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        <div className="top-bar">
          <h1>Manager Dashboard</h1>
          <button
            className="dark-mode-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* PROFILE */}
        {activeTab === "profile" && (
          <div className="manager-card">
            <h2>Team Profiles</h2>
            <div className="profile-table">
              {profileEmployees.map(emp => (
                <div key={emp.id} className="profile-row">
                  <img src={emp.image} alt={emp.name} />
                  <span>{emp.name}</span>
                  <span>{emp.role}</span>
                  <span>{emp.id}</span>
                  <span>{emp.joiningDate}</span>
                  <span>{emp.salary}</span>
                  <span>{emp.awards}</span>
                  <button className={`status-btn ${emp.status === "Active" ? "active" : "deactive"}`}>
                    {emp.status}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECT STATUS */}
        {activeTab === "projects" && (
          <div className="manager-card">
            <h2>Project Status</h2>
            <table className="ems-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(e => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.project}</td>
                    <td>
                      <span className={`status-badge ${e.attendance === "Present" ? "active" : "deactive"}`}>
                        {e.attendance === "Present" ? "Active" : "Pending"}
                      </span>
                    </td>
                    <td>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${Math.floor(Math.random() * 101)}%` }}></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ATTENDANCE */}
        {activeTab === "attendance" && (
          <div className="manager-card">
            <h2>Team Attendance</h2>
            <table className="ems-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Project</th>
                  <th>Attendance</th>
                  <th>Performance</th>
                  <th>Late Days</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(e => (
                  <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.project}</td>
                    <td>
                      <button className={`status-btn ${e.attendance === "Present" ? "active" : "deactive"}`}>
                        {e.attendance}
                      </button>
                    </td>
                    <td>
                      <span className={`performance-badge ${
                        e.performance === "Excellent" ? "excellent" :
                        e.performance === "Good" ? "good" : "average"
                      }`}>
                        {e.performance}
                      </span>
                    </td>
                    <td>{e.lateDays || Math.floor(Math.random() * 5)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PERFORMANCE */}
        {activeTab === "performance" && (
          <div className="manager-card">
            <h2>Performance Overview</h2>
            <table className="ems-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Trend</th>
                  <th>KPI Score</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(e => {
                  const kpi = Math.floor(Math.random() * 30) + 70;
                  const trend = kpi > 85 ? "up" : kpi > 75 ? "stable" : "down";
                  return (
                    <tr key={e.id}>
                      <td>{e.name}</td>
                      <td>
                        <span className={`performance-badge ${
                          e.performance === "Excellent" ? "excellent" :
                          e.performance === "Good" ? "good" : "average"
                        }`}>
                          {e.performance}
                        </span>
                      </td>
                      <td>
                        <span className={`trend-badge ${trend}`}>
                          {trend === "up" && "⬆ Improving"}
                          {trend === "stable" && "➖ Stable"}
                          {trend === "down" && "⬇ Declining"}
                        </span>
                      </td>
                      <td>
                        <div className="kpi-bar">
                          <div className="kpi-fill" style={{ width: `${kpi}%` }} />
                          <span>{kpi}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* PAYROLL */}
        {activeTab === "payroll" && (
          <div className="manager-card">
            <h2>Payroll Details</h2>
            <table className="ems-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Bonus</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(e => {
                  const bonus = Math.floor(Math.random() * 8000) + 2000;
                  const paid = Math.random() > 0.2;
                  return (
                    <tr key={e.id}>
                      <td>{e.name}</td>
                      <td>{e.salary}</td>
                      <td>
                        <span className="bonus-badge">₹{bonus}</span>
                      </td>
                      <td>
                        <span className={`payment-badge ${paid ? "paid" : "pending"}`}>
                          {paid ? "Paid" : "Pending"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

      </main>
    </div>
  );
};

export default ManagerDashboard;
