import apiClient from "@/api/axios";

async function postLogout() {
  const response = await apiClient.post("/logout");
  return response.data;
}

export default postLogout;
