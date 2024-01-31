<template>
  <header>
    <div class="search">
      <input type="search" value="search" />
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
      <li>
        <a href="#">Cart(0)</a>
      </li>
    </ul>
  </header>
  
</template>

<script setup></script>

<style lang="scss" scoped>

*{
  box-sizing: border-box;
  color: #000;
}
header {
  width: 100%;
  padding: 0 20px;
  border: 5px solid gold;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.search {
  display: flex;
  align-items: center;
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
</style>
