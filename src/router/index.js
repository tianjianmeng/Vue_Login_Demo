import Vue from 'vue'
import Router from 'vue-router'
import success from '@/components/success.vue'
import home from '../components/home.vue'
import App from '../App.vue'
import login from '../components/login.vue'
Vue.use(Router)
export default new Router({
	mode: 'history',
	  routes: [{
		  		  path: '/',
		  		  name: 'App',
		  		  component: App,
				  redirect: { name: 'login' },
					},{
						
				  path: '/login',
				  name: 'login',
				  component: login,
				  
					},{
				  path: '/success',
				  name: 'success',
				  component: success,
				  
					},{
				  path: '/home',
				  name: 'home',
				  component: home,
				  
				}]
})
