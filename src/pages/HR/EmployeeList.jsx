// src/pages/HR/EmployeeList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* simple storage-backed employee store */
const EMP_KEY = "ems_employees";

const getEmployees = () => JSON.parse(localStorage.getItem(EMP_KEY) || "[]");
const saveEmployees = (arr) => localStorage.setItem(EMP_KEY, JSON.stringify(arr));

export default function EmployeeList(){
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setList(getEmployees());
      setLoading(false);
    }, 400);
  }, []);

  const handleAdd = () => {
    const name = prompt("Employee name");
    if (!name) return;
    const e = { id: Date.now(), name, email: `${name.replace(/\s+/g,"").toLowerCase()}@example.com`, role: "Employee" };
    const next = [...getEmployees(), e];
    saveEmployees(next);
    setList(next);
  };

  const handleDelete = (id) => {
    if (!confirm("Delete employee?")) return;
    const next = getEmployees().filter(x=>x.id !== id);
    saveEmployees(next);
    setList(next);
  };

  if (loading) return <div style={{padding:20}}>Loading…</div>;
  return (
    <div style={{padding:20}}>
      <h2>Employees</h2>
      <button onClick={handleAdd}>Add Employee</button>
      <div style={{marginTop:12, display:"grid", gap:8}}>
        {list.length===0 && <div>No employees yet.</div>}
        {list.map(emp => (
          <div key={emp.id} style={{padding:12, borderRadius:8, boxShadow:"0 2px 6px rgba(0,0,0,0.06)"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div>
                <div style={{fontWeight:600}}>{emp.name}</div>
                <div style={{fontSize:12, color:"#666"}}>{emp.email}</div>
              </div>
              <div style={{display:"flex", gap:8}}>
                <Link to={`/profile/${emp.id}`}>Profile</Link>
                <button onClick={()=>handleDelete(emp.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
