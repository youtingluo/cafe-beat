<template>
  <div class="cardmain">
    <h2 class="font mb-4">
    <img class="logo" src="../assets/img/logo.svg" alt="logo"> Cafe-beat
    </h2>
    <div class="d-flex justify-content-center align-items-center">
      <ul class="list-unstyled fs-4 text-start">
        <li class="mb-3">公司：cafe beat 股份有限公司</li>
        <li class="mb-3">地址：新北市三重區正義南路 87 號 1F</li>
        <li class="mb-3">電話：<a class="text-light"
        href="telto:02-22551234">02-22551234
          </a></li>
        <li class="mb-3">聯絡人：羅先生</li>
      </ul>
    </div>
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
  </div>
</template>

<style lang="scss" scoped>
.cardmain {
  border: 1px solid #111;
  background: rgb(0, 30, 48);
  color: #eee;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
  padding: 15px;
  text-align: center;
  position: relative;
  overflow: hidden;
  .logo {
    width: 30px;
  }
  &:hover .circle1 {
    left: -60px;
  }
  &:hover .circle2 {
    right: -60px;
  }
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 3px solid rgb(228, 0, 35);
  position: absolute;
  transition: all 0.6s;
}
.circle1 {
  top: 100px;
  left: -110px;
}
.circle2 {
  top: 100px;
  right: -110px;
}
.font {
  font-family: 'Viaoda Libre', cursive;
}
</style>
