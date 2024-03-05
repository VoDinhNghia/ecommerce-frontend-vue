<script setup lang="ts">
import { logOut } from '../services/authen.service'
import { ref } from 'vue'
import { routes } from '../constants/constant'
import { getCurrentUser } from '../services/authen.service'
const is_expanded = ref(true)
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
}
const logout = () => {
  logOut()
  window.location.href = routes.home
}
const currentUser = getCurrentUser()
const userName = `${currentUser?.lastName} ${currentUser?.middleName || ''} ${currentUser?.firstName}`
</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="menu-toggle-wrap">
      <span v-if="is_expanded" class="pe-5 text-uppercase text-success fw-600 fs-6"
        ><img :src="'public/images/userIcon.jpg'" class="IconUserDashboard" /> {{ userName }}</span
      >
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons"><i class="bi bi-chevron-double-right text-primary"></i></span>
      </button>
    </div>
    <div class="menu">
      <router-link :to="routes.home" class="buttonMenuDashboard">
        <span class="pe-3"><i class="bi bi-house-door"></i></span>
        <span v-if="is_expanded" class="material-icons">Home</span>
      </router-link>
      <a class="buttonMenuDashboard" v-on:click="logout()">
        <span class="pe-3"><i class="bi bi-box-arrow-in-left"></i></span>
        <span v-if="is_expanded" class="material-icons">SignOut</span>
      </a>
    </div>
  </aside>
</template>

<style lang="scss">
@import '../assets/menu-dashboard';
</style>
