<template>
  <div class="app-footer">
    <p class="copy-right">Copyright © {{year}} · All Rights Reserved · Yakima Teng | 滕运锋</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
    .copy-right {
      font-size: 16px;
      color: #000;
    }
  }
</style>
