<template>
	<div class="is-success">
	  <p>{{message}}</p>
	  <!-- <button v-on:click='toHome' v-trigger>click here to homepage or be waiting for 1 second</button> -->
	  <div @click="toHome()" v-trigger>click here to homepage or be waiting for 1 second</div>  
	  <router-view></router-view>
	</div>
</template>

<script>
	export default {
	  name: 'success',
		data(){
	  			return{
	  				message:'login success',
	  			}
	  		},methods:{
			toHome:function(){
					setTimeout(() =>{
					    this.$router.push({ path: '/home' });
					},1000);
			}
		},directives:{
			trigger:{
			 inserted(el,binging){
				el.click()
      }
   }
}
	}
</script>
<style>
</style>
