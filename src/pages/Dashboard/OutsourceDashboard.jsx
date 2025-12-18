// src/pages/Dashboard/OutsourceDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OutsourceDashboard.css";

const OutsourceDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);

  const [showLeavePopup, setShowLeavePopup] = useState(false);
  const [showResumePopup, setShowResumePopup] = useState(false);

  const [leaveForm, setLeaveForm] = useState({
    type: "",
    from: "",
    to: "",
    reason: "",
  });

  const completedTasks = [
    "UI Module Completion",
    "API Bug Fixing",
    "Dashboard Testing",
    "Client Feedback Update",
    "Documentation",
  ];

  const ongoingTasks = ["Performance Optimization", "Deployment Support"];

  const notifications = [
    "Submit project report by 15th Dec",
    "Attend client meeting on 18th Dec",
    "Invoice submission by 20th Dec",
    "Timesheet approval pending",
    "Security policy update",
  ];

  const leaveHistory = [
    { date: "2025-08-05", type: "Casual Leave", status: "Approved", days: 2 },
    { date: "2025-07-20", type: "Sick Leave", status: "Approved", days: 1 },
    { date: "2025-06-11", type: "Paid Leave", status: "Rejected", days: 3 },
    { date: "2025-05-02", type: "Casual Leave", status: "Pending", days: 2 },
  ];

 
const calculateStatus = (checkIn, checkOut) => {
  const checkInTime = new Date(`1970-01-01T${checkIn}`);
  const checkOutTime = new Date(`1970-01-01T${checkOut}`);
  const hours = (checkOutTime - checkInTime) / 3600000;
  if (hours >= 9) return { status: "Present", hours: hours.toFixed(2) };
  if (hours >= 8) return { status: "Late", hours: hours.toFixed(2) };
  return { status: "Absent", hours: hours.toFixed(2) };
};


