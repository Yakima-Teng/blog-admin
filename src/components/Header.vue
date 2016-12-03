<template>
  <div class="canvas-header-wrapper">
    <canvas id="canvasHeader" class="canvas-header" width="900" height="300">Your browser does not support HTML5 Canvas, please use a modern browser.</canvas>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      canvas: '',
      context: '',
      canvasWidth: '',
      canvasHeight: '',
      backgroundImage: '',
      title: 'YAKIMA TENG | 滕运锋'
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
    }
  },
  mounted () {
    let _this = this
    _this.$nextTick(() => {
      _this.canvas = document.getElementById('canvasHeader')
      _this.context = _this.canvas.getContext('2d')
      _this.canvasWidth = _this.canvas.width
      _this.canvasHeight = _this.canvas.height
      _this.backgroundImage = new window.Image()
      _this.backgroundImage.src = './static/default-header.jpg'
      if (_this.backgroundImage.complete) {
        _this.init()
      } else {
        _this.backgroundImage.onload = () => {
          _this.init()
        }
      }
    })
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
