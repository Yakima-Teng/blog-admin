<template>
  <div class="navigation">
    <span class="text">navigation1</span>
    <i class="fa fa-angle-double-right"></i>
    <span class="text">navigation2</span>
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
<style lang="less" rel="stylesheet/less" scoped>
  @import '../styles/utils';
  .navigation {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    font-size: 14px;
    line-height: 1;
    color: rgba(0, 0, 0, .87);
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
    .borderBottomAfter();
    .fa {
      margin: 0 12px;
    }
  }
</style>
