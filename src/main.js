import Vue from 'vue'
import App from './App'
import store from './scripts/store.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/index', component: require('./views/Index.vue') },
    { path: '/post', component: require('./views/Post.vue') },
    { path: '/', redirect: '/post' }
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
