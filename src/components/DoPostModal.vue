<script setup lang="ts">
function doPost() {
  console.log("doPostします");
}
</script>

<template>
  <div
    class="modal fade"
    id="doPostModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">投稿モーダル</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          あああああいいいいいいいいいうううううううえええええええおおおおお
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            閉じる
          </button>
          <button type="button" class="btn btn-primary" @click="doPost">投稿する</button>
        </div>
      </div>
    </div>
  </div>
</template>
