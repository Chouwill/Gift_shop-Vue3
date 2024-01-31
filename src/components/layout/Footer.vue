<template>
  <footer>
    <div class="footer_menu">
      <ul class="footer_column">
        <h3><a href="#">Shop</a></h3>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Home & Living</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Stationery</a>
        </li>
        <li>
          <a href="#">Sale</a>
        </li>
        <li>
          <a href="#">Gift Card</a>
        </li>
      </ul>
      <ul class="footer_column">
        <h3><a href="#">Helpful Links</a></h3>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Shipping Policy</a>
        </li>
        <li>
          <a href="#">Sale</a>
        </li>
        <li>
          <a href="#">Gift Card</a>
        </li>
      </ul>
      <ul class="footer_column">
        <h3><a href="#">Contact</a></h3>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">Home & Living</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Stationery</a>
        </li>
        <li>
          <a href="#">Refund Policy</a>
        </li>
        <li class="footer_icon">
          <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-tiktok" /></a>
        </li>
      </ul>
      <div class="subscribe">
        <form action="">
          <h3><a href="#">Subscribe</a></h3>
          <li>
            <p>
              Subscribe to our newsletter and be among the first to<br />
              hear about new arrivals, events and special offers.
            </p>
          </li>
          <li>
            <label for="">Email*</label>
          </li>
          <li>
            <input type="email" />
            <button>Subscribe</button>
          </li>
          <li>
            <p>© 2035 by JSY. Powered and secured by Wix</p>
            <!-- 是否要拿掉 -->
          </li>
        </form>
      </div>
    </div>
    <div class="footer_logo">
      <h1>JSY</h1>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
* {
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
  color: #000;
}
footer {
  background-color: #F1E4B8;
  // display: flex;
  // flex-wrap: wrap;
  .footer_menu {
    display: flex;
    width: 100%;
    padding: 50px 0;
    background-color: #F1E4B8;
    justify-content: space-evenly;
    align-items: center;
    .footer_column {
      h3 {
        // font-size: 30px;
        padding: 0 0 20px;
        font-weight: 700;
        a {
          color: #000;
        }
      }
      li {
        padding: 0 0 8px;
      }
      .footer_icon {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border: 1px solid greenyellow;
        font-size: 15px;
      }
    }
    .subscribe {
      display: flex;
      justify-content: center;
      align-items: center;
      // border: 5px solid red;
      // padding: 0 20px 100px;

      h3 {
        padding: 0 0 20px;
        font-weight: 700;
        a {
          color: #000;
        }
      }
      li > p{
        color: red;
        padding: 0 0 10px;
      }
      li{
        padding: 0 0 10px;
        input{
          padding: 5px 10px;
          border-radius: 100px;
          border: 3px solid red;
          outline: none;
        }
        button{
          padding: 10px 25px;
          margin-left: 10px;
          background: #000;
          color: white;
          border-radius: 100px;
          font-weight: 700;
          &:hover{
            background-color: #F1E4B8;
            color: #000;
          }
        }
      }
    }
  }
  .footer_logo {
    background-color: #F1E4B8;
    h1 {
      font-size: 120px;
      text-align: center;
      padding: 50px 0;
    }
  }
}
</style>
