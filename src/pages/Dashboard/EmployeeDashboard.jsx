// src/pages/Dashboard/EmployeeDashboard.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeDashboard.css";

export default function EmployeeDashboard() {
  const navigate = useNavigate();

  // ================= PROFILE
  const initialEmployee = {
    name: "John Doe",
    id: "EMP-101",
    email: "employee@ems.com",
    phone: "+91 98765 43210",
    department: "Engineering",
    role: "Frontend Developer",
    joiningDate: "15-Feb-2021",
  };

  const [profileData, setProfileData] = useState(initialEmployee);
  const [editProfile, setEditProfile] = useState(false);

  // ================= DASHBOARD CARDS
  const cards = [
    { title: "Total Members", value: "10" },
    { title: "Attendance", value: "93%" },
    { title: "Projects", value: "2" },
    { title: "Awards", value: "4" },
  ];

  // ================= LEAVE
  const [leaveHistory, setLeaveHistory] = useState([
    { type: "Casual", from: "2025-11-01", to: "2025-11-02", status: "Approved" },
    { type: "Sick", from: "2025-10-15", to: "2025-10-15", status: "Approved" },
    { type: "Paid", from: "2025-09-20", to: "2025-09-22", status: "Rejected" },
    { type: "Casual", from: "2025-08-10", to: "2025-08-10", status: "Approved" },
  ]);
  const [showApplyLeave, setShowApplyLeave] = useState(false);
  const [newLeave, setNewLeave] = useState({ type: "Casual", from: "", to: "", reason: "" });
  const leaveBalances = [
    { type: "Sick Leave", count: 6, color: "lb-sick" },
    { type: "Medical Leave", count: 4, color: "lb-medical" },
    { type: "Casual Leave", count: 8, color: "lb-casual" },
    { type: "Paid Leave", count: 5, color: "lb-paid" },
  ];

  // ================= AWARDS
  const [awards] = useState([
    "🏆 Star Performer 2023",
    "🥇 Best Developer 2024",
    "🏅 Team Excellence Award",
    "🎖 Outstanding Contribution",
  ]);

  // ================= EMAIL
  const [inbox] = useState([
    { from: "HR Team", subject: "Welcome to EMS" },
    { from: "Manager", subject: "Sprint kickoff" },
    { from: "Admin", subject: "Holiday Notice" },
    { from: "IT", subject: "Password reset" },
    { from: "Finance", subject: "Salary processed" },
  ]);
  const [outbox, setOutbox] = useState([
    { to: "HR Team", subject: "Leave Request", time: "Today" },
    { to: "Manager", subject: "Weekly Report", time: "2d" },
    { to: "IT", subject: "Issue Report", time: "3d" },
    { to: "Finance", subject: "Payslip Query", time: "5d" },
    { to: "Admin", subject: "Access Request", time: "7d" },
  ]);
  const [emailTab, setEmailTab] = useState("inbox");
  const [composeOpen, setComposeOpen] = useState(false);
  const [composeData, setComposeData] = useState({
    from: profileData.email,
    to: "",
    subject: "",
    message: "",
    attachment: null,
  });

  function sendEmail() {
    const entry = {
      to: composeData.to || "(no recipient)",
      subject: composeData.subject || "(no subject)",
      time: new Date().toLocaleString(),
      attachmentName: composeData.attachment ? composeData.attachment.name : null,
    };
    setOutbox([entry, ...outbox].slice(0, 50));
    setComposeOpen(false);
    setComposeData({ ...composeData, to: "", subject: "", message: "", attachment: null });
    alert("Email sent (simulated).");
    setEmailTab("outbox");
  }

  // ================= PAYSLIP
  const initialSalary = {
    basic: 30000,
    bonus: 2000,
    benefits: 1500,
    ot: 1200,
    medical: 800,
    tax: 4000,
    pf: 1800,
    other: 500,
  };
  const [salary, setSalary] = useState(initialSalary);
  const [previewPayslip, setPreviewPayslip] = useState(false);
  const payslipPrintableRef = useRef();

  function calcGross(s) {
    return s.basic + s.bonus + s.benefits + s.ot + s.medical;
  }
  function calcDeductions(s) {
    return s.tax + s.pf + s.other;
  }
  const gross = calcGross(salary);
  const deductions = calcDeductions(salary);
  const net = gross - deductions;

  function generatePayslipHTML(emp, s, grossVal, dedVal, netVal) {
    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Payslip</title>
<style>
  body { font-family: Arial; padding: 30px; color: #111; }
  .box { max-width: 750px; margin: auto; border: 1px solid #ddd; padding: 24px; border-radius: 8px; }
  h2 { margin-bottom: 16px; }
  .row { display: flex; justify-content: space-between; margin-bottom: 12px; }
  table { width: 100%; border-collapse: collapse; margin-top: 16px; }
  th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
  th { background: #f4f4f4; }
</style>
</head>
<body>
  <div class="box">
    <h2>Payslip – ${new Date().toLocaleDateString()}</h2>
    <div class="row">
      <div><strong>${emp.name}</strong><br/>${emp.id}</div>
      <div><strong>Net Salary</strong><br/>₹${netVal}</div>
    </div>
    <table>
      <tr><th>Earnings</th><th>Amount (₹)</th></tr>
      <tr><td>Basic</td><td>${s.basic}</td></tr>
      <tr><td>Bonus</td><td>${s.bonus}</td></tr>
      <tr><td>Benefits</td><td>${s.benefits}</td></tr>
      <tr><td>OT</td><td>${s.ot}</td></tr>
      <tr><td>Medical</td><td>${s.medical}</td></tr>
      <tr><th>Total Gross</th><th>${grossVal}</th></tr>
      <tr><th>Deductions</th><th></th></tr>
      <tr><td>Income Tax</td><td>${s.tax}</td></tr>
      <tr><td>PF</td><td>${s.pf}</td></tr>
      <tr><td>Other</td><td>${s.other}</td></tr>
      <tr><th>Net Salary</th><th>${netVal}</th></tr>
    </table>
  </div>
</body>
</html>`;
  }

  function openPayslipWindow(mode = "preview") {
    const payslipHTML = generatePayslipHTML(profileData, salary, gross, deductions, net);
    const printWindow = window.open("", "_blank", "width=900,height=700");
    printWindow.document.open();
    printWindow.document.write(payslipHTML);
    printWindow.document.close();
    if (mode === "print") {
      printWindow.onload = () => {
        printWindow.focus();
        printWindow.print();
      };
    }
  }

  // ================= ATTENDANCE
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  function getHoursDifference(start, end) {
    if (!start || !end) return 0;
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    const startDate = new Date(0, 0, 0, sh, sm);
    const endDate = new Date(0, 0, 0, eh, em);
    let diff = endDate - startDate;
    if (diff < 0) diff += 24 * 3600 * 1000;
    return diff / 1000 / 3600;
  }
  function getStatus(hours) {
    if (hours >= 8) return "Present";
    if (hours >= 7) return "Late";
    return "Absent";
  }

  const [attendance, setAttendance] = useState(
    Array.from({ length: 12 }).map((_, i) => {
      const checkIn = "09:30";
      const checkOut = "18:00";
      const hoursWorked = getHoursDifference(checkIn, checkOut);
      return {
        date: `2025-12-${String(i + 1).padStart(2, "0")}`,
        checkIn,
        checkOut,
        hours: hoursWorked.toFixed(2),
        status: getStatus(hoursWorked),
      };
    })
  );

  // ================= PROFILE vCard
  function downloadVCard() {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${profileData.name}
EMAIL:${profileData.email}
TEL:${profileData.phone}
ORG:${profileData.department}
TITLE:${profileData.role}
END:VCARD`.trim();
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${profileData.name}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ================= STATE
  const [active, setActive] = useState("dashboard");

  // ================= APPLY LEAVE
  function applyLeave() {
    if (!newLeave.from || !newLeave.to) {
      alert("Please select From and To dates");
      return;
    }
    const newEntry = { ...newLeave, status: "Pending" };
    setLeaveHistory([newEntry, ...leaveHistory]);
    setShowApplyLeave(false);
    setNewLeave({ type: "Casual", from: "", to: "", reason: "" });
    alert("Leave request submitted to HR");
  }

  return (
    <div className="purple-root">
      {/* SIDEBAR */}
      <aside className="purple-sidebar">
        <div className="logo">Employee Dashboard</div>
        <ul className="sidebar-menu">
          {["dashboard","profile","attendance","leave","payslip","awards","email","security"].map(tab => (
            <li
              key={tab}
              className={active === tab ? "active" : ""}
              onClick={() => setActive(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
        <button className="logout" onClick={() => navigate("/LoginSelection")}>
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="purple-main">
        <header className="topbar">
          <h1>{profileData.name}</h1>
        </header>

        {/* <section className="content-area"> */}
          {/* DASHBOARD */}
          {active === "dashboard" && (
            <>
              <div className="cards-row">
                {cards.map((c, i) => (
                  <div key={i} className={`stat-card stat-${i}`}>
                    <div className="card-title">{c.title}</div>
                    <div className="card-value">{c.value}</div>
                    <div className="card-sub">{c.subtitle}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* PROFILE */}
          {active === "profile" && (
            <div className="panel white">
              <h2>Profile</h2>
              <div className="profile-grid">
                {Object.entries(profileData).map(([key, val]) => (
                  <div key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong><div>{val}</div></div>
                ))}
              </div>
              <div className="panel-actions">
                <button className="btn primary" onClick={() => setEditProfile(!editProfile)}>
                  {editProfile ? "Save" : "Edit Profile"}
                </button>
                <button className="btn accent" onClick={downloadVCard}>Download vCard</button>
              </div>
            </div>
          )}

          {/* ATTENDANCE */}
          {active === "attendance" && (
            <div className="panel white">
              <h2>Attendance</h2>
              <div style={{ textAlign: "right", marginBottom: "10px", fontWeight: "bold" }}>
                Current Time: {currentTime.toLocaleTimeString()}
              </div>
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Check-In</th>
                    <th>Check-Out</th>
                    <th>Working Hours</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.map((r, i) => (
                    <tr key={i}>
                      <td>{r.date}</td>
                      <td>
                        <input
                          type="time"
                          value={r.checkIn}
                          onChange={(e) => {
                            const updated = [...attendance];
                            updated[i].checkIn = e.target.value;
                            if (updated[i].checkOut) {
                              const diff = getHoursDifference(updated[i].checkIn, updated[i].checkOut);
                              updated[i].hours = diff.toFixed(2);
                              updated[i].status = getStatus(diff);
                            }
                            setAttendance(updated);
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          value={r.checkOut}
                          onChange={(e) => {
                            const updated = [...attendance];
                            updated[i].checkOut = e.target.value;
                            if (updated[i].checkIn) {
                              const diff = getHoursDifference(updated[i].checkIn, updated[i].checkOut);
                              updated[i].hours = diff.toFixed(2);
                              updated[i].status = getStatus(diff);
                            }
                            setAttendance(updated);
                          }}
                        />
                      </td>
                      <td>{r.hours}</td>
                      <td>
                        <span
                          className={`badge ${r.status === "Present" ? "present" : r.status === "Late" ? "late" : "absent"}`}
                        >
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

{/* SECURITY & COMPLIANCE */}
<section className="content-area">
{active === "security" && (
  <div className="panel white">
    <h2>Security & Compliance</h2>

    <div className="compliance-grid">
      <div className="compliance-card">
        <h3>🔐 Role-Based Access Control</h3>
        <p>
          Access to system features is restricted based on employee role.
          This employee account has <strong>Employee-level</strong> permissions.
        </p>
        <ul>
          <li>✔ View own attendance</li>
          <li>✔ Apply for leave</li>
          <li>✔ View payslip</li>
          <li>✖ Cannot access HR / Payroll admin features</li>
        </ul>
      </div>

      <div className="compliance-card">
        <h3>📜 Labor Law Compliance</h3>
        <p>
          The system ensures compliance with labor laws by monitoring:
        </p>
        <ul>
          <li>✔ Minimum working hours (8 hrs/day)</li>
          <li>✔ Overtime tracking</li>
          <li>✔ Mandatory leave balance</li>
          <li>✔ Salary deductions (PF & Tax)</li>
        </ul>
      </div>

      <div className="compliance-card">
        <h3>🛡 Data Protection</h3>
        <p>
          Employee data is securely handled with:
        </p>
        <ul>
          <li>✔ Restricted profile access</li>
          <li>✔ Secure login-based access</li>
          <li>✔ No unauthorized data modification</li>
        </ul>
      </div>
    </div>
  </div>
)}

          {/* LEAVE */}
          {active === "leave" && (
            <div className="panel white">
              <h2>Leave</h2>
              <div className="leave-balance-row">
                {leaveBalances.map((l, i) => (
                  <div key={i} className={`leave-card ${l.color}`}>
                    <div className="leave-count">{l.count}</div>
                    <div className="leave-type">{l.type}</div>
                  </div>
                ))}
              </div>
              <table className="tbl">
                <thead>
                  <tr><th>Type</th><th>From</th><th>To</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {leaveHistory.map((l, i) => (
                    <tr key={i}><td>{l.type}</td><td>{l.from}</td><td>{l.to}</td><td>{l.status}</td></tr>
                  ))}
                </tbody>
              </table>
              <div className="panel-actions">
                <button className="btn primary" onClick={() => setShowApplyLeave(true)}>Apply Leave</button>
              </div>

              {showApplyLeave && (
                <div className="modal-overlay">
                  <div className="modal-box">
                    <h3 className="modal-title">Apply Leave</h3>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Leave Type</label>
                        <select value={newLeave.type} onChange={e => setNewLeave({ ...newLeave, type: e.target.value })}>
                          <option value="Casual">Casual</option>
                          <option value="Sick">Sick</option>
                          <option value="Paid">Paid</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>From</label>
                        <input type="date" value={newLeave.from} onChange={e => setNewLeave({ ...newLeave, from: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label>To</label>
                        <input type="date" value={newLeave.to} onChange={e => setNewLeave({ ...newLeave, to: e.target.value })} />
                      </div>
                      <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                        <label>Reason</label>
                        <textarea placeholder="Enter reason for leave" value={newLeave.reason} onChange={e => setNewLeave({ ...newLeave, reason: e.target.value })} />
                      </div>
                    </div>
                    <div className="modal-actions">
                      <button className="btn primary" onClick={applyLeave}>Apply</button>
                      <button className="btn" onClick={() => setShowApplyLeave(false)}>Cancel</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* AWARDS */}
          {active === "awards" && (
            <div className="panel white">
              <h2>Awards</h2>
              <div className="awards-grid">
                {awards.map((a, i) => <div key={i} className="award">{a}</div>)}
              </div>
            </div>
          )}

          {/* EMAIL */}
          {active === "email" && (
            <div className="panel white">
              <h2>Email</h2>
              <div className="email-actions">
                <button className="btn primary" onClick={() => setComposeOpen(true)}>Compose</button>
                <button className="btn" onClick={() => setEmailTab("inbox")}>Inbox</button>
                <button className="btn" onClick={() => setEmailTab("outbox")}>Outbox</button>
              </div>
              {emailTab === "inbox" && (
                <div className="mail-list">{inbox.map((m, i) => <div key={i} className="mail"><strong>{m.from}</strong> — {m.subject}</div>)}</div>
              )}
              {emailTab === "outbox" && (
                <div className="mail-list">{outbox.map((m, i) => <div key={i} className="mail"><strong>To: {m.to}</strong> — {m.subject}</div>)}</div>
              )}

              {composeOpen && (
                <div className="modal">
                  <div className="modal-box">
                    <h3>Compose</h3>
                    <div className="form-group"><label>From</label><input readOnly value={composeData.from} /></div>
                    <div className="form-group"><label>To</label><input value={composeData.to} onChange={e => setComposeData({ ...composeData, to: e.target.value })} /></div>
                    <div className="form-group"><label>Subject</label><input value={composeData.subject} onChange={e => setComposeData({ ...composeData, subject: e.target.value })} /></div>
                    <div className="form-group"><label>Message</label><textarea value={composeData.message} onChange={e => setComposeData({ ...composeData, message: e.target.value })} /></div>
                    <div className="modal-actions">
                      <button className="btn primary" onClick={sendEmail}>Send</button>
                      <button className="btn" onClick={() => setComposeOpen(false)}>Cancel</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* PAYSLIP */}
          {active === "payslip" && (
            <div className="panel white">
              <h2>Payslip Calculator</h2>
              <div className="form-grid">
                {Object.entries(salary).map(([key, val]) => (
                  <div className="form-group" key={key}>
                    <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                    <input type="number" value={val} onChange={e => setSalary({ ...salary, [key]: Number(e.target.value) })} />
                  </div>
                ))}
              </div>

              <div className="salary-summary">
                <div>Gross: <strong>₹{gross}</strong></div>
                <div>Deductions: <strong>₹{deductions}</strong></div>
                <div>Net: <strong>₹{net}</strong></div>
              </div>

              <div className="panel-actions">
                <button className="btn primary" onClick={() => setPreviewPayslip(true)}>Preview</button>
                <button className="btn" onClick={() => openPayslipWindow("print")}>Print</button>
                <button className="btn1" onClick={() => openPayslipWindow("preview")}>Download (PDF)</button>
              </div>

              {previewPayslip && (
                <div className="modal">
                  <div className="modal-box payslip-preview">
                    <h3>Payslip Preview</h3>
                    <div className="payslip-content" ref={payslipPrintableRef}>
                      <div><strong>{profileData.name}</strong> - {profileData.id}</div>
                      <table>
                        <tbody>
                          <tr><td>Basic</td><td>₹{salary.basic}</td></tr>
                          <tr><td>Bonus</td><td>₹{salary.bonus}</td></tr>
                          <tr><td>Benefits</td><td>₹{salary.benefits}</td></tr>
                          <tr><td>OT</td><td>₹{salary.ot}</td></tr>
                          <tr><td>Medical</td><td>₹{salary.medical}</td></tr>
                          <tr><th>Gross</th><th>₹{gross}</th></tr>
                          <tr><td>Tax</td><td>₹{salary.tax}</td></tr>
                          <tr><td>PF</td><td>₹{salary.pf}</td></tr>
                          <tr><td>Other</td><td>₹{salary.other}</td></tr>
                          <tr><th>Net</th><th>₹{net}</th></tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-actions">
                      <button className="btn primary" onClick={() => openPayslipWindow("print")}>Print</button>
                      <button className="btn1" onClick={() => openPayslipWindow("preview")}>Download</button>
                      <button className="btn2" onClick={() => setPreviewPayslip(false)}>Close</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </section>
      </main>
    </div>
  );
}
