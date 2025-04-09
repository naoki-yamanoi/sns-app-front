import axios from "axios";

async function postsGet() {
  try {
    const response = await axios.get("/posts");
    return response.data;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  }
}

export default postsGet;
