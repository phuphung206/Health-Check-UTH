import React from "react";

function Dashboard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-bold">Người dùng</h3>
          <p>3 người dùng hoạt động</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-bold">Hồ sơ sức khỏe</h3>
          <p>12 hồ sơ đã được ghi nhận</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-bold">Lượt truy cập</h3>
          <p>156 lượt trong 7 ngày qua</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 