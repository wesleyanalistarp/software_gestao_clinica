import axios from "axios";

// Definindo a URL base da API
const API_URL = import.meta.env.VITE_API_HOST;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
