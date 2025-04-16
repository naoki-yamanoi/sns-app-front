<script setup lang="ts">
import { onMounted, ref } from "vue";
import getRecommendUsers from "@/api/user/usersReccomendGet";
import postsKeywordGet from "@/api/post/postsKeywordGet";
import RecommendUserItem from "@/components/RecommendUserItem.vue";
import { useUserStore } from "@/stores/userStore";
import { usePostStore } from "@/stores/postStore";

const userStore = useUserStore();
const postStore = usePostStore();
const keyword = ref<string>("");

onMounted(async () => {
  // おすすめユーザー取得
  userStore.recommendUsers = await getRecommendUsers();
});

// キーワード検索処理
async function doSearch() {
  postStore.keywordPosts = await postsKeywordGet({
    keyword: keyword.value,
  });
  // searchタブをactiveにする
  postStore.doSearchFlg = true;
  // 検索キーワードはストアに保存する（データ再取得に使うため）
  postStore.searchedKeyword = keyword.value;
}
</script>

<template>
  <div class="right_container">
    <div class="search_group">
      <div class="mb-3">
        <label for="keyword_search" class="form-label search_group_title">検索</label>
        <input
          type="text"
          class="form-control"
          id="keyword_search"
          aria-describedby="emailHelp"
          placeholder="キーワード"
          v-model="keyword"
        />
      </div>
      <button type="button" class="btn btn-success" @click="doSearch">検索</button>
    </div>
    <div class="recommend_group">
      <label class="recommend_group_title">おすすめユーザー</label>
      <div v-for="recommendUser in userStore.recommendUsers" :key="recommendUser.id">
        <RecommendUserItem :recommend-user="recommendUser" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right_container {
  width: 25%;
  border: 1px solid rgb(225, 224, 224);
  box-shadow: 0px 0px 4px #e6e3e3;
}

.search_group {
  padding: 20px 10px 40px 10px;
  border-bottom: 1px solid #c7c6c6;

  &_title {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
}

.recommend_group {
  padding: 20px 10px 0 10px;

  &_title {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .card {
    margin-bottom: 5px;
  }
}
</style>
