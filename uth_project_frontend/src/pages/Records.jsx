import React from "react";

function Records({ records }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Danh sách hồ sơ sức khỏe</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Bệnh nhân</th>
            <th className="p-2 border">Chẩn đoán</th>
            <th className="p-2 border">Điều trị</th>
            <th className="p-2 border">Ngày tạo</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td className="p-2 border">{record.id}</td>
              <td className="p-2 border">{record.userName}</td>
              <td className="p-2 border">{record.diagnosis}</td>
              <td className="p-2 border">{record.treatment}</td>
              <td className="p-2 border">{record.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
