import Vue from 'vue'
import App from './App'
import store from './scripts/store.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/p1', component (resolve) { require(['./views/PointOne.vue'], resolve) } },
    { path: '/p2', component (resolve) { require(['./views/PointTwo.vue'], resolve) } },
    { path: '/p3', component (resolve) { require(['./views/PointThree.vue'], resolve) } },
    { path: '*', redirect: '/p2' }
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
