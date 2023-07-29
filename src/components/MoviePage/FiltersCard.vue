<template>
  <Accordion>
    <template #title>Filters</template>
    <template #icon>
      <ChevronRightIcon class="w-5 h-5 font-bold"/>
    </template>
    <template #secondTitle>
      Show me
    </template>
    <template #body>
      <accordion-dropdown>
        <template #selctedValue>
          <div @click="toggleSortMenu">{{ selectedValue }}</div>
        </template>
        <template #body>
          <div v-for="(item,index) in data" :key="index" @click="selected(item)" v-if="isOpenSortMenu">
            {{ item }}
          </div>
        </template>
      </accordion-dropdown>
    </template>
  </Accordion>

</template>
<script setup>
import {ChevronRightIcon} from "@heroicons/vue/24/solid";
import Accordion from "@/components/Accordion/Accordion.vue";
import AccordionDropdown from "@/components/Accordion/AccordionDropdown.vue";
import {ref} from "vue";

const data = ref(['Popularity Ascending', 'Popularity Descending', 'Rating Ascending', 'Rating Descending', 'Release Ascending', 'Release Descending'])
const selectedValue = ref('Popularity Ascending')
const isOpenSortMenu = ref(false)
const selected = (item) => {
  selectedValue.value = item
  isOpenSortMenu.value = false
}
const toggleSortMenu = () => {
  isOpenSortMenu.value = !isOpenSortMenu.value
  console.log('hello')
}
</script>
