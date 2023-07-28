<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints"   >
    <Slide v-for="data in CarouselData" :key="data.id">
      <div class="px-3">
        <Card :movie="data" />
      </div>
    </Slide>

    <template #addons>
      <Navigation/>
    </template>
  </Carousel>
</template>

<script setup>
import { reactive} from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import Card from "@/components/Card.vue";
//Carousel settings
const settings = reactive({
  itemsToShow:2.5,
  snapAlign:'center'
})

//carousel breakpoints
const breakpoints = reactive({
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
})

const props = defineProps(['CarouselData'])

</script>
