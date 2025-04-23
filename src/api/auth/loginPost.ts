import apiClient from "@/api/axios";
import axios from "axios";

interface LoginRequest {
  email: string;
  password: string;
}

async function postLogin(payload: LoginRequest) {
  try {
    const response = await apiClient.post("/login", payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return "予期せぬエラーです。";
  }
}

export default postLogin;
