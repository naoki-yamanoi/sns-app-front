import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:5173",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
