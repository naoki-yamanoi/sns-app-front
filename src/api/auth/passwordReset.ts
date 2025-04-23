import apiClient from "@/api/axios";
import axios from "axios";

interface PasswordResetRequest {
  email: string;
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
}

async function resetPassword(payload: PasswordResetRequest) {
  try {
    const response = await apiClient.post("/password/reset", payload);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return "予期せぬエラーです。";
  }
}

export default resetPassword;
