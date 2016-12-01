<template>
  <div id="app">
    <div class="app-wrapper">
      <router-view></router-view>
    </div>
    <div class="app-facilities">
      <alert></alert>
      <ball></ball>
    </div>
  </div>
</template>

<script>
  import Ball from './components/Ball.vue'
  import Alert from './components/Alert.vue'
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
      getOpenid () {},
      ...mapMutations([
        'load',
        'alert',
        'setUser',
        'setOrders',
        'getOptionText'
      ])
    },
    mounted () {
      let _this = this
      setTimeout(() => {
        _this.load(false)
      }, 10000)
    },
    components: {
      Ball, Alert
    }
  }
</script>

<style lang="less">
  html {
    height: 100%;
    // 利用3D变形来开启GPU加速，以尽可能多的利用硬件能力
    transform: translate3d(0, 0, 0);
  }
  body {
    min-height: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
