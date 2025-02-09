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

      <!-- 確認結帳按鈕 -->
      <button class="self_checkout" @click="SendOrder">下一步</button>
    </div>

    <!-- 彈窗 -->
    <div v-if="showPopup" class="popup-overlay" @click="closePopup"></div>
    <div v-if="showPopup" class="popup">
      <p v-html="popupMessage"></p>
      <button @click="closePopup" class="btn">關閉</button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useCartStore } from "../stores/cart";
import { useRouter } from "vue-router"; // 引入 useRouter
// 使用 router
const router = useRouter();

const cart = useCartStore();
const state = reactive(cart.state);
const totalPrice = computed(() => cart.totalPrice);

const showPopup = ref(false);
const popupMessage = ref("");

// 產生訂單編號
function ShopcartNum() {
  const DayNum = new Date();
  const year = DayNum.getFullYear();
  const month = String(DayNum.getMonth() + 1).padStart(2, "0"); // 確保兩位數
  const day = String(DayNum.getDate()).padStart(2, "0");
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${year}${month}${day}O${randomNum}`; // ✅ 回傳訂單編號
}

// 關閉彈窗的函式
const closePopup = () => {
  showPopup.value = false;
};

// 送出訂單
const SendOrder = () => {
  router.push("/checkoutForm")
  console.log(cart.state.products.length);
  console.log("777", cart.state.products);

  if (cart.state.products.length === 0) {
    // ✅ 購物車為空時，顯示彈窗，並顯示訊息「現在購物車是空的」
    popupMessage.value = "現在購物車是空的";
    showPopup.value = true;
  } else {
    // ✅ 購物車有商品時，產生訂單編號
    const orderNumber = ShopcartNum();
    // console.log("✅ 訂單編號：", orderNumber);

    // ✅ 顯示彈窗，並顯示訂單訊息
    popupMessage.value = `您的訂單編號為：${orderNumber}<br>謝謝您的購買！`;
    showPopup.value = true;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/media";
.cart_wrapper {
  width: 750px;
  max-width: 100%;
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

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 30px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  z-index: 1000;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
}

.popup p {
  margin-bottom: 20px;
}
</style>
