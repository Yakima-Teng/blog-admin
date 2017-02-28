<template>
  <div class="sidebar">
    <header class="header">
      <i class="fa fa-home ico-logo"></i>
      <span class="text">Admin Platform</span>
      <i class="fa fa-angle-left ico-toggle"></i>
    </header>
    <article class="article">
      <ul class="wrapper">
        <li v-for="(menu, idx) in menus.details" class="menu">
          <header @click="toggleTopMenu(menu, idx)" :class="{'active': menu.alias === curTopRoute}" class="menu-title">
            <i class="fa fa-sitemap fa-fw"></i>
            <span class="text">{{menu.text}}</span>
            <i v-show="menu.details && menu.details.length > 0" class="fa fa-angle-right"></i>
          </header>
          <ul v-show="menus.unfoldedIndex === idx && menu.details && menu.details.length > 0" class="menu-details">
            <li
              v-for="(subMenu, index) in menu.details"
              v-show="subMenu.show"
              @click="toggleSubMenu(menu, subMenu, idx, index)"
              :class="{'active': menu.alias === curTopRoute && subMenu.alias === curSubRoute}"
              class="sub-menu">
              <span class="text">{{subMenu.text}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'AppSidebar',
    data () {
      return {}
    },
    computed: {
      curTopRoute () { return this.$route.path.split('/')[1] },
      curSubRoute () { return this.$route.path.split('/')[2] },
      ...mapGetters(['menus'])
    },
    methods: {
      toggleTopMenu (menu, idx) {
        let _this = this
        if (_this.menus.unfoldedIndex === idx) {
          _this.setMenus({ unfoldedIndex: -1 })
        } else {
          _this.setMenus({ unfoldedIndex: idx })
        }
      },
      toggleSubMenu (menu, subMenu, menuIdx, subMenuIdx) {
        let _this = this
        _this.$router.push({ path: `/${menu.alias}/${subMenu.alias}` })
      },
      ...mapMutations(['setMenus'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import '../styles/utils';
  .sidebar {
    height: 100%;
    background-color: rgb(0, 188, 212);
    color: #fff;
    user-select: none;
    .header {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      height: 48px;
      padding: 0 16px;
      background-color: rgb(0, 188, 212);
      z-index: 1;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
      .borderBottomAfter();
      .ico-logo {
        font-size: 20px;
        cursor: pointer;
      }
      .text {
        flex: 1;
        padding: 0 10px;
        line-height: 1;
        cursor: pointer;
      }
      .ico-toggle {
        font-size: 20px;
      }
    }
    .article {
      position: relative;
      z-index: 0;
      height: 100%;
      box-sizing: border-box;
      padding-top: 48px;
      margin-top: -48px;
      .wrapper {
        height: 100%;
        overflow: auto;
      }
      .menu {
        position: relative;
        .borderBottomAfter();
      }
      .menu-title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 16px;
        min-height: 40px;
        font-size: 14px;
        transition: 300ms all linear 0ms;
        &:hover, &:active, &.active {
          background-color: rgb(0, 172, 193);
          cursor: pointer;
        }
        .text {
          flex: 1;
          padding: 0 10px;
          line-height: 1;
        }
      }
      .menu-details {
        padding-left: 34px;
        .sub-menu {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-height: 40px;
          font-size: 12px;
          .borderTopBefore();
          &:hover, &:active, &.active {
            background-color: rgb(0, 172, 193);
            cursor: pointer;
          }
          .text {
            flex: 1;
            padding-left: 10px;
            line-height: 1;
          }
        }
      }
    }
  }
</style>
