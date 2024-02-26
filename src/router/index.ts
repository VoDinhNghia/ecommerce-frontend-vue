import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { routes } from '../constants/constant'
import NotFoundPage from '../components/NotFoundPage.vue'
import DashboardView from '../views/DashboardView.vue'
import ForbidenPage from '../components/ForbidenPage.vue'

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
    },
    {
      path: routes.dashboard,
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: (to, from) => {
        return routes.forbiden
      },
    },
    {
      path: routes.forbiden,
      name: 'forbiden',
      component: ForbidenPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundPage
    },
  ]
})

export default router
