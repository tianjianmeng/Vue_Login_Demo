<template>
	<div class="homepage">
		<div v-bind:class="{ 'active': A }">
			<p>{{message}}</p>
		</div>
		
		<button @click="e()">B</button>
	  <div>
	     <div v-bind:style="{ color: 'green', fontSize: '160px' }">{{message2}}</div>
	  </div>
	</div>
</template>

<script>
	export default {
	  name: 'home',
		data(){
	  			return{
					message1:'homepage11111111111111111',
	  				message:'homepage',
					message2:'This is homepage',
					A: false ,
					}
	  	},
	  	methods: {
			e(){

				this.A = true;

			}
		}
	}
</script>
<style>
	.active{
		color: #00FF00;
		font-size: 89px;
	}
</style>
