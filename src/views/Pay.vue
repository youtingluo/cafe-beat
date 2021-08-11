<template>
  <Loading :active="isLoading" :z-index="1060" loader="bars" color="#84543B" />
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
      確認付款
    </h2>
  </div>
  <section>
    <div class="container">
      <div class="position-relative m-5">
        <div class="progress" style="height: 1px">
          <div
            :style="`width: ${width}%`"
            class="progress-bar"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div
          class="
            position-absolute
            top-0
            start-0
            translate-middle
            text-center
            rounded-pill
            px-3
            py-2
          "
          :class="stepClass"
        >
          1
        </div>
        <div
          class="
            position-absolute
            top-0
            start-50
            translate-middle
            text-center
            rounded-pill
            px-3
            py-2
          "
          :class="stepClass"
        >
          2
        </div>
        <div
          class="
            position-absolute
            top-0
            start-100
            translate-middle
            text-center
            rounded-pill
            px-3
            py-2
          "
          :class="stepClass"
        >
          3
        </div>
      </div>
      <div class="text-dark d-flex justify-content-evenly" v-if="order.user">
        <div class="p-3">
          <h3
            class="
              border-bottom border-3 border-secondary
              p-3
              d-inline-block
              mb-3
            "
          >
            您的訂單明細
          </h3>
          <ul>
            <li>
              <p>姓名：{{ order.user.name }}</p>
            </li>
            <li>
              <p>信箱：{{ order.user.email }}</p>
            </li>
            <li>
              <p>地址：{{ order.user.address }}</p>
            </li>
            <li>
              <p>電話：{{ order.user.tel }}</p>
            </li>
            <li v-if="order.message">
              <p>留言：{{ order.message }}</p>
            </li>
          </ul>
        </div>
        <img src="../assets/img/cup.svg" alt="cup image" />
      </div>
      <div class="text-center mb-3">
        <button
          type="button"
          class="btn btn-primary text-center btn-lg"
          :disabled="icon.isLoading"
          @click="payment(order.id)"
        >
          <span
            v-if="icon.isLoading"
            class="spinner-border spinner-border-sm me-3"
          ></span
          >確認付款
        </button>
      </div>
    </div>
    <div class="text-dark bg-primary text-white">
      <div class="container">
        <div class="p-3">
          <h3
            class="
              border-bottom border-3 border-secondary
              p-3
              d-inline-block
              mb-3
            "
          >
            退換貨須知
          </h3>
          <ol>
            <li>
              <p>
                請注意：除商品本身瑕疵外，為顧及個人衛生問題，拆封後恕無法退換貨，敬請見諒。
                務必保持商品及相關配件完整性，並請於收到商品日起 7
                天內（含假日）與我們聯繫，辦理換貨事宜（外包塑膠膜已撕開或商品塑膠袋已打開，即算開封狀態）
              </p>
            </li>
            <li>
              <p>
                依《消保法》規定，消費者有 7
                日商品鑑賞期之權益。猶豫期非試用期，
                商品需全新未開封，若商品已開封，恕無法辦理退貨退款手續。收到商品超過
                7 天，恕不接受退貨。
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  inject: ['emitter'],
  data() {
    return {
      stepClass: ['bg-primary', 'text-white'],
      width: 100,
      order: {},
      icon: {
        isLoading: false,
      },
      isLoading: false,
      orderId: '',
    };
  },
  methods: {
    getOrder(id) {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            this.isLoading = false;
          } else {
            this.emitter.emit('push-message', res.data);
          }
        });
    },
    payment(id) {
      this.icon.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/pay/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.$router.push(`/complete/${id}`);
            this.icon.isLoading = false;
          } else {
            this.emitter.emit('push-message', res.data);
          }
        });
    },
  },
  created() {
    const { orderId } = this.$route.params;
    this.getOrder(orderId);
  },
};
</script>
