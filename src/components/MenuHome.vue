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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
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
