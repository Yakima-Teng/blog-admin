<template>
  <div id="app">
    <div class="app-container">
      <app-header></app-header>
      <app-menu></app-menu>
      <div id="appContentWrapper" class="app-content-wrapper">
        <div class="global-note blue">说明：我觉得招员工跟交友大抵差不多，故详述了个人经历，如果您较忙，可忽略暗淡文字</div>
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>
    <div class="app-facilities">
      <ball></ball>
    </div>
  </div>
</template>

<script>
  import Ball from './components/Ball.vue'
  import AppHeader from './components/Header.vue'
  import AppMenu from './components/Menu.vue'
  import AppFooter from './components/Footer.vue'
  import { mapMutations } from 'vuex'

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
      ...mapMutations([
        'load'
      ])
    },
    mounted () {
      let _this = this
      setTimeout(() => {
        _this.load(false)
      }, 2000)
    },
    components: {
      Ball, AppHeader, AppMenu, AppFooter
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
    width: 96%;
    max-width: 1000px;
    box-sizing: border-box;
  }
  .app-content-wrapper {
    margin-top: 24px;
    background-color: #fff;
    border-radius: 2px;
  }
  .global-note {
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: red;
  }
  .ignore {
    // color: #ccc;
  }
  .item-normal {
    position: relative;
    padding: 18px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 0;
      border-top: 1px solid #ccc;
    }
    .item-header {
      font-size: 24px;
      color: #504741;
      line-height: 36px;
      text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
    }
    .item-detail {
      font-size: 12px;
      line-height: 22px;
    }
  }
  .fade-enter-active {
    transition: 300ms opacity linear 0;
  }
  .fade-leave-active {}
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
