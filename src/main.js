import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router/index.js'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})