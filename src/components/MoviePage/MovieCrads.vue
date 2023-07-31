<template>

    <div v-for="movie in movies" :key="movie.id"  >
      <Card :movie="movie" :card-with-intro="props.cardWithIntro" />
    </div>

</template>
<script setup>
import useMovie from "@/composables/useMovie";
import {onBeforeMount, ref} from "vue";
import Card from "@/components/Card.vue";

const props = defineProps(['cardWithIntro'])
const movies = ref(null)

const {getPopularMovie} = useMovie()
onBeforeMount(async ()=>{
  try {
    const {data} = await getPopularMovie();
movies.value =(data.results)
    console.log(data.results)
  }catch (error){
    console.log(error)
  }
})


</script>