<template>
  <div class="page-wrapper">
    <header class="page-header">
      <h2 class="page-header__title">Sale</h2>
      <p class="page-header__describe">
        This is your category description. It’s a great place to tell customers
        what this category is about, connect with your audience and draw
        attention to your products.
      </p>
    </header>

    <ul v-if="state1.products.length" class="product_list">
      <li v-for="product in state1.products" :key="product.id">
        <img :src="product.imageUrl" :alt="product.title" />
        <div class="product_information">
          <div class="product_text">
            <h4>{{ product.title }}</h4>
            <span>$ {{ product.price }}元</span>
          </div>
          <button @click="addCart(product)">加入購物車</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { getProducts } from "../apis/product";
import { onMounted, ref } from "vue";
import axios from "axios";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();

const notes = ref([]);

const state1 = reactive({
  products: [],
});

const addCart = (product) => {
  cart.add(product);
};

onMounted(async () => {
  const apiURL = `${import.meta.env.VITE_APP_API}/api/${
    import.meta.env.VITE_APP_PATH
  }/products`;
  const res = await axios.get(apiURL);
  if (res.data && Array.isArray(res.data.products)) {
    state1.products = res.data.products;
  }
  console.log(res);
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/media";
.product_list {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0 24px; //左右留白 24
  margin-bottom: 3rem;
  li {
    width: calc(
      (100% - 30px) / 3
    ); //  product_list寬度100% - gap左右各15 ，每排3個
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 5px 3px #f2f4f7;
    // border: 5px solid red;
    flex-direction: column;
    .product_information {
      padding: 5px 0;
      // border: 5px solid yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 100%;
      h4 {
        font-weight: 900;
        font-size: 16px;
        color: #000;
      }
      button {
        padding: 10px 10px;
        border-radius: 5px;
        border: none;
        font-weight: 700;
        font-size: 16px;
        color: #ffffff;
        background-color: #d9d9d9;
      }
    }
    @include pad {
      width: calc((100% - 15px) / 2); // 變2張
    }
    @include mobile {
      width: 100%;
    }
    img {
      width: 100%;
      height: 300px;
      margin: 10px 0;
      object-fit: cover;
    }
  }
}
</style>
