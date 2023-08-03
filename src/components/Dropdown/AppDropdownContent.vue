<template>
  <transition name="dropdown-content">

      <div
          v-if="active"
          class="-bottom-16 duration-300    absolute  pt-8 z-10   w-36 bg-blue-400 rounded-lg border flex flex-col gap-1 items-center py-2"
      >
        <slot/>
      </div>


  </transition>
</template>

<script setup>
import {computed, inject} from 'vue'
let shareState = inject('shareState')
const active = computed(()=>{
  return shareState.value
})
</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all  0.5s ease;
}
.dropdown-content-enter-from,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-10px);

}
</style>
