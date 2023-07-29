<template>
  <div>
<div class="flex justify-between items-center bg-gray-300 px-3 text-sm py-2 rounded" @click="toggleSortMenu">
  <slot name="selctedValue" />
  <ChevronDownIcon class="w-5 h-5 " />
</div>
    <div class="px-3 shadow  border">
      <slot name="body"  />
    </div>
  </div>
</template>
<script setup>
import {ChevronDownIcon} from "@heroicons/vue/24/solid"

const props = defineProps(['data','isOpenSortMenu'])
const toggleSortMenu=()=>{
  props.isOpenSortMenu= !props.isOpenSortMenu
}

</script>