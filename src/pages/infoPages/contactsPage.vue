<template>
  <div class="main_container">
    <div class="main_wrapper">
      <div class="header_container"><header-menu /></div>
      <div class="wrap">
        <div class="side_menu_contianer"><side-menu /></div>
        <div class="right_col">
          <div class="header_search"><search /></div>
          <div class="content_container">
            <h1>Контакти</h1>
            <div class="green_block">
              <div class="column">
                <div class="row">
                  <Icon
                    icon="material-symbols:phone-android-outline-sharp"
                    width="30px"
                  />
                  <h1>Чати</h1>
                  <a href="https://t.me/TELEMARTUA_bot" target="_blank"
                    >Чат Telegram</a
                  >
                  <a href="viber://pa?chatURI=telemart-ua/" target="_blank"
                    >Чат Viber</a
                  >
                </div>
                <div class="row">
                  <Icon
                    icon="material-symbols:phone-android-outline-sharp"
                    width="30px"
                  />
                  <h1>Телефони</h1>
                  <p>(067) 400-08-80</p>
                  <p>(044) 392-84-94</p>
                </div>
              </div>
              <div class="column">
                <div class="row">
                  <Icon
                    icon="material-symbols:phone-android-outline-sharp"
                    width="30px"
                  />
                  <h1>Call-центр працює:</h1>
                  <a href="https://t.me/TELEMARTUA_bot" target="_blank"
                    >Чат Telegram</a
                  >
                  <a href="viber://pa?chatURI=telemart-ua/" target="_blank"
                    >Чат Viber</a
                  >
                </div>
                <div class="row_supp">
                  <Icon icon="ic:outline-support-agent" width="30px" />
                  <h1>Сервіс-консультант працює:</h1>
                  <p>Пн-Пт: 09:00-18:00</p>
                </div>
              </div>
              <div class="column">
                <div class="row">
                  <Icon icon="material-symbols:mail-outline" width="30px" />
                  <h1>E-mail:</h1>
                  <a>andreianov.@maksym</a>
                  <a>maxdurant2001@gmail.com</a>
                  <a>sales.telemarket.@ua</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ic:outline-support-agent
import SideMenu from "@/components/SideMenu";
import HeaderMenu from "@/components/HeaderMenu";
import Search from "@/components/Search";
import { Icon } from "@iconify/vue";
export default {
  name: "contactsPage",
  components: {
    Icon,
    SideMenu,
    HeaderMenu,
    Search,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/null.scss";
body * {
  font-family: "Geometria", sans-serif;
}
.main_container {
  // width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  //   font-family: "Geometria", sans-serif;
  // font-family: Arial, sans-serif;
  //   font-size: 500;
}
.main_container {
}
.main_wrapper {
}

.wrap {
  display: flex;
  margin-top: 10px;
}

.content_container {
  padding: 20px;

  h1 {
    font-size: 36px;
    font-weight: 400;
    color: #333;
    line-height: 45px;
    padding: 0 200px 10px 0;
    margin: 0;
  }
}

.header_search {
  & * {
    // margin: 20px 0px 0px 20px;
  }
}

.green_block {
  background: #a2c617;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;

  // &:nth-child(2) {
  //   margin-left: 60px;
  // }
}

.column {
  // margin-left: 40px;
  &:not(:first-child) {
    margin-left: 60px;
  }

  .row_supp {
    margin-top: 30px;
    svg {
      display: inline-block;
      color: #fff;
    }
  }

  svg {
    display: inline-block;
    color: #fff;
    // margin-top: 10px;
  }
  h1 {
    margin-left: 10px;
    display: inline-block;
    color: #fff;
    font-size: 16px;
    vertical-align: top;
    font-weight: 400;
    // position: relative;
    line-height: 30px;
    padding: 0 0 5px 0;
  }

  p {
    display: block;
    font-size: 16px;
    line-height: 25px;
    color: #4f5250;
    font-weight: 700;
    margin-left: 42px;
  }

  a {
    display: block;
    margin-left: 40px;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
