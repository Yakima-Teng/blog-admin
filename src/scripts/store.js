import Vue from 'vue'
import Vuex from 'vuex'
import utils from './utils.js'
import mock from '../mock'

Vue.use(Vuex)

const state = {
  config: utils.config,
  mock,
  states: {
    isLoading: true,
    // 弹出框，只有确定按钮
    isAlerting: false,
    alertingText: '',
    alertingCallback () {}
  },
  user: {
    code: '',
    openid: ''
  },
  options: {
    // orderStatus: [
    //   { value: '0', text: '未完成' },
    //   { value: '1', text: '已完成' }
    // ],
    insuranceFirm: [
      { value: '1', text: '太平洋保险' },
      { value: '2', text: '平安保险' },
      { value: '3', text: '人民保险' },
      { value: '5', text: '永诚保险' },
      { value: '6', text: '人寿保险' }
    ],
    orderStatus: [
      { value: '-2', text: '质检失败' },
      { value: '-1', text: '核保失败' },
      { value: '0', text: '待核保' },
      { value: '1', text: '待质检' },
      { value: '2', text: '已质检' },
      { value: '3', text: '待解付' },
      { value: '4', text: '待出单（已解付）' },
      { value: '5', text: '已出单' },
      { value: '6', text: '已分配快递员' },
      { value: '7', text: '已取单' },
      { value: '8', text: '配送成功' },
      { value: '9', text: '配送失败' },
      { value: '10', text: '已退单' }
    ]
  },
  orders: [
  //   {
  //     duration: '2016-06-27——2016-07-01',
  //     details: [
  //       {
  //         orderId: 'DD132456789',
  //         insuranceFirmNo: '1',
  //         price: 5000,
  //         carOwnerName: '王二',
  //         date: '2016-07-01',
  //         status: '已完成'
  //       },
  //       {
  //         orderId: 'DD132456789',
  //         insuranceFirmNo: '5',
  //         price: 3000,
  //         carOwnerName: '李四',
  //         date: '2016-06-27',
  //         status: '未完成'
  //       }
  //     ]
  //   }
  ]
}

const mutations = {
  // setStates (state, options) {
  //   utils.merge(state.states, options)
  // },
  getOptionText (state, options, value) {
    for (let elem of options) {
      if (elem.value === value) {
        return elem.text
      }
    }
    return value
  },
  load (state, bool) {
    state.states.isLoading = bool
  },
  alert (state, text, cb) {
    utils.merge(state.states, {
      isAlerting: true,
      alertingText: text,
      alertingCallback: cb || function () {
        state.states.isAlerting = false
      }
    })
  },
  cancelAlert (state) {
    utils.merge(state.states, {
      isAlerting: false,
      alertingText: '',
      alertingCallback () {}
    })
  },
  setUser (state, options) {
    utils.merge(state.user, options)
  },
  setOrders (state, arr) {
    state.orders = arr
  }
}

const actions = {
  // load: ({ commit }, bool) => commit('setStates', {
  //   isLoading: bool
  // })
}

const getters = {
  config: state => state.config,
  states: state => state.states,
  options: state => state.options,
  orders: state => state.orders,
  user: state => state.user
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
