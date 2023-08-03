<template>


  <div v-if="props.cardWithIntro">
    <div class="grid grid-cols-12 my-2 w-full shadow ">
      <div class="col-span-4">
        <img :src="movie.image" alt=""/>
      </div>
      <div class="col-span-8 flex flex-col gap-2 justify-center px-3">
        <div>
          <p>{{ movie.title }}</p>
          <p class="text-gray-400 text-sm">{{ movie.date }}</p>
        </div>
        <div>
          <p class="text-sm">{{ sliceString(movie.intro) }}</p>

        </div>

      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex flex-col  gap-3  relative   group hover:cursor-pointer    "
         :class="noBorder?'w-[195px]':'md:shadow '">

      <img :src="movie.image" class=" rounded-lg  shadow-lg md:h-72 " :alt="movie.title"/>

      <div class="absolute bottom-14  left-3  ">
        <circle-progress class="text-white text-xs  " :size="40" :percent="voteAverage" :view-port="true"
                         :border-width="3" :border-bg-width="5" :show-percent="true" :fill-color="color"
                         empty-color="#292524" background="black"/>
      </div>
      <div class="absolute right-3 top-3">
        <EllipsisHorizontalCircleIcon class="w-6 h-6 text-gray-400 hover:text-blue-400"/>
      </div>

      <div class="h-16 p-3 ">
        <p class="text-sm font-bold ">{{ movie.title }}</p>
        <p class="text-gray-400">{{ movie.date }}</p>
      </div>

    </div>
  </div>

</template>

<script setup>
import {movieCardTransformer} from "@/transformers/movieCard"
import {sliceString} from "@/composables/useSliceString"

const props = defineProps(['movie', 'cardWithIntro', 'noBorder'])
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import {EllipsisHorizontalCircleIcon} from "@heroicons/vue/24/solid"
import {inject, onBeforeMount, ref} from "vue";

const movie = movieCardTransformer(props.movie);
const voteAverage = ref(movie.voteAverage * 10)
const color = ref('')
const ratingColor = (voteAverage) => {
  if (voteAverage > 70) {
    color.value = '#4ade80'
  } else if (voteAverage > 50) {
    color.value = '#fbbf24'
  } else {
    color.value = '#4ade80'
  }
}
onBeforeMount(() => {
  ratingColor(voteAverage.value);
})
const noBorder = inject('noBorder');

</script>