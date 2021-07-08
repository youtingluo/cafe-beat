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
      您的購物車
    </h2>
  </div>
  <section class="py-5">
    <div class="container">
      <!-- 購物流程 -->
      <div class="d-flex justify-content-center mb-5">
        <div class="progresses">
          <div class="steps bg-primary rounded-circle">
            <span class="font-weight-bold">1</span>
          </div>
          <span class="line bg-primary"></span>
          <div class="steps bg-primary">
            <span class="font-weight-bold">2</span>
          </div>
          <span class="line bg-primary"></span>
          <div class="steps bg-primary">
            <span class="font-weight-bold">3</span>
          </div>
        </div>
      </div>
      <!-- 購物流程 END -->
      <div class="row">
        <div class="col-lg-8">
          <table class="table text-primary position-relative">
            <Loading
              :active="isLoading"
              :z-index="1060"
              loader="bars"
              color="#84543B"
              :is-full-page="false"
            ></Loading>
            <thead class="text-dark bg-secondary border-0">
              <tr>
                <th>品項</th>
                <th class="d-none d-lg-table-cell">商品圖</th>
                <th>單價</th>
                <th class="d-none d-lg-table-cell">數量</th>
                <th class="d-none d-lg-table-cell">金額</th>
                <th>移除</th>
              </tr>
            </thead>
            <tbody class="js-cartItem">
              <tr v-for="item in carts.carts" :key="item.id">
                <td>
                  <p class="fw-bold">{{ item.product.title }}</p>
                  <div class="wrap">
                    <img
                      class="d-lg-none"
                      :src="item.product.imageUrl"
                      alt="product"
                    />
                  </div>
                </td>
                <td class="d-none d-lg-table-cell">
                  <div class="wrap">
                    <img :src="item.product.imageUrl" alt="product" />
                  </div>
                </td>
                <td>
                  <p>NT$ {{ item.product.price }}</p>
                  <div class="input-group d-lg-none">
                    <div class="btn btn-outline-primary"
                    :class="{ 'disabled' : item.id === icon.isUpdate }"
                    @click="updateCart(item, item.qty - 1)">
                    <span
                      v-if="icon.isUpdate === item.id"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span v-else>-</span>
                    </div>
                    <input
                      type="number"
                      class="form-control text-center"
                      :class="{ 'disabled' : item.id === icon.isUpdate }"
                      aria-label="number"
                      v-model.number="item.qty"
                      @change="updateCart(item, item.qty)"
                    />
                    <div class="btn btn-outline-primary"
                    :class="{ 'disabled' : item.id === icon.isUpdate }"
                    @click="updateCart(item, item.qty + 1)">
                    <span
                      v-if="icon.isUpdate === item.id"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span v-else>+</span>
                    </div>
                  </div>
                </td>
                <td class="d-none d-lg-table-cell">
                  <div class="input-group">
                    <div class="btn btn-outline-primary"
                    :class="{ 'disabled' : item.id === icon.isUpdate }"
                    @click="updateCart(item, item.qty - 1)">
                    <span
                      v-if="icon.isUpdate === item.id"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span v-else>-</span>
                    </div>
                    <input
                      type="number"
                      class="form-control text-center"
                      :class="{ 'disabled' : item.id === icon.isUpdate }"
                      aria-label="number"
                      v-model.number="item.qty"
                      @change="updateCart(item, item.qty)"
                    />
                    <div class="btn btn-outline-primary"
                    :class="{ 'disabled' : item.id === icon.isUpdate }"
                    @click="updateCart(item, item.qty + 1)">
                    <span
                      v-if="icon.isUpdate === item.id"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span v-else>+</span>
                    </div>
                  </div>
                </td>
                <td class="d-none d-lg-table-cell">NT$ {{ item.total }}</td>
                <td>
                  <a
                    @click.prevent="removeCarts(item.id)"
                    class="
                      btn btn-outline-danger
                      material-icons-outlined
                      text-decoration-none
                    "
                    :class="{ disabled: icon.isLoading === item.id }"
                  >
                    <span
                      v-if="icon.isRemove === item.id"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span v-else class="align-base">delete_outline</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-end fw-bold text-secondary fs-5">
            總價：{{ carts.final_total }}
          </div>
          <div class="d-flex justify-content-between my-3">
            <div class="btn btn-outline-primary">↼ 繼續購物</div>
            <div class="btn btn-primary" @click="goNext">下一步 ⇀</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="order p-3 border border-3 bg-secondary">
            <h4>訂單列表</h4>
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
      carts: {
        carts: [],
      },
      quantity: 1,
      icon: {
        isUpdate: '',
        isRemove: '',
      },
      isLoading: false,
    };
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
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCart(item, qty) {
      this.isLoading = true;
      this.icon.isUpdate = item.id;
      const cart = { product_id: item.product_id, qty };
      this.$http
        .put(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            console.log(res.data.message);
            this.getCarts();
            this.icon.isUpdate = '';
            emitter.emit('push-message', res.data);
            emitter.emit('update-cart');
          } else {
            emitter.emit('push-message', res.data);
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeCarts(id) {
      this.icon.isRemove = id;
      this.$http
        .delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.icon.isRemove = '';
            this.getCarts();
            emitter.emit('push-message', res.data);
            emitter.emit('update-cart');
          } else {
            emitter.emit('push-message', res.data);
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeAllCarts() {
      this.$http
        .delete(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.message);
            this.$router.push('/products');
            emitter.emit('push-message', res.data);
          } else {
            emitter.emit('push-message', res.data);
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goNext() {
      emitter.emit('update-cart');
      this.$router.push('/order');
    },
  },
  created() {
    this.getCarts();
    console.log(this.$router, this.$route);
  },
};
</script>
