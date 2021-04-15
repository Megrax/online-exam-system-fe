import Vue from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'
import '@/assets/css/iconfonts.css'
import '@/assets/css/main.css'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
