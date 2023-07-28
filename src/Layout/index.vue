<template>
<main>
  <Navbar/>

  <Container>
    <slot/>
  </Container>
</main>



</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import Container from "@/Layout/Container.vue";
</script>