<template>
  <h2>6666666666</h2>
  <ul v-if="state.products.length">
    <li v-for="product in state.products" :key="product.id">
      {{ product.tiltle }}
      <img :src="product.imageUrl" :alt="product.title" width="100">
    </li>
  </ul>
</template>

<script setup>
import { reactive } from "vue";
import { getProducts } from "../apis/product";

const state = reactive({
  products: [],
  pagination: {
    total_pages: 1,
    current_page: 1,
    has_pre: false,
    has_next: false,
    category: null,
  },
});

const fechData = (page = 1) => {
  getProducts(page).then((res) => {
    if (res.data.success) {
      state.products = res.data.products;
      state.pagination = res.data.pagination;
    }
  });
};

fechData();
</script>

<style lang="scss" scoped></style>
