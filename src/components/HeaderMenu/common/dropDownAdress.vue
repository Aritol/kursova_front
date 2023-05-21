<template>
  <div class="main_container">
    <div class="main_wrapper">
      <ul class="items_list" v-for="item in items" :key="item">
        <li>
          <div class="wrap">
            <h1>{{ item.city }}</h1>
            <div class="adress_container">
              <div class="img_wrap">
                <Icon
                  icon="material-symbols:location-on-outline"
                  width="18px"
                />
              </div>
              <div class="txt_wrap">
                <p>{{ item.street }}</p>
                <p>{{ item.name }}</p>
              </div>
            </div>
            <div class="adress_container">
              <Icon icon="ic:round-access-time" width="18px" />
              <p>{{ item.workHours }}</p>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "dropDownAdress",
  components: {
    Icon,
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [
        {
          city: "Київ",
          street: "вул. Вадима Гетьмана, 6",
          name: "ТРЦ «Космополiт», Корпус Б, 4 поверх, Шоурум «TELEMARKET.UA»",
          workHours: "Пн-Нд: 10:00-21:00",
        },
        {
          city: "Київ",
          street: "вул. Олександра Мишуги, 4",
          name: "ТРЦ «Піраміда»",
          workHours: "Пн-Нд: 10:00-22:00",
        },
        {
          city: "Дніпро",
          street: "пр. Яворницького, 100",
          name: "Шоурум «TELEMARKET.UA»",
          workHours: "Пн-Нд: 10:00-20:00",
        },
        {
          city: "Харків",
          street: "пр. Незалежності, 17",
          name: "Шоурум «TELEMARKET.UA»",
          workHours: "Пн-Нд: 10:00-20:00",
        },
        {
          city: "Львів",
          street: "вул. Під Дубом, 4а, Точка видачі «TELEMARKET.UA»",
          name: "",
          workHours: "Пн-Нд: 10:00-20:00",
        },
        {
          city: "Львів",
          street: "вул. Щирецька, 36 (ТЦ Південний), 1 поверх",
          name: "Шоурум «TELEMARKET.UA»",
          workHours: "Пн-Нд: 10:00-19:00",
        },
        {
          city: "Одеса",
          street: "вул. Мала Арнаутська, 71",
          name: "Шоурум «TELEMARKET.UA»",
          workHours: "Пн-Нд: 10:00-20:00",
        },
        {
          city: "Хмельницький",
          street: "вул. Подільська, 58",
          name: "Шоурум «TELEMARKET.UA»",
          workHours: "Пн-Нд: 10:00-20:00",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main_container {
  width: 276px;
  padding: 4px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  box-shadow: 0 1px 10px rgba(1, 2, 2, 0.15);
  margin: 7px 0 0 -20px;
  background: #fff;

  color: #4f5250;
}

.items_list {
  li {
    cursor: pointer;
    transition: all 0.3s ease;
    // border-bottom: 0.5px solid #4f5250;
    &:hover {
      background-color: #f5f5f5;
    }

    hr {
      border: 0;
      clear: both;
      display: block;
      width: 100%;
      background-color: #e5e5e5;
      height: 1px;
    }
  }
}

.wrap {
  font-size: 14px;
  font-weight: 400;
  padding: 14px;

  h1 {
    font-size: 14px;
    font-weight: 500;
  }
}

.adress_container {
  margin-top: 10px;
  display: flex;
  p {
    margin-left: 10px;
    // vertical-align: bottom;
    margin-top: 3px;
  }
}

.txt_wrap {
  // margin-left: 5px;
}
</style>
