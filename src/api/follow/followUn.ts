import apiClient from "@/api/axios";

interface UnFollowRequest {
  followed_id: number;
}

// フォロー外すapi
async function unFollowPost(payload: UnFollowRequest) {
  const response = await apiClient.post("/follow/delete", payload);
  return response.data;
}

export default unFollowPost;
