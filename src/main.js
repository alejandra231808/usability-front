import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import router from './router'
import ToggleButton from 'vue-js-toggle-button'


//import './axios'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToggleButton)
app.mount('#app')
