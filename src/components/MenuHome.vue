<script setup lang="ts">
import { routes } from '../constants/constant'
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
            <li class="nav-item">
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
              <a class="nav-link text-white" v-bind:href="routes.signup"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
                  />
                </svg>
                SignUp</a
              >
            </li>
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">Eng</b-dropdown-item>
              <b-dropdown-item href="#">Vi</b-dropdown-item>
            </b-nav-item-dropdown>
            <li class="nav-item">
              <a class="nav-link text-white" href=""
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                  />
                </svg>
                <span class="translate-middle badge rounded-pill bg-danger"> 99 </span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
@import '../assets/menu.css';
</style>
