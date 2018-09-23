// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'

import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import Ajax from "./ajax";
// import createStore from "./store";

import Cube from 'cube-ui'

import '@/assets/style/border.css'

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    ajax: Ajax,
    gettoken() {
      let token = window.AndroidJs.sendToken() || '';
      return token
    },
    settitle(title){
      document.title = title
    }
  }
})

Vue.use(Cube)


// const store = createStore();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: {
    App
  },
  template: '<App/>'
})
