<template>
  <div class="banner d-flex align-items-center justify-content-center">
    <h2
      class="
        text-white
        fw-bold
        bg-primary
        border-bottom border-3
        d-inline-block
        py-3
        px-5
      "
    >
      完成購物
    </h2>
  </div>
  <div class="bg py-3">
    <div class="container-fluid">
    <div class="text p-5 text-center rounded-3">
    <img src="../assets/done_cup.svg" alt="">
    <p class="text-white my-5 text-center h1">恭喜您已購買完成</p>
    <div class="d-flex justify-content-center">
      <router-link to="/" class="btn btn-primary me-3 btn-lg-lg">回首頁</router-link>
      <router-link to="/products" class="btn btn-primary">繼續購物</router-link>
    </div>
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  h1 {
    font-size: 10vmin;
  }
  .bg {
    background-image: url(https://images.unsplash.com/photo-1541870730196-cd1efcbf5649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .text {
    background: rgba(0, 0, 0, 0.3);
  }
</style>
