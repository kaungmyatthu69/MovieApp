<template>
  <div class="relative" @click="toggle">
    <div  class="bg-black text-white w-36 px-5 py-2 gap-2 relative  z-50 rounded-full items-center justify-center  flex">

      <slot name="toggler"    >
        <p class="text-sm w-full">{{selectedValue}}</p>
      </slot>
      <ChevronDownIcon class="w-5 h-5 transition-all  duration-300  " :class="shareState===false?'':'rotate-180'"/>
    </div>
    <slot  />
  </div>

</template>

<script setup>
import {provide, ref,inject} from "vue";
import {ChevronDownIcon} from "@heroicons/vue/24/solid"
const  shareState = ref(false)
provide('shareState',shareState)
const selectedValue = inject('selectedValue')
const toggle=()=>{
  shareState.value = !shareState.value
  console.log("hello ",shareState.value)

}




</script>

<style>


</style>