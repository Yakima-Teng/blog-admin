<template>
  <transition name="fade">
    <div v-show="isLoading" class="utils-ball">
      <div v-show="direction === 'vertical'" class="vertical">
        <span v-for="num in totalBalls" :data-key="num" :style="{
          'animation-delay': -(6000 / totalBalls) * num + 'ms',
          'background-color': ['navy', 'skyblue', 'orange', 'brown'][num % 4],
          'top': Math.ceil(100 / (totalBalls + 1) * num) + '%'
        }" class="ball ball-DNA1"></span>
        <span v-for="num in totalBalls" :data-key="num" :style="{
          'animation-delay': -(6000 / totalBalls) * num - 1000 + 'ms',
          'background-color': ['navy', 'skyblue', 'orange', 'brown'][num % 4],
          'top': Math.ceil(100 / (totalBalls + 1) * num) + '%'
        }" class="ball ball-DNA1"></span>
      </div>
      <div v-show="direction === 'horizontal'" class="horizontal">
        <span v-for="num in totalBalls" :data-key="num" :style="{
          'animation-delay': -(6000 / totalBalls) * num + 'ms',
          'background-color': ['navy', 'skyblue', 'orange', 'brown'][num % 4],
          'width': horizontalBallWidth + 'px',
          'margin-left': -horizontalBallWidth / 2 + 'px',
          'left': Math.ceil(100 / (totalBalls + 1) * num) + '%'
        }" class="ball ball-DNA2"></span>
        <span v-for="num in totalBalls" :data-key="num" :style="{
          'animation-delay': -(6000 / totalBalls) * num - 1000 + 'ms',
          'background-color': ['navy', 'skyblue', 'orange', 'brown'][num % 4],
          'width': horizontalBallWidth + 'px',
          'margin-left': -horizontalBallWidth / 2 + 'px',
          'left': Math.ceil(100 / (totalBalls + 1) * num) + '%'
        }" class="ball ball-DNA2"></span>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ball',
    data () {
      return {
        totalBalls: 10,
        direction: 'vertical',
        horizontalBallWidth: ''
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
        const screenWidth = window.innerWidth
        if (screenHeight > screenWidth) {
          _this.direction = 'vertical'
          const ballHeight = Math.ceil(screenWidth / 50)
          _this.totalBalls = Math.floor(screenHeight / ballHeight)
        } else {
          _this.direction = 'horizontal'
          _this.horizontalBallWidth = Math.ceil(screenHeight / 50)
          _this.totalBalls = Math.floor(screenWidth / 50)
        }
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

<style lang="less" rel="stylesheet/less" scoped>
  .utils-ball {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(240, 255, 255, 1);
    .vertical {
      .ball {
        position: absolute;
        width: 2%;
        height: 0;
        padding-top: 2%;
        margin-top: -1%;
        margin-left: 0;
        border-radius: 50%;
        left: 0;
        backface-visibility: hidden;
        perspective: 1000px;
        &.ball-DNA1, &.ball-DNA2 {
          &:nth-of-type(2n+1) {
            transform: translate3d(2500%, 0, 0) rotateY(0deg);
            animation: 6000ms Ball1 ease-in-out 0ms infinite alternate;
          }
          &:nth-of-type(2n) {
            transform: translate3d(2500%, 0, 0) rotateX(0deg);
            animation: 6000ms Ball2 ease-in-out 0ms infinite alternate;
          }
        }
      }
    }
    .horizontal {
      .ball {
        position: absolute;
        // width: 2%;
        height: 2%;
        // padding-top: 2%;
        // margin-top: -1%;
        // margin-left: 0;
        border-radius: 50%;
        top: 0;
        backface-visibility: hidden;
        perspective: 1000;
        &.ball-DNA2 {
          &:nth-of-type(2n+1) {
            transform: translate3d(0, 2500%, 0) rotateY(0deg);
            animation: 8s Ball3 ease-in-out 0ms infinite alternate;
          }
          &:nth-of-type(2n) {
            transform: translate3d(0, 2500%, 0) rotateX(0deg);
            animation: 8s Ball4 ease-in-out 0ms infinite alternate;
          }
        }
      }
    }
  }
  @keyframes Ball1 {
    0% {
      transform: translate3d(2500%, 0, 0) rotateY(0deg);
    }
    33% {
      transform: translate3d(0, 0, 0) rotateY(60deg);
    }
    67% {
      transform: translate3d(4900%, 0, 0) rotateY(-60deg);
    }
    100% {
      transform: translate3d(2500%, 0, 0) rotateY(0deg);
    }
  }
  @keyframes Ball2 {
    0% {
      transform: translate3d(2500%, 0, 0) rotateX(0deg);
    }
    33% {
      transform: translate3d(0, 0, 0) rotateX(60deg);
    }
    67% {
      transform: translate3d(4900%, 0, 0) rotateX(-60deg);
    }
    100% {
      transform: translate3d(2500%, 0, 0) rotateX(0deg);
    }
  }
  @keyframes Ball3 {
    0% {
      transform: translate3d(0, 2500%, 0) rotateY(0deg);
    }
    33% {
      transform: translate3d(0, 4900%, 0) rotateY(-60deg);
    }
    67% {
      transform: translate3d(0, 0, 0) rotateY(60deg);
    }
    100% {
      transform: translate3d(0, 2500%, 0) rotateY(0deg);
    }
  }
  @keyframes Ball4 {
    0% {
      transform: translate3d(0, 2500%, 0) rotateX(0deg);
    }
    33% {
      transform: translate3d(0, 4900%, 0) rotateX(-60deg);
    }
    67% {
      transform: translate3d(0, 0, 0) rotateX(60deg);
    }
    100% {
      transform: translate3d(0, 2500%, 0) rotateX(0deg);
    }
  }
</style>
