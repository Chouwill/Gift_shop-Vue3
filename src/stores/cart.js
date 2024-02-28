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
    // state.products.push(product);
  };
  const increment = (id) => {
    console.log("increment", id);
    const index = state.products.findIndex((item) => item.id === id);
    state.products[index].number++;
  };
  const decrement = (id) => {
    console.log("decrement", id);
    const index = state.products.findIndex((item) => item.id === id);
    if (state.products[index].number > 0) {
      state.products[index].number--;
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
    let value = 0;
    for (let i = 0; i < state.products.length; i++) {
      value += state.products[i].price * state.products[i].number;
    }
    return value;
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
