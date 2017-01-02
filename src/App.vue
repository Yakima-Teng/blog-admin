<template>
  <div id="app">
    <div class="app-container">
      <app-header></app-header>
      <app-menu></app-menu>
      <div id="appContentWrapper" class="app-content-wrapper">
        <div class="global-note blue">说明：文章内容来源于互联网</div>
        <div v-show="!isLoading" class="routers">
          <router-view></router-view>
        </div>
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
  import $ from 'jquery'

  export default {
    name: 'app',
    data () {
      return {}
    },
    computed: {
      isLoading () {
        return this.$store.state.states.isLoading
      }
    },
    methods: {
      ...mapMutations([
        'load'
      ])
    },
    mounted () {
      let _this = this
      // 避免出现在显示加载动画之前先出现页面背景图
      // 提前加载应用所需的其他图片资源
      const bgImg = new window.Image()
      const starImg = new window.Image()
      let count = 0

      function oneMorePicLoaded () {
        if (++count === 2) {
          setTimeout(() => {
            _this.load(false)
          }, 5000)
        }
      }

      bgImg.src = require('./assets/default-pattern.png')
      starImg.src = './static/star.jpg'

      bgImg.onload = () => {
        $('body').css({
          'background-image': `url("${require('./assets/default-pattern.png')}")`
        })
        oneMorePicLoaded()
      }

      starImg.onload = oneMorePicLoaded
    },
    components: {
      Ball, AppHeader, AppMenu, AppFooter
    }
  }
</script>

<style lang="less">
  @import './styles/reset.less';
  body {
    // background: #fff url('./assets/default-pattern.png') scroll repeat top left;
    background: #fff scroll repeat top left;
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
    overflow: hidden;
  }
  .global-note {
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: red;
  }
  .global-link {
    color: #99cc33;
    text-decoration: none;
    transition: 250ms color;
    &:hover, &:active {
      color: #669900;
      text-decoration: underline;
    }
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
