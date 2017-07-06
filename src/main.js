import Vue from 'vue'
import App from './App'
import store from './scripts/store.js'
import router from './router/index.js'

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

/**
 * *********************************************************************************
 *                                                                                  *
 * enable requestAnimationFrame method and corresponding cancel method
 * 参考地址：
 * http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/
 * 原文多了一些没用的东西，比如回调函数里传了个莫名其妙的时间参数，
 * 比如自定义requestAnimationFrame函数时多加了一个element参数
 *                                                                                  *
 ***********************************************************************************/
void (function () {
  let lastTime = 0
  let vendors = ['webkit', 'moz']
  for (let i = 0, length = vendors.length; i < length && !window.requestAnimationFrame; i++) {
    window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame']
    // webkit中cancel方法的名称跟其他的不一样
    window.cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame']
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (cb) {
      let curTime = +new Date()
      let timeToCall = Math.max(0, 16.7 - (curTime - lastTime))
      let id = window.setTimeout(function () {
        cb()
      }, timeToCall)
      lastTime = curTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
})()
