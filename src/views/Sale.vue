<template>
  <div id="app">
    <h2>Sale</h2>
    <h4>
      This is your category description. It’s a great place to tell customers
      what this category is about, connect with your audience and draw attention
      to your products.
    </h4>

    <ul v-if="state1.products.length" class="product_list">
      <li v-for="product in state1.products" :key="product.id">
        <img :src="product.imageUrl" :alt="product.title" width="299" />
        {{ product.title }}
        <button @click="addCart(product)">加入購物車</button>
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

const addCart = (product) =>{
  cart.add(product);
}

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
#app {
  width: 100%;
  border: 5px solid greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .product_list {
    max-width: 60%;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 5px solid red;
      flex-direction: column;
    }
  }
}
</style>
