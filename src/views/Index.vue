<template>
  <div class="wrapper">
    <div class="introduction">
      <div class="gift_box">
        <h2>The Gift of<br />Good Style</h2>
        <p>
          I'm a paragraph. Click here to add your own text and edit me.<br />
          It’s easy. Just click “Edit Text” or double click me to add your<br />
          own content and make changes to the font.
        </p>
        <button>Shop Now</button>
      </div>
      <div class="candle_bg">
        <img
          src="https://static.wixstatic.com/media/84770f_acfc43cf570e4f6aa092ca77cb3a96c5~mv2.jpg/v1/fill/w_633,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_acfc43cf570e4f6aa092ca77cb3a96c5~mv2.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="shop_builder">
      <h3>Gifts up to $50</h3>
      <div class="shop_main_builder">
        <a>
          <font-awesome-icon icon="fa-solid fa-less-than" />
        </a>
        <ul class="picture_builder">
          <li>
            <img src="https://picsum.photos/170/170/?random=1" />
            <p>Patterned Socks</p>
            <p>$9.99</p>
          </li>
          <li>
            <span class="price_tag">
              <p>-10%</p>
            </span>
            <img src="https://picsum.photos/170/170/?random=2" />
            <p>Patterned Socks</p>
            <p>$9.99</p>
          </li>
          <li>
            <img src="https://picsum.photos/170/170/?random=4" />
            <p>Patterned Socks</p>
            <p>$9.99</p>
          </li>
          <li>
            <span class="price_tag">
              <p>-20%</p>
            </span>
            <img src="https://picsum.photos/170/170/?random=3" />
            <p>Patterned Socks</p>
            <p>$9.99</p>
          </li>
        </ul>
        <a>
          <font-awesome-icon icon="fa-solid fa-greater-than" />
        </a>
      </div>
    </div>
    <div class="advertisemen"></div>

    <div class="square_box">
      <h2>Home & Living Essentials</h2>
      <div class="box_column">
        <div class="commodity_img">
          <img src="https://picsum.photos/478/478/?random=10" />
        </div>
        <div class="commodity">
          <h1>Geometric Bedding</h1>
          <div class="price_text">
            <p class="price_delete">$99.99</p>
            <p>$79.99</p>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div class="box_column">
        <div class="commodity">
          <h1>Coastal Plates - Set of 4</h1>
          <div class="price_text">
            <p class="price_delete">$25.00</p>
          </div>
          <button>Add to Cart</button>
        </div>
        <div class="commodity_img">
          <img src="https://picsum.photos/478/478/?random=1" />
        </div>
      </div>
    </div>

    <div class="looks">
      <h3>Look Us Up @JSY</h3>
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
  background-color: #f1e4b8;
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
    background-color: #f1e4b8;
    border: 2px solid #000;
    margin: 50px 0;
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
    margin-top: 100px;
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
  background-image: url("https://static.wixstatic.com/media/c837a6_327e6bf04c1c4443ad6c4f13728c41fb~mv2.jpg/v1/fill/w_1179,h_639,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_327e6bf04c1c4443ad6c4f13728c41fb~mv2.jpg");
  height: 600px;
  background-repeat: no-repeat;
}
@media (max-width: 768px) {
  .advertisemen {
    width: 100%;
    display: block;
    margin-top: 500px;
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
      .price_text {
        width: 30%;
        // border: 5px solid gold;
        display: flex;
        justify-content: space-around;
        padding: 25px 0;
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
  }
  .picture_router {
    width: 100%;
    border: 5px solid firebrick;
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
