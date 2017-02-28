<template>
  <div v-show="presentedItemsNumber > 0" class="page-navigation">
    <section class="container container-left">
      <slot></slot>
    </section>
    <section class="container container-right">
      <span class="text">共</span>
      <span class="total-records">{{recordsTotal}}</span>
      <span class="text">条记录</span>
      <i v-show="currentPage > 1" @click="goPage(1)" class="fa fa-angle-double-left btn btn-first"></i>
      <i v-show="currentPage > 1" @click="goPage(currentPage > 1 ? currentPage - 1 : 1)" class="fa fa-angle-left btn btn-prev"></i>
      <span v-for="page in statistic.pages" @click="goPage(page)" :class="{'active': page === currentPage}" class="btn btn-page">{{page}}</span>
      <i v-show="currentPage < statistic.numberOfPages" @click="goPage(currentPage < statistic.numberOfPages ? currentPage + 1 : statistic.numberOfPages)" class="fa fa-angle-right btn btn-next"></i>
      <i v-show="currentPage < statistic.numberOfPages" @click="goPage(statistic.numberOfPages)" class="fa fa-angle-double-right btn btn-last"></i>
      <span class="page-number page-number-current">{{currentPage}}</span>
      <span class="symbol">/</span>
      <span class="page-number page-number-total">{{statistic.numberOfPages}}</span>
      <span class="text">页，到第</span>
      <label>
        <select v-model="planedPage" class="btn btn-select-page">
          <option v-for="page in pageOptions" :value="page">{{page}}</option>
        </select>
      </label>
      <span class="text">页</span>
      <span @click="goPage(planedPage)" class="btn-confirm">确定</span>
    </section>
  </div>
</template>

<script>
  import {getPageNavigationStatistic, toDouble} from '../scripts/utils.js'

  export default {
    name: 'page-navigation',
    props: {
      recordsTotal: {
        type: Number,
        default: 0,
        required: true,
        validator (val) {
          return val >= 0
        }
      },
      recordsPerPage: {
        type: Number,
        default: 5,
        required: true,
        validator (val) {
          return val >= 0
        }
      },
      currentPage: {
        type: Number,
        default: 1,
        required: true,
        validator (val) {
          return val >= 0
        }
      },
      presentedItemsNumber: {
        type: Number,
        default: 0,
        required: true,
        validator (val) {
          return val >= 0
        }
      },
      goPage: {
        type: Function,
        default () {
          return function (pageNum) {
          }
        },
        required: true
      }
    },
    data () {
      return {
        planedPage: '01'
      }
    },
    computed: {
      statistic () {
        let _this = this
        return getPageNavigationStatistic(_this.recordsTotal, _this.recordsPerPage, _this.currentPage)
      },
      pageOptions () {
        let _this = this
        let tempArr = []
        const numberOfPages = Math.ceil(_this.recordsTotal / _this.recordsPerPage)
        for (let i = 0; i < numberOfPages; i++) {
          tempArr.push(toDouble(i + 1))
        }
        return tempArr
      }
    },
    methods: {},
    init () {
    },
    ready () {
    },
    events: {},
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import '../styles/utils.less';
  .page-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    height: 80px;
    padding: 0 17px;
    font-size: 0;
  }
  .container-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .container-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    user-select: none;
    .text {
      color: #404040;
    }
    .total-records {
      color: #3cbce7;
    }
    .btn {
      width: 22px;
      height: 18px;
      box-sizing: border-box;
      border: 1px solid @colorBorder;
      line-height: 16px;
      text-align: center;
      margin-left: 5px;
      cursor: pointer;
    }
    .btn-first, .btn-prev, .btn-next, .btn-last {
      transition: 150ms all linear 0ms;
      &.active, &:hover {
        background-color: @colorTextBlue;
        color: #fff;
      }
      &:active {
        background-color: @colorBtnBlue;
      }
    }
    .page-number-current {
      margin-left: 6px;
    }
    .btn-select-page {
      padding-left: 1px;
      margin-right: 5px;
    }
    .btn-confirm {
      height: 16px;
      line-height: 16px;
      text-decoration: underline;
      color: @colorTextBlue;
      margin-left: 5px;
      cursor: pointer;
      &:active {
        color: @colorBtnBlue;
      }
    }
    .btn-page {
      transition: 150ms all linear 0ms;
      &.active, &:hover {
        background-color: @colorTextBlue;
        color: #fff;
      }
      &:active {
        background-color: @colorBtnBlue;
      }
    }
  }
</style>
