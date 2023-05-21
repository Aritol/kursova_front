<template>
  <div class="popup_container" v-if="popupVisible">
    <info-popup @infoPopupClose="onPopupClose">
      <template v-slot:title>{{ messageToPopup }}</template>
    </info-popup>
  </div>
  <div class="container">
    <div class="main_wrapper">
      <div class="side_menu_container">
        <!-- <side-menu /> -->
      </div>
      <div class="content">
        <div class="img_container">
          <img src="http://i.stack.imgur.com/SBv4T.gif" alt="" />
        </div>
        <div class="title_container">
          <h1>Додати адміністратора</h1>
        </div>
        <form @submit.prevent="submit">
          <div class="form_wrapper">
            <div class="labels_container">
              <label for="">Ім'я :</label>
              <label for="">Пошта :</label>
              <label for="">Пароль :</label>
            </div>
            <div class="inputs_container">
              <input
                type="text"
                v-model="userName"
                name="name"
                required
                placeholder="Ім'я"
              />
              <input
                type="text"
                v-model="email"
                name="email"
                required
                placeholder="Пошта"
              />
              <input
                type="password"
                v-model="password"
                name="password"
                required
                placeholder="Пароль"
              />
            </div>
          </div>
          <button type="submit">Додати</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InfoPopup from "@/components/popups/InfoPopup.vue";
// import SideMenu from "@/components/SideMenu";
import { mapActions } from "vuex";
export default {
  name: "SignupPage",
  components: {
    // SideMenu,
    InfoPopup,
  },

  data() {
    return {
      userName: "",
      email: "",
      password: "",
      message: "",

      popupVisible: false,
      messageToPopup: null,
      signupResult: null,
    };
  },

  methods: {
    ...mapActions("auth", ["signup", "logout"]),

    onPopupClose() {
      if (this.signupResult) this.$router.push({ name: "mainPage" });
      else {
        this.popupVisible = false;
      }
    },

    async submit() {
      this.popupVisible = true;
      try {
        const user = {
          name: this.userName,
          email: this.email,
          password: this.password,
        };
        const result = await this.signup(user);
        if (result === true) {
          this.messageToPopup = "Користувач доданий успішно";
          this.signupResult = true;
          // this.message = "";
          this.userName = "";
          this.email = "";
          this.password = "";
          // this.$router.push({ path: "/" });
        } else {
          this.messageToPopup =
            "Упс, щось пішло не так, заповніть поля мінімум 3 символами";
          this.signupResult = false;
          //'SignUp error!';
        }
      } catch (err) {
        this.messageToPopup =
          "Упс, щось пішло не так, заповніть поля мінімум 3 символами";
        this.signupResult = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popup_container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.85);
}
.container {
  // font-family: Source Serif Pro;
  // height: 100vh;
  // width: 100vw;
  // background-color: #b1b1b1;
  .main_wrapper {
    display: flex;
  }
}

.content {
  height: 100vh;
  width: 100vw;
  text-align: center;
  background-color: #b1b1b1;
}

.img_container {
  padding-top: 130px;
  img {
    width: 250px;
  }
}

.title_container {
  margin-top: 30px;
  font-size: 26px;
}

.form_wrapper {
  width: 100%;
  max-width: 450px;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 20px;
  // div {
  //   display: flex;
  // }

  .labels_container {
    text-align-last: left;
    label {
      display: block;

      &:first-child {
        margin-top: 30px;
      }
      &:nth-child(2) {
        margin-top: 40px;
      }
      &:nth-child(3) {
        margin-top: 40px;
      }
    }
  }

  .inputs_container {
    input {
      font-size: 20px;
      margin-top: 15px;
      width: 100%;
      padding: 10px 20px;
      // text-align: center;
      display: block;
      border-radius: 5px;
      outline: none;
      color: #000000;
    }
  }
}

button {
  // font-size: 20px;
  // padding: 20px 60px;
  display: block;
  margin: 0 auto;
  margin-top: 40px;
  display: block;
  font-size: 22px;
  color: #000000;
  padding: 10px 60px;
  background-color: #d9d9d9;
  border-radius: 5px;
  transition: 0.3s ease-out;
  &:hover {
    background-color: #3b0040;
    color: #fff;
  }
}
</style>
