// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css";

// /* ================= MOCK DATA (UNCHANGED) ================= */

// const mockData = {
//   hr: [
//     { id: 1, name: "Aarav Patel", role: "HR Manager", joined: "2022-01-10", salary: "₹60,000", attendance: "95%" },
//     { id: 2, name: "Meera Shah", role: "HR Executive", joined: "2022-03-18", salary: "₹40,000", attendance: "92%" },
//     { id: 3, name: "Rohan Verma", role: "Recruiter", joined: "2023-02-01", salary: "₹35,000", attendance: "90%" },
//     { id: 4, name: "Anita Rao", role: "HR Analyst", joined: "2023-05-20", salary: "₹45,000", attendance: "94%" },
//     { id: 5, name: "Suresh Iyer", role: "HR BP", joined: "2021-11-11", salary: "₹70,000", attendance: "96%" },
//     { id: 6, name: "Neha Singh", role: "HR Intern", joined: "2024-01-15", salary: "₹20,000", attendance: "88%" }
//   ],
//   employee: [
//     { id: 10, name: "Karthik Reddy", role: "Frontend Developer", joined: "2022-07-12", salary: "₹80,000", attendance: "93%" },
//     { id: 11, name: "Pooja Nair", role: "Backend Developer", joined: "2021-09-30", salary: "₹90,000", attendance: "95%" },
//     { id: 12, name: "Amit Joshi", role: "QA Engineer", joined: "2023-01-25", salary: "₹55,000", attendance: "91%" },
//     { id: 13, name: "Divya Kulkarni", role: "UI/UX Designer", joined: "2022-04-14", salary: "₹65,000", attendance: "94%" },
//     { id: 14, name: "Rakesh Malhotra", role: "Project Manager", joined: "2020-11-18", salary: "₹1,10,000", attendance: "96%" },
//     { id: 15, name: "Sneha Iyer", role: "Business Analyst", joined: "2021-06-21", salary: "₹75,000", attendance: "92%" },
//     { id: 16, name: "Vikram Desai", role: "DevOps Engineer", joined: "2022-10-03", salary: "₹95,000", attendance: "94%" },
//     { id: 17, name: "Anjali Mehta", role: "Data Analyst", joined: "2023-02-14", salary: "₹70,000", attendance: "90%" },
//     { id: 18, name: "Siddharth Jain", role: "Mobile Developer", joined: "2021-08-09", salary: "₹85,000", attendance: "93%" },
//     { id: 19, name: "Neeraj Kumar", role: "System Engineer", joined: "2020-05-27", salary: "₹78,000", attendance: "91%" },
//     { id: 20, name: "Priya Sharma", role: "Support Engineer", joined: "2023-04-19", salary: "₹50,000", attendance: "89%" },
//     { id: 21, name: "Rahul Verma", role: "Cloud Engineer", joined: "2022-12-01", salary: "₹1,00,000", attendance: "95%" },
//     { id: 22, name: "Kavya Menon", role: "Product Owner", joined: "2021-03-15", salary: "₹1,20,000", attendance: "96%" },
//     { id: 23, name: "Arjun Singh", role: "Security Analyst", joined: "2020-09-07", salary: "₹92,000", attendance: "94%" },
//     { id: 24, name: "Manoj Patil", role: "Tech Lead", joined: "2019-01-11", salary: "₹1,30,000", attendance: "97%" }
//   ],
//   outsource: [
//     { id: 100, name: "John Miller", role: "Consultant", joined: "2023-06-01", salary: "₹1,20,000", attendance: "85%" },
//     { id: 101, name: "Sara Lee", role: "Freelancer", joined: "2024-02-10", salary: "₹1,00,000", attendance: "88%" },
//     { id: 102, name: "Daniel Brown", role: "Contract Developer", joined: "2023-03-14", salary: "₹1,10,000", attendance: "82%" },
//     { id: 103, name: "Emily Clark", role: "UI Consultant", joined: "2022-11-08", salary: "₹95,000", attendance: "87%" },
//     { id: 104, name: "Michael Scott", role: "Project Consultant", joined: "2021-07-19", salary: "₹1,30,000", attendance: "84%" },
//     { id: 105, name: "Olivia Wilson", role: "QA Consultant", joined: "2023-09-01", salary: "₹90,000", attendance: "86%" },
//     { id: 106, name: "Ethan Davis", role: "DevOps Consultant", joined: "2022-05-23", salary: "₹1,15,000", attendance: "83%" },
//     { id: 107, name: "Sophia Martinez", role: "Business Consultant", joined: "2020-10-10", salary: "₹1,40,000", attendance: "88%" },
//     { id: 108, name: "Liam Anderson", role: "Cloud Consultant", joined: "2021-02-17", salary: "₹1,25,000", attendance: "86%" },
//     { id: 109, name: "Noah Thompson", role: "Security Consultant", joined: "2022-08-29", salary: "₹1,35,000", attendance: "84%" }
//   ]
// };
// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterBy, setFilterBy] = useState("");

