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
  <section class="py-5 text-center" v-if="!carts.final_total">
    <h3>您的購物車是空的</h3>
    <div>
      <img
        class="mb-3"
        src="../assets/img/sad_cup.svg"
        title="購物車是空的"
        alt="sad_cup"
      />
    </div>
    <router-link to="/products" class="btn btn-outline-primary"
      ><span class="align-middle material-icons-outlined">
      shopping_cart
      </span>去購物</router-link
    >
  </section>
  <section class="py-5" v-else>
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-lg-8">
          <table ref="tableContainer" class="table text-primary position-relative">
            <Loading
              :container="$refs.tableContainer"
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
                <th width="200" class="d-none d-lg-table-cell">數量</th>
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
                    <div
                      class="btn btn-outline-primary"
                      :class="{ disabled: item.id === icon.isUpdate }"
                      @click="updateCart(item, item.qty - 1)"
                    >
                      <span
                        v-if="icon.isUpdate === item.id"
                        class="spinner-border spinner-border-sm"
                      ></span>
                      <span v-else>-</span>
                    </div>
                    <input
                      type="number"
                      class="form-control text-center"
                      :class="{ disabled: item.id === icon.isUpdate }"
                      aria-label="number"
                      v-model.number="item.qty"
                      @change="updateCart(item, item.qty)"
                    />
                    <div
                      class="btn btn-outline-primary"
                      :class="{ disabled: item.id === icon.isUpdate }"
                      @click="updateCart(item, item.qty + 1)"
                    >
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
                    <div
                      class="btn btn-outline-primary"
                      :class="{ disabled: item.id === icon.isUpdate }"
                      @click="updateCart(item, item.qty - 1)"
                    >
                      <span
                        v-if="icon.isUpdate === item.id"
                        class="spinner-border spinner-border-sm"
                      ></span>
                      <span v-else>-</span>
                    </div>
                    <input
                      type="number"
                      class="form-control text-center"
                      :class="{ disabled: item.id === icon.isUpdate }"
                      aria-label="number"
                      v-model.number="item.qty"
                      @change="updateCart(item, item.qty)"
                    />
                    <div
                      class="btn btn-outline-primary"
                      :class="{ disabled: item.id === icon.isUpdate }"
                      @click="updateCart(item, item.qty + 1)"
                    >
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
                    href="#"
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
          <div class="text-end fw-bold text-dark fs-5">
            總價：{{ carts.final_total }}
          </div>
          <div class="d-flex justify-content-between my-3">
            <div
              class="btn btn-outline-primary"
              @click="$router.push('/products')"
            >
              ↼ 繼續購物
            </div>
            <div class="btn btn-primary" @click="goNext">下一步 ⇀</div>
          </div>
        </div>
        <div class="col-md-5 col-lg-4">
          <div class="text-center p-3 text-dark bg-light">
            <h4 class="fw-bold">訂單列表</h4>
          </div>
          <div
            class="
              row
              g-0
              justify-content-between
              py-3
              bg-dark
              text-white text-nowrap
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
          <div class="text-end p-3 bg-light text-dark">
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
      carts: {
        carts: [],
        final_total: 0,
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
            this.isLoading = false;
            this.emitter.emit('push-message', res.data);
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
            this.getCarts();
            this.icon.isUpdate = '';
            this.emitter.emit('push-message', res.data);
            this.emitter.emit('update-cart');
          } else {
            this.isLoading = false;
            this.emitter.emit('push-message', res.data);
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
            this.emitter.emit('push-message', res.data);
            this.emitter.emit('update-cart');
          } else {
            this.emitter.emit('push-message', res.data);
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
            this.$router.push('/products');
            this.emitter.emit('push-message', res.data);
          } else {
            this.emitter.emit('push-message', res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goNext() {
      this.emitter.emit('update-cart');
      this.$router.push('/order');
    },
  },
  created() {
    this.getCarts();
    this.emitter.on('update-cart', () => {
      this.getCarts();
    });
  },
};
</script>
