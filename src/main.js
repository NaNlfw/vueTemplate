import Vue from 'vue'
import App from './App.vue'
import router from './router'

import api from './api'
import store from './store'

Vue.config.productionTip = false;

Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
