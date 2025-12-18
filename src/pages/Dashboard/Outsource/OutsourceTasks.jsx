/* src/pages/Outsource/OutsourceTasks.jsx */
import React, { useState } from "react";

const OutsourceTasks = () => {
  const [tasks, setTasks] = useState([
    { title: "Daily report", status: "Pending" },
    { title: "Client follow-up", status: "Completed" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tasks</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginTop: "10px" }}>
            <strong>{task.title}</strong> - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutsourceTasks;
