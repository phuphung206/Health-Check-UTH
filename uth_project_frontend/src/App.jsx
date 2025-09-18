import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Records from "./pages/Records";
import React, { useEffect, useState } from "react";
import api from "./services/api";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";

function App() {
  const [role, setRole] = useState(null);
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
  };

  const sampleRecords = [
    { id: 1, userName: "Nguyễn Văn A", diagnosis: "Cảm cúm", treatment: "Uống thuốc 5 ngày", date: "2025-09-10" },
    { id: 2, userName: "Trần Thị B", diagnosis: "Sốt xuất huyết", treatment: "Nhập viện 3 ngày", date: "2025-09-12" },
    { id: 3, userName: "Lê Văn C", diagnosis: "Đau dạ dày", treatment: "Dùng thuốc kháng acid", date: "2025-09-14" },
  ];

  // Fetch Users
  useEffect(() => {
    api.get("/users")
      .then((res) =>
        setUsers(
          res.data.length > 0
            ? res.data
            : [
                { id: 1, name: "Nguyễn Văn A", age: 25, email: "vana@example.com" },
                { id: 2, name: "Trần Thị B", age: 30, email: "thib@example.com" },
                { id: 3, name: "Lê Văn C", age: 28, email: "vanc@example.com" },
              ]
        )
      )
      .catch(() =>
        setUsers([
          { id: 1, name: "Nguyễn Văn A", age: 25, email: "vana@example.com" },
          { id: 2, name: "Trần Thị B", age: 30, email: "thib@example.com" },
          { id: 3, name: "Lê Văn C", age: 28, email: "vanc@example.com" },
        ])
      );
  }, []);

  // Fetch Records
  useEffect(() => {
    api.get("/records")
      .then((res) => setRecords(res.data.length > 0 ? res.data : sampleRecords))
      .catch(() => setRecords(sampleRecords));
  }, []);

  // Nếu chưa login → chỉ cho Login/Register
  if (!role) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }

  // Dashboard theo role
  let dashboard;
  switch (role) {
    case "admin":
      dashboard = <AdminDashboard />;
      break;
    case "staff":
      dashboard = <StaffDashboard />;
      break;
    case "manager":
      dashboard = <ManagerDashboard />;
      break;
    case "teacher":
      dashboard = <TeacherDashboard />;
      break;
    default:
      dashboard = <Dashboard />;
  }

  // Khi login rồi → layout đầy đủ
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold">UTH Dashboard</h1>
          <div className="space-x-4">
            <Link to="/">Dashboard</Link>
            <Link to="/users">Users</Link>
            <Link to="/records">Health Records</Link>
            <button onClick={() => setRole(null)}>Logout</button>
          </div>
        </nav>

        <main className="p-6">
          <Routes>
            {/* Dashboard mặc định theo role */}
            <Route path="/" element={dashboard} />

            {/* Các trang khác */}
            <Route path="/users" element={<Users users={users} />} />
            <Route path="/records" element={<Records records={records} />} />

            {/* Nếu gõ bậy URL → về Dashboard */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
