import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { routes } from '../constants/constant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home,
      name: 'home',
      component: HomeView
    },
    {
      path: routes.login,
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
