<template>
  <div class="wrapper">
    <div class="introduction">
      <div class="gift_box">
        <h2>Stylish Gifts<br />Timeless Charm</h2>

        <p>
          Explore our collection. <br />Click to personalize and add your own
          style. <br />Just click "Edit Text" or double click to begin.
        </p>
        <button>Shop Now</button>
      </div>
      <div class="candle_bg">
        <img
          src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
    <div class="shop_builder">
      <h3>Gifts up to $100</h3>
      <div class="shop_main_builder"></div>
    </div>
    <div class="advertisemen"></div>

    <div class="square_box">
      <h2>Necessities of life</h2>
      <div class="box_column">
        <div class="commodity_img">
          <img
            src="https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div class="commodity">
          <h1>NoteBooks</h1>
          <div class="price_text">
            <p class="price_delete">$99.99</p>
            <p>$79.99</p>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div class="box_column">
        <div class="commodity">
          <h1>Pen</h1>
          <div class="price_text">
            <p class="price_delete">$25.00</p>
          </div>
          <button>Add to Cart</button>
        </div>
        <div class="commodity_img">
          <img
            src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>

    <div class="looks">
      <h3>Look PPC</h3>
      <Carousl :imgs="looksImages" />
      <!-- <ul class="picture_router">
        <li>
          <img src="https://picsum.photos/171/171/?random=11" />
        </li>
        <li>
          <img src="https://picsum.photos/210/210/?random=12" />
        </li>
        <li>
          <img src="https://picsum.photos/210/210/?random=13" />
        </li>
        <li>
          <img src="https://picsum.photos/210/210/?random=14" />
        </li>
        <li>
          <img src="https://picsum.photos/210/210/?random=15" />
        </li>
        <li>
          <img src="https://picsum.photos/210/210/?random=16" />
        </li>
        <li>
          <img src="https://picsum.photos/210/210/?random=17" />
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script setup>
import Carousl from "../components/Carousel.vue";
const looksImages = [
  "https://picsum.photos/210/210/?random=11",
  "https://picsum.photos/210/210/?random=12",
  "https://picsum.photos/210/210/?random=13",
  "https://picsum.photos/210/210/?random=14",
  "https://picsum.photos/210/210/?random=15",
  "https://picsum.photos/210/210/?random=16",
  "https://picsum.photos/210/210/?random=17",
  "https://picsum.photos/210/210/?random=18",
  "https://picsum.photos/210/210/?random=19",
];
</script>

<style lang="scss" scoped>
/* 首頁 */
* {
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
.wrapper {
  max-width: 100%;
}
.introduction {
  width: 100%;
  display: flex;
  min-height: 650px; //可能高度不夠
}
@media (max-width: 768px) {
  .introduction {
    display: block;
    margin: 0 0 10px;
  }
}

.gift_box {
  flex: 1;
  background-color: #d3bbdd;
  text-align: center;
  padding: 150px 0;

  h2 {
    font-size: 45px;
    font-weight: bolder;
  }

  p {
    font-size: 18px;

    /* font-weight: bolder; */
  }

  button {
    padding: 8px 30px;
    border-radius: 20px;
    background-color: #d3bbdd;
    border: 2px solid #000;
    margin: 50px 0;
    &:hover {
      background-color: #000;
      color: white;
    }
    &:active {
      background-color: #000;
      color: white;
    }
  }
}

.candle_bg {
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* height: 600px; */
}

.shop_builder {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px 0;
  h3 {
    text-align: center;
    font-size: 35px;
  }
  .shop_main_builder {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .picture_builder {
      display: flex;
      width: 90%;
      justify-content: space-evenly;
      align-items: center;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        flex: 0 0 auto;
        scroll-snap-align: start;
        .price_tag {
          top: 0;
          left: 0;
          display: block;
          padding: 2px 12px;
          overflow: hidden;
          position: absolute;
          margin-top: 10px;
          margin-left: 10px;
          background: #75a479;
          color: #ffffff;
          z-index: 99;
          border-radius: 100px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .shop_builder {
    width: 100%;
    padding: 24px 0;
    .shop_main_builder {
      .picture_builder {
        li {
          display: none;
          &:first-child {
            display: block;
          }
        }
      }
    }
  }
}
.advertisemen {
  background-size: cover;
  background-position: center;
  background-image: url("https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 600px;
  background-repeat: no-repeat;
}
@media (max-width: 768px) {
  .advertisemen {
    width: 100%;
    display: block;
    // margin-top: 500px;
  }
}
.square_box {
  // border: 5px solid green;
  width: 956px;
  height: 956px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 35px;
    font-weight: bolder;
    // padding: 20px 0;
  }
  .box_column {
    // background: yellow;
    display: flex;
    height: 50%;
    .commodity_img {
      flex: 1;
      img {
        width: 478px;
        height: 478px;
      }
    }
    .commodity {
      display: flex;
      flex: 1;
      // text-align: center;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      // border: 5px solid palegreen;
      background-color: #eae1f5;
      height: 100%;
      h1{
        font-weight: bolder;
        font-size: 25px;
      }
      .price_text {
        width: 30%;
        // border: 5px solid gold;
        display: flex;
        justify-content: space-around;
        padding: 25px 0;
        p:nth-child(1){
          text-decoration: line-through;
        }
      }
    }
    button {
      background: #eae1f5;
      padding: 5px 10px;
      border-radius: 100px;
      color: #000;
      cursor: pointer;
      border: 2px solid #000;
      &:hover {
        background: #000;
        color: white;
      }
      &:active {
        background: red;
      }
    }
  }
}
@media (max-width: 768px) {
  .square_box {
    display: none;
  }
}

.looks {
  padding: 40px 0;
  h3 {
    text-align: center;
    padding: 40px 0;
    font-weight: bolder;
    font-size: 35px;
  }
  .picture_router {
    width: 100%;
    display: flex;
    justify-content: center;

    gap: 50px;
    li {
      width: 300px;
      height: 250px;
      // border: 5px solid green;
      align-items: center;
      display: flex;
    }
  }
}

@media (max-width: 768px) {
  .looks {
    .picture_router {
      li {
        display: none;
        &:nth-child(-n + 3) {
          display: block;
        }
      }
    }
  }
}
</style>
