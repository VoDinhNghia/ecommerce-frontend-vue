<script setup lang="ts">
import FooterPage from '../components/FooterPage.vue'
import MenuDashboardPages from '../components/MenuDashboardPage.vue'
</script>
<template>
  <div class="Dashboard mb-2">
    <MenuDashboardPages />
    <h1 class="ps-3">User Info</h1>
  </div>
  <FooterPage />
</template>

<style lang="scss">
@import '../assets/dashboard.scss';
</style>
