import Vue from 'vue'
import Vuex from 'vuex'
import { merge } from './utils.js'
import { config } from './mode.js'
import mock from '../mock'

Vue.use(Vuex)

const state = {
  config,
  mock,
  states: {
    isLoading: true,
    isAlerting: false,
    alertingText: '',
    alertingOkCallback () {},
    alertingCancelCallback () {},
    isWaiting: false,
    presenting: ''
  },
  user: {
    id: '',
    name: '',
    password: '',
    logined: false
  },
  menus: [
    {
      text: 'Dashboard',
      alias: 'dashboard',
      details: [
        { text: 'General', alias: 'general' }
      ]
    },
    {
      text: 'Posts',
      alias: 'posts',
      details: [
        { text: 'Posts', alias: 'posts' },
        { text: 'Add', alias: 'add' },
        { text: 'Edit', alias: 'revise' }
      ]
    },
    {
      text: 'Pages',
      alias: 'pages',
      details: [
        { text: 'Pages', alias: 'pages' },
        { text: 'Add', alias: 'add' },
        { text: 'Edit', alias: 'revise' }
      ]
    },
    {
      text: 'Comments',
      alias: 'comments',
      details: [
        { text: 'Comments', alias: 'comments' },
        { text: 'Edit', alias: 'revise' }
      ]
    },
    {
      text: 'Settings',
      alias: 'settings',
      details: [
        { text: 'Profile', alias: 'profile' }
      ]
    }
  ]
}

const mutations = {
  setStates (state, options) { merge(state.states, options) },
  setUser (state, options) { merge(state.user, options) }
}

const actions = {
  load: ({ commit }, bool) => commit('setStates', {
    isLoading: bool
  }),
  alert: ({ commit }, { text, callback }) => commit('setStates', {
    isAlerting: true,
    alertingText: text,
    alertingOkCallback () {
      callback && callback()
      commit('setStates', { isAlerting: false })
    },
    alertingCancelCallback: null
  }),
  confirm: ({ commit }, { text, okCallback, cancelCallback }) => commit('setStates', {
    isAlerting: true,
    alertingText: text,
    alertingOkCallback () {
      okCallback && okCallback()
      commit('setStates', { isAlerting: false })
    },
    alertingCancelCallback () {
      cancelCallback && cancelCallback()
      commit('setStates', { isAlerting: false })
    }
  }),
  wait: ({ commit }, bool) => commit('setStates', {
    isWaiting: bool
  }),
  present: ({ commit }, val) => commit('setStates', {
    presenting: val
  })
}

const getters = {
  config: state => state.config,
  mock: state => state.mock,
  states: state => state.states,
  user: state => state.user,
  menus: state => state.menus
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
