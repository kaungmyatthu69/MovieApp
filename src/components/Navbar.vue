<template>
  <div class="bg-blue-400 flex py-5 justify-between items-center ">
<bars4-icon class="w-8 h-8 text-white" />
    <h1>The Movie DB</h1>
    <div class="flex">
      <div class="relative">
        <bell-icon class="w-6 h-6 text-white"/>
        <span class="absolute inline-flex items-center w-4 h-4 justify-center rounded-full  text-xs bg-red-600  text-white -top-2 -right-1">4</span>
      </div>
      <user-icon class="text-white w-6 h-6 " />
      <MagnifyingGlassIcon class="text-blue-800 font-bold w-6 h-6" />
    </div>

  </div>
</template>

<script setup>
import {Bars4Icon} from "@heroicons/vue/24/outline";
import {BellIcon,MagnifyingGlassIcon,UserIcon} from  "@heroicons/vue/24/solid"

</script>