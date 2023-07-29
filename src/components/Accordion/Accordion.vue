<template>
  <div class="  border shadow-md  rounded  border-gray-300  ">
    <div class="flex justify-between px-3 items-center border-b  py-3" @click="toggleAccordion">
      <h2 class="  font-semibold">
        <slot name="title"/>
      </h2>
      <div  class="duration-300" :class="isOpen?'rotate-90':''">
        <slot name="icon" />
      </div>

    </div>
    <transition-group name="accordion-content" >

    <slot name="body" />

    </transition-group>

  </div>
</template>
<script setup>
import {provide, ref} from "vue";

const isOpen = ref(false)
provide('isOpen',isOpen)
const toggleAccordion = ()=>{
  isOpen.value = !isOpen.value
}
</script>

<style>
.accordion-content-enter-active,
.accordion-content-leave-active {
  transition: all  0.3s ease;
}
.accordion-content-enter-from,
.accordion-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);

}
</style>