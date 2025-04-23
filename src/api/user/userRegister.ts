import apiClient from "@/api/axios";
import axios from "axios";

interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

async function registerUser(payload: RegisterUserRequest) {
  try {
    const response = await apiClient.post("/register", payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return "予期せぬエラーです。";
  }
}

export default registerUser;
