import Vue from 'vue'
import App from './App'
import store from './scripts/store.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/profile', component (resolve) { require(['./views/Profile.vue'], resolve) } },
    { path: '/work', component (resolve) { require(['./views/Work.vue'], resolve) } },
    { path: '/experience', component (resolve) { require(['./views/Experience.vue'], resolve) } },
    { path: '*', redirect: '/work' }
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
