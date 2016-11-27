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

  export default {
    name: 'app',
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
</style>
