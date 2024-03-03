<script setup lang="ts">
import MenuHome from './MenuHome.vue'
import FooterPage from './FooterPage.vue'
</script>
<template>
  <MenuHome />
  <img :src="'public/images/notfound.jpg'" class="ImgNotFoundPage" />
  <FooterPage />
</template>

<style>
@import '../assets/notfound.scss';
</style>
