<template>
  <Layout>
    <MoviePageLayout>
      <template #banner>
        <SearchSection/>
      </template>

      <template #main>
          <MovieCrads :cardWithIntro="!isMedium" />
      </template>
    </MoviePageLayout>


  </Layout>
</template>
<script setup>
import Layout from "@/Layout/index.vue"
import SearchSection from "@/components/MoviePage/SearchSection.vue";
import MoviePageLayout from "@/Layout/MoviePageLayout.vue";
import MovieCrads from "@/components/MoviePage/MovieCrads.vue";
import {useMediaQuery} from "@vueuse/core";
import {ref} from "vue";
const isMedium =ref(useMediaQuery('(min-width:720px)'))



</script>
<style>

</style>