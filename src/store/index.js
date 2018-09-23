import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default function createStore() {
  return new Vuex.Store({
    state: {
      toast: false,
    },
    actions: {
      setToast: ({
        commit
      }, toast) => {
        commit('setToast', toast)
      }
    },
    mutations: {
      setToast: (state, toast) => {
        state.toast = toast
      },
    },
    getters: {
      toast: state => state.toast,
    }
  })
}
