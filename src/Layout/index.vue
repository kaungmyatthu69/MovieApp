<template>

<main class="">
  <Navbar/>
  <drawer/>
  <Container>
    <slot/>
  </Container>
  <Footer/>
</main>



</template>
<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Container from "@/Layout/Container.vue";
import Footer from "@/components/Footer.vue";
import Drawer from "@/components/Navbar/drawer.vue";
</script>