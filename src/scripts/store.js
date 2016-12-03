import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // states: {
  //   isLoading: true,
  //   // 弹出框，只有确定按钮
  //   isAlerting: false,
  //   alertingText: '',
  //   alertingCallback () {}
  // }
}

const mutations = {
  // load (state, bool) {
  //   state.states.isLoading = bool
  // }
}

const actions = {
  // load: ({ commit }, bool) => commit('setStates', {
  //   isLoading: bool
  // })
}

const getters = {
  // states: state => state.states
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
