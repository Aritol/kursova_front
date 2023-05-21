<template>
  <div class="slider_wrappeer">
    <div class="slider">
      <div
        class="slides"
        :style="{ transform: 'translateX(' + translateX + 'px)' }"
        ref="sliderContainer"
      >
        <div v-for="(slide, index) in slides" :key="index" class="slide">
          <!-- :style="{ width: slideWidth + 'px' }" -->
          <img :src="slide.image" alt="" />
          <!-- <div class="slide-content"> -->
          <!-- <h3 class="slide-title">{{ slide.title }}</h3> -->
          <!-- <p class="slide-text">{{ slide.text }}</p> -->
          <!-- </div> -->
        </div>
      </div>
      <button class="prev" @click="previousSlide">
        <!-- &lt; -->
        <div class="icon_wrapper_prev">
          <Icon
            icon="material-symbols:arrow-back-ios-new"
            width="20px"
            color="#989EA1"
          />
        </div>
      </button>
      <button class="next" @click="nextSlide">
        <!-- &gt; -->
        <div class="icon_wrapper_next">
          <Icon
            icon="material-symbols:arrow-forward-ios"
            width="20px"
            color="#989EA1"
          />
        </div>
      </button>
    </div>
    <div class="pagination">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      >
        <span class="pagination_button"></span>
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Slider",
  components: {
    Icon,
  },
  data() {
    return {
      slides: [
        {
          image: require("@/assets/images/slider_item_1.png"),
          title: "Slide 1",
        },
        {
          image: require("@/assets/images/slider_item_2.png"),
          title: "Slide 2",
        },
        {
          image: require("@/assets/images/slider_item_3.png"),
          title: "Slide 3",
        },
        {
          image: require("@/assets/images/slider_item_4.png"),
          title: "Slide 4",
        },
        {
          image: require("@/assets/images/slider_item_5.png"),
          title: "Slide 5",
        },
      ],
      currentSlide: 0,
      translateX: 0,
      slideWidth: 0,
      intervalId: null,
      intervalDuration: 5000,
    };
  },
  methods: {
    previousSlide() {
      if (this.currentSlide === 0) {
        this.currentSlide = this.slides.length - 1;
        this.translateX = -this.slideWidth * (this.slides.length - 1);
      } else {
        this.currentSlide--;
        this.translateX += this.slideWidth;
      }
    },
    nextSlide() {
      if (this.currentSlide === this.slides.length - 1) {
        this.currentSlide = 0;
        this.translateX = 0;
      } else {
        this.currentSlide++;
        this.translateX -= this.slideWidth;
      }
      this.intervalDuration = 5000;
    },
    setSlideWidth() {
      if (this.$refs.sliderContainer) {
        this.slideWidth = this.$refs.sliderContainer.offsetWidth;
        this.translateX = -this.slideWidth * this.currentSlide;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.translateX = -this.slideWidth * index;
    },
    autoSlider() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, this.intervalDuration);
    },
  },
  mounted() {
    console.log(this.slides[0].image);
    this.setSlideWidth();
    window.addEventListener("resize", this.setSlideWidth);
    this.autoSlider();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
    window.removeEventListener("resize", this.setSlideWidth);
  },
};
</script>

<style>
.slider_wrappeer {
  max-width: 895px;
}
.slider {
  /* position: relative; */
  /* width: 100%; */
  /* overflow: hidden; */
  /* max-width: 895px; */
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  /* position: relative; */
  /* flex-shrink: 0; */
  /* max-height: 300px; */
  /* max-width: 900px; */
}

/* .slide img {
  /* width: 100%;
  height: auto; */
/* display: block; */
/* } */

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}

.slide-title {
  font-size: 1.5rem;
  margin-top: 0;
}

.slide-text {
  margin-bottom: 0;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  border-radius: 50%;
}

.prev {
  margin-left: 5px;
}

.next {
  margin-right: 5px;
}

.icon_button {
  padding: 20px;
}

.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  position: relative;
  flex-shrink: 0;
}

.slide img {
  /* width: 100%;
  height: 100%; */
  /* max-height: 300px; */
  display: block;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
}

.slide-title {
  font-size: 1.5rem;
  margin-top: 0;
}

.slide-text {
  margin-bottom: 0;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  color: #ffffff;
  /* font-size: 2rem; */
  /* border-radius: 20px; */
  cursor: pointer;
  /* margin: 20px; */
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5px;
}
.pagination button {
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  /* margin: 0 5px; */
  /* margin: 0 auto; */

  width: 25px;
  height: 25px;
  margin: 0 5px;
}

.pagination button:hover {
  border: 3px solid #a2c617;
  padding: 2px;
}
/* .pagination button {
  display: block;
  border: 3px solid gray;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
} */

.pagination_button {
  display: block;
  width: 13px;
  height: 13px;
  margin: 0 auto;
  /* margin: 0 5px; */
  background-color: gray;
  border-radius: 50%;
  cursor: pointer;
}

.pagination button.active {
  /* background-color: #a2c617; */
  border: 3px solid #a2c617;
  transition: all 0.2s ease;
}

/* .icon_wrapper {
  padding: 5px 0px 3px 2px;
  margin: 4px;
} */
.icon_wrapper_next {
  /* padding: 5px 0px 3px 2px;
   */
  padding: 5px 5px 2px 5px;

  /* margin: 4px; */
}
.icon_wrapper_prev {
  padding: 5px 5px 2px 5px;
}
</style>
