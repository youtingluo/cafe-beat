<template>
<Loading :active="isLoading" :z-index="1060" loader="bars" color="#84543B"></Loading>
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
    <div class="row">
      <div class="col-lg-8">
        <Form ref="orderForm" v-slot="{ errors }" @submit="sendOrder">
          <div class="mb-3">
            <label for="name" class="form-label">姓名 <span class="text-danger">*</span></label>
            <Field id="name" name="姓名" type="text" class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名"
            rules="required" v-model="form.user.name"></Field>
            <error-message name="姓名" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">信箱 <span class="text-danger">*</span></label>
            <Field id="email" name="信箱" type="email" class="form-control"
            :class="{ 'is-invalid': errors['信箱'] }" placeholder="請輸入信箱"
            rules="email|required" v-model="form.user.email"></Field>
            <error-message name="信箱" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">電話 <span class="text-danger">*</span></label>
            <Field id="tel" name="電話" type="tel" class="form-control"
            :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話"
            rules="required" v-model="form.user.tel"></Field>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">地址 <span class="text-danger">*</span></label>
            <Field id="address" name="地址" type="text" class="form-control"
            :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址"
            rules="required" v-model="form.user.address"></Field>
            <error-message name="地址" class="invalid-feedback"></error-message>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea id="message" name="地址" type="text" class="form-control"
            placeholder="留言給我們" rows="3"
            v-model="form.message"></textarea>
          </div>
          <div class="d-flex justify-content-between my-3">
            <div class="btn btn-outline-primary" @click="$router.go(-1)">↼ 上一步</div>
            <button class="btn btn-primary not-allowed" type="submit"
              :disabled="!isComplete">送出訂單</button>
          </div>
        </Form>
      </div>
      <div class="col-lg-4">
        <div class="text-center p-3 text-white bg-secondary">
          <h4 class="fw-bold">訂單列表</h4>
        </div>
        <div class="row g-0 justify-content-between py-3 bg-primary text-white text-nowrap"
        v-for="item in carts.carts" :key="item.id">
          <div class="col">
            <div class="ps-3">{{ item.product.title }}</div>
          </div>
          <div class="col"><div class="text-end">
            x {{ item.qty }} {{ item.product.unit }}
          </div></div>
          <div class="col"><div class="text-end pe-3">NT$ {{ item.total }}</div></div>
        </div>
        <div class="text-end p-3 bg-secondary text-dark">
          <h4 class="fw-bold">總價：NT$ {{ carts.final_total }}</h4>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import emitter from '../assets/javascript/emitter';

export default {
  data() {
    return {
      isLoading: false,
      carts: {
        carts: [],
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      validate: null,
    };
  },
  computed: {
    isComplete() {
      const allInput = [...document.querySelectorAll('form input')];
      const validate = allInput.filter((item) => item.classList.contains('is-invalid'));
      console.log(validate.length);
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
            this.isLoading = false;
            this.carts = res.data.data;
          } else {
            this.isLoading = false;
            emitter.emit('push-message', res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    sendOrder() {
      this.$http
        .post(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            if (res.data.orderId) {
              emitter.emit('push-message', res.data);
              emitter.emit('update-cart');
              this.$router.push(`/pay/${res.data.orderId}`);
            }
          } else {
            emitter.emit('push-message', res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getCarts();
  },
};
</script>

<style lang="scss">
  .not-allowed {
    cursor: not-allowed;
  }
</style>
