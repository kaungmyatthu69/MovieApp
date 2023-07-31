<template>


  <div v-if="props.cardWithIntro">
    <div class="grid grid-cols-12 my-2 w-full shadow ">
      <div class="col-span-4">
        <img :src="movie.image" alt=""  />
      </div>
      <div class="col-span-8 flex flex-col gap-2 justify-center px-3">
        <div>
          <p>{{movie.title}}</p>
          <p class="text-gray-400 text-sm">{{movie.date}}</p>
        </div>
        <div>
          <p class="text-sm">{{sliceString(movie.intro)}}</p>

        </div>

      </div>
    </div>
  </div>
  <div v-else >
    <div class="flex flex-col  gap-3   ">
      <div class="">
        <img :src="movie.image" class=" rounded-lg shadow-lg" :alt="movie.title"/>
      </div>
      <div class="h-16">
        <p class="text-sm font-bold ">{{movie.title}}</p>
        <p class="text-gray-400">{{movie.date}}</p>
      </div>

    </div>
  </div>

</template>

<script setup>
import {movieCardTransformer} from "@/transformers/movieCard"
import {sliceString} from "@/composables/useSliceString"
const props = defineProps(['movie','cardWithIntro'])
const movie = movieCardTransformer(props.movie);

</script>