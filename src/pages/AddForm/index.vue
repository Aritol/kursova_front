<template>
  <div class="main_container">
    <div class="main_wrapper">
      <div class="header_container">
        <header-menu />
      </div>
      <div class="content_container">
        <div class="title_container">
          <h1>{{ recivedId }}</h1>
        </div>
        <div class="add_form_container">
          <form class="add_form" @submit.prevent="addProduct">
            <div class="add_form_wrapper">
              <div class="left_cont">
                <label>
                  Фото продукту<span>*</span>
                  <div class="photo_wrapper" v-if="showChoseFile">
                    <input type="file" @input="createLogoImage" />
                  </div>
                </label>
                <img id="img" :src="photoSrc" alt="" v-if="product.photo" />
              </div>
              <div class="right_cont">
                <div class="row_first">
                  <div class="col">
                    <label for="">Назва позиції <span>*</span></label>
                    <input required type="text" v-model="product.name" />
                  </div>

                  <div class="col2">
                    <label for="">Код/Артикул <span>*</span></label>
                    <input required type="text" v-model="product.article" />
                  </div>
                </div>

                <div class="row_description">
                  <label for="">Опис <span>*</span></label>
                  <textarea
                    cols="30"
                    rows="10"
                    required
                    v-model="product.description"
                  />
                </div>
                <div class="row">
                  <label for="">Наявність<span>*</span></label>
                  <select name="select" v-model="product.aviability">
                    <option disabled value="">
                      Будь ласка оберіть наявність
                    </option>
                    <option value="value1">В наявності</option>
                    <option value="value2">Очікується</option>
                    <option value="value3">Немає в наявності</option>
                  </select>
                </div>
                <div class="row">
                  <label for="">Категорія<span>*</span></label>
                  <select name="select" v-model="product.category">
                    <option disabled value="">
                      Будь ласка оберіть категорію
                    </option>
                    <option value="value1">ПК</option>
                    <option value="value2">Ноутбук</option>
                    <option value="value3">Монітор</option>
                    <option value="value3">Клавіатура</option>
                    <option value="value3">Миш</option>
                  </select>
                </div>
                <div class="row">
                  <label for="">Оцінка<span>*</span></label>
                  <input
                    type="number"
                    required
                    v-model.number="product.answer"
                  />
                </div>
                <div class="row">
                  <label for="">Знижкова ціна</label>
                  <input type="text" v-model="product.discountPrice" />
                </div>
                <div class="row">
                  <label for="">Ціна</label>
                  <input type="text" required v-model="product.price" />
                </div>
                <div class="row">
                  <label for="">Виробник</label>
                  <input type="text" required v-model="product.manufacturer" />
                </div>
              </div>
            </div>
            <div class="buttons_container">
              <button type="submit" class="buy_button">{{ buttonText }}</button>
              <button class="delete_button" @click="deleteProduct(product._id)">
                Видалити
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HeaderMenu from "@/components/HeaderMenu";
import { Buffer } from "buffer";
export default {
  name: "addForm",
  components: {
    HeaderMenu,
  },
  data() {
    return {
      rawPhotoData: null,
      product: {},
      showChoseFile: true,
      errorPopupVisible: false,
    };
  },
  computed: {
    computed: {
      ...mapGetters("auth", ["authorized"]),
    },
    recivedId() {
      if (this.$route.params.id) {
        return "Редагувати товар";
      }
      return "Додати товар";
    },
    buttonText() {
      if (this.$route.params.id) {
        return "Редагувати";
      }
      return "Додати";
    },
    photoSrc() {
      return (
        this.rawPhotoData ||
        (this.product.photo && this.getImgSrc(this.product.photo))
      );
    },
  },

  methods: {
    ...mapActions("products", ["deleteProduct"]),
    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    createLogoImage(event) {
      this.showChoseFile = false;
      const file = event.target.files[0];
      console.log("file");
      console.log(file);
      let reader = new FileReader();
      const self = this;
      reader.onload = (e) => {
        self.rawPhotoData = e.target.result;
        self.product.photo = file;
      };
      reader.readAsDataURL(file);
    },
    async addProduct() {
      try {
        if (!this.product.aviability) {
          this.product.aviability = "В наявності";
        }
        if (
          this.product.photo &&
          this.product.name &&
          this.product.article &&
          this.product.description &&
          this.product.aviability &&
          this.product.category &&
          this.product.answer &&
          this.product.discountPrice &&
          this.product.price
        ) {
          if (!this.$route.params.id) {
            await this.addProduct(this.product);
            this.infoPopupVisible = true;
          } else {
            await this.updateProduct(this.product);
            this.infoPopupVisible = true;
          }
        } else {
          this.errorPopupVisible = true;
        }
      } catch (error) {
        console.log("eror -->", error);
      }
    },
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

  font-family: "Geometria", sans-serif;
  font-size: 16px;
  color: #484f54;
}

.content_container {
  padding: 20px 50px;
  .title_container {
    margin-top: 20px;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }
}

.add_form_container {
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;

  span {
    color: red;
    margin-left: 5px;
  }
}

.left_cont {
  img {
    display: block;
    max-width: 300px;
    margin-top: 20px;
  }
}

.photo_wrapper {
  margin-top: 20px;

  max-width: 300px;
  padding: 150px 50px;
  border: 2px dashed #bcc0c4;
}

.add_form_wrapper {
  display: flex;
}

.right_cont {
  margin-top: 0px;
  margin-left: 100px;
}

.row_first {
  display: flex;

  .col2 {
    span {
    }
    display: inline-block;
    margin-left: 110px;
    input {
      max-width: 150px;
      margin-top: 15px;
      display: block;

      box-sizing: border-box;
      outline: 0 none;
      font-size: 13px;
      line-height: 16px;
      font-family: Arial, sans-serif;
      border: 1px solid #c1c1d4;
      border-radius: 8px;
      background-color: #fff;
      font-size: 20px;
      padding: 10px;
    }
  }
}
.col {
  input {
    margin-top: 15px;

    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    outline: 0 none;
    font-size: 13px;
    line-height: 16px;
    font-family: Arial, sans-serif;
    padding: 10px;
    border: 1px solid #c1c1d4;
    border-radius: 8px;
    background-color: #fff;
    font-size: 20px;
  }
}

.row_description {
  margin-top: 20px;
  label {
    vertical-align: top;
  }
  textarea {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    outline: 0 none;
    line-height: 16px;
    font-family: Arial, sans-serif;
    padding: 10px;
    border: 1px solid #c1c1d4;
    border-radius: 8px;
    background-color: #fff;
    font-size: 20px;
  }
}

.row {
  margin-top: 20px;
  display: flex;
  label {
    padding-top: 12px;
  }

  input,
  select {
    margin-left: 30px;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    outline: 0 none;
    font-size: 13px;
    line-height: 16px;
    font-family: Arial, sans-serif;
    padding: 10px;
    border: 1px solid #c1c1d4;
    border-radius: 8px;
    background-color: #fff;
    font-size: 20px;
  }
}

.buttons_container {
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  button {
    padding: 30px;
    color: #ffff;
    font-size: 20px;
  }

  .buy_button {
    margin-left: 50px;
    background-color: #a2c617;
  }

  .delete_button {
    margin-right: 50px;
    background-color: red;
  }
}
</style>
