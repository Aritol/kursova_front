<template>
  <div class="main_container">
    <div class="main_wrapper">
      <div class="header_container">
        <div class="header_wrapper">
          <div class="title_container">
            <h1>{{ title }}</h1>
            <p>255</p>
          </div>
          <div class="filter_container">
            <p>Фільтри</p>
            <Icon
              icon="material-symbols:keyboard-arrow-down-rounded"
              width="30px"
              height="30px"
            />
            <!-- width="30px" -->
          </div>
        </div>
        <div class="search_container">
          <input type="text" placeholder="Введіть назву товару для пошуку" />
          <Icon icon="material-symbols:close-rounded" width="30px" />
        </div>
      </div>
      <div class="grid_container">
        <!-- <ul v-for="product in products" :key="product.id" class="products_list"> -->
        <ul class="products_list">
          <li class="product_item_container">
            <!-- <product-item :productData="product" class="product_item" /> -->
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
            <product-item class="product_item" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import ProductItem from "./common/ProductItem.vue";
export default {
  name: "ProductsList",
  components: {
    Icon,
    ProductItem,
  },
  computed: {
    title() {
      switch (this.$route.params.category) {
        case "pcs":
          return "ПК";
        case "laptops":
          return "Ноутбуки";
        case "monitors":
          return "Монітори";
        case "keyboards":
          return "Клавіатури";
        case "mouses":
          return "Миші";
        case "about":
          return "Про нас";
        case "contacts":
          return "Контакти";
        case "delivery":
          return "Як замовити";
        case "discounts":
          return "Акції";
        case "support":
          return "Підтримка";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";
.main_container {
  font-family: "Geometria", sans-serif;
}

.main_wrapper {
  margin-top: 30px;
}

.header_container {
  color: #4f5250;
}

.header_wrapper {
  display: flex;
  justify-content: space-between;
}

.title_container {
  display: flex;
  h1 {
    font-size: 36px;
  }
  p {
    margin-left: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #cca342;
    // display: inline-block;
    vertical-align: baseline;
  }
}

.filter_container {
  margin-top: 10px;
  display: flex;
  font-size: 22px;
  font-weight: normal;
  color: #a2c617;
  cursor: pointer;
  p {
    border-bottom: 2px solid #a2c617;
    transition: all 0.2s ease;
    &:hover {
      border-bottom: 2px solid transparent;
    }
  }

  svg {
    // height: 20px;
    // width: 50px;
  }
}

.search_container {
  input {
    width: calc(100% - 32px);
    display: inline;
    box-sizing: border-box;
    background: none;
    border: none;
    height: 34px;
    padding: 0;
    font-size: 16px;
    color: #989ea1;
    border-radius: 0;
    border-bottom: 1px solid #989ea1;
  }

  svg {
    vertical-align: middle;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
}

.product_item_container {
  display: flex;
  flex-wrap: wrap;
  // margin-left: 10px;
  margin-top: 10px;
  .product_item {
    // box-shadow: 0 1px 10px rgba(1, 2, 2, 0.15);
    margin: 20px auto;
    // padding: 20px;

    cursor: pointer;
  }
}
</style>
