import Vue from 'vue'
import Router from 'vue-router'
import success from '@/components/success.vue'
import home from '../components/home.vue'
import App from '../App.vue'
Vue.use(Router)
export default new Router({
	mode: 'history',
	  routes: [{
		  		  path: '/',
		  		  name: 'App',
		  		  component: App,
					},{
				  path: '/success',
				  name: 'success',
				  component: success
					},{
				  path: '/home',
				  name: 'home',
				  component: home
				}]
})
