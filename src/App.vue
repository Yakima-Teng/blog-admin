<template>
  <div id="app">
    <div class="app-container">
      <app-header></app-header>
      <app-menu></app-menu>
      <div id="appContentWrapper" class="app-content-wrapper">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>
    <div class="app-facilities">
      <!-- <ball></ball> -->
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/Header.vue'
  import AppMenu from './components/Menu.vue'
  import AppFooter from './components/Footer.vue'
  // import { mapMutations } from 'vuex'

  export default {
    name: 'app',
    data () {
      return {}
    },
    computed: {
      config () { return this.$store.state.config },
      mock () { return this.$store.state.mock },
      user () { return this.$store.state.user },
      options () { return this.$store.state.options }
    },
    methods: {
      // getOpenid () {},
      // ...mapMutations([
      //   'load'
      // ])
    },
    mounted () {},
    components: {
      AppHeader, AppMenu, AppFooter
    }
  }
</script>

<style lang="less">
  @import './styles/reset.less';
  body {
    background: #fff url('./assets/default-pattern.png') scroll repeat top left;
  }
  #app {
    display: block;
    padding-top: 24px;
    padding-bottom: 12px;
    margin: 0 auto;
    max-width: 1000px;
    box-sizing: border-box;
  }
  .app-content-wrapper {
    margin-top: 24px;
    background-color: #fff;
    border-radius: 2px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
