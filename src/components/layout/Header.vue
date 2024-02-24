<template>
  <header>
    <div class="search">
      <div class="search_box">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input type="search" class="search_input"  placeholder="Search"/>
      </div>
    </div>
    <nav class="logo_menu">
      <h1><router-link to="/">JSY</router-link></h1>
      <ul :class="['menu', { show: menuIsShow }]">
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
    <div class="member">
      <a href="#"><font-awesome-icon icon="fa-solid fa-user" class="search_icon" /></a>
      <router-link to="/shoppingcart">Cart(0)</router-link>
      <!-- <button
        :class="['phone_menu', { active: menuIsShow }]"
        @click="toggleMenu"
      >
        <font-awesome-icon
          :icon="`fa-solid ${menuIsShow ? 'fa-xmark' : 'fa-bars'}`"
        />
      </button> -->
      <div
        class="menu-button"
        :class="{ open: menuIsShow }"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
        <!-- <span></span> -->
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";

const menuIsShow = ref(false);
// const iconName = computed(() =>
//   menuIsShow.value ? "fa-solid fa-xmark" : "fa-solid fa-bar"
// );

const toggleMenu = () => {
  menuIsShow.value = !menuIsShow.value;
};
// const toggleMenu = () => {
//   menuIsShow.value = !menuIsShow.value;
//   console.log("menuIsShow:", menuIsShow.value);
// };
</script>

<style lang="scss" scoped>
@import "../../assets/scss/media";
* {
  box-sizing: border-box;
  color: #000;
}
header {
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  @include pad {
    display: grid;
    grid-template-columns: 1fr auto;
  }
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;
  .search_box {
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 2px solid transparent;
    &:focus, &:hover {
      border-bottom-color: #000;
    }
    .search_icon{
      font-size: 1.2rem;
    }
    .search_input {
      border: none;
      padding: 8px 4px;
      &:focus {
        outline: none;
      }
      &::placeholder{
        color: #000;
        font-size: 1rem;
      }
    }
    &:focus-within {
      border-bottom: 2px solid #000;
    }
  }
  @include pad {
    display: none;
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
  @include pad {
    grid-template-rows: unset;
  }
}

.menu {
  text-align: center;
  display: flex;
  // padding: 20px 0;
  border: 5px solid gray;
  gap: 20px;
  padding-left: 20px;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
  @include pad {
    // display: none;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    font-size: 2rem;
    gap: 5vh;
    width: 70vw;
    height: 100vh;
    z-index: 100;
    top: 0;
    right: 0px;
    background-color: orange;
    &:not(.show) {
      display: none;
    }
  }
}

.member {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @include pad {
    // border: none;
    .menu-button {
      width: 30px;
      height: 22px;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      cursor: pointer;
      z-index: 105;

      span {
        display: block;
        position: absolute;
        height: 4px;
        width: 200px;
        background: #333;
        border-radius: 4px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        &:active {
          display: none;
        }

        &:nth-child(1) {
          top: 10px;
          left: 0;
        }

        &:nth-child(2) {
          top: 0px;
        }

        &:nth-child(3) {
          top: 20px;
        }
      }

      &.open {
        span {
          top: 10px;
          transform-origin: center;
          &:nth-child(1),
          &:nth-child(4) {
            width: 0%;
            left: 50%;
          }

          &:nth-child(2) {
            transform: rotate(45deg);
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
}

.phone_menu {
  display: none;
  @include pad {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 101;
    &.active {
      position: fixed;
      right: 20px;
    }
  }
}
</style>
