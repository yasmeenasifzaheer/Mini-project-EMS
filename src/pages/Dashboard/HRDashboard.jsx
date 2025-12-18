import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HRDashboard.css";

const HRDashboard = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  /* ================= EMPLOYEES ================= */
  // const employees = [
  //   { id: 1, name: "Aarav Patel", role: "Developer", salary: 45000, attendance: "96%", performance: "Excellent" },
  //   { id: 2, name: "Neha Sharma", role: "Designer", salary: 40000, attendance: "92%", performance: "Very Good" },
  //   { id: 3, name: "Rohit Kumar", role: "Tester", salary: 35000, attendance: "90%", performance: "Good" },
  //   { id: 4, name: "Priya Singh", role: "HR Executive", salary: 38000, attendance: "95%", performance: "Excellent" },
  //   { id: 5, name: "Karan Verma", role: "Backend Dev", salary: 50000, attendance: "94%", performance: "Excellent" },
  //   { id: 6, name: "Sneha Iyer", role: "Frontend Dev", salary: 42000, attendance: "93%", performance: "Very Good" },
  //   { id: 7, name: "Amit Das", role: "Support", salary: 30000, attendance: "88%", performance: "Good" },
  //   { id: 8, name: "Pooja Mehta", role: "QA", salary: 36000, attendance: "91%", performance: "Good" },
  //   { id: 9, name: "Vikas Rao", role: "DevOps", salary: 55000, attendance: "97%", performance: "Excellent" },
  //   { id: 10, name: "Anjali Nair", role: "Business Analyst", salary: 48000, attendance: "94%", performance: "Very Good" }
  // ];
  const employees = [
  { id: 1, name: "Aarav Patel", role: "Developer", salary: 45000, attendance: "96%", performance: "Excellent", checkIn: "09:10 AM", checkOut: "06:05 PM" },
  { id: 2, name: "Neha Sharma", role: "Designer", salary: 40000, attendance: "92%", performance: "Very Good", checkIn: "09:00 AM", checkOut: "05:45 PM" },
  { id: 3, name: "Rohit Kumar", role: "Tester", salary: 35000, attendance: "90%", performance: "Good", checkIn: "09:30 AM", checkOut: "06:10 PM" },
  { id: 4, name: "Priya Singh", role: "HR Executive", salary: 38000, attendance: "95%", performance: "Excellent", checkIn: "08:55 AM", checkOut: "05:50 PM" },
  { id: 5, name: "Karan Verma", role: "Backend Dev", salary: 50000, attendance: "94%", performance: "Excellent", checkIn: "09:05 AM", checkOut: "06:20 PM" },
  { id: 6, name: "Sneha Iyer", role: "Frontend Dev", salary: 42000, attendance: "93%", performance: "Very Good", checkIn: "09:15 AM", checkOut: "06:00 PM" },
  { id: 7, name: "Amit Das", role: "Support", salary: 30000, attendance: "88%", performance: "Good", checkIn: "09:45 AM", checkOut: "05:30 PM" },
  { id: 8, name: "Pooja Mehta", role: "QA", salary: 36000, attendance: "91%", performance: "Good", checkIn: "09:20 AM", checkOut: "05:55 PM" },
  { id: 9, name: "Vikas Rao", role: "DevOps", salary: 55000, attendance: "97%", performance: "Excellent", checkIn: "08:50 AM", checkOut: "06:30 PM" },
  { id: 10, name: "Anjali Nair", role: "Business Analyst", salary: 48000, attendance: "94%", performance: "Very Good", checkIn: "09:00 AM", checkOut: "06:00 PM" }
];


  /* ================= EMAIL DATA ================= */
  const emails = [
    { id: 1, from: "admin@company.com", subject: "Policy Update", date: "01 Sep" },
    { id: 2, from: "finance@company.com", subject: "Salary Processed", date: "02 Sep" },
    { id: 3, from: "manager@company.com", subject: "Team Meeting", date: "03 Sep" },
    { id: 4, from: "it@company.com", subject: "System Maintenance", date: "04 Sep" },
    { id: 5, from: "hr@company.com", subject: "Leave Guidelines", date: "05 Sep" }
  ];

  const [emailTab, setEmailTab] = useState("inbox");
  const [outbox, setOutbox] = useState([]);

  const [composeData, setComposeData] = useState({
    to: "",
    subject: "",
    message: ""
  });
