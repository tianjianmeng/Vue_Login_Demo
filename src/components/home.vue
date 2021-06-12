<template>
	<div class="homepage">
	<p>{{message}}</p>
	  <div class="static"
	     <div v-bind:style="{ color: 'green', fontSize: '160px' }">{{message2}}</div>
	  </div>
	</div>
</template>

<script>
	export default {
	  name: 'home',
		data(){
	  			return{
	  				message:'homepage',
					message2:'This is homepage',
	  			}
	  	}
	}
</script>
<style>
</style>
