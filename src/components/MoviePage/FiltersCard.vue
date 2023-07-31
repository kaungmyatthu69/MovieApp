<template>
  <Accordion>
    <template #title>Filter</template>
    <template #icon>
      <ChevronRightIcon class="w-5 h-5 font-bold"/>
    </template>
    <template #body>
      <AccordionContent class="border-b">
        <template #secondTitle>
         Show me
        </template>
        <template #body>
          <div v-for="item in  showMeData" :key="item" class="flex items-center gap-2" >

              <input type="radio"   :id="item" :value="item" v-model="showMeSelected" />
              <label :for="item">{{item}}</label>


          </div>
        </template>

      </AccordionContent>

      <AccordionContent class="border-b">
        <template #secondTitle>
         Release Date
        </template>
        <template #body>
        <div class="flex gap-2 items-center">
          <input type="checkbox"  @change="selectOption" checked  />
          <label>Search all release?</label>
        </div>
          <div v-if="!searchOption">
            <div class="flex items-center mb-2 gap-2">
              <input type="checkbox"  @change="()=>searchOptionWithCountry=!searchOptionWithCountry" checked />
              <label>Search all countries?</label>
            </div>
            <div v-if="searchOptionWithCountry">
              <accordion-dropdown :isOpenSortMenu="isOpenSortMenu">
                <template #selctedValue>
                  <div @click="toggleDropdown">
                    <div >{{ selectedValue }}</div>
                  </div>

                </template>
                <template #body>
                  <div v-for="(item,index) in data" :key="index" @click="selected(item)" v-if="isOpenSortMenu">
                    {{ item }}
                  </div>
                </template>
              </accordion-dropdown>
            </div>
            <div v-for="(data,index) in checkBoxData" :key="index">
              <div class="flex items-center mt-1 gap-2">
                <input type="checkbox"  checked />
                <label>{{data}}</label>
              </div>
            </div>
            <div>

            </div>



          </div>
        </template>

      </AccordionContent>

      <AccordionContent class="border-b">
        <template #secondTitle>
          Geners
        </template>
        <template #body>
          <div class="flex flex-wrap gap-2">
            <div v-for="item in  genersData" :key="item"  >
              <div class="border px-2 hover:bg-blue-400 hover:text-white transition-all duration-300 py-1 rounded-xl ">
                {{item}}

              </div>


            </div>
          </div>

        </template>

      </AccordionContent>
    <AccordionContent class="border-b">
      <template #secondTitle>
        Certification
      </template>
    </AccordionContent>
      <AccordionContent class="border-b">
        <template #secondTitle>
          Language
        </template>
        <template #body>
          <accordion-dropdown :isOpenSortMenu="isLanguageMenu">
            <template #selctedValue>
              <div @click="toggleSelectLanguageDropdown" class="cursor-pointer">{{ selectedLanguage }}</div>
            </template>
            <template #body>
              <div v-for="(item,index) in language" :key="index" @click="selectLanguage(item)" class="cursor-pointer" v-if="isLanguageMenu">
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
import {ref, watch} from "vue";
import AccordionContent from "@/components/Accordion/AccordionContent.vue";
const searchOptionWithCountry = ref(false)
const data = ref(['Myanmar', 'Thailand ', 'Japan', 'Korea', 'Taiwan', 'China'])
const selectedValue = ref('Myanmar')
const isOpenSortMenu = ref(false)
const isLanguageMenu=ref(false)
const selectedLanguage=ref('Non selected ')
const selected = (item) => {
  selectedValue.value = item
  isOpenSortMenu.value = false

}
const selectLanguage=(item)=>{
  selectedLanguage.value=item
  isLanguageMenu.value=false
}
const toggleSelectLanguageDropdown=()=>{

  isLanguageMenu.value=!isLanguageMenu.value
  console.log(isLanguageMenu.value)
}

const toggleDropdown=()=>{
  isOpenSortMenu.value=!isOpenSortMenu.value
}

const showMeData = ref(['Everything',"Movies I Haven't Seen",'Movies I Have Seen'])
const showMeSelected=ref('')

const searchOption = ref(true)
const selectOption=()=>{
  searchOption.value = !searchOption.value
}

const checkBoxData = ['Premiere','Theatrical(limited)','Theatrical','Digital','Physical','TV']
const genersData=['Action','Adventure','Animation','Comedy','Crime','Documentary','Drama','Family','Fantasy','History','Horror' ,'Music']
const language =['Myanmar','english','Chinese','Taiwan']
</script>
