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
      產品內容
    </h2>
  </div>
  <section>
    <div class="row g-0">
      <div class="col-lg-6 background">
        <div
          class="
            product-img
            p-5
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <div class="img-wrap my-5 my-lg-0">
            <img :src="product.imageUrl" :alt="product.title" />
            <h3 class="badge bg-primary fs-6 mt-3">{{ product.category }}</h3>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div
          class="
            product-info
            d-flex
            flex-column
            justify-content-md-center
            align-items-start
          "
        >
          <h1 class="mt-5 mt-lg-0">{{ product.title }}</h1>
          <p
            class="my-3 my-lg-5 lh-md text-secondary"
            v-html="product.content"
          ></p>
          <del class="text-muted text-line-through"
            >原價：{{ product.origin_price }}</del
          >
          <p class="mb-5 fw-bold text-secondary h3">
            售價：{{ product.price }}
          </p>
          <div class="d-flex w-100 mb-5 mb-lg-0">
            <select
              class="form-select me-3 w-50"
              aria-label="select qty"
              v-model.number="qty"
            >
              <option selected disabled>選擇數量</option>
              <option :value="i" v-for="i in 5" :key="i">{{ i }}</option>
            </select>
            <button
              type="button"
              class="btn btn-outline-secondary"
              :class="{ disabled: product.id === icon.isLoading }"
              @click="addToCart(product.id)"
            >
              <span
                v-if="icon.isLoading === product.id"
                class="spinner-border spinner-border-sm me-3"
              ></span
              ><span v-else class="align-middle material-icons-outlined">
                add_shopping_cart </span
              >加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-primary py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-white">
          <div class="p-3">
            <h3
              class="
                border-bottom border-3 border-secondary
                p-3
                d-inline-block
                mb-3
              "
            >
              商品規格
            </h3>
            <ul>
              <li v-for="(str, key) in desStr" :key="key">
                <p>{{ str }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 text-white">
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
    </div>
  </section>
  <section class="py-5">
    <div class="container">
      <h2 class="mb-3">你可能會喜歡 ...</h2>
      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="item in similarProducts"
          :key="item.id"
        >
          <div class="product h-100" @click="getProduct(item.id)">
            <div>
              <div class="products-img-wrap">
                <div
                  class="products-img h-100"
                  :style="`background-image: url(${item.imageUrl})`"
                ></div>
              </div>
              <div class="d-flex flex-column justify-content-between p-4">
                <div>
                  <h2 class="fs-2">{{ item.title }}</h2>
                  <p class="fs-4">
                    $ {{ item.price }}
                    <span class="fs-6 text-decoration-line-through text-muted">
                      $ {{ item.origin_price }}</span>
                  </p>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    :class="{ disabled: icon.isLoading === item.id }"
                    @click.stop="addToCart(item.id)"
                  >
                    <span
                      v-if="icon.isLoading === item.id"
                      class="spinner-border spinner-border-sm me-3"
                    ></span
                    ><span v-else class="align-middle material-icons-outlined">
                      add_shopping_cart </span
                    >加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  inject: ['emitter'],
  data() {
    return {
      isLoading: false,
      product: {},
      allProducts: [],
      similarProducts: [],
      qty: 1,
      desStr: [],
      icon: {
        isLoading: '',
      },
    };
  },
  methods: {
    getProduct(id) {
      this.isLoading = true;
      this.similarProducts = [];
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.getAllproducts();
            this.isLoading = false;
          } else {
            this.emitter.emit('push-message', res.data);
          }
        });
    },
    getAllproducts() {
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.allProducts = res.data.products;
            this.getSimilarCategory();
          } else {
            this.emitter.emit('push-message', res.data);
          }
        });
    },
    getSimilarCategory() {
      const { category } = this.product;
      const filterCategory = this.allProducts.filter(
        (item) => item.id !== this.product.id && item.category === category,
      );
      const arrSet = new Set([]);
      const maxSize = filterCategory.length < 3 ? filterCategory.length : 3;
      for (let i = 0; arrSet.size < maxSize; i + 1) {
        const num = getRandomInt(filterCategory.length);
        arrSet.add(num);
      }
      arrSet.forEach((i) => {
        this.similarProducts.push(filterCategory[i]);
      });
    },
    addToCart(id) {
      const cart = { product_id: id, qty: this.qty };
      this.icon.isLoading = id;
      this.$http
        .post(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', res.data);
            this.emitter.emit('update-cart');
            this.icon.isLoading = '';
          } else {
            this.emitter.emit('push-message', res.data);
          }
        });
    },
  },
  watch: {
    product: {
      handler(val) {
        const desArr = val.description.split(',');
        this.desStr = desArr;
      },
      deep: true,
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.getProduct(id);
  },
};
</script>

<style lang="scss" scoped>
.product {
  cursor: pointer;
  background-color: #eee;
  transition: 0.3s;
  &:hover {
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.2);
  }
  &:hover .products-img {
    transform: scale(1.2);
  }
  .products-img-wrap {
    height: 220px;
    overflow: hidden;
    .products-img {
      background-size: cover;
      background-position: center;
      transition: 0.3s;
    }
  }
}
</style>
