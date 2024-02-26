<script setup lang="ts">
import MenuHome from './MenuHome.vue'
import FooterPage from './FooterPage.vue'
</script>
<template>
  <MenuHome />
  <img :src="'public/images/forbiden.jpg'" class="ImgNotFoundPage" />
  <FooterPage />
</template>

<style>
@import '../assets/notfound.css';
</style>
