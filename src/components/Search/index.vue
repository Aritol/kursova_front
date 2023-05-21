<template>
  <div class="main_container">
    <div class="main_wrapper">
      <div class="search_line">
        <input
          type="text"
          class="search_input"
          placeholder="Пошук по усьом сайту"
        />
        <Icon icon="material-symbols:search-rounded" />
      </div>
      <div class="right_container">
        <div class="blocks">
          <div class="block">
            <Icon
              icon="ic:sharp-favorite-border"
              @click="this.$router.push({ name: 'favoritePage' })"
            />
          </div>
          <div class="block">
            <Icon
              icon="material-symbols:shopping-cart-outline"
              @click="this.$router.push({ name: 'cartPage' })"
            />
            <p>
              Кошик<br />
              порожній
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Search",
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.main_container {
  width: 100%;
  //   height: 100%;
  //   max-height: 50px;
  //   max-width: 890px;
  background-color: #484f54;
}
.main_wrapper {
  padding: 11px 20px 11px 10px;
  display: flex;
  justify-content: space-between;
  //   flex-wrap: wrap; // Allow items to wrap to the next line if necessary
  //   justify-content: space-between;
  //   justify-content: space-between;
  //   background-color: #484f54;
}

.search_line {
  margin-left: 30px;
  //   margin-right: 310px;
  display: flex;
  justify-content: space-around;
  //   max-width: 300px;

  input {
    background-color: #484f54;
    // padding: 20px 3px;

    width: 100%;
    // display: block;
    box-sizing: border-box;
    background: none;
    border: none;
    // height: 34px;
    padding: 0 30px 0 3px;
    font-size: 14px;
    color: #989ea1;
    border-radius: 0;
    border-bottom: 2px solid #989ea1;
    transition: 0.3s ease-in-out;

    color: #fff;
    &:focus {
      border-bottom: 2px solid #a2c617;
    }
  }

  svg {
    // height: 120px;
    color: #fff;
    font-size: 26px;
    // position: absolute;
    // left: 120px;
    // margin-left: 180px;
    cursor: pointer;
  }
}

.right_container {
  color: #fff;
  // margin-left: 550px;
  .blocks {
    display: flex;

    .block {
      display: flex;
      cursor: pointer;
      p {
        margin-left: 10px;
        margin-right: 20px;
        font-weight: 200;
      }

      svg {
        font-size: 28px;
        // position: absolute;
        // display: flex;
        margin-left: 15px;
      }
    }
  }
}
</style>
