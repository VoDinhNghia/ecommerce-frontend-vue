<script setup lang="ts">
import { logOut } from '../services/authen.service';
import { ref } from 'vue'
import { routes } from '../constants/constant'
const is_expanded = ref(localStorage.getItem('is_expanded') === 'true')
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem('is_expanded', String(is_expanded.value))
}
const logout = () => {
  logOut()
  window.location.href = routes.home
}
</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons"><i class="bi bi-chevron-double-right"></i></span>
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
@import '../assets/menu-dashboard.scss';
</style>
