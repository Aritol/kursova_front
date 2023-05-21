<template>
  <div class="container">
    <div class="main_wrapper">
      <div class="logo_container">
        <img
          src="@/assets/images/logo_txt.png"
          alt=""
          @click="this.$router.push({ path: '/' })"
        />
      </div>
      <div class="main_content_container">
        <div class="info_container">
          <a href="tel:+380674000880"> (067) 400-08-80</a>
          <a href="https://t.me/MaxDurant" target="_blank">Telegram</a>
          <div class="call_me">
            <Icon
              icon="material-symbols:phone-android-outline-sharp"
              class="icon_phone"
              height="25px"
            />
            <!-- width="25px" -->
            <p>Передзвоніть мені</p>
          </div>
          <div class="fillials">
            <p @click="toggleDropdown">Наші магазини</p>
            <div class="icon_wprapper">
              <Icon
                icon="material-symbols:keyboard-arrow-down-rounded"
                width="30px"
              />
            </div>
            <dropdown-adress class="dropdowm_menu" v-if="dropdownVisible" />
          </div>
        </div>
        <div class="login_container">
          <div v-if="this.$route.query.adminAcess === '1' && !authorized">
            <Icon
              icon="material-symbols:login"
              width="20px"
              @click="this.$router.push({ name: 'loginPage' })"
            />
            <p @click="this.$router.push({ name: 'loginPage' })">Увійти</p>
          </div>
          <div v-if="authorized || this.$route.query.adminAcess === '1'">
            <Icon
              icon="mdi:account-plus-outline"
              width="20px"
              @click="this.$router.push({ name: 'signupPage' })"
            />
            <p @click="this.$router.push({ name: 'signupPage' })">
              Додати Адміна
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapGetters } from "vuex";
import dropdownAdress from "./common/dropDownAdress.vue";

export default {
  name: "HeaderMenu",
  components: {
    Icon,
    dropdownAdress,
  },
  data() {
    return {
      dropdownVisible: false,
    };
  },

  computed: {
    ...mapGetters("auth", ["authorized"]),
    ...mapGetters("auth", ["authData"]),
  },
  methods: {
    toggleDropdown() {
      console.log("asdasdadsads");
      this.dropdownVisible = !this.dropdownVisible;
      console.log(this.dropdownVisible);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 15px;
  margin-left: 15px;
  color: #484f54;
  font-size: 16px;
  font-weight: 500;
}

.main_wrapper {
  display: flex;
  .logo_container {
    img {
      cursor: pointer;
    }
  }
}

.main_content_container {
  display: flex;
  margin-top: 8px;
  .info_container {
    margin-left: 10px;

    display: flex;

    a {
      margin-left: 15px;
      padding-top: 5px;
      color: #484f54;

      &:hover {
        color: #a2c617;
        transition: all 0.2s ease;
      }
    }
  }

  .call_me {
    margin-left: 20px;
    // display: flex;
    color: #a2c617;
    .icon_phone {
      // margin-top: 5px;
      display: inline-block;
    }
    p {
      display: inline-block;
      // margin-top: 2px;
      vertical-align: top;
      padding-bottom: 5px;
      padding-top: 5px;

      border-bottom: 2px solid #a2c617;
      cursor: pointer;

      transition: all 0.2s ease;
      &:hover {
        border-bottom: 2px solid transparent;
      }
    }
  }

  .fillials {
    margin-left: 20px;
    color: #a2c617;
    // display: flex;

    p {
      display: inline-block;
      // margin-top: 2px;
      justify-content: baseline;
      border-bottom: 2px solid #a2c617;
      padding-bottom: -5px;
      cursor: pointer;
      vertical-align: top;
      padding-bottom: 5px;
      padding-top: 5px;

      transition: all 0.2s ease;
      &:hover {
        border-bottom: 2px solid transparent;
      }
    }
    .icon_wprapper {
      display: inline-block;
      cursor: pointer;
    }
  }
}
.logo_container {
  img {
    width: 250px;
  }
}

.login_container {
  display: flex;
  margin-left: 70px;
  margin-top: 6px;

  div {
    display: inline-block;
    margin-left: 10px;
  }
  p {
    display: inline-block;
    margin-left: 6px;
    border-bottom: 2px solid #a2c617;
    padding-bottom: -5px;
    cursor: pointer;
    vertical-align: top;
    padding-bottom: 5px;
    // padding-top: 5px;

    transition: all 0.2s ease;
    &:hover {
      border-bottom: 2px solid transparent;
    }
  }
}

.dropdowm_menu {
  position: absolute;
  // margin-top: -1px;
}
</style>
