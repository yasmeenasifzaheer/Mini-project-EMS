// src/pages/Performance/Performance.jsx
import React from "react";

export default function Performance(){
  return (
    <div style={{padding:20}}>
      <h2>Performance</h2>
      <p>KPIs, appraisals, feedback UI will go here.</p>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, marginTop:12}}>
        <div className="card">KPI Score: 78%</div>
        <div className="card">Appraisals: 2 pending</div>
        <div className="card">Training: 1 overdue</div>
      </div>
    </div>
  );
}
