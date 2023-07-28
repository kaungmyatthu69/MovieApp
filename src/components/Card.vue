<template>
  <div class="flex flex-col  gap-3   ">
    <div class="">
      <img :src="movie.image" class=" rounded-lg shadow-lg" :alt="movie.title"/>
    </div>
    <div class="h-16">
      <p class="text-sm font-bold ">{{movie.title}}</p>
      <p class="text-gray-400">{{movie.date}}</p>
    </div>

  </div>
</template>

<script setup>
import {movieCardTransformer} from "@/transformers/movieCard"
const props = defineProps(['movie'])
const movie = movieCardTransformer(props.movie);
</script>