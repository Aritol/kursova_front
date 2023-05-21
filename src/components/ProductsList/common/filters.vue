<template>
  <div class="main_container">
    <div class="main_wrapper">
      <div class="price_line_container">
        <div class="inputs_container">
          <input type="text" />
          <input type="text" />
        </div>
        <div class="drag_line_container"></div>
      </div>
      <div class="content_container">
        <div class="aviability_contiainer">
          <div class="hider">
            <h1>Наявність</h1>
          </div>
          <div class="filters_cb">
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <p>В наявності</p>
              <p>Очікується</p>
            </div>
          </div>
        </div>
        <div class="recommend_container">
          <div class="hider">
            <h1>Рекомендуємо</h1>
          </div>
          <div class="filters_cb">
            <div>
              <input type="text" />
            </div>
            <div>
              <p>Акції</p>
            </div>
          </div>
        </div>
        <div class="gpu_contiainer">
          <div class="hider">
            <h1>Відеокарти</h1>
          </div>
          <div class="filters_cb">
            <div v-for="gpu in gpusList" :key="gpu.id">
              <input type="text" @click="selectGpu(gpu.id)" />
            </div>
            <div v-for="gpu in gpusList" :key="gpu.id">
              <p>{{ gpu.name }}</p>
            </div>
          </div>
        </div>
        <div class="cpu_contiainer">
          <div class="hider">
            <h1>Процессори</h1>
          </div>
          <div class="filters_cb">
            <div>
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <p>Intel</p>
              <p>AMD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "filters",
  props: {
    visability: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      gpusList: [{ id: 1, name: "" }],
    };
  },
  methods: {
    hide() {
      this.$emit("hidePanel");
    },
    selectGpu(gpu) {
      this.gpusList[gpu - 1].selected = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
