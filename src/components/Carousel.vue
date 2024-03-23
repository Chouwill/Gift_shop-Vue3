<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="img in imgs" :key="img">
      <div class="carousel__item">
        <img :src="img" alt="" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup>
import { reactive, defineProps } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

defineProps({
  imgs: {
    type: Array,
    required: true,
  },
  settings: {
    type: Object,
      default: () => ({
        itemsToShow: 1,
        snapAlign: "start",
    }),
  },
  breakpoints: {
    type: Object,
    default: () => ({
      414: {
        itemsToShow: 3,
      },
      768: {
        itemsToShow: 4,
      },
      1024: {
        itemsToShow: 7,
      },
    }),
  },
});
</script>

<style lang="scss" scoped>
img{
    max-width: 100%;
}
:deep(.carousel__next){
    border: 1px solid red;
}
</style>
