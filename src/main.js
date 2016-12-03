import Vue from 'vue'
import App from './App'
import store from './scripts/store.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/ribbon', component: require('./views/Ribbon.vue') },
    { path: '/dna', component: require('./views/DNA.vue') },
    { path: '/collission', component: require('./views/Collission.vue') },
    { path: '/game', component: require('./views/Game.vue') },
    { path: '/', redirect: '/ribbon' }
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
