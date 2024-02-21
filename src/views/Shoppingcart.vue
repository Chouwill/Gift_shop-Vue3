<template>
  <div class="cart_wrapper">
    <div class="cart_header">
      <h2>購物車</h2>
      <font-awesome-icon icon="fa-solid fa-xmark" class="cancel" />
    </div>

    <main>
      <table class="cart_table">
        <tr>
          <th></th>
          <th>項目 POKE</th>
          <th>單價</th>
          <th>刪除</th>
        </tr>
        <tr>
          <td class="cart_item">
            <img src="https://picsum.photos/200/150/?random=10" />
          </td>
          <td class="cart_item_td">
            <h5 class="3333">招牌早午餐</h5>
            <div class="cart_controls">
              <button><font-awesome-icon icon="fa-solid fa-minus" /></button>
              <span>1</span>
              <button><font-awesome-icon icon="fa-solid fa-plus" /></button>
            </div>
          </td>
          <td class="cart_item_td">200</td>
          <td class="cart_item_td">
            <button><font-awesome-icon icon="fa-solid fa-trash" /></button>
          </td>
        </tr>
        <tr>
          <td class="cart_item">
            <img src="https://picsum.photos/200/150/?random=10" />
          </td>
          <td class="cart_item_td">
            <h5 class="3333">招牌特餐</h5>
            <div class="cart_controls">
              <button><font-awesome-icon icon="fa-solid fa-minus" /></button>
              <span>3</span>
              <button><font-awesome-icon icon="fa-solid fa-plus" /></button>
            </div>
          </td>
          <td class="cart_item_td">200</td>
          <td class="cart_item_td">
            <button><font-awesome-icon icon="fa-solid fa-trash" /></button>
          </td>
        </tr>
        <tr>
          <td class="cart_item">
            <img src="https://picsum.photos/200/150/?random=10" />
          </td>
          <td class="cart_item_td">
            <h5 class="3333">招牌早午餐</h5>
            <div class="cart_controls">
              <button><font-awesome-icon icon="fa-solid fa-minus" /></button>
              <span>1</span>
              <button><font-awesome-icon icon="fa-solid fa-plus" /></button>
            </div>
          </td>
          <td class="cart_item_td">200</td>
          <td class="cart_item_td">
            <button><font-awesome-icon icon="fa-solid fa-trash" /></button>
          </td>
        </tr>
      </table>
      <table class="cart_total">
        <tr>
          <td>訂單金額</td>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>1000</th>
        </tr>
        <tr>
          <td>運費</td>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>60</th>
        </tr>
        <tr>
          <td>總計</td>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>1060</th>
        </tr>
      </table>
      <button class="self_checkout">確認結帳</button>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.cart_wrapper {
  width: 30%;
  display: block;
  // border: 5px solid red;
  margin: 0 auto;
  .cart_header {
    display: inline-flex;
    position: relative;

    h2 {
      font-size: 40px;
      font-weight: bolder;
      position: relative;
      margin: 15px 0;
      text-align: center;
      width: 750px;
      &::after {
        border-bottom: 2px solid #000;
        content: "";
        left: 0;
        bottom: -10px;
        width: 100%;
        position: absolute;
      }
    }
    .cancel {
      position: absolute;
      right: 10px;
    }
  }

  main {
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
        padding: 10px;
        text-align: left;
        vertical-align: middle;
        h5 {
          margin: 10px 0;
        }
      }
      .cart_item_td {
        // width: 10vw;
        h5 {
          font-size: 25px;
          font-weight: bolder;
        }
        span {
          font-size: 25px;
        }
      }
      .cart_controls {
        background-color: #17ae62;
        width: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
        // border: 5px solid gold;
        text-align: left;
        vertical-align: middle;
      }
    }
  }
  .self_checkout {
    padding: 10px;
    margin: 15px;
  }
}
</style>
