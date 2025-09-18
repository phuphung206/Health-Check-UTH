// src/api.js
import axios from "axios";

// Nếu có env, ưu tiên dùng env. Không thì fallback về localhost
const API_BASE = import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000";

// Tạo axios instance
const api = axios.create({
  baseURL: API_BASE,
});

// Hàm gọi mock data (nếu cần test local JSON)
export const getUsers = async () => {
  return axios.get("/data/users.json"); // file trong public/data/users.json
};

// Export instance axios để dùng chung
export default api;
