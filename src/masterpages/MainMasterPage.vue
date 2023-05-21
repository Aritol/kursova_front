<template>
  <div class="main_container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="middle_container">
      <div class="side_menu_container">
        <slot name="side-menu"></slot>
      </div>
      <div class="search_menu_container">
        <slot name="search-menu"></slot>
        <div>
          <slot> </slot>
        </div>
      </div>
    </div>
    <slot name="footer"> </slot>
  </div>
</template>

<script>
// import MainPage from "@/pages/MainPage";
export default {
  name: "MainMasterpage",
  components: {
    // MainPage,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/null.scss";
body * {
  font-family: "Geometria", sans-serif;
}
.main_container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  //   font-family: "Geometria", sans-serif;
  // font-family: Arial, sans-serif;
  //   font-size: 500;
}

.header {
  // margin-left: 15px;
}

.search_menu_container {
  // width: 100%;
  //   max-width: 290px;

  div {
    margin: 20px 0px 0px 20px;
  }
}
.side_menu_container {
  // width: 100%;
  //   max-width: 290px;
}

.middle_container {
  display: flex;
  margin-top: 5px;
}
</style>