//   /* ================= REGISTERED USERS ================= */
//   const registeredUsers =
//     JSON.parse(localStorage.getItem("registeredUsers")) || [];

//   /* ================= DATA LOGIC ================= */
//   useEffect(() => {
//     let combinedData = [];

//     if (activeTab === "dashboard") {
//       combinedData = [
//         ...mockData.hr,
//         ...mockData.employee,
//         ...mockData.outsource,
//         ...registeredUsers
//       ];
//     }

//     if (activeTab === "hr") {
//       combinedData = [
//         ...mockData.hr,
//         ...registeredUsers.filter(u => u.role === "HR")
//       ];
//     }

//     if (activeTab === "employee") {
//       combinedData = [
//         ...mockData.employee,
//         ...registeredUsers.filter(
//           u => u.role === "Employee" || u.role === "Manager"
//         )
//       ];
//     }

//     if (activeTab === "outsource") {
//       combinedData = [
//         ...mockData.outsource,
//         ...registeredUsers.filter(u => u.role === "Outsource")
//       ];
//     }

//     /* ================= SEARCH ================= */
//     let filtered = combinedData.filter(emp =>
//       emp.name.toLowerCase().includes(search.toLowerCase())
//     );

//     /* ================= FILTER ================= */
//     if (filterBy === "Role") {
//       filtered = filtered.sort((a, b) => a.role.localeCompare(b.role));
//     }

//     if (filterBy === "Joined") {
//       filtered = filtered.sort(
//         (a, b) => new Date(a.joined) - new Date(b.joined)
//       );
//     }

//     setData(filtered);
//   }, [activeTab, search, filterBy, registeredUsers]);

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login-selection");
//   };

//   return (
//     <div className="admin-layout">
//       {/* ================= SIDEBAR ================= */}
//       <aside className="sidebar">
//         <h2 className="logo">Admin Dashboard</h2>

//         <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
//         <button onClick={() => setActiveTab("hr")}>HR</button>
//         <button onClick={() => setActiveTab("employee")}>Employee</button>
//         <button onClick={() => setActiveTab("outsource")}>Outsource</button>

//         <button onClick={() => navigate("/register")}>
//           + Register User
//         </button>

//         <button className="logout" onClick={logout}>
//           Logout
//         </button>
//       </aside>

//       {/* ================= MAIN ================= */}
//       <main className="main-content">
//         {/* TOP BAR */}
//         <div className="top-bar">
//           <h1>
//             {activeTab === "dashboard"
//               ? "Admin Dashboard"
//               : activeTab.toUpperCase()}
//           </h1>
//         </div>

//         {/* ================= SEARCH & FILTER ================= */}
//         <div className="table-controls">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search employee..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <select
//             className="filter-select"
//             value={filterBy}
//             onChange={(e) => setFilterBy(e.target.value)}
//           >
//             <option value="">Filter by</option>
//             <option value="Role">Role</option>
//             <option value="Joined">Joined Date</option>
//           </select>
//         </div>

//         {/* ================= TABLE ================= */}
//         <table className="employee-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Role</th>
//               <th>Joined</th>
//               <th>Salary</th>
//               <th>Attendance</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.length === 0 ? (
//               <tr>
//                 <td colSpan="6" style={{ textAlign: "center" }}>
//                   No records found
//                 </td>
//               </tr>
//             ) : (
//               data.map(emp => (
//                 <tr key={emp.id}>
//                   <td>{emp.name}</td>
//                   <td>{emp.role}</td>
//                   <td>{emp.joined}</td>
//                   <td>{emp.salary}</td>
//                   <td>{emp.attendance}</td>
//                   <td>
//                     <div className="action-icons">
//                       <button
//                         className="icon-btn edit"
//                         title="Edit"
//                         onClick={() => navigate("/register", { state: emp })}
//                       >
//                         ✏️
//                       </button>
//                       <button
//                         className="icon-btn delete"
//                         title="Delete"
//                       >
//                         🗑️
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
// src/pages/Dashboard/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

