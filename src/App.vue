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

</style>
