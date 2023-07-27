<template>
  <transition name="dropdown-content">
    <div
        v-if="active"
        class="origin-top-right  duration-300  -z-10 absolute  mt-20 pt-8 w-36 bg-blue-400 rounded-lg border flex flex-col gap-1 items-center py-2"
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
.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);

}
</style>
