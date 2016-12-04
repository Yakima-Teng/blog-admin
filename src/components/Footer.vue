<template>
  <div class="app-footer">
    <p class="text">No Rights Reserved · Yakima Teng | 滕运锋</p>
    <p class="text">UI参考自WordPress Theme: Natural Lite by <a href="http://organicthemes.com/" rel="designer" class="link">Organic Themes</a></p>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .app-footer {
    margin-top: 24px;
    background-color: #fff;
    border-radius: 2px;
    padding: 24px;
    .text {
      font-size: 16px;
      color: #000;
    }
    .link {
      color: #000;
      text-decoration: none;
      &:active, &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
