<template>
  <CarouselSection>
    <template #title>
    <h1 class="text-xl">What's Popular  </h1>
    </template>
    <template #dropdown>
      <Dropdown :data="dropDownItems" default="On TV" />
    </template>
    <template #carousel>
      <Carousel :CarouselData="movies"/>

    </template>

  </CarouselSection>
</template>
<script setup>
import CarouselSection from "@/components/CarouselSection.vue";
import Dropdown from "@/components/Dropdown/index.vue"
import {onBeforeMount, ref} from "vue";
import useMovie from "@/composables/useMovie";
import Carousel from "@/components/Carousel.vue";
 const {getPopularMovie} = useMovie()
const movies = ref(null);
const dropDownItems = ['On TV','On Theaters']
onBeforeMount(async ()=>{
  try {
    const {data} = await  getPopularMovie()
    movies.value = data.results
  }catch (error){
    console.log(error)
  }
})
</script>