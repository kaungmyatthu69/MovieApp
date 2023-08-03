<template>
  <carousel-section>
    <template #title>
      <h1 class="text-2xl ">Trending </h1>
    </template>
    <template #dropdown>
      <Dropdown :data="dropdownItem" default="Today" />
    </template>
    <template #carousel>
      <Carousel :CarouselData="movies" />
    </template>
  </carousel-section>

</template>

<script setup>
import Dropdown from "../Dropdown/index.vue"
import Carousel from "@/components/Carousel.vue";
import useMovie from "@/composables/useMovie";

import {onBeforeMount, provide, ref} from "vue";
import CarouselSection from "@/components/CarouselSection.vue";

const dropdownItem = ['Today','This Week']

const movies = ref(null)
const {getTrendingMovie} = useMovie();
onBeforeMount(async () => {
  try {
    const {data} = await getTrendingMovie()
    movies.value = data.results;

  } catch (error) {
    console.log(error)
  }
})
provide('noBorder',true);

</script>