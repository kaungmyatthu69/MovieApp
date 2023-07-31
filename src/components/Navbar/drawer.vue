<template>
  <transition name="fade">
    <div  v-if="isOpendrawer" class="bg-black left-0 top-0 md:hidden mt-[72px] h-screen fixed w-72  z-10 ">
      <div>
        <ul v-for="(item,index ) in titleList" :key="index">
          <li class="text-white">{{item.title}}</li>
        </ul>
      </div>
    </div>
  </transition>

</template>

<script setup>
import {inject, ref} from "vue";

const isOpendrawer =inject('isdrawerOpen')
const titleList=ref([
  {title:'Movies',lists:['Popular','Top Rated','Upcoming','Now Playing']},
  {title:'TV Shows',lists:['Popular','Top Rated','On TV','Airing Today']},
  {title:'People',lists:['Popular People']},



])
</script>

<style scoped>
.fade-enter-from
{
  opacity: 0;
  transform: translateX(-400px);
}
.fade-enter-active{
  transition: all 0.5s ease;
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(-400px);
}
.fade-leave-active{

  transition: all 0.5s ease-out;
}



</style>