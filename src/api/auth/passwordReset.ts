import apiClient from "@/api/axios";

interface PasswordResetRequest {
  email: string;
  old_password: string;
  new_password: string;
  new_password_confirmation: string;
}

async function resetPassword(payload: PasswordResetRequest) {
  const response = await apiClient.post("/password/reset", payload);
  return response.data;
}

export default resetPassword;
