<template>
  <div class="full-page-background vh-100 d-flex justify-content-center align-items-center">
    <div class="container-fluid">
      <div
        class="
          text
          p-5
          d-flex
          justify-content-center
          flex-column
          align-items-center
        "
      >
        <img src="../assets/img/sad_cup.svg" alt="cup.svg" />
        <h1 class="text-white fw-bold my-5 text-center">404 NOT FOUND</h1>
        <div class="d-flex">
          <router-link to="/" class="btn btn-primary me-3 btn-lg-lg"
            >回首頁</router-link
          >
          <router-link to="/products" class="btn btn-primary"
            >我要購物</router-link
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
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/youting/1628572822356.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Fw%2BQaqGvmnFdoUSTLVmkRyOfp0stng4LKIWVFuoG4Ez2SQ40dQcnijIgXpXshzwmwYRLPz1Ga%2BvfY2the8hVyCWcxdv8%2F9Yo0jocYp6AvOtXwdb6iBwNfS2h%2Fv8eSReHxzoo7beravjJVF%2F4wcuEoe7ow0YsigGDOOFWpnulhY9bnV9F6C7x%2Frnibe82OB5obJZ4zCHcFBNg5jhOPKc3tIVA5cucdoye973%2Bbuk2YdAyy7yT%2BIdqoldTpsk074ydqgTPlknWyAsHwQmPZfxdzeKTGtoJ%2F86aLKh5D2poN%2FOBIru4EqLsuUYmfOfxp1QF0oXr6OfOksAeBTJN%2B%2BQSeg%3D%3D);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.text {
  background: rgba(0, 0, 0, 0.5);
}
</style>
