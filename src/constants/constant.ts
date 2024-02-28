export const routes = {
  home: '/',
  login: '/login',
  services: '/services',
  tutorials: '/tutorials',
  contact: '/contact',
  signup: '/signup',
  dashboard: '/dashboard',
  forbiden: '/forbiden',
  notfound: '/:pathMatch(.*)*'
}

export const localStorageItem = {
  user: 'user',
  cart: 'cart'
}

export const API_URL = process.env.VUE_APP_ROOT_API
