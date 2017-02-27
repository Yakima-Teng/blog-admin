<template>
  <transition name="fade">
    <div v-show="isAlerting" class="global-alerting">
      <div class="wrapper">
        <header class="header">提示信息</header>
        <article class="article">{{alertingText}}</article>
        <footer class="footer">
          <button @click="alertingOkCallback" class="btn btn-ok">确定</button>
          <button v-show="alertingCancelCallback" @click="alertingCancelCallback && alertingCancelCallback()" class="btn btn-cancel">取消</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'alert',
    computed: {
      isAlerting () {
        return this.$store.state.states.isAlerting
      },
      alertingText () {
        return this.$store.state.states.alertingText
      },
      alertingOkCallback () {
        return this.$store.state.states.alertingOkCallback
      },
      alertingCancelCallback () {
        return this.$store.state.states.alertingCancelCallback
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import '../styles/utils.less';
  .global-alerting {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    .wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 5rem;
      background-color: #eee;
      border-radius: .1rem;
      .header {
        font-size: .4rem;
        text-align: center;
        line-height: .7rem;
      }
      .article {
        font-size: .26rem;
        line-height: .4rem;
        padding: .1rem .2rem .4rem .2rem;
      }
      .footer {
        font-size: 0;
        letter-spacing: .1rem;
        text-align: right;
        line-height: 1;
        padding: .3rem .2rem .2rem;
        .btn {
          display: inline-block;
          vertical-align: middle;
          font-size: .3rem;
          height: .5rem;
          line-height: .5rem;
          width: 5em;
          border-radius: .1rem;
          text-align: center;
          color: #fff;
          &.btn-ok {
            background-color: @colorBtnBlue;
            &:active {
              background-color: darken(@colorBtnBlue, 10%);
            }
          }
          &.btn-cancel {
            background-color: brown;
            margin-left: .2rem;
            &:active {
              background-color: darken(brown, 10%);
            }
          }
        }
      }
    }
  }
</style>
