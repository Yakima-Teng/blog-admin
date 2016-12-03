<template>
  <div class="menus">
    <span v-for="item in menus" class="menu">{{item.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      menus: [
        {
          text: 'Ribbon',
          url: '##'
        },
        {
          text: 'DNA',
          url: '##'
        },
        {
          text: 'Collision',
          url: '##'
        },
        {
          text: 'Menu 4',
          url: '##'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .menus {
    font-size: 0;
    text-align: center;
    background-color: #504741;
    border-radius: 0 0 2px 2px;
    .menu {
      display: inline-block;
      vertical-align: middle;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      width: 25%;
      background: rgba(0, 0, 0, .4);
      color: #FFFFFF;
      text-shadow: 1px 1px rgba(0, 0, 0, .4);
      letter-spacing: 0.6px;
      padding: 0 12px;
      border-left: 1px solid rgba(255, 255, 255, .1);
      border-right: 1px solid rgba(0, 0, 0, .4);
      box-sizing: border-box;
      user-select: none;
      cursor: pointer;
    }
  }
</style>
