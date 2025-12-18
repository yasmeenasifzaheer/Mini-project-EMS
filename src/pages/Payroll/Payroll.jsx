// src/pages/Payroll/Payroll.jsx
import React, { useState } from "react";

export default function Payroll(){
  const [loading, setLoading] = useState(false);
  const [payslip, setPayslip] = useState(null);

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setPayslip({
        month: "December 2025",
        basic: 30000,
        allowances: 5000,
        deductions: 2000,
        net: 33000
      });
      setLoading(false);
    }, 700);
  };

  return (
    <div style={{padding:20}}>
      <h2>Payroll</h2>
      <button onClick={generate}>Generate Payslip</button>
      {loading && <div>Generating…</div>}
      {payslip && (
        <div style={{marginTop:12, padding:12, background:"#fff", borderRadius:8}}>
          <div><strong>{payslip.month}</strong></div>
          <div>Basic: {payslip.basic}</div>
          <div>Allowances: {payslip.allowances}</div>
          <div>Deductions: {payslip.deductions}</div>
          <div style={{fontWeight:700}}>Net: {payslip.net}</div>
        </div>
      )}
    </div>
  );
}
