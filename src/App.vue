<template>
  <div id="app" class="container">
    <div class="container">
      <app-header></app-header>
    </div>
   <div class="container">
     <router-view></router-view>
   </div>

  </div>
</template>

<script>
  import Header from "./components/Header"
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    appHeader:Header
  }
}
</script>

<style>


</style>
