<template>
  <div class="bg-blue-400 z-50 ">
    <div class="container mx-auto flex py-5 justify-between items-center px-7">
      <bars4-icon class="w-8 h-8 text-white md:hidden block" @click="openDrawer"/>
      <div class="flex gap-10 ">
        <router-link to="/">
          <h1 class="font-bold text-xl">The Movie DB</h1>
        </router-link>
        <div class="hidden md:block z-50">
          <ul class="flex gap-5  ">
            <li class="relative group  cursor-pointer text-white " v-for="(item,index) in navList" :key="index">
              {{ item.title }}
              <div class="absolute bg-white group-hover:block transition-all duration-300 hidden w-36  rounded shadow ">
                <div v-for="(data,index) in item.list" :key="index"
                     class="hover:bg-gray-100   text-black cursor-pointer px-3 py-2 ">
                  <router-link :to="`/movie/${data.route}`">

                    <p>{{ data.name }}</p>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
      <div class="flex gap-5">
        <div class="relative">
          <bell-icon class="w-6 h-6 text-white"/>
          <span
              class="absolute inline-flex items-center w-4 h-4 justify-center rounded-full  text-xs bg-red-600  text-white -top-2 -right-1">4</span>
        </div>
        <user-icon class="text-blue-800 w-6 h-6 "/>
        <MagnifyingGlassIcon class="text-blue-800 font-bold w-6 h-6"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {Bars4Icon} from "@heroicons/vue/24/outline";
import {BellIcon, MagnifyingGlassIcon, UserIcon} from "@heroicons/vue/24/solid"
import {inject, ref} from "vue";

const moviesData = ref([
  {name: 'Popular', route: 'popular'},
  {name: 'Now Playing', route: 'now-playing'},
  {name: 'Upcoming', route: 'upcoming'},
  {name: 'Top related', route: 'top-related'}
])
const TVData = ref(['Popular', 'Airing Today', 'Upcoming', 'Top related'])
const peopleData = ref(['Popular People'])
const moreData = ref(['Discussion', 'LeaderBoard', 'Support', 'API'])
const isOpendrawer = inject('isdrawerOpen')

const navList = ref([
  {title: 'Movies', list: moviesData.value},
  {title: 'TV Shows', list: TVData.value},
  {title: 'People', list: peopleData.value},
  {title: 'More', list: moreData.value}


])
const openDrawer = () => {
  isOpendrawer.value = !isOpendrawer.value

}

</script>