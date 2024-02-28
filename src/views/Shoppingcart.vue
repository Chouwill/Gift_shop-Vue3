<template>
  <div class="cart_wrapper">
    <div class="cart_header">
      <h2>購物車</h2>
      <font-awesome-icon icon="fa-solid fa-xmark" class="cancel" />
    </div>

    <div class="cart_main">
      <table class="cart_table">
        <thead>
          <tr>
            <th></th>
            <th>項目 POKE</th>
            <th>單價</th>
            <th width="50">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in state.products" :key="product.id">
            <td class="cart_item_pic">
              <img :src="product.imageUrl" />
            </td>
            <td class="cart_item_td">
              <h5>{{ product.title }}</h5>
              <div class="cart_controls">
                <button class="btn" @click="cart.decrement(product.id)">
                  <font-awesome-icon icon="fa-solid fa-minus" />
                </button>
                <span>{{ product.number }}</span>
                <button class="btn" @click="cart.increment(product.id)">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
              </div>
            </td>
            <td class="cart_item_price">
              {{ product.price * product.number }}
            </td>
            <td class="cart_item_trash">
              <button class="btn btn-trash" @click="cart.remove(product.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="cart_total">
        <tr>
          <th>訂單金額</th>
          <td>{{ totalPrice }}</td>
        </tr>
        <tr>
          <th>運費</th>
          <td>60</td>
        </tr>
        <tr>
          <th>總計</th>
          <td>{{ totalPrice + 60 }}</td>
        </tr>
      </table>
      <button class="self_checkout">確認結帳</button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
const state = reactive(cart.state);
const totalPrice = computed(() => cart.totalPrice);
</script>

<style lang="scss" scoped>
@import "../assets/scss/media";
.cart_wrapper {
  width: 750px;
  max-width: 100%;
  // border: 5px solid red;
  margin: 0 auto;
  padding: 1rem;
  .cart_header {
    display: flex;
    position: relative;
    text-align: center;
    margin-bottom: 1rem;
    border-bottom: 2px solid #000;

    h2 {
      width: 100%;
      font-size: 40px;
      font-weight: bolder;
      position: relative;
      margin: 15px 0;
    }
    .cancel {
      position: absolute;
      right: 10px;
    }
  }

  .cart_main {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .cart_table {
      width: 100%;
      margin: 0 auto;
      border-collapse: collapse;
      text-align: center;

      th,
      td {
        border: 1px solid #000;
        text-align: center;
        vertical-align: middle;
      }
      .btn {
        border: 0;
        background-color: transparent;
        &-trash {
          display: block;
          background-color: red;
          color: #fff;
          width: 100%;
          height: 100%;
        }
      }
      .cart_item_pic {
        padding: 0;
        width: 80px;
        height: 80px;
        line-height: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .cart_item_td {
        // width: 10vw;
        h5 {
          font-size: 25px;
          font-weight: bolder;
          margin-top: 0;
          margin-bottom: 8px;
        }
        span {
          font-size: 25px;
        }
        @include pad {
          h5,
          span {
            font-size: 18px;
          }
        }
        @include mobile {
          h5,
          span {
            font-size: 14px;
          }
        }
      }
      .cart_item_price {
        min-width: 50px;
      }
      .cart_item_trash {
        background-color: red;
      }
      .cart_controls {
        background-color: #17ae62;
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-width: 100px;
        max-width: 150px;
        margin: 0 auto;
      }
    }
    .cart_total {
      width: 100%;
      height: 100px;
      margin: 50px 0;

      tr {
        border-bottom: 2px solid #000;
        width: 100%;
        // height: 10px;
      }
      th,
      td {
        padding: 20px;
        vertical-align: middle;
      }
      th {
        text-align: left;
      }
      td {
        text-align: right;
      }
    }
  }
  .self_checkout {
    width: 100%;
    padding: 10px;
    margin: 15px;
    border: 0;
    background-color: brown;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