const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const sendEmail = () => {
    if (!composeData.to || !composeData.subject) return;

    setOutbox([
      ...outbox,
      {
        id: Date.now(),
        to: composeData.to,
        subject: composeData.subject,
        date: new Date().toLocaleDateString()
      }
    ]);

    setComposeData({ to: "", subject: "", message: "" });
    setEmailTab("outbox");
  };

  /* ================= LEAVES ================= */
  const [leaves, setLeaves] = useState(
    employees.map(emp => ({
      id: emp.id,
      name: emp.name,
      reason: "Personal",
      status: "Pending"
    }))
  );

  const approveLeave = id =>
    setLeaves(leaves.map(l => l.id === id ? { ...l, status: "Approved" } : l));

  const rejectLeave = id =>
    setLeaves(leaves.map(l => l.id === id ? { ...l, status: "Rejected" } : l));

  const logout = () => {
    localStorage.clear();
    navigate("/login-selection");
  };

  return (
    <div className={`hr-app ${darkMode ? "dark" : ""}`}>
      
      {/* ================= SIDEBAR ================= */}
    <aside className="sidebar">
  <h2 className="logo">HR Dashboard</h2>
  <ul>
    <li onClick={() => setActiveTab("dashboard")} className={activeTab === "dashboard" ? "active" : ""}>Dashboard</li>
    <li onClick={() => setActiveTab("employees")} className={activeTab === "employees" ? "active" : ""}>Employees</li>
    <li onClick={() => setActiveTab("email")} className={activeTab === "email" ? "active" : ""}>Email</li>
    <li onClick={() => setActiveTab("leave")} className={activeTab === "leave" ? "active" : ""}>Leave</li>
    <li onClick={() => setActiveTab("payroll")} className={activeTab === "payroll" ? "active" : ""}>Payroll</li>
    <li onClick={() => setActiveTab("attendance")} className={activeTab === "attendance" ? "active" : ""}>Attendance</li>
    <li onClick={() => setActiveTab("performance")} className={activeTab === "performance" ? "active" : ""}>Performance</li>
    <li className="logout-btn" onClick={logout}>Logout</li>
  </ul>

  {/* Move logout button OUTSIDE <ul> */}
  {/* <button className="sidebar-logout-btn" onClick={logout}>
    Logout
  </button> */}
</aside>



      {/* ================= MAIN ================= */}
      <main className="main">
        <header className="topbar">
          <h1>{activeTab.toUpperCase()}</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          {activeTab === "attendance" && (
  <div className="live-clock">
    🕒 {currentTime.toLocaleTimeString()}
  </div>
)}

        </header>

        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="cards">
            <div className="card">Total Employees<br /><b>{employees.length}</b></div>
            <div className="card">Pending Leaves<br /><b>{leaves.filter(l => l.status === "Pending").length}</b></div>
            <div className="card">Payroll Processed<br /><b>₹{employees.reduce((a, e) => a + e.salary, 0)}</b></div>
            <div className="card">Attendance Avg<br /><b>93%</b></div>
          </div>
        )}

        {/* EMPLOYEES */}
        {activeTab === "employees" && (
          <table>
            <thead><tr><th>Name</th><th>Role</th><th>Salary</th></tr></thead>
            <tbody>
              {employees.map(e => (
                <tr key={e.id}><td>{e.name}</td><td>{e.role}</td><td>₹{e.salary}</td></tr>
              ))}
            </tbody>
          </table>
        )}

        {/* EMAIL */}
        {activeTab === "email" && (
          <div className="email-section">
            <div className="email-tabs">
              <button className={emailTab === "inbox" ? "active" : ""} onClick={() => setEmailTab("inbox")}>Inbox</button>
              <button className={emailTab === "outbox" ? "active" : ""} onClick={() => setEmailTab("outbox")}>Outbox</button>
              <button className={emailTab === "compose" ? "active" : ""} onClick={() => setEmailTab("compose")}>Compose</button>
            </div>

            {emailTab === "inbox" && (
              <table>
                <thead><tr><th>From</th><th>Subject</th><th>Date</th></tr></thead>
                <tbody>
                  {emails.map(m => (
                    <tr key={m.id}><td>{m.from}</td><td>{m.subject}</td><td>{m.date}</td></tr>
                  ))}
                </tbody>
              </table>
            )}

            {emailTab === "outbox" && (
              <table>
                <thead><tr><th>To</th><th>Subject</th><th>Date</th></tr></thead>
                <tbody>
                  {outbox.length === 0 ? (
                    <tr><td colSpan="3">No sent emails</td></tr>
                  ) : (
                    outbox.map(m => (
                      <tr key={m.id}><td>{m.to}</td><td>{m.subject}</td><td>{m.date}</td></tr>
                    ))
                  )}
                </tbody>
              </table>
            )}

            {emailTab === "compose" && (
              <div className="compose-box">
                <input type="email" placeholder="To"
                  value={composeData.to}
                  onChange={e => setComposeData({ ...composeData, to: e.target.value })} />
                <input type="text" placeholder="Subject"
                  value={composeData.subject}
                  onChange={e => setComposeData({ ...composeData, subject: e.target.value })} />
                <textarea rows="5" placeholder="Message"
                  value={composeData.message}
                  onChange={e => setComposeData({ ...composeData, message: e.target.value })} />
                <button onClick={sendEmail}>Send</button>
              </div>
            )}
          </div>
        )}

        {/* LEAVE */}
        {activeTab === "leave" && (
          <table>
            <thead><tr><th>Name</th><th>Reason</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {leaves.map(l => (
                <tr key={l.id}>
                  <td>{l.name}</td>
                  <td>{l.reason}</td>
                  <td>{l.status}</td>
                  <td>
                    {l.status === "Pending" && (
                      <>
                        <button onClick={() => approveLeave(l.id)}>Approve</button>
                        <button onClick={() => rejectLeave(l.id)}>Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* PAYROLL */}
        {activeTab === "payroll" && (
          <table>
            <thead><tr><th>Name</th><th>Basic</th><th>HRA</th><th>Total</th></tr></thead>
            <tbody>
              {employees.map(e => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>₹{e.salary}</td>
                  <td>₹{Math.round(e.salary * 0.2)}</td>
                  <td>₹{Math.round(e.salary * 1.2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* ATTENDANCE */}
        {/* {activeTab === "attendance" && (
          <table>
            <thead><tr><th>Name</th><th>Attendance</th></tr></thead>
            <tbody>
              {employees.map(e => (
                <tr key={e.id}><td>{e.name}</td><td>{e.attendance}</td></tr>
              ))}
            </tbody>
          </table>
        )} */}
{activeTab === "attendance" && (
  <>
    <div className="attendance-legend">
      <span className="key present">● Present</span>
      <span className="key late">● Late</span>
      <span className="key early">● Early Checkout</span>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Attendance</th>
          <th>Check In</th>
          <th>Check Out</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(e => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>
              <span className={`badge ${parseInt(e.attendance) >= 93 ? "good" : "avg"}`}>
                {e.attendance}
              </span>
            </td>
            <td className="checkin">{e.checkIn}</td>
            <td className="checkout">{e.checkOut}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
)}


        {/* PERFORMANCE */}
        {activeTab === "performance" && (
          <table>
            <thead><tr><th>Name</th><th>Performance</th></tr></thead>
            <tbody>
              {employees.map(e => (
                <tr key={e.id}><td>{e.name}</td><td>{e.performance}</td></tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default HRDashboard;
