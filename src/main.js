import { createApp } from 'vue'
import App from './App.vue'
import './assets/input.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
