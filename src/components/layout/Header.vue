<template>
  <header>
    <div class="search">
      <div class="search_box">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input type="search" class="search_input" />
      </div>
    </div>
    <nav class="logo_menu">
      <router-link to="/"><h1>JSY</h1></router-link>
      <ul class="menu">
        <li>
          <router-link to="/home">HOME & Living</router-link>
        </li>
        <li>
          <router-link to="/accessories">Accessories</router-link>
        </li>
        <li>
          <router-link to="/stationery">Stationery</router-link>
        </li>
        <li>
          <router-link to="/sale">Sale</router-link>
        </li>
        <li>
          <router-link to="/gift-card">Gift Card</router-link>
        </li>
      </ul>
    </nav>
    <ul class="member">
      <li>
        <a href="#"><font-awesome-icon icon="fa-solid fa-user" /></a>
      </li>
      <li class="cart_num">
        <a href="#">Cart(0)</a>
      </li>
    </ul>
    <div class="phone_menu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  color: #000;
}
header {
  width: 100%;
  padding: 0 20px;
  // border: 5px solid gold;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.search {
  display: flex;
  align-items: center;
  .search_box {
    &:focus {
      border-bottom: 10px solid #000;
    }
    .search_input {
      border: none;
      &:focus {
        outline: none;
      }
    }
    &:focus-within {
      border-bottom: 2px solid #000;
    }
  }
}

.logo_menu {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  h1 {
    border: 1px solid greenyellow;
    text-align: center;
    padding: 30px 0;
    box-sizing: border-box;
  }
}

.menu {
  text-align: center;
  display: flex;
  padding: 20px 0;
  border: 5px solid gray;
  gap: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
}

.member {
  display: flex;
  align-items: center;
  justify-content: right;
  border: 10px solid red;

  li {
    margin-right: 30px;
    border: 10px solid red;
  }
}

.phone_menu{
  display: none;
}



@media (max-width: 768px) {
  header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    height: 90px;
    padding: 0 0;
    .logo_menu {
      .menu {
        display: none;
      }
    }
    .search {
      display: none;
    }
    .member {
      // display: flex;
      border: none;
      height: 90px;
      // justify-content: center;
      // align-items: center;
      li {
        border: none;
        list-style: none;
        a {
          text-decoration: none;
        }
      }
      li:first-child {
        display: none;
      }
    }
    .phone_menu{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90px;  //似乎都要被下固定寬???
    }
  }
}
</style>
