import apiClient from "@/api/axios";

interface KeywordPostRequest {
  keyword: string;
}

async function postsKeywordGet(payload: KeywordPostRequest) {
  try {
    const response = await apiClient.get(`/posts/search?keyword=${payload.keyword}`);
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default postsKeywordGet;
