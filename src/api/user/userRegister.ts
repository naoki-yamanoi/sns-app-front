import apiClient from "@/api/axios";

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
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default registerUser;
