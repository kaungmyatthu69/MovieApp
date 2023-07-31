<template>
  <div class="flex flex-col gap-3">
    <h1>Popular Movies</h1>

    <SearchCard/>
    <FiltersCard/>
    <button class="bg-blue-400 text-white rounded-full py-2 px-3">Search</button>
  </div>

</template>
<script setup>
import SearchCard from "@/components/MoviePage/SearchCard.vue";
import FiltersCard from "@/components/MoviePage/FiltersCard.vue";


</script>

<style>

</style>