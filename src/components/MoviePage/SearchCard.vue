<template>
  <Accordion>
    <template #title>Sort</template>
    <template #icon>
      <ChevronRightIcon class="w-5 h-5 font-bold"/>
    </template>
    <template #body>
      <AccordionContent>
        <template #secondTitle>
          Sort Results By
        </template>
        <template #body>
          <accordion-dropdown :isOpenSortMenu="isOpenSortMenu">
            <template #selctedValue>
              <div @click="toggleDropdown">{{ selectedValue }}</div>
            </template>
            <template #body>
              <div v-for="(item,index) in data" :key="index" @click="selected(item)" v-if="isOpenSortMenu">
                {{ item }}
              </div>
            </template>
          </accordion-dropdown>
        </template>

      </AccordionContent>
    </template>

  </Accordion>

</template>
<script setup>
import {ChevronRightIcon} from "@heroicons/vue/24/solid";
import Accordion from "@/components/Accordion/Accordion.vue";
import AccordionDropdown from "@/components/Accordion/AccordionDropdown.vue";
import {ref} from "vue";
import AccordionContent from "@/components/Accordion/AccordionContent.vue";

const data = ref(['Popularity Ascending', 'Popularity Descending', 'Rating Ascending', 'Rating Descending', 'Release Ascending', 'Release Descending'])
const selectedValue = ref('Popularity Ascending')
const isOpenSortMenu = ref(false)
const selected = (item) => {
  selectedValue.value = item
  isOpenSortMenu.value = false

}

const toggleDropdown=()=>{
  isOpenSortMenu.value=!isOpenSortMenu.value
}

</script>
