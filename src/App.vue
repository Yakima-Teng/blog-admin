<template>
  <div id="app">
    <div class="app-container">
      <div class="app-wrapper">
        <div class="app-sidebar">
          <app-sidebar></app-sidebar>
        </div>
        <div class="app-main">
          <div class="app-navigation">
            <app-navigation></app-navigation>
          </div>
          <div class="app-content">
            <div class="app-content-inner">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
      <div class="app-footer">
        <app-footer></app-footer>
      </div>
      <div class="app-facilities">
        <ball></ball>
        <alert></alert>
        <wait></wait>
      </div>
    </div>
  </div>
</template>

<script>
  import Ball from './components/Ball.vue'
  import AppSidebar from './components/AppSidebar.vue'
  import AppNavigation from './components/AppNavigation.vue'
  import AppFooter from './components/AppFooter.vue'
  import Alert from './components/Alert.vue'
  import Wait from './components/Wait.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    data () {
      return {}
    },
    computed: {},
    methods: {
      ...mapActions(['load'])
    },
    mounted () {
      let _this = this
      _this.load(false)
    },
    components: {
      Ball, AppSidebar, AppNavigation, AppFooter, Alert, Wait
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import './styles/reset.less';
  @import './styles/font-awesome.css';
  @import './styles/utils-table.less';
  html, body, #app, .app-container, .app-wrapper, .app-sidebar, .app-main {
    height: 100%;
  }
  html {
    font: 14px/1;
  }
  body {
    background-color: #fff;
  }
  .app-wrapper {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding-bottom: 30px;
    margin-bottom: -30px;
  }
  .app-footer {
    height: 30px;
  }
  .app-sidebar {
    width: 260px;
    min-width: 260px;
    max-width: 260px;
    height: 100%;
  }
  .app-main {
    flex: 1;
    height: 100%;
    .app-navigation {
      height: 48px;
    }
    .app-content {
      height: 100%;
      padding-top: 48px;
      margin-top: -48px;
      box-sizing: border-box;
      .app-content-inner {
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        overflow: auto;
        /* 修改chrome浏览器滚动条样式 */
        &::-webkit-scrollbar-track-piece {
          background-color: transparent;
          -webkit-border-radius: 0;
          border-left: none;
          border-right: none;
        }
        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        &::-webkit-scrollbar-thumb {
          height:50px;
          background-color: #9c9c9c;
          -webkit-border-radius:4px;
          outline: 2px solid #fff;
          outline-offset: -2px;
          transition: 300ms all linear 0ms;
          &:hover {
            height:50px;
            background-color: darken(#9c9c9c, 10%);
            -webkit-border-radius:4px;
          }
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .slide-enter-active {
    transition: all .8s ease;
  }
  .slide-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-enter, .slide-leave-active {
    opacity: 0;
  }
</style>
