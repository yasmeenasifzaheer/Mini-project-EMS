// src/pages/Attendance/Attendance.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Attendance(){
  const { user } = useAuth();
  const [records, setRecords] = useState([]);

  useEffect(()=> {
    const key = `att_${user?.id || "anon"}`;
    setRecords(JSON.parse(localStorage.getItem(key) || "[]"));
  }, [user]);

  const markToday = () => {
    const key = `att_${user?.id || "anon"}`;
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    const today = new Date().toISOString().slice(0,10);
    if (arr.includes(today)) { alert("Already marked"); return; }
    arr.unshift(today);
    localStorage.setItem(key, JSON.stringify(arr));
    setRecords(arr);
  };

  return (
    <div style={{padding:20}}>
      <h2>Attendance</h2>
      <p>Logged in as: {user?.name} ({user?.role})</p>
      <button onClick={markToday}>Mark Today</button>
      <ul style={{marginTop:12}}>
        {records.length===0 && <li>No attendance records</li>}
        {records.map(d => <li key={d}>{d}</li>)}
      </ul>
    </div>
  );
}
