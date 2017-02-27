<template>
  <transition name="fade">
    <div v-show="isWaiting" class="global-waiting">
      <div class="spinner">
        <span class="bounce bounce1"></span>
        <span class="bounce bounce2"></span>
        <span class="bounce bounce3"></span>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'wait',
    computed: {
      isWaiting () {
        return this.$store.state.states.isWaiting
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .global-waiting {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 0;
      text-align: center;
      .bounce {
        display: inline-block;
        vertical-align: middle;
        width: .5rem;
        height: .5rem;
        background-color: #67cf22;
        border-radius: 50%;
        animation: bounce 1.4s ease-in infinite;
        // Prevent first frame from flickering when animation starts
        animation-fill-mode: both;
        &.bounce1 {
          animation-delay: -320ms;
        }
        &.bounce2 {
          animation-delay: -160ms;
        }
      }
    }
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0)
    }
    40% {
      transform: scale(1)
    }
  }
</style>
