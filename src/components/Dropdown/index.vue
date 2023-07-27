<template>
  <div>
    <AppDropdown>
      <template slot="toggler">
        <button>Toggle</button>
      </template>
      <AppDropdownContent >
        <AppDropdownItem  @click="selected('This Week')">This Week</AppDropdownItem>
        <AppDropdownItem @click="selected('Today')"  > Today</AppDropdownItem>
      </AppDropdownContent>
    </AppDropdown>
  </div>
</template>
<script setup>
import AppDropdown from "@/components/Dropdown/AppDropdown.vue";
import AppDropdownContent from "@/components/Dropdown/AppDropdownContent.vue";
import AppDropdownItem from "@/components/Dropdown/AppDropdownItem.vue";
import {provide, ref} from "vue";
const selectedValue = ref('Today')
const selected=(value)=>{
  selectedValue.value = value
  console.log(selectedValue.value)
}
provide('selectedValue',selectedValue)
</script>