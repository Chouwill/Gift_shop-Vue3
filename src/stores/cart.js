import { defineStore } from "pinia";
import { reactive,computed } from "vue";
export const useCartStore = defineStore("cart", () => {
  const state = reactive({
    products: [],
  });

  const add = (product) => {
    const alreadyExistProduct = state.products.find(item => item.id === product.id);
    if(alreadyExistProduct){
        const index = state.products.indexOf(alreadyExistProduct);
        state.products.splice(index, 1,{
            ...product,
            num:alreadyExistProduct.num + 1
        })
    }else{
        state.products.push(product)
    }
    // state.products.push(product);
  };
  const increment = (id) => {
    console.log('increment', id);
  };
  const decrement = (id) => {
    console.log('decrement', id);
  };
  const remove = (id) => {
    console.log('remove', id);
  };

  const cartNum = computed(() => state.products.length)

  return {
    state,
    cartNum,
    add,
    increment,
    decrement,
    remove,
  };
});
