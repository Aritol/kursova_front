<template>
  <!-- <div class="contiainer">
    <div class="main_wrapper">
      <div class="header_container">
        <header-menu />
      </div>
      <div class="content_container">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="slider_container">
          <slider />
        </div>
      </div>
      <div class="footer_container"></div>
    </div>
  </div> -->

  <div class="main_container">
    <main-master-page>
      <template #header>
        <header-menu />
      </template>
      <template v-slot:side-menu>
        <side-menu />
      </template>
      <template #search-menu>
        <search />
      </template>
      <!-- <div v-if="this.$route.params"><router-view></router-view></div> -->
      <div v-if="routeParams"><products-list /></div>
      <div v-else>
        <div class="main_content_container">
          <div class="slider_container">
            <slider />
          </div>
          <div class="bottom_container">
            <div class="delivery_status_contianer">
              <div class="wrapper">
                <div class="icon_cont">
                  <Icon
                    icon="carbon:delivery-parcel"
                    width="100px"
                    color="#fff"
                  />
                </div>
                <div class="info_cont">
                  <p>
                    Перевірка<br />
                    статусу замовлення
                  </p>
                  <button>
                    <p>Відстежити</p>
                    <div>
                      <Icon
                        icon="material-symbols:arrow-forward-ios"
                        width="20px"
                        color="#ffff"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="zsu_container">
              <div class="wrapper">
                <div class="icon_cont">
                  <Icon
                    icon="material-symbols:handshake-outline-sharp"
                    width="100px"
                    color="#ffff"
                  />
                </div>
                <div class="info_cont">
                  <p>
                    Працюємо<br />
                    та допомагаємо ЗСУ
                  </p>
                  <button>
                    <p>Детальніше</p>
                    <div>
                      <Icon
                        icon="material-symbols:arrow-forward-ios"
                        width="20px"
                        color="#ffff"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <Footer />
      </template>
    </main-master-page>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import MainMasterPage from "@/masterpages/MainMasterPage";
import SideMenu from "@/components/SideMenu";
import HeaderMenu from "@/components/HeaderMenu";
import Slider from "@/components/Slider";
import Search from "@/components/Search";
import ProductsList from "@/components/ProductsList";

export default {
  nane: "MainPage",
  components: {
    MainMasterPage,
    SideMenu,
    HeaderMenu,
    Slider,
    Search,
    Icon,
    ProductsList,
  },
  computed: {
    routeParams() {
      return Object.keys(this.$route.params).length;
    },
  },
};
</script>

<style lang="scss" scoped>
.main_container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.bottom_container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  div {
    background-color: #424d53;
    padding: 10px;
  }
}

.delivery_status_contianer {
  // background-color: #424d53;
  // padding: 10px;
}
.wrapper {
  display: flex;
}

.icon_cont {
  margin: 15px 10px 15px 20px;
}

.info_cont {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 500;
  color: #fff;
  // transition: all 0.5s;
  // :hover {
  //   background-color: #ffff;
  //   color: #424d53;
  // }

  button {
    margin-top: 10px;
    color: #fff;
    background: transparent;
    border: 2px solid #ffff;
    // vertical-align: middle;
    // padding: 5px;
    display: flex;
    font-size: 16px;
    // z-index: 1000;

    transition: all 0.5s;
    &:before {
      background-color: #646fd4;
    }
    &:before:hover {
      background-color: #646fd4;

      // width: 100%;
    }

    &:hover {
      background-color: #646fd4;
    }

    p {
      margin: 5px 2px 0px 8px;
    }

    div {
      // padding: 5px;
      padding: 5px 5px 2px 5px;
    }
  }
}
</style>
