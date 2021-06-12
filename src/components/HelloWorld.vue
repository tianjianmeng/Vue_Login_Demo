<template>
  <div class="hello">
    <p>{{message}}</p>
        <input v-model="username" placeholder="username"><br/>
        <input v-model="password" placeholder="password"><br/>
        <button v-on:click="login">login</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
	data(){
  			return{
  				message:'please login',
  				username: '',
  				password: ''
  			}
  		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
