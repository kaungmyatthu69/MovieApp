<template>
  <h1>Popular Movies</h1>

  <div class="flex flex-col gap-3">
    <SearchCard/>
    <FiltersCard/>
  </div>




</template>
<script setup>
import SearchCard from "@/components/MoviePage/SearchCard.vue";
import FiltersCard from "@/components/MoviePage/FiltersCard.vue";


</script>

<style>

</style>