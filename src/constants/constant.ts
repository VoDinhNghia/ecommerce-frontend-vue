export const routes = {
  home: '/',
  login: '/login',
  services: '/services',
  tutorials: '/tutorials',
  contact: '/contact',
  signup: '/signup',
  dashboard: '/dashboard',
  forbiden: '/forbiden',
  notfound: '/:pathMatch(.*)*',
  userInfo: '/user-info',
}

export const localStorageItem = {
  user: 'user',
  cart: 'cart'
}

export const API_URL = process.env.VUE_APP_ROOT_API

export const userRoles = {
  SUPPER_ADMIN: "SUPPER_ADMIN",
  USER: "USER"
}
