import apiClient from "@/api/axios";
import axios from "axios";

async function editUserProfile(formData: FormData) {
  try {
    const response = await apiClient.post("/user/profile/edit", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    return "予期せぬエラーです。";
  }
}

export default editUserProfile;
