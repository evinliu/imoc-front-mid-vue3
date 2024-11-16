import './index.css'
import 'virtual:svg-icons-register'
import { useRem } from '@/utils/flexible'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import libs from '@/libs'

useRem()

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(libs)
app.mount('#app')
