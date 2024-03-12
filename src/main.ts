import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import bootstrapvue3 from 'bootstrap-vue-3'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import store from './stores/store'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrapvue3)
app.use(store)

app.mount('#app')
