<template>
  <div class="navigation">
    <span class="text">{{curTopRouteText}}</span>
    <i class="fa fa-angle-double-right"></i>
    <span class="text">{{curSubRouteText}}</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'AppNavigation',
    data () {
      return {}
    },
    computed: {
      curTopRouteText () {
        let _this = this
        const topAlias = _this.$route.path.split('/')[1]
        if (topAlias) {
          return _this.menus.details.filter(item => item.alias === topAlias)[0].text
        }
        return ''
      },
      curSubRouteText () {
        let _this = this
        const topAlias = _this.$route.path.split('/')[1]
        const subAlias = _this.$route.path.split('/')[2]
        if (subAlias) {
          return _this.menus.details.filter(item => {
            return item.alias === topAlias
          })[0].details.filter(item => item.alias === subAlias)[0].text
        }
        return ''
      },
      ...mapGetters(['menus'])
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
    user-select: none;
    cursor: default;
    .borderBottomAfter();
    .fa {
      margin: 0 12px;
    }
  }
</style>