// /* ================= MOCK DATA (UNCHANGED) ================= */
  const mockData = {
  hr: [
    { id: 1, name: "Aarav Patel", role: "HR Manager", joined: "2022-01-10", salary: "₹60,000", attendance: "95%" },
    { id: 2, name: "Meera Shah", role: "HR Executive", joined: "2022-03-18", salary: "₹40,000", attendance: "92%" },
    { id: 3, name: "Rohan Verma", role: "Recruiter", joined: "2023-02-01", salary: "₹35,000", attendance: "90%" },
    { id: 4, name: "Anita Rao", role: "HR Analyst", joined: "2023-05-20", salary: "₹45,000", attendance: "94%" },
    { id: 5, name: "Suresh Iyer", role: "HR BP", joined: "2021-11-11", salary: "₹70,000", attendance: "96%" },
    { id: 6, name: "Neha Singh", role: "HR Intern", joined: "2024-01-15", salary: "₹20,000", attendance: "88%" }
  ],
  employee: [
    { id: 10, name: "Karthik Reddy", role: "Frontend Developer", joined: "2022-07-12", salary: "₹80,000", attendance: "93%" },
    { id: 11, name: "Pooja Nair", role: "Backend Developer", joined: "2021-09-30", salary: "₹90,000", attendance: "95%" },
    { id: 12, name: "Amit Joshi", role: "QA Engineer", joined: "2023-01-25", salary: "₹55,000", attendance: "91%" },
    { id: 13, name: "Divya Kulkarni", role: "UI/UX Designer", joined: "2022-04-14", salary: "₹65,000", attendance: "94%" },
    { id: 14, name: "Rakesh Malhotra", role: "Project Manager", joined: "2020-11-18", salary: "₹1,10,000", attendance: "96%" },
    { id: 15, name: "Sneha Iyer", role: "Business Analyst", joined: "2021-06-21", salary: "₹75,000", attendance: "92%" },
    { id: 16, name: "Vikram Desai", role: "DevOps Engineer", joined: "2022-10-03", salary: "₹95,000", attendance: "94%" },
    { id: 17, name: "Anjali Mehta", role: "Data Analyst", joined: "2023-02-14", salary: "₹70,000", attendance: "90%" },
    { id: 18, name: "Siddharth Jain", role: "Mobile Developer", joined: "2021-08-09", salary: "₹85,000", attendance: "93%" },
    { id: 19, name: "Neeraj Kumar", role: "System Engineer", joined: "2020-05-27", salary: "₹78,000", attendance: "91%" },
    { id: 20, name: "Priya Sharma", role: "Support Engineer", joined: "2023-04-19", salary: "₹50,000", attendance: "89%" },
    { id: 21, name: "Rahul Verma", role: "Cloud Engineer", joined: "2022-12-01", salary: "₹1,00,000", attendance: "95%" },
    { id: 22, name: "Kavya Menon", role: "Product Owner", joined: "2021-03-15", salary: "₹1,20,000", attendance: "96%" },
    { id: 23, name: "Arjun Singh", role: "Security Analyst", joined: "2020-09-07", salary: "₹92,000", attendance: "94%" },
    { id: 24, name: "Manoj Patil", role: "Tech Lead", joined: "2019-01-11", salary: "₹1,30,000", attendance: "97%" }
  ],
  outsource: [
    { id: 100, name: "John Miller", role: "Consultant", joined: "2023-06-01", salary: "₹1,20,000", attendance: "85%" },
    { id: 101, name: "Sara Lee", role: "Freelancer", joined: "2024-02-10", salary: "₹1,00,000", attendance: "88%" },
    { id: 102, name: "Daniel Brown", role: "Contract Developer", joined: "2023-03-14", salary: "₹1,10,000", attendance: "82%" },
    { id: 103, name: "Emily Clark", role: "UI Consultant", joined: "2022-11-08", salary: "₹95,000", attendance: "87%" },
    { id: 104, name: "Michael Scott", role: "Project Consultant", joined: "2021-07-19", salary: "₹1,30,000", attendance: "84%" },
    { id: 105, name: "Olivia Wilson", role: "QA Consultant", joined: "2023-09-01", salary: "₹90,000", attendance: "86%" },
    { id: 106, name: "Ethan Davis", role: "DevOps Consultant", joined: "2022-05-23", salary: "₹1,15,000", attendance: "83%" },
    { id: 107, name: "Sophia Martinez", role: "Business Consultant", joined: "2020-10-10", salary: "₹1,40,000", attendance: "88%" },
    { id: 108, name: "Liam Anderson", role: "Cloud Consultant", joined: "2021-02-17", salary: "₹1,25,000", attendance: "86%" },
    { id: 109, name: "Noah Thompson", role: "Security Consultant", joined: "2022-08-29", salary: "₹1,35,000", attendance: "84%" }
  ]
};

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    let combinedData = [];

    if (activeTab === "dashboard") {
      combinedData = [...mockData.hr, ...mockData.employee, ...mockData.outsource];
    } else if (activeTab === "hr") {
      combinedData = [...mockData.hr];
    } else if (activeTab === "employee") {
      combinedData = [...mockData.employee];
    } else if (activeTab === "outsource") {
      combinedData = [...mockData.outsource];
    }

    // SEARCH
    let filtered = combinedData.filter(emp =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    );

    // FILTER
    if (filterBy === "Role") {
      filtered.sort((a, b) => a.role.localeCompare(b.role));
    } else if (filterBy === "Joined") {
      filtered.sort((a, b) => new Date(a.joined) - new Date(b.joined));
    }

    setData(filtered);
  }, [activeTab, search, filterBy]);
  

  useEffect(() => {
  let combinedData = [];

  if (activeTab === "dashboard") {
    combinedData = [
      ...mockData.hr,
      ...mockData.employee,
      ...mockData.outsource
    ];
  } else if (activeTab === "hr") {
    combinedData = [...mockData.hr];
  } else if (activeTab === "employee") {
    combinedData = [...mockData.employee];
  } else if (activeTab === "outsource") {
    combinedData = [...mockData.outsource];
  }

  /* 🔍 SEARCH */
  let filtered = combinedData.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  /* 🧮 FILTER (IMPORTANT FIX) */
  if (filterBy === "Role") {
    filtered = [...filtered].sort((a, b) =>
      a.role.localeCompare(b.role)
    );
  }

  if (filterBy === "Joined") {
    filtered = [...filtered].sort(
      (a, b) => new Date(a.joined) - new Date(b.joined)
    );
  }

  setData(filtered);
}, [activeTab, search, filterBy]);


  return (
    <div className={`admin-layout ${darkMode ? "dark" : "light"}`}>
{/* <button
  onClick={() => setDarkMode(!darkMode)}
  style={{
    position: "fixed",
    top: "10px",
    right: "10px",
    zIndex: 9999,
    padding: "12px 16px",
    fontSize: "16px",
    background: "orange",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }}
>
  {darkMode ? "☀ LIGHT MODE" : "🌙 DARK MODE"}
</button> */}


    {/* // <div className="admin-layout"> */}
      {/* <aside className="sidebar">
        <h2 className="logo">Admin Dashboard</h2>
        <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
        <button onClick={() => setActiveTab("hr")}>HR</button>
        <button onClick={() => setActiveTab("employee")}>Employee</button>
        <button onClick={() => setActiveTab("outsource")}>Outsource</button>
        <button onClick={() => navigate("/register")}>+ Register User</button>
        <button className="logout" onClick={() => navigate("/login-selection")}>Logout</button>
      </aside> */}
{/* <aside className="sidebar">
  <h2 className="logo">Admin Dashboard</h2>

  <ul className="sidebar-menu">
    <li onClick={() => setActiveTab("dashboard")}>Dashboard</li>
    <li onClick={() => setActiveTab("hr")}>HR</li>
    <li onClick={() => setActiveTab("employee")}>Employee</li>
    <li onClick={() => setActiveTab("outsource")}>Outsource</li>
    <li onClick={() => navigate("/register")} className="register">
      + Register User
    </li>
    <li
      onClick={() => navigate("/login-selection")}
      className="logout"
    >
      Logout
    </li>
  </ul>
</aside> */}
<aside className="sidebar">
  <h2 className="logo">Admin Dashboard</h2>

  <ul className="sidebar-menu">

    {/* 🌙☀ DARK / LIGHT TOGGLE — GUARANTEED VISIBLE
    <li
      onClick={() => setDarkMode(!darkMode)}
      style={{
        fontWeight: "bold",
        background: "#ddd",
        marginBottom: "12px"
      }}
    >
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </li> */}

    <li onClick={() => setActiveTab("dashboard")}>Dashboard</li>
    <li onClick={() => setActiveTab("hr")}>HR</li>
    <li onClick={() => setActiveTab("employee")}>Employee</li>
    <li onClick={() => setActiveTab("outsource")}>Outsource</li>
    <li onClick={() => navigate("/register")} className="register">
      + Register User
    </li>
    <li
      onClick={() => navigate("/login-selection")}
      className="logout"
    >
      Logout
    </li>
  </ul>
</aside>


      <main className="main-content">
        {/* <div className="top-bar">
          <h1>{activeTab === "dashboard" ? "Admin Dashboard" : activeTab.toUpperCase()}</h1>
        </div> */}
       <div className="top-bar">
  <h1>
    {activeTab === "dashboard"
      ? "Admin Dashboard"
      : activeTab.toUpperCase()}
  </h1>

  {/* 🌙☀ TOGGLE BUTTON
  <button
    onClick={() => setDarkMode(!darkMode)}
    style={{
      padding: "6px 12px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer"
    }}
  >
    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
  </button> */}
</div>



        <div className="table-controls">
          <input
            type="text"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
            <option value="">Filter by</option>
            <option value="Role">Role</option>
            <option value="Joined">Joined</option>
          </select>
        </div>

        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Salary</th>
              <th>Attendance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>No records found</td>
              </tr>
            ) : (
              data.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.role}</td>
                  <td>{emp.joined}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.attendance}</td>
                  <td>
                    <div className="action-icons">
                      <button
                        onClick={() => navigate("/register", { state: emp })}
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => alert("Cannot delete mock data")}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminDashboard;
// useEffect(() => {
//     document.body.style.background = darkMode ? "#121212" : "#f4f6f8";
//     document.body.style.color = darkMode ? "#ffffff" : "#000000";
//   }, [darkMode]);

  /* ================= DATA LOGIC ================= */
