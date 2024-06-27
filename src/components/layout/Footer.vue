<template>
  <footer class="footer">
    <div class="footer_menu">
      <div class="footer_group">
        <h3 class="footer_title">路線圖</h3>
        <ul class="footer_column">
          <li>
            <a href="/home">首頁</a>
          </li>
          <li>
            <a href="/sale">購物</a>
          </li>
          <li class="footer_icon">
            <a href="#" target="_blank" title="instagram"
              ><font-awesome-icon icon="fa-brands fa-instagram"
            /></a>
            <a href="#" target="_blank" title="facebook"
              ><font-awesome-icon icon="fa-brands fa-facebook"
            /></a>
            <a href="#" target="_blank" title="tiktok"
              ><font-awesome-icon icon="fa-brands fa-tiktok"
            /></a>
          </li>
        </ul>
      </div>
      <div class="footer_group">
        <h3 class="footer_title">服務條款</h3>
        <p class="footer_description">
          本網站提供一般資訊；我們不保證其準確性或完整性。<br>
          使用者需自行承擔使用本網站的任何風險。
        </p>
        
        <!-- <form class="footer_subscribe form">
          <div class="form-item">
            <label class="form-label">Email*</label>
            <input class="form-control" type="email" aria-label="Email" />
          </div>
          <div class="form-item">
            <button class="form-button" type="submit">Subscribe</button>
          </div>
        </form> -->
      </div>
    </div>

    <div class="footer_logo">
      <span>PPC</span>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/scss/media";
.footer {
  background-color: #d3bbdd;
  &_menu {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 24px 24px;
    gap: 20px;
  }
  &_title {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  &_group {
  }
  &_column {
    font-weight: normal;
    li {
      margin-bottom: 0.8rem;
    }
  }
  &_icon {
    display: flex;
    gap: 1rem;
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
    // margin-bottom: 2rem;
    .form-item:first-of-type {
      flex: 1;
    }
  }
  &_copyright {
    text-align: center;
    margin-bottom: 24px;
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

.footer_exhibit {
  color: #000;
  margin: 20px 0;
}
</style>
