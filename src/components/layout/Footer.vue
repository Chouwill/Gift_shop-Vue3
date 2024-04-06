<template>
  <footer class="footer">
    <div class="footer_menu">
      <div class="footer_group">
        <h3 class="footer_title">Shop</h3>
        <ul class="footer_column">
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
      </div>
      <!-- <ul class="footer_column">
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
      </ul> -->
      <div class="footer_group">
        <h3 class="footer_title">Contact</h3>
        <ul class="footer_column">
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
      </div>
      <div class="footer_group">
        <h3 class="footer_title">Subscribe</h3>
        <p class="footer_description">
          Subscribe to our newsletter and be among the first to<br />
          hear about new arrivals, events and special offers.
        </p>
        <form class="footer_subscribe form">
          <div class="form-item">
            <label class="form-label">Email*</label>
            <input class="form-control" type="email" aria-label="Email" />
          </div>
          <div class="form-item">
            <button class="form-button" type="submit">Subscribe</button>
          </div>
        </form>
        <p>© 2035 by JSY. Powered and secured by Wix</p>
      </div>
    </div>
    <div class="footer_logo">
      <span>JSY</span>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "../../assets/scss/media";
.footer {
  background-color: #f1e4b8;
  &_menu {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 24px;
    gap: 20px;
    flex-wrap: wrap;
  }
  &_title {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  &_group {}
  &_column {
    font-weight: normal;
    li {
      margin-bottom: 0.8rem;
    }
  }
  &_icon {
    display: flex;
    gap: 0.8rem;
    font-size: 1rem;
  }
  &_description {
    margin-bottom: 1rem;
  }
  &_subscribe {
    width: 100%;
    display: flex;
    align-items: end;
    gap: 8px;
    margin-bottom: 2rem;
    .form-item:first-of-type {
      flex: 1;
    }
  }
  &_logo {
    text-align: center;
    padding: 0 24px 50px;
    span {
      font-size: 100px;
      font-weight: 700;
    }
  }
}

.form {
  &-item {
    margin-bottom: 8px;
  }
  &-label {
    display: block;
    margin-bottom: 4px;
  }
  &-control {
    width: 100%;
    height: 35px;
    border-radius: 20px;
    border: 2px solid #000;
    padding: 3px 8px;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  &-button {
    width: 100%;
    height: 35px;
    border-radius: 20px;
    border: 2px solid #000;
    padding: 3px 16px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      background-color: transparent;
      color: #000;
    }
  }
}

</style>