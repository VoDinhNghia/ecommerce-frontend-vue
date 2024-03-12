<script setup lang="ts">
import FooterPage from '../components/FooterPage.vue'
import MenuDashboardPages from '../components/MenuDashboardPage.vue'
</script>
<template>
  <div class="Dashboard mb-2">
    <MenuDashboardPages />
    <div id="UserMgt">{{ userLists }}</div>
    <h1 class="ps-3">User Management Page</h1>
  </div>
  <FooterPage />
</template>

<script lang="ts">
export default {
    name: 'UserMgt',
    computed: {
        userLists: function() {       
          return this.$store.state.userLists
        },
    },
    mounted() {
      this.$store.dispatch('getUserList', { limit: 10, page: 1, searchKey: 'nghi' })
    },
};
</script>

<style lang="scss">
@import '../assets/dashboard.scss';
</style>
