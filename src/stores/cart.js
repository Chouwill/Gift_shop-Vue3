import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
  const state = reactive({
    products: [],
  });

  const add = (product) => {
    const alreadyExistProduct = state.products.find(
      (item) => item.id === product.id
    );
    if (alreadyExistProduct) {
      increment(product.id);
    } else {
      state.products.push({
        ...product,
        number: 1,
      });
    }
  };

  const increment = (id) => {
    console.log("increment", id);
    const index = state.products.findIndex((item) => item.id === id);
    state.products[index].number++;
  };

  const decrement = (id) => {
    console.log("decrement", id);
    const index = state.products.findIndex((item) => item.id === id);
    if (state.products[index].number > 1) {
      state.products[index].number--;
    } else {
      // 數量變 0，則移除該商品
      state.products.splice(index, 1);
    }
  };

  const remove = (id) => {
    console.log("remove", id);
    const index = state.products.findIndex((item) => item.id === id);
    state.products.splice(index, 1);
  };

  const cartNum = computed(() => {
    return state.products.reduce((prev, current) => prev + current.number, 0);
  });

  const totalPrice = computed(() => {
    return state.products.reduce((sum, item) => sum + item.price * item.number, 0);
  });

  return {
    state,
    cartNum,
    totalPrice,
    add,
    increment,
    decrement,
    remove,
  };
});
