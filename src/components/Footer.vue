<template>
  <div class="bg-blue-400">
    <div class="md:flex   justify-center md:gap-10 text-white     py-10">
      <div v-for="(items,index) in data " :key="index"  class="my-5 md:my-0 ps-5 md:ps-0">
        <div>
          <div v-for="(item,index) in items" :key="index" class="flex flex-col ">
            <p :class="index===0?'font-bold text-lg':''">
              {{item}}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref} from "vue";
const basicData=ref(
    [
      ' THE BASICS',
      "About TMDB",
      'Contact Us',
      'Support Forums',
      'API',
      'System Status'
    ]
)
const getInvolvedData=ref(
    [
      ' Contribution Bible',
      ' Add New Movie',
      'Add New TV Show'
    ]
)
const community=ref([
  'COMMUNITY',
 ' Guidelines',
  'Discussions',
  'Leaderboard',
  'Twitter'
])
const legal=ref([
  'LEGAL',
  'Terms of Use',
  'API Terms of Use',
  'Privacy Policy',
  'DMCA Takedown Request'
])
const data=ref([basicData.value,getInvolvedData.value,community.value,legal.value])

</script>