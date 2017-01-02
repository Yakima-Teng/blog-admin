<template>
  <div class="canvas-header-wrapper">
    <canvas id="canvasHeader" class="canvas-header" width="900" height="300">Your browser does not support HTML5 Canvas, please use a modern browser.</canvas>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'app-header',
    data () {
      return {
        canvas: '',
        context: '',
        canvasWidth: '',
        canvasHeight: '',
        backgroundImage: '',
        title: 'PLAY BADMINTON',
        timer: ''
      }
    },
    methods: {
      init () {
        let _this = this
        _this.context.clearRect(0, 0, _this.canvasWidth, _this.canvasHeight)
        _this.context.fillStyle = '#fff'
        _this.context.fillRect(0, 0, _this.canvasWidth, _this.canvasHeight)
        _this.context.drawImage(_this.backgroundImage, 12, 12, _this.canvasWidth - 24, _this.canvasHeight - 24)
        _this.context.fillStyle = '#fff'
        _this.context.font = '48px _sans'
        _this.context.fillText(_this.title, _this.calculateXOffsetForCenteredText(_this.title), _this.canvasHeight / 2 + 12)
      },
      calculateXOffsetForCenteredText (text) {
        let _this = this
        const metrics = _this.context.measureText(text)
        const textWidth = metrics.width
        return _this.canvasWidth / 2 - textWidth / 2
      },
      skyCanvas () {
        var _this = this
        /**
         * *********************************************************************************
         *                                                                                  *
         * 函数代码参考自携程安全应急中心官网首页
         * 地址：https://sec.ctrip.com/
         * 说明：官网的代码是经过混淆的，这里对代码进行了人工润色
         *                                                                                  *
         ***********************************************************************************/
        function t (t, i) {
          if (arguments.length < 2) {
            i = t
            t = 0
          }
          if (t > i) {
            // 交换t和i的值
            var s = i
            i = t
            t = s
          }
          return Math.floor(Math.random() * (i - t + 1)) + t
        }

        // 计算以canvas最长边长度为直角边长度的等腰直角三角形的斜边长度的一半的值
        function calculateHalfHypotenuseLength (canvasWidth, canvasHeight) {
          var maxLength = Math.max(canvasWidth, canvasHeight)
          var hypotenuseLength = Math.round(Math.sqrt(maxLength * maxLength + maxLength * maxLength))
          return hypotenuseLength / 2
        }

        function drawStars () {
          var bgImg = new window.Image()
          bgImg.src = './static/star.jpg'
          bgImg.onload = () => {
            ctx.drawImage(bgImg, 0, 0)
            _this.timer = window.requestAnimationFrame(drawStars)
          }
          ctx.drawImage(bgImg, 0, 0)

          _this.context.fillStyle = '#fff'
          _this.context.font = '48px _sans'
          _this.context.fillText(_this.title, _this.calculateXOffsetForCenteredText(_this.title), _this.canvasHeight / 2 + 12)
          for (var i = 1, a = arr.length; a > i; i++) {
            arr[i].draw()
          }
        }
        var canvas = document.getElementById('canvasHeader')
        var ctx = canvas.getContext('2d')
        var canvasWidth = canvas.width = $('.canvas-header-wrapper').width()
        var canvasHeight = canvas.height
        _this.context = ctx
        _this.canvasWidth = canvasWidth
        _this.canvasHeight = canvasHeight
        var arr = []
        var count = 0
        var d = 300
        var l = document.createElement('canvas')
        var h = l.getContext('2d')
        l.width = 100
        l.height = 100
        var m = l.width / 2
        var f = h.createRadialGradient(m, m, 3, m, m, 26)
        f.addColorStop(0.025, '#87c0f6')
        f.addColorStop(0.25, '#11417a')
        f.addColorStop(1, 'transparent')
        h.fillStyle = f
        h.beginPath()
        h.arc(m, m, m, 0, 2 * Math.PI)
        h.fill()

        var U = function () {
          this.orbitRadius = t(calculateHalfHypotenuseLength(canvasWidth, canvasHeight))
          this.radius = t(60, this.orbitRadius) / 12
          this.orbitX = canvasWidth / 2
          this.orbitY = canvasHeight / 2
          this.timePassed = t(0, d)
          this.speed = t(this.orbitRadius) / 9e5
          this.alpha = t(2, 10) / 10
          count++
          arr[count] = this
        }
        U.prototype.draw = function () {
          var i = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
          var s = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
          var a = t(10)
          a === 1 && this.alpha > 0 ? this.alpha -= 0.05 : a === 2 && this.alpha < 1 && (this.alpha += 0.05)
          ctx.globalAlpha = this.alpha
          ctx.drawImage(l, i - this.radius / 2, s - this.radius / 2, this.radius, this.radius)
          this.timePassed += this.speed
        }
        for (var p = 0; d > p; p++) {
          /* eslint-disable no-new */
          new U()
        }
        drawStars()
      }
    },
    mounted () {
      let _this = this
      _this.$nextTick(() => {
        // _this.canvas = document.getElementById('canvasHeader')
        // _this.context = _this.canvas.getContext('2d')
        // _this.canvasWidth = _this.canvas.width
        // _this.canvasHeight = _this.canvas.height
        // _this.backgroundImage = new window.Image()
        // _this.backgroundImage.src = './static/default-header.jpg'
        // if (_this.backgroundImage.complete) {
        //   _this.init()
        // } else {
        //   _this.backgroundImage.onload = () => {
        //     _this.init()
        //   }
        // }

        _this.skyCanvas()

        setTimeout(() => {
          if (_this.timer) {
            window.cancelAnimationFrame(_this.timer)
          }
        }, 60 * 60 * 1000)
      })
      $(window).resize(_this.skyCanvas)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .canvas-header-wrapper {
    font-size: 0;
  }
  .canvas-header {
    width: 100%;
    background-color: #fff;
  }
</style>
