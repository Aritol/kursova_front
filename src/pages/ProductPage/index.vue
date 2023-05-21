<template>
  <div class="main_container">
    <div class="main_wrapper">
      <div class="header_menu_container">
        <header-menu />
      </div>
      <div class="side_menu_container">
        <div>
          <side-menu />
        </div>
        <div class="content_container">
          <search />
          <div class="content_wrapper">
            <h1>
              Комп'ютер Boxed Gaming RTX3060Ti Pro (BGP-5600N3060Ti-16S1TBk)
              Black
            </h1>
            <div class="wrapper">
              <div class="photo_container">
                <p>Код: <span>470613</span></p>
                <img src="@/assets/images/pcs/pc_photo_main.png" alt="" />
                <div class="slider_container"></div>
              </div>
              <div class="info_container">
                <div class="aviability">
                  <p>Закінчується</p>
                </div>
                <div class="price_container">
                  <p class="promotion_price">39 499 грн</p>

                  <p>34 999 грн</p>

                  <div class="promo_percent">
                    Ви економите <span>4 500 </span>грн <span>-11%</span>
                  </div>
                </div>
                <div class="buttons_container">
                  <div class="fav_button">
                    <Icon icon="ic:sharp-favorite-border" width="30px" />
                    <p>До списку бажань</p>
                  </div>
                  <div class="buy_button">
                    <Icon icon="ic:round-shopping-basket" width="35px" />
                    <p>Купити</p>
                  </div>
                  <div class="update_button">
                    <Icon icon="ic:baseline-mode-edit" width="30px" />
                    <p>Редагувати</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="characteristics_container">
              <h1>Характеристики:</h1>
              <div>
                <p>Процесор: AMD Ryzen 5 5600 (3.5-4.4), 6 ядер</p>
                <p>Материнська плата:B450</p>
                <p>Відеокарта: RTX 3060 Ti, 8 ГБ</p>
                <p>Внутрішній накопичувач: 1024 ГБ (SSD)</p>
                <p>
                  Внутрішній накопичувач: Накопичувач PCI-E з підтримкою NVMe
                </p>
                <p>Оперативна пам'ять: 16 ГБ, 3200 МГц (DDR4)</p>
                <p>Блок живлення: 600 Вт</p>
                <p>Сертифікат блока живлення: Bronze</p>
              </div>
            </div>
            <div class="warrantly_container">
              <div class="row">
                <div class="col">
                  <Icon icon="material-symbols:google-guarantee" width="40px" />

                  <div class="txt">
                    <h1>12 місяців гарантії</h1>
                    <p>Гарантія від магазину</p>
                  </div>
                </div>
                <div class="col">
                  <Icon
                    icon="streamline:interface-time-rewind-back-return-clock-timer-countdown"
                    width="40px"
                  />

                  <div class="txt">
                    <h1>14 днів на обмін</h1>
                    <p>Поверення та обмін товару.</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <Icon icon="solar:chat-round-money-outline" width="40px" />
                  <div class="txt">
                    <h1>Оплата</h1>
                    <p>
                      Готівковий розрахунок, оплата картою онлайн та по
                      терміналу, оплата частинами monobank и ПриватБанк,
                      розстрочка Плати Пізніше, безготівкова оплата з ПДВ та без
                      ПДВ
                    </p>
                  </div>
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
import SideMenu from "@/components/SideMenu";
import Search from "@/components/Search";
import HeaderMenu from "@/components/HeaderMenu";
import { Icon } from "@iconify/vue";
export default {
  name: "ProductPage",
  components: {
    Icon,
    SideMenu,
    Search,
    HeaderMenu,
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
}

.side_menu_container {
  display: flex;
  margin-top: 10px;
}
.main_wrapper {
}

.content_container {
  max-width: 915px;

  h1 {
    font-weight: 400;
    font-size: 26px;
  }

  .content_wrapper {
    padding: 25px 0px 25px 30px;
  }
}

.photo_container {
  padding: 20px 15px;
  background: #fff;
  border-radius: 0;
  box-shadow: 0 1px 5px rgba(8, 8, 8, 0.15);
  margin-top: 20px;
  p {
    font-size: 14px;
    color: #999;
  }

  span {
    font-style: normal;
    color: #333;
    font-weight: 700;
  }
  img {
    width: 350px;
  }
}
.wrapper {
  display: flex;
  justify-content: space-between;
}

.info_container {
  background: #fff;
  margin-left: 10px;
  padding: 20px 30px;
  border-radius: 0px;
  box-shadow: 0 1px 5px rgba(8, 8, 8, 0.15);
  margin-top: 20px;
  font-size: 20px;
  .aviability {
    p {
      color: #fe33ba;
    }
  }

  .price_container {
    margin-top: 20px;
    p {
      margin-top: 20px;

      font-size: 42px;
      color: #333;
    }
  }

  .promotion_price {
    // padding: 0 0 10px 0;
    text-decoration: line-through !important;
    font-weight: bold !important;
    font-size: 21px !important;
    color: #999 !important;
  }

  .promo_percent {
    margin-top: 15px;
    font-size: 14px;
    color: #989d9f;
    span {
      font-size: 16px;
      font-weight: 700;
      color: #515351;

      &:nth-child(2) {
        color: #fe33ba;
        font-size: 18px;
      }
    }
  }
}

.buttons_container {
  margin-top: 20px;

  .fav_button {
    display: flex;
    color: #fe33ba;
    p {
      margin-top: 5px;
      margin-left: 10px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    svg {
    }
  }

  .buy_button {
    cursor: pointer;
    display: flex;
    margin-top: 20px;
    background-color: #a2c617;
    padding: 15px 20px;
    color: #ffff;
    transition: all 0.2s ease;

    &:hover {
      background-color: #a9bf4c;
    }
    svg {
      margin-left: 25px;
    }
    p {
      font-size: 24px;
      margin-top: 6px;
      margin-left: 15px;
    }
  }
  .update_button {
    cursor: pointer;
    display: flex;
    margin-top: 20px;
    background-color: #f9be00;
    padding: 15px 20px;
    color: #ffff;
    transition: all 0.2s ease;

    &:hover {
      background-color: #ffd341;
    }
    svg {
      margin-left: 25px;
    }
    p {
      font-size: 24px;
      margin-top: 3px;
      margin-left: 15px;
    }
  }
}

.characteristics_container {
  margin-top: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 0;
  box-shadow: 0 1px 5px rgba(8, 8, 8, 0.15);
  div {
    margin-top: 20px;
    p {
      margin-top: 7px;
      font-size: 18px;
      font-weight: normal;
    }
  }
  h1 {
    font-size: 24px;
    font-weight: 500;
    color: #999;
  }
}

.warrantly_container {
  margin-top: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 0;
  box-shadow: 0 1px 5px rgba(8, 8, 8, 0.15);
  color: #515351;
  .row {
    display: flex;
    // justify-content: space-between;
    &:nth-child(2) {
      margin-top: 30px;
      // margin-left: 10px;
    }
  }

  .col {
    display: flex;
    // max-width: 400px;
    &:nth-child(2) {
      margin-left: 120px;
    }
  }

  h1 {
    font-size: 20px;
    color: #a2c617;
  }
  .txt {
    margin-left: 10px;
    margin-top: 5px;
    p {
      margin-top: 6px;
    }
  }
}
</style>
