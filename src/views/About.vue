<template>
  <section class="py-5 bg-secondary fw-bold about">
    <div class="container">
      <h2
        class="
          text-secondary
          fs-1
          text-center
          mb-5
          position-relative
          d-inline-block
        "
      >
        - 關於我們 -
      </h2>
      <div class="row">
        <div class="col-lg-6">
          <img
            class="img-fluid rounded rounded-3"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1628570359544.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ZH0GbvZRSvTFe2%2FUGbdyO5tsOtGrI28fhJjiFyEERiHUbZHxbDoxelXQvbsSM42Qb52lPvBZhoXSReH48F8iVwdeVC9%2BRNLOa9s9aUpkgi9YLGTJqeLy%2FA2Sk6Mvhu0ibP%2FwB870KdVaS5O37oDOI%2B3eaKnCNdjp82ZK8Grsha1Vk9JnnrjV9Q4sqw8b6wuN%2BoYahtT2ts6i8a3PiI%2BIIDRrID9XifKnuXFqBfJNaq8W8QXG%2BLDChRCZdB2r1rghuoMkCT3SjAtCQR4jWnELHOTzwIG9wftz2qnD5bOUZfRIhPLvgu%2BLhce7igtKdjto2RJJH9oYDQXh4niznFkn%2Fw%3D%3D"
            alt="coffee"
          />
        </div>
        <div class="col-lg-6">
          <div class="pt-5 px-5">
            <p class="lh-md fs-4 mb-5">
              我們目標是提供最好的咖啡豆，給我們的客戶最棒的服務，每天的活力來源就從最好的一杯咖啡開始。我們也提供最優惠的價格！
            </p>
            <router-link to="/products" class="btn btn-secondary btn-lg"
              >探索產品</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-primary text-light py-5 service">
    <div class="container">
      <h2
        class="
          fs-1
          text-secondary text-center
          mb-5
          position-relative
          d-inline-block
        "
      >
        - 我們的服務 -
      </h2>
      <div class="row">
        <div class="col-lg-4">
          <h3 class="text-center mb-4">
            <span class="display-3 material-icons-outlined"> local_cafe </span
            ><br />最棒的產品
          </h3>
          <p class="fs-5 px-4">
            每顆咖啡豆都是用心烘焙的心血，我們要用最高的品質服務您，讓你體驗最好的最美味的一杯咖啡
          </p>
        </div>
        <div class="col-lg-4">
          <h3 class="text-center mb-4">
            <span class="display-3 material-icons-outlined"> attach_money </span
            ><br />最低的價格
          </h3>
          <p class="fs-5 px-4">
            提供市場最低價格，讓你擁有低價格也能享有高品質的體驗，CP
            值是大家要的也是我們所擁有的
          </p>
        </div>
        <div class="col-lg-4">
          <h3 class="text-center mb-4">
            <span class="display-3 material-icons-outlined">
              delivery_dining </span
            ><br />最快的運送
          </h3>
          <p class="fs-5 px-4">
            訂購後會以最快的速度運送到您的手中，不只讓您能最快享用到美味的咖啡，也能保證產品的最高新鮮度
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="pic pt-5 position-relative">
    <div class="container">
      <h2
        class="
          fs-1
          text-secondary text-center
          mb-5
          position-relative
          d-inline-block
        "
      >
        - 咖啡小知識 -
      </h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="pic1"></div>
          <div class="text">
            <h3>咖啡豆要不要放冰箱?</h3>
            <p class="pt-3">
              大家買回家或還沒喝完的咖啡豆都住在哪裡呢?有誰家的咖啡豆是住在冰箱裡的?
              如果還住在冰箱的，提醒你趕快幫豆豆們搬個新家吧！
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="pic2"></div>
          <div class="text">
            <h3 class="text-secondary">咖啡豆可以放多久？</h3>
            <p class="pt-3">
              一般來說，食品類的產品會看保存期和賞味期，咖啡豆屬食品類，
              有些咖啡大廠利用中央烘焙的方式量產咖啡豆，保存期限通常是在 12 到
              18 個月之間， 越新鮮的咖啡豆沖泡出來的咖啡越好喝哦！
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="pic3"></div>
          <div class="text">
            <h3>煮出最佳風味：烘焙度與水溫</h3>
            <p>
              沖煮咖啡時，熱水溫度要視使用的萃取工具和咖啡的烘焙度不同而跟著改變，這樣你就可以喝出每一隻咖啡豆的最佳風味唷！
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="pic4"></div>
          <div class="text">
            <h3>手磨的好新鮮：掌握研磨粗細</h3>
            <p class="pt-3">
              只要掌握一個原則：「沖煮時間愈長，適用較粗的咖啡粉；
              沖煮時間愈短，則適用較細的咖啡」，這樣就可以避免咖啡粉磨太粗結果沒味道；
              粉磨太細，結果沖出過多雜味和咖啡因的不好下場。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-light text-dark py-5 subscribe">
    <div class="container">
      <h2
        class="
          fs-1
          text-secondary text-center
          mb-5
          position-relative
          d-inline-block
        "
      >
        - 訂閱我們 -
      </h2>
      <div>
        <p class="fs-3">喜歡我們的產品嗎？訂閱我們即時收到最新優惠！</p>
        <div class="btn-group" role="group" aria-label="Basic outlined example">
          <input
            type="email"
            class="form-control rounded-0 rounded-start"
            id="exampleFormControlInput1"
            placeholder="輸入電子郵件"
          />
          <button type="button" class="btn btn-outline-primary text-nowrap">
            訂閱我們
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
