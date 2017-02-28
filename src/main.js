import Vue from 'vue'
import App from './App'
import store from './scripts/store.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/dashboard',
      component (resolve) { require(['./views/Dashboard.vue'], resolve) },
      children: [
        // { path: '', redirect: 'general' },
        {
          path: 'general',
          component (resolve) { require(['./views/DashboardGeneral.vue'], resolve) }
        }
      ]
    },
    {
      path: '/posts',
      component (resolve) { require(['./views/Posts.vue'], resolve) },
      children: [
        // { path: '', redirect: 'posts' },
        {
          path: 'posts',
          component (resolve) { require(['./views/PostsPosts.vue'], resolve) }
        },
        {
          path: 'add',
          component (resolve) { require(['./views/PostsAdd.vue'], resolve) }
        },
        {
          path: 'edit/:id',
          component (resolve) { require(['./views/PostsEdit.vue'], resolve) }
        }
      ]
    },
    {
      path: '/pages',
      component (resolve) { require(['./views/Pages.vue'], resolve) },
      children: [
        // { path: '', redirect: 'pages' },
        {
          path: 'pages',
          component (resolve) { require(['./views/PagesPages.vue'], resolve) }
        },
        {
          path: 'add',
          component (resolve) { require(['./views/PagesAdd.vue'], resolve) }
        },
        {
          path: 'edit:id',
          component (resolve) { require(['./views/PagesEdit.vue'], resolve) }
        }
      ]
    },
    {
      path: '/comments',
      component (resolve) { require(['./views/Comments.vue'], resolve) },
      children: [
        // { path: '', redirect: 'comments' },
        {
          path: 'comments',
          component (resolve) { require(['./views/CommentsComments.vue'], resolve) }
        },
        {
          path: 'edit:id',
          component (resolve) { require(['./views/CommentsEdit.vue'], resolve) }
        }
      ]
    },
    {
      path: '/settings',
      component (resolve) { require(['./views/Settings.vue'], resolve) },
      children: [
        // { path: '', redirect: 'profile' },
        {
          path: 'profile',
          component (resolve) { require(['./views/SettingsProfile.vue'], resolve) }
        }
      ]
    },
    {
      path: '*',
      redirect: '/dashboard/general'
    }
  ]
})

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
