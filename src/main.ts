import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import bootstrapvue3 from 'bootstrap-vue-3'

// since every component imports their bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrapvue3)

app.mount('#app')
