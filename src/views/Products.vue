<template>
  <Loading :active="isLoading" :z-index="1060" loader="bars" color="#84543B" />
  <div class="container py-5">
    <div class="list-group list-group-horizontal mb-5">
      <a
        href="#"
        @click.prevent="filterProduct = ''"
        class="list-group-item list-group-item-action"
        :class="{ active: filterProduct === '' }"
        aria-current="true"
      >
        全部
      </a>
      <a
        href="#"
        v-for="item in categories"
        :key="item"
        @click.prevent="filterProduct = item"
        class="list-group-item list-group-item-action"
        :class="{ active: filterProduct === item }"
        aria-current="true"
      >
        {{ item }}
      </a>
    </div>
    <div class="position-relative">
      <div :class="{ breath: filterAni }"></div>
      <div class="row" :class="{ productLight: filterAni }">
        <div
          class="col-md-6 col-xl-4 mb-4"
          v-for="item in filterProducts"
          :key="item.id"
        >
          <div class="product h-100" @click="goToProduct(item)">
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
                  <p class="fs-4">$ {{ item.price }}</p>
                  <p class="ellipsis text-primary" v-html="item.content"></p>
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
  </div>
</template>

<script>

export default {
  inject: ['emitter'],
  data() {
    return {
      icon: {
        isLoading: '',
      },
      isLoading: false,
      products: [],
      allProducts: [],
      pagination: {},
      categories: [],
      filterProduct: '',
      filterAni: false,
      qty: 1,
    };
  },
  watch: {
    filterProduct() {
      this.filterAni = true;
      setTimeout(() => {
        this.filterAni = false;
      }, 500);
    },
  },
  computed: {
    filterProducts() {
      return this.allProducts.filter((item) => item.category.match(this.filterProduct));
    },
  },
  methods: {
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
            this.icon.isLoading = '';
          }
        });
    },
    getAllproducts() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.allProducts = res.data.products;
            this.getCategories();
            setTimeout(() => {
              this.isLoading = false;
            }, 500);
          } else {
            this.emitter.emit('push-message', res.data);
          }
        });
    },
    getCategories() {
      const categories = new Set();
      this.allProducts.forEach((item) => {
        categories.add(item.category);
      });
      this.categories = [...categories];
    },
    goToProduct(item) {
      this.$router.push(`/product/${item.id}`);
    },
  },
  mounted() {
    this.getAllproducts();
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
    height: 300px;
    overflow: hidden;
    .products-img {
      background-size: cover;
      background-position: center;
      transition: 0.3s;
    }
  }
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.productLight {
  animation: lighting 0.3s alternate;
}
@keyframes lighting {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
