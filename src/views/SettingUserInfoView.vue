<script setup lang="ts">
import FooterPage from '../components/FooterPage.vue'
import MenuDashboardPages from '../components/MenuDashboardPage.vue'
import { getCurrentUser } from '../services/authen.service'
const userInfo = getCurrentUser()
</script>
<template>
  <div class="Dashboard mb-2">
    <MenuDashboardPages />
    <div class="SettingUserInfo">
      <div class="card m-2">
        <div class="card-header bg-success fs-5 text-white">User Profile</div>
        <div class="card-body">
          <p class="card-text">Last Name: {{ userInfo?.lastName }}</p>
          <p class="card-text">Middle Name: {{ userInfo?.middleName }}</p>
          <p class="card-text">Last Name: {{ userInfo?.lastName }}</p>
          <p class="card-text">Code: {{ userInfo?.code }}</p>
          <p class="card-text">Email: {{ userInfo?.email }}</p>
          <p class="card-text">Gender: {{ userInfo?.gender }}</p>
          <p class="card-text">Mobile: {{ userInfo?.mobile }}</p>
          <p class="card-text">Address: {{ userInfo?.address }}</p>
          <a href="#" class="btn btn-primary">Update</a>
        </div>
      </div>
    </div>
  </div>
  <FooterPage />
</template>

<style lang="scss">
@import '../assets/dashboard';
</style>
