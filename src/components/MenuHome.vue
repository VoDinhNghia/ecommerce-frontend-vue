<script setup lang="ts">
import { routes } from '../constants/constant'
import { getCurrentUser, logOut } from '../services/authen.service'
const userInfo = getCurrentUser()
const userName = `${userInfo?.lastName} ${userInfo?.middleName || ''} ${userInfo?.firstName}`
const logout = () => {
  logOut()
  window.location.reload()
}
</script>

<template>
  <div class="MenuHomePage" id="appp">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" v-bind:href="routes.home">
          <img :src="'public/images/D-logo.png'" class="ImgLogoHomePage" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerMenuHomePage"
          aria-controls="navbarTogglerMenuHomePage"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerMenuHomePage">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link text-white" v-bind:href="routes.services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" v-bind:href="routes.tutorials">Tutorial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" v-bind:href="routes.contact">Contact</a>
            </li>
            <li v-if="!userInfo" class="nav-item">
              <a class="nav-link text-white" v-bind:href="routes.login">
                <i class="bi bi-box-arrow-in-right"></i>
                SignIn
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="">
                <i class="bi bi-cart2"></i>
                <span class="translate-middle badge rounded-pill bg-danger"> 99 </span></a
              >
            </li>
            <b-nav-item-dropdown variant="success" v-if="userInfo" right>
              <template #button-content>
                <img :src="'public/images/userIcon.jpg'" class="IconUserProfile" /> {{ userName }}
              </template>
              <b-dropdown-item v-bind:href="routes.dashboard"
                ><i class="bi bi-grid-3x3-gap-fill text-success"></i> Dashboard</b-dropdown-item
              >
              <b-dropdown-item v-bind:href="routes.dashboard"
                ><i class="bi bi-person-fill-gear text-success"></i> Profile</b-dropdown-item
              >
              <b-dropdown-item href="#" @click="logout()"
                ><i class="bi bi-box-arrow-left text-danger"></i> SignOut</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
@import '../assets/menu.scss';
</style>
