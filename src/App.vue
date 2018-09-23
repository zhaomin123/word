<template>
  <div id="app">
    <router-view/>
    <!-- <div class="toast" v-if="toast"><div>fsdfsdfsd</div></div> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { createAPI, BetterScroll } from 'cube-ui'
import '../static/js/jquery-1.8.3.js'
// import "../static/css/common.css"
export default {
  name: 'App',
  methods: {},
  // computed: {
  //   ...mapGetters({
  //     toast: 'toast'
  //   })
  // }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.cube-loading{
  font-size: 1.23rem;
}
</style>
