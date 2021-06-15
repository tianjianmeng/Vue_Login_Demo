<template>
  <div id="logins">
		<p>{{message}}</p>
			<input v-model="username" placeholder="username"><br/>
			<input v-model="password" placeholder="password"><br/>
			<button v-on:click="login">login</button>
			<router-view></router-view>	
  </div>
</template>

<script>
export default {
  name: 'logins',
	data(){
  			return{
  				message:'please login',
  				username: '',
  				password: ''
  			}
  		},methods:{
			login:function(){
				this.$router.push({ path: '/success' });
			}
		}
}
</script>

<style>
</style>