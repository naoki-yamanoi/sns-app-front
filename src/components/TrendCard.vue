<script setup lang="ts">
import getRecommendUsers from "@/api/usersReccomendGet";
import type { RecommendUser } from "@/types/user";
import { onMounted, ref } from "vue";
import RecommendUserItem from "@/components/RecommendUserItem.vue";

const recommendUsers = ref<RecommendUser[]>([]);

onMounted(async () => {
  recommendUsers.value = await getRecommendUsers();
});

function doKeywordSearch() {
  console.log("www");
}
</script>

<template>
  <div class="right_container">
    <div class="search_group">
      <form>
        <div class="mb-3">
          <label for="keyword_search" class="form-label search_group_title">検索</label>
          <input
            type="text"
            class="form-control"
            id="keyword_search"
            aria-describedby="emailHelp"
            placeholder="キーワード"
          />
        </div>
        <button type="button" class="btn btn-success" @click="doKeywordSearch">
          検索
        </button>
      </form>
    </div>
    <div class="recommend_group">
      <label class="recommend_group_title">おすすめ</label>
      <div v-for="recommendUser in recommendUsers" :key="recommendUser.id">
        <RecommendUserItem
          :recommend-user="recommendUser"
          @to-follow="recommendUser.followFlg = $event"
          @un-follow="recommendUser.followFlg = $event"
        />
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
