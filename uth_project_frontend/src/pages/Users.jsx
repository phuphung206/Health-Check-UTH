import React, { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data); // Dữ liệu từ API
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy dữ liệu Users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Tên</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Vai trò</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.id}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.email}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ padding: "10px", textAlign: "center" }}>
                Không có dữ liệu người dùng
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
