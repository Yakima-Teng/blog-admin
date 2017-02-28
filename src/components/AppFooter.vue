<template>
  <div class="footer">
    <p class="text">No Rights Reserved · Yakima Teng | 滕运锋 · 项目源码：<a href="https://github.com/Yakima-Teng/blog-admin" rel="source code" class="link">blog-admin</a></p>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  .footer {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #00bcd4;
    .text {
      font-size: 12px;
      color: #fff;
    }
    .link {
      color: rgba(255, 255, 255, .8);
      transition: 250ms color;
      text-decoration: none;
      &:hover, &:active {
        color: rgba(255, 255, 255, 1);
        text-decoration: underline;
      }
    }
  }
</style>
