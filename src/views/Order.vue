<template>
  <Loading
    :active="isLoading"
    :z-index="1060"
    loader="bars"
    color="#84543B"
  />
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
      填寫資料
    </h2>
  </div>
  <section class="py-5">
    <div class="container">
      <div class="position-relative m-4">
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
            bg-light
            text-dark
            text-center
            rounded-pill
            px-3
            py-2
          "
        >
          3
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-lg-8">
          <Form ref="orderForm" v-slot="{ errors }" @submit="sendOrder">
            <div class="mb-3">
              <label for="name" class="form-label"
                >姓名 <span class="text-danger">*</span></label
              >
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              />
              <ErrorMessage
                name="姓名"
                class="invalid-feedback"
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label"
                >信箱 <span class="text-danger">*</span></label
              >
              <Field
                id="email"
                name="信箱"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['信箱'] }"
                placeholder="請輸入信箱"
                rules="email|required"
                v-model="form.user.email"
              />
              <ErrorMessage
                name="信箱"
                class="invalid-feedback"
              />
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label"
                >電話 <span class="text-danger">*</span></label
              >
              <Field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required|numeric|min:8|max:10"
                v-model="form.user.tel"
              />
              <ErrorMessage
                name="電話"
                class="invalid-feedback"
              />
            </div>

            <div class="mb-3">
              <label for="address" class="form-label"
                >地址 <span class="text-danger">*</span></label
              >
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              />
              <ErrorMessage
                name="地址"
                class="invalid-feedback"
              />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                id="message"
                name="地址"
                type="text"
                class="form-control"
                placeholder="留言給我們"
                rows="3"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-between my-3">
              <div class="btn btn-outline-primary" @click="$router.go(-1)">
                ↼ 上一步
              </div>
              <button
                class="btn btn-primary"
                :class="{ 'not-allowed': !isComplete, 'disabled' : icon.isLoading }"
                type="submit"
                :disabled="!isComplete"
              >
                <span
                  v-if="icon.isLoading"
                  class="spinner-border spinner-border-sm me-3"
                ></span>
                送出訂單
              </button>
            </div>
          </Form>
        </div>
        <div class="col-lg-4">
          <div class="text-center p-3 text-dark bg-light">
            <h4 class="fw-bold">訂單列表</h4>
          </div>
          <div
            class="
              row
              g-0
              justify-content-between
              py-3
              text-nowrap
              border-bottom
            "
            v-for="item in carts.carts"
            :key="item.id"
          >
            <div class="col">
              <div class="ps-3">{{ item.product.title }}</div>
            </div>
            <div class="col">
              <div class="text-end">
                x {{ item.qty }} {{ item.product.unit }}
              </div>
            </div>
            <div class="col">
              <div class="text-end pe-3">NT$ {{ item.total }}</div>
            </div>
          </div>
          <div class="text-end p-3">
            <h4 class="fw-bold">總價：NT$ {{ carts.final_total }}</h4>
          </div>
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
      width: 50,
      stepClass: ['bg-primary', 'text-white'],
      isLoading: false,
      icon: {
        isLoading: false,
      },
      carts: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    isComplete() {
      const allInput = [...document.querySelectorAll('form input')];
      const validate = allInput.filter((item) => item.classList.contains('is-invalid'));
      return this.form.user.name && this.form.user.email
        && this.form.user.tel && this.form.user.address && validate.length === 0;
    },
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.carts = res.data.data;
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.emitter.emit('push-message', res.data);
          }
        });
    },
    sendOrder() {
      this.icon.isLoading = true;
      this.$http
        .post(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            if (res.data.orderId) {
              this.emitter.emit('push-message', res.data);
              this.emitter.emit('update-cart');
              this.$router.push(`/pay/${res.data.orderId}`);
              this.icon.isLoading = false;
            }
          } else {
            this.emitter.emit('push-message', res.data);
          }
        });
    },
  },
  created() {
    this.getCarts();
  },
};
</script>

<style lang="scss">
.btn:disabled {
  pointer-events: all;
  cursor: not-allowed;
}
</style>
