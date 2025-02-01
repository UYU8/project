import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import router from './router/index'
import App from './App.vue'
import lazy from './directives/lazy'
import 'wc-waterfall'

const app = createApp(App)

app.use(createPinia()) // pinia的挂载
app.use(router) // vue-router的挂载
app.directive('lazy', lazy);
app.mount('#app')