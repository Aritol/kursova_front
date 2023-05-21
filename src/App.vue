<template>
  <!-- <Icon icon="ic:baseline-add-to-queue" width="100px" /> -->
  <!-- <router-view></router-view> -->
  <div class="app">
    <!-- <main-page /> -->
    <!-- <main-master-page />
     -->
    <router-view></router-view>
    <!-- <div class="main_container">
      <main-master-page>
        <template #header>
          <header-menu />
        </template>
        <template v-slot:side-menu>
          <side-menu />
        </template>
        <template #footer>
          <Footer />
        </template>
      </main-master-page>
    </div> -->
  </div>
</template>

<script>
// import MainMasterPage from "@/masterpages/MainMasterPage.vue";
// import SideMenu from "@/components/SideMenu";
// import HeaderMenu from "@/components/HeaderMenu";
// import MainPage from "@/pages/MainPage";
export default {
  name: "App",
  components: {
    // MainPage,
    // MainMasterPage,
    // SideMenu,
    // HeaderMenu,
  },
};
</script>

<style lang="scss">
// @import "@/assets/styles/style.scss";
@import "@/assets/styles/null.scss";
// body * {
//   font-family: "Geometria", sans-serif;
// }
.app {
  // width: 100%;
  // max-width: 1200px;
  // margin: 0 auto;
  // font-family: "Geometria", sans-serif;
  // font-family: Arial, sans-serif;
  // font-weight: 600;
  // font-size: 500;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
