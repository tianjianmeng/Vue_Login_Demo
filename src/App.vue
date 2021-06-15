<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>

<script>
import login from './components/login.vue'

export default {
  name: 'app',
  
    data(){
      return {
        
      }
    },
    components: {
      login
    }

}
</script>

<style>
</style>