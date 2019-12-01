import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
    count: 0,
}
const mutations = {
    add(state) {
        return this.state.count++;
    },
    jian(state) {
        return this.state.count--;
    }
}

export default new Vuex.Store({
    state,
    mutations,
})