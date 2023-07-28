<template>
  <div >
    <AppDropdown>
      <template slot="toggler">
        <button>Toggle</button>
      </template>
      <AppDropdownContent  >
        <div v-for="(item,index) in props.data" :key="index">
          <AppDropdownItem  @click="selected(`${item}`)">{{item}}</AppDropdownItem>
        </div>


      </AppDropdownContent>
    </AppDropdown>
  </div>
</template>
<script setup>
import AppDropdown from "@/components/Dropdown/AppDropdown.vue";
import AppDropdownContent from "@/components/Dropdown/AppDropdownContent.vue";
import AppDropdownItem from "@/components/Dropdown/AppDropdownItem.vue";
import {provide, ref} from "vue";
const props = defineProps(['data' ,'default'])
const selectedValue = ref(`${props.default}`)
const selected=(value)=>{
  selectedValue.value = value

}
provide('selectedValue',selectedValue)
</script>