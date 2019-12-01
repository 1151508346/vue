import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const moduleA = {
  state: { 
    moduleACount :1202
   },
  mutations: { 
    moduleACount(state,payload){
      state.moduleACount = 10;
      window.console.log(payload)
    }
   },
  actions: { 
      increment (context,payload) {
        context.commit('moduleACount',payload)
        // window.console.log(payload)
      }
   },
  getters: { 
      getData(state){
        // window.console.log(state)
        state.moduleACount = 1020;
          return state.moduleACount;
      }
   }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    a:moduleA
  }
})
