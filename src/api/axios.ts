import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_LARAVEL_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
