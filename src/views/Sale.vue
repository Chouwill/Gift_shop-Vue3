<template>
  <div class="page-wrapper">
    <header class="page-header">
      <h2 class="page-header__title">購物</h2>
      <p class="page-header__describe">
        探索我們精選的筆記本套裝，適合作家、藝術家和計劃者。每套筆記本都完美適合記錄您的想法和創意，旨在提升您的生產力並幫助您組織思路。
      </p>
    </header>

    <!-- partial:index.partial.html -->
    <!-- partial -->

    <span class="loader" v-if="loading"></span>
    <ul class="product_list" v-else>
      <li v-for="product in state1.products" :key="product.id">
        <img :src="product.imageUrl" :alt="product.title" />
        <div class="product_information">
          <div class="product_text">
            <h4>{{ product.title }}</h4>
            <span>$ {{ product.price }}元</span>
          </div>
          <button class="cartBtn" @click="addCart(product)">加入購物車</button>
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
import instance from "../utils/request";
import { useCartStore } from "../stores/cart";
const cart = useCartStore();

const loading = ref(false);

const notes = ref([]);

const state1 = reactive({
  products: [],
});

const addCart = (product) => {
  cart.add(product);
};

onMounted(async () => {
  //  onMounted 畫面進來之前
  try {
    loading.value = true;
    const apiURL = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products`;
    const res = await axios.get(apiURL);
    if (res.data && Array.isArray(res.data.products)) {
      state1.products = res.data.products;
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss" scoped>
* {
  border: none !important;
}
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
    width: calc((100% - 30px) / 3); //  product_list寬度100% - gap左右各15 ，每排3個
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 5px 3px #f2f4f7;
    border: 5px solid red;
    flex-direction: column;
    .product_information {
      padding: 5px 0;
      border: 5px solid yellow;
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
        &:hover {
          background-color: #9c9a9a;
        }
        &:active {
          background-color: #9c9a9a;
          box-shadow: inset 4px 10px 8px rgba(0, 0, 0, 0.2);
        }
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

/* Loader style */

.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 15px auto;
  position: relative;
  color: #ccc;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after,
.loader::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  left: 50%;
  transform: scale(0.5) translate(0, 0);
  background-color: #ccc;
  border-radius: 50%;
  animation: animloader 1s infinite ease-in-out;
}
.loader::before {
  background-color: #000;
  transform: scale(0.5) translate(-48px, -48px);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animloader {
  50% {
    transform: scale(1) translate(-50%, -50%);
  }
}

/* END Loader style */
</style>
