<template>
  <div>
    <div class="container" ref="container">
      <div class="main_wrapper">
        <div class="popup_block">
          <div class="close_img_container">
            <img
              src="@/assets/icons/icon_close_grey.png"
              alt=""
              @click="onCloseClick"
            />
          </div>
          <div class="popup_content">
            <h1>
              <slot name="title"> </slot>
            </h1>
            <div class="buttons_container">
              <button @click="onCloseClick">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoPopup",

  methods: {
    onCloseClick() {
      this.$emit("infoPopupClose");
    },
  },

  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target == vm.$refs["container"]) {
        vm.onCloseClick();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/null.scss";

.container {
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;

  .main_wrapper {
    width: 100%;
    max-width: 900px;
    // height: 500px;
    margin: 0 auto;
    .popup_block {
      height: 400px;

      .close_img_container {
        text-align: right;

        img {
          width: 35px;
          cursor: pointer;
          margin: 4px;
        }
      }
      border-radius: 15px;
      margin-top: 300px;
      background: white;
      .popup_content {
        text-align: center;
        font-size: 22px;
        h1 {
          margin-top: 40px;
          font-size: 40px;
          p {
            margin-top: 10px;
            font-size: 24px;
            span {
              color: rgb(209, 55, 55);
              font-size: 36px;
              font-weight: bold;
              padding-left: 4px;
            }
          }
        }

        .buttons_container {
          margin-top: 100px;
          button {
            font-size: 26px;
            font-weight: bold;
            border-radius: 3px;
            transition: 0.2s ease-in-out;
            color: #ffffff;
            width: 300px;
            border: 1px solid #f67c0d;
            height: 60px;
            background-color: #f67c0d;
            &:hover {
              background: #c5630a;
            }
          }
        }
      }
    }
  }
}
</style>
