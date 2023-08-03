<template>
  <div class=" px-8 py-3 grid md:grid-cols-12 md:gap-7  ">
    <div class="md:col-span-3 col-span-12">
      <slot name="banner"/>
    </div>
<div class=" md:grid md:grid-cols-5 md:gap-3 md:col-span-9 col-span-12 mt-5">
  <slot name="main"  />
  <button class="bg-blue-400 w-full col-span-5 py-2 rounded-full text-white">Load More</button>

</div>

  </div>
</template>
<script setup>
</script>