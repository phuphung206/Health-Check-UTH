// src/pages/Register.jsx
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", formData);
      alert("Đăng ký thành công!");
    } catch (err) {
      alert(err.response?.data?.detail || "Lỗi đăng ký");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Đăng ký</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input name="username" placeholder="Username" onChange={handleChange} className="border p-2 rounded" />
        <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 rounded" />
        <button className="bg-blue-500 text-white p-2 rounded">Đăng ký</button>
      </form>
    </div>
  );
}
