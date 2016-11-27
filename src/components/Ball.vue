<template>
  <div v-show="isLoading" class="utils-ball">
    <span v-for="num in totalBalls" :style="{
      'animation-delay': (3000 / totalBalls) * num + 'ms',
      'background-color': ['navy', 'skyblue', 'orange', 'brown'][num % 4],
      'top': (100 / (totalBalls + 1) * num) + '%'
    }" class="ball"></span>
    <link rel="stylesheet" type="text/css" href="">
  </div>
</template>

<script>
  export default {
    name: 'ball',
    data () {
      return {
        totalBalls: 10
      }
    },
    computed: {
      isLoading () {
        return this.$store.state.states.isLoading
      }
    },
    methods: {
      resetBalls () {
        let _this = this
        const screenHeight = window.innerHeight
        const ballHeight = Math.floor(window.innerWidth / 10)
        _this.totalBalls = Math.floor(screenHeight / ballHeight)
      }
    },
    mounted () {
      // 通过使用 mounted 钩子，并不能保证该实例已经插入文档。所以还应该在钩子函数中包含 Vue.nextTick/vm.$nextTick
      let _this = this
      _this.$nextTick(() => {
        _this.resetBalls()
        window.addEventListener('load', _this.resetBalls, false)
      })
    },
    beforeDestroy () {
      let _this = this
      window.removeEventListener('load', _this.resetBalls, false)
    }
  }
</script>

<style lang="less" scoped>
  .utils-ball {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(240, 255, 255, 1);
    .ball {
      position: absolute;
      width: 10%;
      height: 0;
      padding-top: 10%;
      margin-top: -5%;
      margin-left: 0;
      border-radius: 50%;
      left: 0;
      transform: translate(0, 0);
      animation: 3s Ball ease-in-out 0ms infinite alternate;
    }
  }
  @keyframes Ball {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(900%, 0);
    }
  }
</style>