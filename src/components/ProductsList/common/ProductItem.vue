<template>
  <div class="main_container" @click="toProduct(productData.id)">
    <div class="main_wrapper">
      <div class="header_container">
        <!-- <h1>{{ productData.name }}</h1> -->
        <h1>
          Комп'ютер Boxed Gaming GTX1660S Base (TCGB-10100N1660S-16S480Bk) Black
        </h1>
        <div class="subheader_cont">
          <div class="article">
            <p>Код: 445994</p>
          </div>
          <div class="answer">
            <Icon icon="ic:baseline-star-rate" width="20px" />
            <p>4.9</p>
          </div>
        </div>
      </div>
      <div class="photo_container">
        <img src="@/assets/images/pcs/pc_photo_main.png" alt="" />
      </div>
      <div class="bottom_container">
        <h1>Закінчується</h1>
        <div class="wrapper">
          <div class="price_container">
            <p class="crossed_price">25 199 грн</p>
            <p>20 999 грн</p>
          </div>
          <div class="buttons_container">
            <Icon icon="ic:sharp-favorite-border" width="35px" class="fav_ic" />
            <div class="buy_button">
              <Icon icon="ic:round-shopping-basket" width="35px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "productItem",
  components: {
    Icon,
  },
  props: {
    productData: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    toProduct() {
      this.$router.push({ name: "productPage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.main_container {
  color: #484f54;
  max-width: 290px;
  padding: 25px;
  &:hover {
    box-shadow: 0 1px 10px rgba(1, 2, 2, 0.15);
  }
}
.main_wrapper {
  margin: 0 auto;
  //   margin: 25px auto;
  max-width: 240px;

  &:hover {
  }
  hr {
    border: 0;
    clear: both;
    display: block;
    width: 100%;
    background-color: #e5e5e5;
    height: 1px;
  }
}

.header_container {
  h1 {
    vertical-align: top;
    font-size: 18px;
    font-weight: 500;
  }
}

.subheader_cont {
  display: flex;
  justify-content: space-between;
  //   margin: 0px 20px;
  margin-top: 15px;
  .article {
    margin-top: 5px;
  }
  .answer {
    display: flex;
    color: #efc500;
    p {
      color: #484f54;
      margin-top: 5px;
    }
  }
}

.photo_container {
  margin-top: 20px;
  img {
    width: 240px;
  }
}

.bottom_container {
  margin-top: 20px;
  h1 {
    color: #fe33ba;
  }

  .wrapper {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .price_container {
    p:first-child {
      text-decoration: line-through;
      font-weight: bold;

      color: #989ea1;
      font-size: 16px;
      margin-bottom: 25px;
    }
    p {
      margin-top: 10px;
      font-size: 22px;
      font-weight: bold;
    }
  }

  .crossed_price {
  }
}

.buttons_container {
  display: flex;
  margin-top: 40px;
  //   margin-left: 20px;
  //   padding: 5px;
  // &:hover {
  //   color: red;
  // }

  .fav_ic {
    margin-top: 3px;
    cursor: pointer;
  }

  .buy_button {
    background-color: #a2c617;
    transition: all 0.2s ease;
    cursor: pointer;
    max-height: 40px;
    padding: 3px;
    margin-left: 10px;
    &:hover {
      background-color: #b7cf52;
    }
    svg {
      color: #ffff;
      //   margin-top: 5px;
      vertical-align: bottom;
    }
  }
}
</style>
