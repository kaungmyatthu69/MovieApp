<script setup>

import TrendingSection from "@/components/HomePage/TrendingSection.vue";
</script>

<template>
  <div class="container mx-auto ">
    <div class=" bgImage backdrop-blur w-full  h-full bg-cover bg-center ">
        <div class="text-white px-10 flex flex-col gap-10 backdrop-blur-sm md:py-40 py-20   ">
          <div class="flex flex-col gap-3">
            <h1 class=" text-6xl">Welcome.</h1>
            <h2 class="text-3xl">Millions of movies, TV shows and people to discover ,Explore now.</h2>
          </div>

          <div class="flex justify-between bg-white rounded-full  ">
            <input placeholder="Search... " class="w-full text-black  px-5 py-3 focus:ring-0 focus:outline-0  border-none rounded-full"/>
            <button class="bg-blue-400  px-5  text-white rounded-full ">Search</button>
          </div>
        </div>



    </div>
<TrendingSection/>
  </div>

</template>


<style>

.bgImage{
  background-image: url("src/assets/images/image1.jpg");
}

</style>

