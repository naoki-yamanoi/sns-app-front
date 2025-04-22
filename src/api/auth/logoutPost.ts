import apiClient from "@/api/axios";
import axios from "axios";

async function postLogout() {
  try {
    const response = await apiClient.post("/logout");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return "予期せぬエラーです。";
  }
}

export default postLogout;
