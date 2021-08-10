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
  <div class="full-page-background py-3">
    <div class="container-fluid">
      <div class="text p-5 text-center rounded-3">
        <img src="../assets/img/done_cup.svg" alt="done_cup.svg" />
        <p class="text-white my-5 text-center h1">恭喜您已購買完成</p>
        <div class="d-flex justify-content-center">
          <router-link to="/" class="btn btn-primary me-3 btn-lg-lg"
            >回首頁</router-link
          >
          <router-link to="/products" class="btn btn-primary"
            >繼續購物</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h1 {
  font-size: 10vmin;
}
.full-page-background {
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/youting/1628572775405.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=H%2BIDB1tTMSbEhN4OCPONjGJJNl9%2BxpfrVP%2F0ygJNi1ssZE7PtQqO2ANsTPGbOC5LdXFlJ%2FoDrqhFw0slTmAjLw7CiHfrfbd3d%2FwSjAGhnyJyU4heD%2BngDOt3lU7%2FeM2YWJIkc7umKxi2%2FXiXNDrhJKGwHW1P4m5qfJuEtyJeVbDGoWnmHWm%2F2%2BXZ2JBBPALS7okkg08txMr6rfJL2L1gDV3NfOHEgftMSM7cd5nqVQbEbRf%2Bp5xLF%2FdYkDHftAEEqLi4T9bwXbEzFwWLTlDgechE8f%2FkxsF%2B9IOhx0qx6UyLuQRFwMImoef6NeW2FszN0Dcfz5%2BrseTFIWGkszWhaA%3D%3D);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.text {
  background: rgba(0, 0, 0, 0.3);
}
</style>
