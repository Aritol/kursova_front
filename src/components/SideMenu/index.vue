<template>
  <div class="container">
    <div class="main_wrapper">
      <div class="menu">
        <div class="menu_title">
          <Icon icon="quill:hamburger" width="30px" />
          <h1>Каталог товарів</h1>
        </div>
        <ul v-for="item in menuBlocks" :key="item.id" class="menu_container">
          <li class="menu_item" @click="redirect(item.category, item.link)">
            <Icon :icon="item.icon" width="30px" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <!-- <div class="search_menu_container">
        <div class="search_menu_wrapper">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "SideMenu",
  components: {
    Icon,
  },

  data() {
    return {
      menuBlocks: [
        {
          name: "Персональні комп'ютери",
          icon: "zondicons:computer-desktop",
          category: "pcs",
        },
        {
          name: "Ноутбуки",
          icon: "mdi:laptop-windows",
          category: "laptops",
        },
        {
          name: "Монітори",
          icon: "line-md:computer",
          category: "monitors",
        },
        {
          name: "Клавіатури",
          icon: "material-symbols:keyboard-alt-outline-sharp",
          category: "keyboards",
        },
        {
          name: "Миші",
          icon: "material-symbols:mouse-outline",
          category: "mouses",
        },
        {
          name: "Оплата",
          icon: "mdi:information-slab-circle-outline",
          category: "about",
        },
        {
          name: "Контакти",
          icon: "material-symbols:android-contacts-outline",
          category: "contacts",
          link: "contacts",
        },
        {
          name: "Як замовити",
          icon: "material-symbols:contact-support-outline-rounded",
          category: "delivery",
          link: "delivery",
        },
        {
          name: "Акції",
          icon: "material-symbols:humidity-percentage-outline",
          category: "discounts",
          link: "support",
        },
        {
          name: "Підтримка",
          icon: "ic:outline-support-agent",
          category: "support",
          link: "support",
        },
      ],
    };
  },

  methods: {
    redirect(category = "", link = null) {
      if (link) {
        this.$router.push({
          path: `/${link}`,
        });
      } else {
        this.$router.push({
          name: "productsList",
          params: { category: `${category}` },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/style.scss";

.container {
  position: sticky;
  top: 0px;
}
.main_wrapper {
  width: 100%;
  display: flex;
  // font-weight: 1000;

  .menu {
    min-width: 280px;
  }
}

.menu_title {
  display: flex;
  background-color: #a2c617;
  padding: 10px 0px 10px 4px;
  svg {
    margin: auto 10px;
    color: #fff;
  }
  h1 {
    vertical-align: top;
    // padding: 10px 0px;
    margin: auto 50px auto 10px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
}

.menu_container {
  color: #fff;
  background: #484f54;
}

.menu_item {
  display: flex;
  // background-color: ;
  // & * {
  // padding: 0 20px;
  // }
  padding: 10px 20px 10px 5px;

  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #a2c617;
    svg {
      transition: ease-out 200ms;
      color: #fff;
    }
  }
  svg {
    margin: auto 10px;
    color: #a2c617;
  }
  p {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
    margin-right: 20px;
  }
}

// .search_menu_container {
//   width: 100%;
//   height: 100%;
//   max-height: 50px;
//   max-width: 890px;
//   background-color: #484f54;
// }
// .search_menu_wrapper {
//   margin: 11px 20px 11px 20px;
//   display: flex;
//   justify-content: space-between;
// }

// .search_line {
//   margin-left: 30px;
//   display: flex;

//   input {
//     background-color: #484f54;

//     width: 100%;
//     display: block;
//     box-sizing: border-box;
//     background: none;
//     border: none;
//     // height: 34px;
//     padding: 0;
//     font-size: 14px;
//     color: #989ea1;
//     border-radius: 0;
//     border-bottom: 2px solid #989ea1;
//     transition: 0.3s ease-in-out;

//     color: #fff;
//     &:focus {
//       border-bottom: 2px solid #a2c617;
//     }
//   }

//   svg {
//     // height: 120px;
//     color: #fff;
//     font-size: 26px;
//     position: absolute;
//     // left: 120px;
//     margin-left: 180px;
//     cursor: pointer;
//   }
// }

// .right_container {
//   color: #fff;
//   margin-left: 150px;
//   .blocks {
//     display: flex;

//     .block {
//       display: flex;
//       cursor: pointer;
//       p {
//         margin-left: 10px;
//         margin-right: 20px;
//         font-weight: 200;
//       }

//       svg {
//         font-size: 28px;
//         // position: absolute;
//         // display: flex;
//         margin-left: 15px;
//       }
//     }
//   }
// }
</style>
