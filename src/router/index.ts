import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { routes, localStorageItem } from '../constants/constant'
import NotFoundPage from '../components/NotFoundPage.vue'
import DashboardView from '../views/DashboardView.vue'
import ForbidenPage from '../components/ForbidenPage.vue'
import SettingUserInfoView from '../views/SettingUserInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home,
      name: routes.home,
      component: HomeView
    },
    {
      path: routes.login,
      name: routes.login,
      component: LoginView
    },
    {
      path: routes.dashboard,
      name: routes.dashboard,
      component: DashboardView
    },
    {
      path: routes.userInfo,
      name: routes.userInfo,
      component: SettingUserInfoView
    },
    {
      path: routes.forbiden,
      name: routes.forbiden,
      component: ForbidenPage
    },
    {
      path: routes.notfound,
      name: routes.notfound,
      component: NotFoundPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = [
    routes.login,
    routes.forbiden,
    routes.home,
    routes.contact,
    routes.services,
    routes.signup,
    routes.tutorials
  ]
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem(localStorageItem.user)
  if (authRequired && !loggedIn) {
    return next(routes.login)
  }
  next()
})

export default router
