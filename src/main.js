import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router/index'
import pinia from './store'


// import Vant from 'vant'
// import '/vant/lib/index.css'
import 'normalize.css'
import './assets/index.css'

const app = createApp(Main)
// app.use(Vant)
app.use(router)
app.use(pinia)
app.mount('#app') 