<script setup lang="ts">
import MenuHomePage from '../components/MenuHome.vue'
import FooterPage from '../components/FooterPage.vue'
</script>
<template>
  <div>
    <MenuHomePage />
    <div class="LoginPageMain container-fluid mt-2 mb-2">
      <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image"></div>
        <div class="col-md-6 bg-light">
          <div class="LoginPage d-flex align-items-center py-5">
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 mx-auto">
                  <h3 class="display-4 text-center mb-3">Login</h3>
                  <form>
                    <div class="mb-3">
                      <input id="inputEmail" v-model="email" type="email" placeholder="Email address" required="true"
                        autofocus="true" class="form-control rounded-pill border-0 shadow-sm px-4" />
                    </div>
                    <div class="mb-3">
                      <input id="inputPassword" v-model="password" type="password" placeholder="Password" required="true"
                        class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div class="d-grid gap-2 mt-2">
                      <button @click="loginHandle" type="button"
                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterPage />
  </div>
</template>

<style>
@import "../assets/login.css";
</style>
<script lang="ts">
import { defineComponent } from "vue";
import { login } from '../services/authen.service'
import { routes } from '../constants/constant'

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async loginHandle() {
      const data = await login({ email: this.email, password: this.password })
      if (data?.statusCode === 200) {
        this.$router.push({ path: routes.dashboard });
      } else {
        this.$router.push({ path: routes.login });
      }
    }
  }
});
</script>
