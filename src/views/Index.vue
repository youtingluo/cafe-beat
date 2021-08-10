<template>
  <header class="position-relative">
    <img
      class="header-bottom position-absolute"
      src="../assets/img/header_bottom.png"
      alt="header_bottom"
    />
    <div class="position-absolute text-white hero-text">
      YOU NEED BEAT NOT BEAN
    </div>
    <div class="container">
      <img class="logo" src="../assets/img/logo.svg" alt="logo" />
      <h1 class="h1 text-white my-5 font">Cafe Beat</h1>
      <p class="h3">每天都需要一杯咖啡，為什麼？<br />它，是你一天動力的來源</p>
      <div class="explore text-secondary fw-bold">Explore</div>
    </div>
  </header>
  <!-- section 第二區 -->
  <section class="life bg-secondary py-5 fw-bold">
    <img
      class="person position-absolute d-none d-md-block"
      src="../assets/img/person.svg"
      alt="person"
    />
    <div class="container">
      <div class="row mt-5 mt-lg-0">
        <div class="col-xl-9 offset-xl-3">
          <h2 class="fw-bold display-1 mb-5">一整天活力的來源</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <img
            class="img-fluid rounded rounded-5 border border-5"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1628573548125.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iP9enZN6TyGyWwDwn6JKx2XiG0djB8eIJaDFk1h0u936NwdS3%2FyMVL9FPFDDJdPvzQVJ0%2BDWIsMQwFNvIcjH4Iww4zEy8SFI43qqcYBjRgIhpDy%2BIfavUPZ6wE1xDfVRE073qiLcUTB1RuqTVguivAmxQCCDvIoQtZKy22YYyUwS%2FgIv5H5j3b%2Bnf1C437DJlP82Q%2FRwywg9VSFR7b3GQW5WeqeVULlH750ybnllg3lmVzlsCXDxu%2BKgOby2r%2FYWJUD%2BRGm5ZOGX0lI%2FPvgzkIAnY8CMdOvcZXA8Z%2BzmVDjhqyEl3%2FFI6I0C2BplQrs9HL8xlp1iDlHeDVPsxbKBiA%3D%3D"
            alt="coffee bean"
          />
        </div>
        <div class="col-lg-8">
          <p class="fs-2 my-5 my-lg-0">
            在繁忙生活中一個可以讓你精神旺盛的替代方案就顯得非常重要，除了提神飲料外，你有更好的選擇。
          </p>
          <p class="fs-2">就是一杯咖啡！</p>
          <p class="fs-2">咖啡，不只是飲料，是「人生」</p>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-sm-9">
          <h2 class="h1 my-4">探索我們更多產品</h2>
          <Button />
        </div>
        <div class="col-sm-3">
          <img class="img-fluid" src="../assets/img/cup.svg" alt="cup" />
        </div>
      </div>
    </div>
  </section>
  <!-- section 為何區 -->
  <section class="why pb-5 position-relative">
    <div class="poly poly-secondary"></div>
    <div class="container">
      <h2 class="text-center mb-5">為什麼你需要咖啡？</h2>
      <div class="row">
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="h-100 d-flex flex-column justify-content-between">
            <img
              class="img-fluid"
              src="../assets/img/breakfast.svg"
              alt="breakfast"
            />
            <h3 class="h3 text-center mt-5">早餐時，你需要它</h3>
          </div>
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="h-100 d-flex flex-column justify-content-between">
            <img class="img-fluid" src="../assets/img/work.svg" alt="work" />
            <h3 class="h3 text-center mt-5">工作時，你需要它</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="h-100 d-flex flex-column justify-content-between">
            <div>
              <img
                class="img-fluid"
                src="../assets/img/social.svg"
                alt="social"
              />
            </div>
            <div><h3 class="h3 text-center mt-5">社交時，你需要它</h3></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="poly poly-white"></div>
  <!-- section 烘焙區 -->
  <section class="way py-5 bg-primary">
    <div class="container">
      <h2 class="text-center mb-5">咖啡有什麼不一樣的烘焙法？</h2>
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="text px-5">
            <h3 class="text-secondary fw-bold">
              淺焙咖啡：保留咖啡豆最原始的風味
            </h3>
            <p class="my-5">
              咖啡豆的加工程序越少，保留的水果酸質越高，也越能代表咖啡豆原始的風味及品質，因此咖啡杯測時
              ，經常使用淺焙咖啡豆來測試。淺焙咖啡豆的顏色較淡，外觀的油脂比較少，沖煮出來的咖啡呈現淡褐色，通常帶有淡淡的花果香氣，風味明亮順口。
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <img
            class="img-fluid rounded-pill mb-5 mb-md-0"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1628573581022.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=W9lYtJNOH1nBXAP85CNG2xS0kYL5rMZEUsPQFakS1X5tVvFCeVWbwIB0kSZm5TxC6LWgwhmobDjtcCMZXpo4oSAwG%2BRKOUpChY2dVKPKJfmnkr3L%2Bk4Wb%2FGY3RTa1joP3omf6KsbNDUq7ofjFJvJV16aQKozE5CFm9%2Fr1p3rxKLsf%2By%2BbCYUmTt%2FWiplfMQoOkkYN%2BRKGp6KY71hxUU%2FtKvTbunc7cXkzA6NK%2FS6n2zBvdskzVQ0HKBjlO4ISAW5%2BFP3HZH6GjoylYwprE%2F9xsRgAA%2FJHhMvy39M%2FzJBGC6YqK1yhtPxjwygkePfNo%2BgIyxyDIM3fh3dId7hsA578Q%3D%3D"
            alt="淺焙咖啡"
          />
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-sm-6 order-last order-sm-first">
          <img
            class="img-fluid rounded-pill mb-5 mb-md-0"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1628573610305.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=NIMKjgpIoE%2FHVAshppQVs0zLLZUBffZnBtgp6wBuWDEIVOxGmnieHZtEs8RPGbdJlL9EPItYVdHeHzVqFEiNXaqLZ1wsZN%2BcyTWSwDga3ig8MrZe5O9qmGsq2IMsxAmx8WRcun%2B8iUl5duOs%2BUJ%2BypOKoLPsS20lirPpdVbAEZXEsriAlgVsAtbLmvkkw%2BAb6akgn%2BAcyr7r5g%2B0V0osL6M81KKmnq0EsXUBL4Mmy%2BRsUgwpahof%2BegRBUCNYxWUhU6cbQ6o9rK5pH5Mpn2yXEuwUGUhfs99vBHtKSkYwZGFKeScj5ZZXlRqH%2FocHh4jYVqUkFepv8Xz1%2FIsUeCB4g%3D%3D"
            alt="中焙咖啡"
          />
        </div>
        <div class="col-sm-6 order-first order-sm-last">
          <div class="text px-5">
            <h3 class="text-secondary fw-bold">
              中焙咖啡：在醇厚口感與酸度中取得平衡
            </h3>
            <p class="my-5">
              中度烘焙的咖啡豆表面會開始分泌油脂，顏色較接近栗子色，
              沖煮後的風味及香氣比淺焙咖啡更濃郁，可以同時品嘗到淡淡的酸味及咖啡的苦味，
              但相對地，花果香氣就會隨著烘焙時間拉長而減少。
            </p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="text px-5">
            <h3 class="text-secondary fw-bold">深焙咖啡：醇厚且濃烈的口感</h3>
            <p class="my-5">
              經過長時間的烘焙，深焙咖啡豆的外觀呈現深褐色，沖煮後的咖啡風味醇厚、濃郁，
              但幾乎無法品嚐到原始咖啡的風味特性，花果香氣已經完全被咖啡濃厚的風味取代。大部分Espresso咖啡就是使用深焙咖啡豆，加入牛奶或水製作成拿鐵及美式咖啡。
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <img
            class="img-fluid rounded-pill mb-5 mb-md-0"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/youting/1628573641640.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BGG7LvTo5eh626NQmW8CKUn7Z6C8yHOaxmv9QlO5Rc0w7V82y7nzUKzTP%2BrxFM3tw9yEtHMcGVXQ8JQGsfDrJlQWHb2zvVd%2BxsfX36Ndgmf7veiag14cveCIZf9U6RygJFkAcepVnqjZEWwrOssIzw6ZZm2eEVE9rvdBZo0QcowA36%2BAedkJJxr4m%2FDe6BkdOXoThCk9Fa6PyJ%2FJKW%2BlUAFhgkywYtHtEYz0Hj5%2FSHCX8EiHpTu1Y3JBufePdOhBwXhIunV9Flmwy4UX3HS1rVy54dyTJyzGJdB0%2FRTmcx6QwV7PK39YY%2BqvmPBR7r6L8dlRevECJQ1WaZSWqKzeng%3D%3D"
            alt="深焙咖啡"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- 我們的商品 -->
  <section class="sectionContact bg-secondary py-5">
    <h2 class="text-center text-dark fw-bold pb-3">
      <span class="material-icons-outlined"> email </span> 聯絡我們
    </h2>
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-9 col-lg-6">
          <BusinessCard/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue';
import BusinessCard from '@/components/BusinessCard.vue';

export default {
  components: {
    Button,
    BusinessCard,
  },
};
</script>