const [attendanceData, setAttendanceData] = useState(
  [
    { date: "2025-09-01", checkIn: "09:00", checkOut: "18:30" }, // Present
    { date: "2025-09-02", checkIn: "10:00", checkOut: "18:00" }, // Late
    { date: "2025-09-03", checkIn: "11:00", checkOut: "17:30" }, // Absent
    { date: "2025-09-04", checkIn: "09:15", checkOut: "18:45" }, // Present
    { date: "2025-09-05", checkIn: "09:30", checkOut: "17:00" }, // Late
    { date: "2025-09-06", checkIn: "10:30", checkOut: "17:30" }, // Absent
    { date: "2025-09-07", checkIn: "09:00", checkOut: "18:30" }, // Present
    { date: "2025-09-08", checkIn: "09:45", checkOut: "18:00" }, // Late
    { date: "2025-09-09", checkIn: "11:00", checkOut: "18:00" }, // Absent
    { date: "2025-09-10", checkIn: "09:00", checkOut: "18:00" }, // Present
  ].map(a => {
    const { status, hours } = calculateStatus(a.checkIn, a.checkOut);
    return { ...a, status, hours };
  })
);


  // ---------------- RUNNING CLOCK ----------------
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // ---------------- USER LOGIN ----------------
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      navigate("/login-selection");
      return;
    }

    setUser({
      fullName: loggedUser.fullName || "Outsource Employee",
      email: loggedUser.email || "outsource@example.com",
      role: "Outsource",
      department: "External Services",
    });
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/login-selection");
  };

  if (!user) return null;

  return (
    <div className={`outsource-dashboard ${darkMode ? "dark" : ""}`}>
      <div className="dashboard-layout">
        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar">
          <h2>{user.fullName}</h2>
          <ul>
            <li className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>Profile</li>
            <li className={activeTab === "attendance" ? "active" : ""} onClick={() => setActiveTab("attendance")}>Attendance</li>
            <li className={activeTab === "tasks" ? "active" : ""} onClick={() => setActiveTab("tasks")}>Tasks</li>
            <li className={activeTab === "notifications" ? "active" : ""} onClick={() => setActiveTab("notifications")}>Notifications</li>
            <li className={activeTab === "leave" ? "active" : ""} onClick={() => setActiveTab("leave")}>Leave</li>
            <li className={activeTab === "resume" ? "active" : ""} onClick={() => setActiveTab("resume")}>Resume</li>
            <li className="logout-btn" onClick={logout}>Logout</li>
          </ul>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="content">
          <div className="top-bar">
            <h1>Outsource Dashboard</h1>
            <button className="glass-btn" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          {/* ================= PROFILE ================= */}
          {activeTab === "profile" && (
            <div className="out-card">
              <h2 className="section-title">My Profile</h2>

              <div className="profile-wrapper">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="profile"
                  className="profile-avatar"
                />

                <div className="profile-details-vertical">
                  <div><strong>Name:</strong> {user.fullName}</div>
                  <div><strong>Role:</strong> {user.role}</div>
                  <div><strong>Employee ID:</strong> EMP-2094</div>
                  <div><strong>Joined:</strong> 15-Feb-2021</div>
                  <div><strong>Location:</strong> Bangalore</div>
                  <button className="status-btn active">Active</button>
                </div>
              </div>
            </div>
          )}

          {/* ================= ATTENDANCE ================= */}
        {activeTab === "attendance" && (
  <div className="out-card">
    <h2 className="section-title">Attendance</h2>
    <div className="clock">🕒 {currentTime.toLocaleTimeString()}</div>

    <button className="glass-btn add-attendance-btn" onClick={() => {
      const today = new Date();
      const newDate = today.toISOString().split("T")[0];
      const defaultCheckIn = "09:30";
      const defaultCheckOut = "18:30";
      const { status, hours } = calculateStatus(defaultCheckIn, defaultCheckOut);
      const newAttendance = {
        date: newDate,
        checkIn: defaultCheckIn,
        checkOut: defaultCheckOut,
        status,
        hours
      };
      setAttendanceData([newAttendance, ...attendanceData]);
    }}>Add Attendance</button>

    <table className="ems-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Status</th>
          <th>Check-In</th>
          <th>Check-Out</th>
          <th>Hours</th>
        </tr>
      </thead>
      <tbody>
        {attendanceData.map((a, i) => (
          <tr key={i}>
            <td>{a.date}</td>
            <td>
              <button className={`status-btn ${a.status.toLowerCase()}`}>
                {a.status}
              </button>
            </td>
            <td>
              <input
                type="time"
                value={a.checkIn}
                onChange={(e) => {
                  const newData = [...attendanceData];
                  newData[i].checkIn = e.target.value;
                  const { status, hours } = calculateStatus(newData[i].checkIn, newData[i].checkOut);
                  newData[i].status = status;
                  newData[i].hours = hours;
                  setAttendanceData(newData);
                }}
              />
            </td>
            <td>
              <input
                type="time"
                value={a.checkOut}
                onChange={(e) => {
                  const newData = [...attendanceData];
                  newData[i].checkOut = e.target.value;
                  const { status, hours } = calculateStatus(newData[i].checkIn, newData[i].checkOut);
                  newData[i].status = status;
                  newData[i].hours = hours;
                  setAttendanceData(newData);
                }}
              />
            </td>
            <td>{a.hours}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}


          {/* ================= TASKS ================= */}
          {activeTab === "tasks" && (
            <div className="out-card">
              <h2 className="section-title">Tasks</h2>
              <div className="task-grid">
                <div className="task-box completed">
                  <h3>Completed Tasks</h3>
                  {completedTasks.map((task, i) => (
                    <div key={i} className="task-item">✔ {task}</div>
                  ))}
                </div>
                <div className="task-box ongoing">
                  <h3>Ongoing Tasks</h3>
                  {ongoingTasks.map((task, i) => (
                    <div key={i} className="task-item">⏳ {task}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= NOTIFICATIONS ================= */}
          {activeTab === "notifications" && (
            <div className="out-card">
              <h2 className="section-title">Notifications</h2>
              {notifications.map((n, i) => (
                <div key={i} className="item-row">🔔 {n}</div>
              ))}
            </div>
          )}

          {/* ================= LEAVE ================= */}
          {activeTab === "leave" && (
            <div className="out-card">
              <div className="leave-cards">
                <div className="leave-card sick">Sick<br /><b>4</b></div>
                <div className="leave-card casual">Casual<br /><b>6</b></div>
                <div className="leave-card medical">Medical<br /><b>3</b></div>
                <div className="leave-card paid">Paid<br /><b>8</b></div>
              </div>
              <button className="glass-btn" onClick={() => setShowLeavePopup(true)}>Apply Leave</button>
              <table className="ems-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Days</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveHistory.map((l, i) => (
                    <tr key={i}>
                      <td>{l.date}</td>
                      <td>{l.type}</td>
                      <td><span className="days-badge">{l.days} Days</span></td>
                      <td><span className={`status-badge ${l.status.toLowerCase()}`}>{l.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* ================= RESUME ================= */}
          {activeTab === "resume" && (
  <div className="out-card">
    <h2 className="section-title">Upload Documents</h2>
    <div className="doc-grid">
      <div>
        <label>Resume</label>
        <input type="file" name="resume" onChange={(e) => setResumeFiles({ ...resumeFiles, resume: e.target.files[0] })} />
      </div>
      <div>
        <label>Educational Certificate</label>
        <input type="file" name="edu" onChange={(e) => setResumeFiles({ ...resumeFiles, edu: e.target.files[0] })} />
      </div>
      <div>
        <label>Experience Certificate</label>
        <input type="file" name="exp" onChange={(e) => setResumeFiles({ ...resumeFiles, exp: e.target.files[0] })} />
      </div>
      <div>
        <label>ID Proof</label>
        <input type="file" name="id" onChange={(e) => setResumeFiles({ ...resumeFiles, id: e.target.files[0] })} />
      </div>
    </div>
    <button className="glass-btn" onClick={() => {
      setShowResumePopup(true);
    }}>Submit Documents</button>
  </div>
)}
 </main>
      </div>

      {/* ================= POPUPS ================= */}
      {showLeavePopup && (
        <div className="popup">
          <div className="popup-box">
            <div className="popup-header">
              <h3>Apply Leave</h3>
              <button className="close-btn" onClick={() => setShowLeavePopup(false)}>×</button>
            </div>
            <div className="popup-body">
              <select onChange={e => setLeaveForm({ ...leaveForm, type: e.target.value })}>
                <option>Select Leave Type</option>
                <option>Sick</option>
                <option>Casual</option>
                <option>Medical</option>
                <option>Paid</option>
              </select>
              <input type="date" placeholder="From" />
              <input type="date" placeholder="To" />
              <textarea
                placeholder="Reason"
                value={leaveForm.reason}
                onChange={(e) => setLeaveForm({ ...leaveForm, reason: e.target.value })}
              ></textarea>
              <button
                className="glass-btn"
                onClick={() => {
                  setShowLeavePopup(false);
                  alert("Your leave request is sent to HR");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {showResumePopup && (
        <div className="popup">
          <div className="popup-box">
            <h3>Documents Submitted</h3>
            <p>Your documents are sent to HR</p>
            <button className="glass-btn" onClick={() => setShowResumePopup(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutsourceDashboard;
