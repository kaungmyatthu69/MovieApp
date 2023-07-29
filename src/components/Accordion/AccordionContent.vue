<template>
  <div class="  px-3 items-center  py-3"  v-if="isOpen">
    <p class="text-gray-400">
      <slot name="secondTitle"/>
    </p>
    <div>
      <slot name="body"/>
    </div>
  </div>
</template>

<script setup>
import {inject} from "vue";
const isOpen = inject('isOpen')
</script>