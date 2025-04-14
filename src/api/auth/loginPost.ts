import apiClient from "@/api/axios";

interface LoginRequest {
  email: string;
  password: string;
}

async function postLogin(payload: LoginRequest) {
  const response = await apiClient.post("/login", payload);
  return response.data;
}

export default postLogin;
