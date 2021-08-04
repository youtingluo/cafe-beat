<template>
  <Loading
    :active="isLoading"
    :z-index="1060"
    loader="bars"
    color="#84543B"
  ></Loading>
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
        <div
          class="btn btn-primary text-center btn-lg"
          @click="payment(order.id)"
        >
          確認付款
        </div>
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
      order: {},
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    payment(id) {
      this.$http
        .post(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/pay/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.$router.push(`/complete/${id}`);
          } else {
            this.emitter.emit('push-message', res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    console.log(this.$route);
    const { orderId } = this.$route.params;
    this.getOrder(orderId);
  },
};
</script>
