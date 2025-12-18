// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Register.css";

// const Register = () => {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [role, setRole] = useState("Employee");
//   const [department, setDepartment] = useState("");
//   const [joinDate, setJoinDate] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const defaultPassword = "12345"; // Default password for all new employees

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     if (!fullName || !email || !phone || !department || !joinDate) {
//       setError("Please fill all fields");
//       return;
//     }

//     const newEmployee = {
//       fullName,
//       email,
//       phone,
//       role,
//       department,
//       joinDate,
//       password: defaultPassword,
//       isLoggedIn: false,
//     };

//     try {
//       await axios.post(
//         "https://693ada1a9b80ba7262cba5a1.mockapi.io/Users",
//         newEmployee
//       );
//       setSuccess(`Employee ${fullName} registered successfully!`);
//       // Reset form
//       setFullName("");
//       setEmail("");
//       setPhone("");
//       setRole("Employee");
//       setDepartment("");
//       setJoinDate("");
//     } catch (err) {
//       console.error(err);
//       setError("Failed to register employee. Try again later.");
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register New Employee</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Full Name:</label>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Role:</label>
//           <select value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="Employee">Employee</option>
//             <option value="Manager">Manager</option>
//             <option value="HR">HR</option>
//             <option value="Outsource">Outsource</option>
//           </select>
//         </div>
//         <div>
//           <label>Department:</label>
//           <input
//             type="text"
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Joining Date:</label>
//           <input
//             type="date"
//             value={joinDate}
//             onChange={(e) => setJoinDate(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         {success && <p className="success">{success}</p>}
//         <button type="submit">Register Employee</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
// src/pages/RegisterForm.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Register.css";

// const RegisterForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     role: "",
//     department: "",
//     joinDate: "",
//     salary: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleEdit = () => {
//     alert("Edit mode enabled");
//   };

//   const handleClose = () => {
//     navigate(-1); // go back
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Registered Data:", formData);
//   };

//   return (
//     <div className="register-form">
//       <h2>Register User</h2>

//       <form onSubmit={handleSubmit}>
//         {/* Full Name */}
//         <label>Full Name</label>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           placeholder="Enter full name"
//           required
//         />

//         {/* Email */}
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter email"
//           required
//         />

//         {/* Phone */}
//         <label>Phone</label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Enter phone number"
//           required
//         />

//         {/* Role Dropdown */}
//         <label>Role</label>
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Role</option>
//           <option value="HR">HR</option>
//           <option value="Employee">Employee</option>
//           <option value="Manager">Manager</option>
//           <option value="Outsource">Outsource</option>
//         </select>

//         {/* Department */}
//         <label>Department</label>
//         <input
//           type="text"
//           name="department"
//           value={formData.department}
//           onChange={handleChange}
//           placeholder="Enter department"
//         />

//         {/* Join Date */}
//         <label>Join Date</label>
//         <input
//           type="date"
//           name="joinDate"
//           value={formData.joinDate}
//           onChange={handleChange}
//           required
//         />

//         {/* Salary */}
//         <label>Salary</label>
//         <input
//           type="number"
//           name="salary"
//           value={formData.salary}
//           onChange={handleChange}
//           placeholder="Enter salary"
//           required
//         />

//         {/* Buttons */}
//         <div className="form-buttons">
//           <button type="button" className="edit-btn" onClick={handleEdit}>
//             Edit
//           </button>
//           <button type="submit" className="edit-btn">
//             Save
//           </button>
//           <button type="button" className="close-btn" onClick={handleClose}>
//             Close
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;
// src/pages/RegisterForm.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Register.css";

// const RegisterForm = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     role: "",
//     department: "",
//     joinDate: "",
//     salary: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   // ✅ SAVE USER
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const existingUsers =
//       JSON.parse(localStorage.getItem("registeredUsers")) || [];

//     const newUser = {
//       id: Date.now(),
//       name: formData.fullName,
//       role: formData.role,
//       joined: formData.joinDate,
//       salary: `₹${formData.salary}`,
//       attendance: "0%"
//     };

//     localStorage.setItem(
//       "registeredUsers",
//       JSON.stringify([...existingUsers, newUser])
//     );

//     alert("User registered successfully");
//     navigate(-1);
//   };

//   return (
//     <div className="register-form">
//       <h2>Register User</h2>

//       <form onSubmit={handleSubmit}>
//         <label>Full Name</label>
//         <input
//           type="text"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>Phone</label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//         />

//         <label>Role</label>
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Role</option>
//           <option value="HR">HR</option>
//           <option value="Employee">Employee</option>
//           <option value="Manager">Manager</option>
//           <option value="Outsource">Outsource</option>
//         </select>

//         <label>Department</label>
//         <input
//           type="text"
//           name="department"
//           value={formData.department}
//           onChange={handleChange}
//         />

//         <label>Join Date</label>
//         <input
//           type="date"
//           name="joinDate"
//           value={formData.joinDate}
//           onChange={handleChange}
//           required
//         />

//         <label>Salary</label>
//         <input
//           type="number"
//           name="salary"
//           value={formData.salary}
//           onChange={handleChange}
//           required
//         />

//         <div className="form-buttons">
//           <button type="submit" className="edit-btn">Save</button>
//           <button
//             type="button"
//             className="close-btn"
//             onClick={() => navigate(-1)}
//           >
//             Close
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;
// src/pages/Auth/Register.jsx
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

