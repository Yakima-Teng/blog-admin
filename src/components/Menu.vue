<template>
  <div class="menus">
    <span @click="go(item.router)" v-for="item in menus" :class="{'active': curRouter === item.router.toLowerCase()}" class="menu">{{item.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'app-menu',
  data () {
    return {
      menus: [
        {
          text: '个人介绍',
          router: 'profile'
        },
        {
          text: '技能&作品',
          router: 'skill'
        },
        {
          text: '经历i.e.废话',
          router: 'experience'
        }
      ]
    }
  },
  computed: {
    curRouter () {
      let _this = this
      return _this.$route.path.split('/')[1]
    }
  },
  methods: {
    go (text) {
      this.$router.push({ path: `/${text.toLowerCase()}` })
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
      width: 33.33%;
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
      text-transform: uppercase;
      transition: 300ms all linear 0;
      &.active, &:active {
        color: yellow;
      }
    }
  }
</style>
