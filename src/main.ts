import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


import "@/assets/css/index.css"
import '@/assets/css/common.css'
import '@/assets/font/iconfont.css'

import 'wow.js/css/libs/animate.css'


import countTo from 'vue3-count-to'


createApp(App).use(router).use(countTo).mount('#app')
/*
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

*/