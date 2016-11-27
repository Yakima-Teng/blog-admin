<template>
  <div v-show="isLoading" class="utils-ball">
    <span v-for="num in totalBalls" :data-key="num" :style="{
      'animation-delay': (3000 / totalBalls) * num + 'ms',
      'background-color': ['navy', 'skyblue', 'orange', 'brown'][num % 4],
      'top': Math.ceil(100 / (totalBalls + 1) * num) + '%'
    }" class="ball"></span>
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
        const ballHeight = Math.ceil(window.innerWidth / 10)
        _this.totalBalls = Math.floor(screenHeight / ballHeight)
      }
    },
    mounted () {
      // 通过使用 mounted 钩子，并不能保证该实例已经插入文档。所以还应该在钩子函数中包含 Vue.nextTick/vm.$nextTick
      let _this = this
      _this.$nextTick(() => {
        _this.resetBalls()
        window.addEventListener('resize', _this.resetBalls, false)
      })
    },
    beforeDestroy () {
      let _this = this
      window.removeEventListener('resize', _this.resetBalls, false)
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
    // background-color: #3498db;
    .ball {
      position: absolute;
      width: 10%;
      height: 0;
      padding-top: 10%;
      margin-top: -5%;
      margin-left: 0;
      border-radius: 50%;
      left: 0;
      backface-visibility: hidden;
      perspective: 1000;
      &:nth-of-type(2n+1) {
        transform: translate3d(450%, 0, 0) rotateY(0deg);
        animation: 3s Ball1 ease-in-out 0ms infinite alternate;
      }
      &:nth-of-type(2n) {
        transform: translate3d(450%, 0, 0) rotateX(0deg);
        animation: 3s Ball2 ease-in-out 0ms infinite alternate;
      }
    }
  }
  @keyframes Ball1 {
    0% {
      transform: translate3d(450%, 0, 0) rotateY(0deg);
    }
    33% {
      transform: translate3d(0, 0, 0) rotateY(60deg);
    }
    67% {
      transform: translate3d(900%, 0, 0) rotateY(-60deg);
    }
    100% {
      transform: translate3d(450%, 0, 0) rotateY(0deg);
    }
  }
  @keyframes Ball2 {
    0% {
      transform: translate3d(450%, 0, 0) rotateX(0deg);
    }
    33% {
      transform: translate3d(0, 0, 0) rotateX(60deg);
    }
    67% {
      transform: translate3d(900%, 0, 0) rotateX(-60deg);
    }
    100% {
      transform: translate3d(450%, 0, 0) rotateX(0deg);
    }
  }
</style>