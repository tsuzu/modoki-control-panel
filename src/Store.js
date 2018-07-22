import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    containers: []
  },
  mutations: {
    setContainers (state, payload) {
      state.containers = payload
    }
  }
})
