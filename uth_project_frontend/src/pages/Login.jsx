import React, { useState } from "react";

function Login({ onLogin }) {
  const [role, setRole] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
            <option value="manager">Manager</option>
            <option value="teacher">Teacher</option>
          </select>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;