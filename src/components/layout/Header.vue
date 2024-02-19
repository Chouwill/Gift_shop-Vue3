<template>
  <header>
    <div class="search">
      <div class="search_box">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <input type="search" class="search_input" />
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
      <a href="#"><font-awesome-icon icon="fa-solid fa-user" /></a>
      <a href="#">Cart(0)</a>
      <button
        :class="['phone_menu', { active: menuIsShow }]"
        @click="toggleMenu"
      >
        <font-awesome-icon
          :icon="`fa-solid ${menuIsShow ? 'fa-xmark' : 'fa-bars'}`"
        />
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";

const menuIsShow = ref(false);
const iconName = computed(() =>
  menuIsShow.value ? "fa-solid fa-xmark" : "fa-solid fa-bar"
);

const toggleMenu = () => {
  menuIsShow.value = !menuIsShow.value;
};
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
    width: 100vw;
    height: 100vh;
    z-index: 100;
    top: 0;
    left: 0;
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
    border: none;
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
    &.active{
      position: fixed;
      right: 20px;
    }
  }
}
</style>
