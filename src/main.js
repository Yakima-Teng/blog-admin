import Vue from 'vue'
import App from './App'
import store from './scripts/store.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/profile', component: require('./views/Profile.vue') },
    { path: '/work', component: require('./views/Work.vue') },
    { path: '/experience', component: require('./views/Experience.vue') },
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