//   useEffect(() => {
//     let combined = [];

//     if (activeTab === "dashboard") {
//       combined = [...mockData.hr, ...mockData.employee, ...mockData.outsource];
//     } else if (activeTab === "hr") {
//       combined = [...mockData.hr];
//     } else if (activeTab === "employee") {
//       combined = [...mockData.employee];
//     } else if (activeTab === "outsource") {
//       combined = [...mockData.outsource];
//     }

//     let result = combined.filter(emp =>
//       emp.name.toLowerCase().includes(search.toLowerCase())
//     );

//     if (filterBy === "Role") {
//       result = [...result].sort((a, b) => a.role.localeCompare(b.role));
//     }

//     if (filterBy === "Joined") {
//       result = [...result].sort(
//         (a, b) => new Date(a.joined) - new Date(b.joined)
//       );
//     }

//     setData(result);
//   }, [activeTab, search, filterBy]);

//   return (
//     <div className="admin-layout">


//       {/* ✅ GUARANTEED VISIBLE TOGGLE */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         style={{
//           position: "fixed",
//           top: "12px",
//           right: "12px",
//           zIndex: 9999,
//           padding: "10px 14px",
//           background: darkMode ? "#fff" : "#000",
//           color: darkMode ? "#000" : "#fff",
//           border: "none",
//           borderRadius: "6px",
//           cursor: "pointer"
//         }}
//       >
//         {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
//       </button>

//       {/* ================= SIDEBAR ================= */}
//       <aside className="sidebar">
//         <h2>Admin</h2>
//         <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
//         <button onClick={() => setActiveTab("hr")}>HR</button>
//         <button onClick={() => setActiveTab("employee")}>Employee</button>
//         <button onClick={() => setActiveTab("outsource")}>Outsource</button>
//         <button onClick={() => navigate("/login-selection")}>Logout</button>
//       </aside>

//       {/* ================= MAIN ================= */}
//       <main className="main-content">
//         <h1>{activeTab.toUpperCase()}</h1>

//         <div className="table-controls">
//           <input
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
//             <option value="">Filter</option>
//             <option value="Role">Role</option>
//             <option value="Joined">Joined</option>
//           </select>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Role</th>
//               <th>Joined</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map(emp => (
//               <tr key={emp.id}>
//                 <td>{emp.name}</td>
//                 <td>{emp.role}</td>
//                 <td>{emp.joined}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;